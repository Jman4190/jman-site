import * as postmark from 'postmark'
import { baseEmail } from '~/config/seo'

export const client = new postmark.ServerClient(process.env.POSTMARK_CLIENT_ID)

interface EmailMeProps {
  subject: string
  body: string
}

export function emailMe({ subject, body }: EmailMeProps) {
  return client.sendEmail({
    From: baseEmail,
    To: baseEmail,
    Subject: subject,
    TextBody: body,
  })
}
