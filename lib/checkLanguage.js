'use server';
import { cookies } from 'next/headers';

export default async function checkLanguage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get('NEXT_LANGUAGE');

  return lang?.value || 'lt';
}