import { Resend } from "resend";
import Confirmation from "@/app/emails/Confirmation";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: 'info@gapartments.lt',
        to: 'gedeikissimas@gmail.com',
        subject: 'Naujas pranešimas',
        react: Confirmation(),
      });
      return NextResponse.json({message: 'success'}, {status: 200})
}