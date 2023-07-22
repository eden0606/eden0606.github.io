'use client';

import Application from '@/components/Application/Application';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <div>
        <Application appName="projects" />
        <Application appName="resume" />
        <Application appName="about me" />
        <Application appName="internet explorer" />
      </div>
      <Footer />
    </main>
  );
}
