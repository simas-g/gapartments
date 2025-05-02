import { Resend } from "resend";
import Confirmation from "@/app/emails/Confirmation";
import { NextResponse } from "next/server";
import { getLocale } from "next-intl/server";
import { getEmailTranslations } from "@/lib/emailTranslations";
const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(req) {
    const locale = await getLocale();
    const emailStrings = getEmailTranslations(locale)
    const data = await req.json();
    const {message, name, link, email} = data;
    console.log(data)
    await resend.emails.send({
        from: 'info@gapartments.lt',
        to: email,
        subject: 'Gavome jūsų užklausą',
        react: Confirmation({message, name, link, emailStrings}),
      });
      return NextResponse.json({message: 'success'}, {status: 200}) 
      
}