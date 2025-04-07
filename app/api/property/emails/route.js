import { Resend } from "resend";
import Confirmation from "@/app/emails/Confirmation";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: 'you@example.com',
        to: 'user@gmail.com',
        subject: 'hello world',
        react: Confirmation(),
      });
}