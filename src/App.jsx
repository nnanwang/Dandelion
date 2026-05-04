import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomeHero from './components/sections/HomeHero';
import ProjectSnapshot from './components/sections/ProjectSnapshot';
import AboutSection from './components/sections/AboutSection';
import ObservedSection from './components/sections/ObservedSection';
import TimelineSection from './components/sections/TimelineSection';
import VolunteerSection from './components/sections/VolunteerSection';
import TeamPage from './pages/TeamPage';
import DonatePage from './pages/DonatePage';

function ScrollToRouteTarget() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash, pathname]);

  return null;
}

function HomePage({ lang }) {
  return (
    <>
      <HomeHero lang={lang} />
      <ProjectSnapshot lang={lang} />
      <AboutSection lang={lang} />
      <ObservedSection lang={lang} />
      <TimelineSection lang={lang} />
      <VolunteerSection lang={lang} />
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh';
  }, [lang]);

  return (
    <>
      <Header lang={lang} onLanguageChange={setLang} />
      <ScrollToRouteTarget />
      <main>
        <Routes>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/team" element={<TeamPage lang={lang} />} />
          <Route path="/donate" element={<DonatePage lang={lang} />} />
        </Routes>
      </main>
      <Footer lang={lang} />
    </>
  );
}
