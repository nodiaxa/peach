export type Language = 'zh-CN' | 'ja-JP';

let currentLanguage: Language = 'zh-CN';
const listeners = new Set<() => void>();

export function getLanguage(): Language {
  return currentLanguage;
}

export function setLanguage(lang: Language) {
  if (lang !== currentLanguage) {
    currentLanguage = lang;
    try {
      localStorage.setItem('peach.language', lang);
    } catch {}
    listeners.forEach(l => l());
  }
}

export function subscribeLanguage(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function initLanguage() {
  try {
    const saved = localStorage.getItem('peach.language');
    if (saved === 'ja-JP' || saved === 'zh-CN') {
      currentLanguage = saved;
    }
  } catch {}
}

export const translations: Record<Language, Record<string, string>> = {
  'zh-CN': {},
  'ja-JP': {}
};

export function registerTranslations(lang: Language, dict: Record<string, string>) {
  Object.assign(translations[lang], dict);
}

export function t(key: string, defaultText: string): string {
  const dict = translations[currentLanguage];
  if (dict && typeof dict[key] === 'string') {
    return dict[key];
  }
  const fbDict = translations['zh-CN'];
  if (fbDict && typeof fbDict[key] === 'string') {
    return fbDict[key];
  }
  return defaultText;
}
