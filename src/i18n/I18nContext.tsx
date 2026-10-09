import React, { createContext, useContext, useMemo } from 'react';
import type { SupportedLanguage } from '../types/resource';
import { getTranslation, TranslationDict } from './translations';

interface I18nContextType {
  currentLanguage: SupportedLanguage | 'All';
  setLanguage: (lang: SupportedLanguage | 'All') => void;
  t: TranslationDict;
}

const I18nContext = createContext<I18nContextType | null>(null);

export interface I18nProviderProps {
  currentLanguage: SupportedLanguage | 'All';
  onLanguageChange: (lang: SupportedLanguage | 'All') => void;
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
  currentLanguage,
  onLanguageChange,
  children,
}) => {
  // If 'All', default dictionary to '中文简体'
  const activeLangKey = currentLanguage === 'All' ? '中文简体' : currentLanguage;
  const t = useMemo(() => getTranslation(activeLangKey), [activeLangKey]);

  return (
    <I18nContext.Provider
      value={{
        currentLanguage,
        setLanguage: onLanguageChange,
        t,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
