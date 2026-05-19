import { defineEventHandler, readBody, createError } from 'h3'
import { createTransport, emailBase, emailRow, emailTable } from '../utils/mailer'

interface Body {
  app: string
  email: string
  reason?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<Body>(event)

  if (!body?.email || !body?.app) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }

  const config = useRuntimeConfig()
  if (!config.smtpHost || !config.smtpUser) {
    throw createError({ statusCode: 500, statusMessage: 'Email service not configured' })
  }

  const rows = [
    emailRow('App', body.app),
    emailRow('Email', `<a href="mailto:${body.email}" style="color:#9a9a9a;text-decoration:none">${body.email}</a>`),
    body.reason ? emailRow('Notes', body.reason.replace(/\n/g, '<br>')) : '',
  ].join('')

  const html = emailBase(
    `Data Download Request — ${body.app}`,
    emailTable(rows),
  )

  const transporter = createTransport()

  try {
    await transporter.sendMail({
      from: config.smtpFrom || config.smtpUser,
      to: config.smtpTo,
      replyTo: body.email,
      subject: `Data Download Request — ${body.app}`,
      html,
    })
  }
  catch (err) {
    console.error('[download-request] SMTP error:', err)
    throw createError({ statusCode: 502, statusMessage: 'Failed to send email' })
  }

  return { success: true }
})
