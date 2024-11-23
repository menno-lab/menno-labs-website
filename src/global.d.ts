import home from "./i18n/translations/en/home.json";
import contact from "./i18n/translations/en/contact.json";

type Messages = {
  home: typeof home;
  contact: typeof contact;
};

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
