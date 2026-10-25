import { SettingsRow } from '@/components/application/settings/settings-rows';
import { Select, SelectItem } from '@/components/base/select/select';
import { getLanguage, setLanguage } from '../../i18n';
import { Section, Rows } from './section';
import { useI18n } from '../i18n-hook';

export function LanguageSettings() {
  const { t } = useI18n();
  const currentLang = getLanguage();

  return (
    <Section title={t('language.title', '语言 (Language)')}>
      <Rows>
        <SettingsRow label={t('language.title', '语言 (Language)')}>
          <div id="languageSetting">
            <Select aria-label={t('language.title', '语言 (Language)')} selectedKey={currentLang}
              onSelectionChange={(key) => {
                if (key !== null) {
                  setLanguage(key as any);
                }
              }}>
              <SelectItem id="zh-CN">{t('language.zh_cn', '简体中文 (zh-CN)')}</SelectItem>
              <SelectItem id="ja-JP">{t('language.ja_jp', '日本語 (ja-JP)')}</SelectItem>
            </Select>
          </div>
        </SettingsRow>
      </Rows>
    </Section>
  );
}
