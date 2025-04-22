import { Resend } from "resend";
import Confirmation from "@/app/emails/Confirmation";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(req) {
    const data = await req.json();
    const {message, name, link, email} = data;
    console.log(data)
    await resend.emails.send({
        from: 'info@gapartments.lt',
        to: email,
        subject: 'Gavome jūsų užklausą',
        react: Confirmation({message, name, link}),
      });
      return NextResponse.json({message: 'success'}, {status: 200}) 
      
}