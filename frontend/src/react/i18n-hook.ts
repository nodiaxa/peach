import { useSyncExternalStore } from 'react';
import { subscribeLanguage, getLanguage, t } from '../i18n';

export function useI18n() {
  useSyncExternalStore(subscribeLanguage, getLanguage);
  return { t };
}
