import { useState, useEffect } from 'react';
// @ts-ignore
import Landing from './Landing';
// @ts-ignore
import Academy from './Academy';

export default function App() {
  const [hasAccess, setHasAccess] = useState(
    () => localStorage.getItem('hasAccess') === 'true'
  );
  const [language, setLanguage] = useState<string>(
    () => localStorage.getItem('language') || 'fr'
  );

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  if (!hasAccess) {
    return (
      <Landing
        onEnter={() => setHasAccess(true)}
        language={language}
        setLanguage={setLanguage}
      />
    );
  }

  return <Academy language={language} setLanguage={setLanguage} />;
}
