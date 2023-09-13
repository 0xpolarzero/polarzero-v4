import sendgrid from "@sendgrid/mail"

import { siteConfig } from "@/config/site"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "")

export async function POST(req: Request) {
  try {
    const formData = await req.json()
    console.log(siteConfig.links.email.split(":")[1])

    await sendgrid.send({
      to: siteConfig.email,
      from: siteConfig.email,
      subject: `🚩 Lead from polarzero.xyz: ${formData.subject}`,
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
          <h2>New mail from ${formData.name}.</h2>
          <h3>Subject:</h3>
          <p>${formData.subject}</p>
          <h3>Email:</h3>
          <p>${formData.email}</p>
          <h3>Company:</h3>
          <p>${formData.company}</p>
          <h3>Twitter/X:</h3>
          <p>${formData.twitter}</p>
          <h3>Timeline:</h3>
          <p>${formData.timeline}</p>
          <h3>Budget:</h3>
          <p>${formData.budget}</p>
          <h3>Message:</h3>
          <p>${formData.message}</p>
        </body>
      </html>`,
    })

    return new Response(JSON.stringify("Email sent"), { status: 200 })
  } catch (err) {
    console.log(err)
    return new Response(JSON.stringify(`Error sending email: ${err}`), {
      status: 500,
    })
  }
}
