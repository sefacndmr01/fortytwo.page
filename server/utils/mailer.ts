import nodemailer from 'nodemailer'

export function createTransport() {
  const config = useRuntimeConfig()
  return nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })
}

export function emailBase(title: string, content: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="background:#060606;color:#e8e8e8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;padding:0">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#060606">
    <tr>
      <td align="center" style="padding:40px 24px">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:32px;border-bottom:1px solid #1a1a1a">
              <p style="margin:0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#444">Fortytwo</p>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding:28px 0 24px">
              <h1 style="margin:0;font-size:18px;font-weight:500;letter-spacing:-0.02em;color:#f0f0f0">${title}</h1>
            </td>
          </tr>

          <!-- Content -->
          ${content}

          <!-- Footer -->
          <tr>
            <td style="padding-top:32px;border-top:1px solid #1a1a1a">
              <p style="margin:0;font-size:11px;color:#333;line-height:1.6">
                Reply directly to this email to respond to the requester.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function emailRow(label: string, value: string) {
  return `
  <tr>
    <td style="padding:10px 20px 10px 0;font-size:12px;font-weight:500;letter-spacing:0.04em;text-transform:uppercase;color:#555;white-space:nowrap;vertical-align:top;width:120px">${label}</td>
    <td style="padding:10px 0;font-size:13px;color:#ccc;line-height:1.6">${value}</td>
  </tr>`
}

export function emailTable(rows: string) {
  return `
  <tr>
    <td style="padding-bottom:24px">
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-top:1px solid #1a1a1a;border-bottom:1px solid #1a1a1a">
        ${rows}
      </table>
    </td>
  </tr>`
}
