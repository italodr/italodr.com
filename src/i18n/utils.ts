import { ui, defaultLang, showDefaultLang, routes } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replaceAll("/", "");
    const prefix = defaultLang !== l ? `/${l}` : "/";
    const hasTranslation = routes?.[l]?.[pathName];
    const translatedPath = hasTranslation ? "/" + routes[l][pathName] : path;
    return !showDefaultLang && l === defaultLang ? translatedPath : `${prefix}${translatedPath}`;
  };
}

export function translatePathToLang(path: string, lang: keyof typeof ui) {
  const translatePath = useTranslatedPath(lang);
  return translatePath(path);
}

export function getRouteKeyFromPath(path: string): string {
  const segments = path.replace(/^\/+/, "").split("/");
  const first = segments[0];
  const langs = Object.keys(routes);
  const hasLangPrefix = langs.includes(first);
  const routeSegment = hasLangPrefix ? segments[1] : first;

  for (const lang of langs) {
    const entries = Object.entries(routes[lang as keyof typeof routes]);
    const match = entries.find(([_, v]) => v === routeSegment);
    if (match) {
      return match[0];
    }
  }

  return "/";
}
