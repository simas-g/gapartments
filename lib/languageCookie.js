"use server";
import { cookies } from "next/headers";

export default async function setLanguageCookie(lang) {
  const cookieStore = await cookies();
  cookieStore.set("NEXT_LANGUAGE", lang, {
    maxAge: 60 * 60 * 24 * 365,
  });
}
