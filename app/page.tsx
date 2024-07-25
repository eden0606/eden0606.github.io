'use client';

import { FunctionComponent, useContext } from 'react';
import styles from './page.module.scss';
import './page.css';
import Application from '@/components/Application/Application';
import { WindowsContext } from '@/components/WindowsProvider';
import IntroModal from '@/components/IntroModal/IntroModal';
import { applications, renderApplicationWindows } from '@/data/applications';
import { openWindow } from '@/util/operations';
import Footer from '@/components/Footer/Footer';
import { renderProjectWindows } from '@/data/projects';

const App: FunctionComponent = () => {
  const { windows, addWindow } = useContext(WindowsContext);

  return (
    <main id='root' className={styles.root}>
      {/* <IntroModal /> */}
      <section className={styles.screen}>
        {applications.map((app, index) => {
          const appId = app.name.replaceAll(' ', '-') + '-window';

          return (
            <Application
              className={styles.app}
              onClick={() => {
                if (windows.includes(appId)) return;
                openWindow(appId);
                addWindow(appId);
              }}
              key={`${app.name}-${index}`}
              appName={app.name}
              img={{ src: app.img.src, alt: app.img.alt }}
            />
          )
        })}
      </section>
      {renderApplicationWindows.map((window, index) => {
        return (
          <section className={`${styles.displayNone} ${styles.window}`} key={`application-window-${index}`}>{window}</section>
        )
      })}
      {renderProjectWindows.map((window, index) => {
        return (
          <section className={`${styles.displayNone} ${styles.window}`} key={`project-window-${index}`}>{window}</section>
        )
      })}
      <Footer />
    </main>
  );
}

export default App;