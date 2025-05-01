import checkLanguage from "@/lib/checkLanguage";
import { getRequestConfig } from "next-intl/server";
export default getRequestConfig(async () => {
  const locale = await checkLanguage();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
