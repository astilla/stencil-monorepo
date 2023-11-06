export const translations = {
  AlertPanel: {
    message: {
      en: 'This is an alert panel (en)',
      cy: 'Dyma banel rhybudd (cy)',
    },
  },
};

export function translate(translation: object, locale?: string): string {
  const localeToUse = locale || getLocale();
  return translation[localeToUse] || `(translation not found: '${localeToUse}')`;
}

function initBrowserLang(): string | undefined {
  if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
    return undefined;
  }

  let browserLang: string | null = window.navigator.languages && window.navigator.languages.length > 0 ? window.navigator.languages[0] : null;
  // @ts-ignore
  browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

  if (typeof browserLang === 'undefined') {
    return undefined;
  }

  if (browserLang.indexOf('-') !== -1) {
    browserLang = browserLang.split('-')[0];
  }

  if (browserLang.indexOf('_') !== -1) {
    browserLang = browserLang.split('_')[0];
  }

  return browserLang;
}

export function getLocale() {
  return initBrowserLang();
}
