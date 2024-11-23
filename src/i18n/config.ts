import { AbstractIntlMessages } from "next-intl";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "en";

  const imports = {
    home: await import(`./translations/${locale}/home.json`),
    contact: await import(`./translations/${locale}/contact.json`),
  };

  const messages: AbstractIntlMessages = {
    home: imports.home.default,
    contact: imports.contact.default,
  };

  return {
    locale,
    messages,
  };
});
