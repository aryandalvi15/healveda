'use client';
export const dynamic = 'force-dynamic';

import LandingPage from '@/app/landingpage/LandingPage';
import Branding from '@/pages/Branding';
import Features from '@/app/features/page';
import About from '@/app/about/page';
import Contact from '@/app/contact/page';

export default function Home() {
  return (
    <>
      <section id="home">
        <LandingPage />
      </section>

      <section id="branding">
        <Branding />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
