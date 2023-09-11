import sendgrid from "@sendgrid/mail"

import { siteConfig } from "@/config/site"

// From SendGrid files
type EmailData = string | { name?: string; email: string }

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "")

async function sendEmail(req: Request) {
  console.log("yes")
  try {
    const formData = await req.formData()

    await sendgrid.send({
      to: siteConfig.links.email,
      from: formData.get("email") as EmailData,
      subject: `🚩 Lead from polarzero.xyz: ${formData.get("subject")}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8">
      
          <title>From polarzero.xyz</title>
          <meta name="description" content="polarzero.xyz contact form">
          <meta name="author" content="polarzero">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />  
        </head>
      
        <body>
          <h2>New mail from ${formData.get("name")}.</h2>
          <h3>Subject:</h3>
          <p>${formData.get("subject")}</p>
          <h3>Email:</h3>
          <p>${formData.get("email")}</p>
          <h3>Company:</h3>
          <p>${formData.get("company")}</p>
          <h3>Twitter/X:</h3>
          <p>${formData.get("twitter")}</p>
          <h3>Timeline:</h3>
          <p>${formData.get("timeline")}</p>
          <h3>Message:</h3>
          <p>${formData.get("message")}</p>
        </body>
      </html>`,
    })

    return new Response("Email sent", { status: 200 })
  } catch (err) {
    console.log(err)
    return new Response("Error sending email", { status: 500 })
  }
}

export default sendEmail
