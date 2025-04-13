import { Resend } from "resend";
import Message from "@/app/emails/Message";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(req) {
    const data = await req.json();
    const {email, message, name, property, link} = data;
    console.log(data)
    await resend.emails.send({
        from: 'info@gapartments.lt',
        to: 'gedeikissimas@gmail.com',
        subject: 'Naujas pranešimas',
        react: Message({email, message, name, property, link}),
      });
      return NextResponse.json({message: 'success'}, {status: 200})
}