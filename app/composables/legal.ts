export interface LegalTableRow {
  service: string
  purpose: string
  data: string
}

export interface LegalSubsection {
  title: string
  content?: string
  list?: string[]
  note?: string
}

export interface LegalSection {
  title: string
  content?: string
  list?: string[]
  note?: string
  subsections?: LegalSubsection[]
  table?: LegalTableRow[]
  contact?: boolean
  callout?: 'danger' | 'mute'
}
