'use client';

import Application from '@/components/Application/Application';
import Footer from '@/components/Footer/Footer';
import Window from '@/components/Window/Window';
import generateDraggableElement from '@/util/generateDraggableElement';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Projects from '@/components/Projects/Projects';
import RecycleBin from '@/components/RecycleBin/RecycleBin';
import Resume from '@/components/Resume/Resume';

export let openProjectWindows: string[] = [];

export default function Home() {
  const [isProjectVisible, setIsProjectVisible] = useState(false);
  const [isResumeVisible, setIsResumeVisible] = useState(false);
  const [isComputerVisible, setIsComputerVisible] = useState(false);
  const [isRecycleVisible, setIsRecycleVisible] = useState(false);
  const [isIEVisible, setIsIEVisible] = useState(false);
  const imgPath = '/images/icons/';

  // function handlePopup(icon: {src: string, alt: string}, title: string, hasMinimize: boolean, hasMaximize: boolean, size?: {width: number, height: number}) {
  //   const window = document.getElementById('main');
  //   window?.appendChild(<Window
  //     icon={icon}
  //     title={title}
  //     hasMaximize={hasMaximize}
  //     hasMinimize={hasMinimize}
  //     size={size}
  //     /> as unknown as Node)
  // }

  // Make the DIV element draggable:
  useEffect(() => {
    generateDraggableElement(document.getElementById('projects'), 'window');
    generateDraggableElement(document.getElementById('resume'), 'window');
    generateDraggableElement(document.getElementById('my-computer'), 'window');
    generateDraggableElement(document.getElementById('recycle-bin'), 'window');
    generateDraggableElement(document.getElementById('ie'), 'window');
    // if (openWindows.includes('project-folder')) {
    //   generateDraggableElement(
    //     document.getElementById('project-folder-wrapper'),
    //     'project-folder'
    //   );
    // }
  });

  // console.log('yurt',document.getElementById('contents'));

  return (
    <main className={styles.main}>
      <div id='screen' className={styles.screen}>
        <div>
          <div
            onClick={() => {
              setIsProjectVisible(true);
            }}
          >
            <Application
              appName='my projects'
              img={{ src: `${imgPath}folder.ico`, alt: 'folder icon' }}
            />
          </div>
          <div
            onClick={() => {
              setIsResumeVisible(true);
            }}
          >
            <Application
              appName='my resume'
              img={{ src: `${imgPath}file.ico`, alt: 'file icon' }}
            />
          </div>
          <div
            onClick={() => {
              setIsComputerVisible(true);
            }}
          >
            <Application
              appName='my computer'
              img={{ src: `${imgPath}my-computer.ico`, alt: 'computer icon' }}
            />
          </div>
          <div
            onClick={() => {
              setIsRecycleVisible(true);
            }}
          >
            <Application
              appName='recycle bin'
              img={{
                src: `${imgPath}recycle-bin.ico`,
                alt: 'recycle bin icon',
              }}
            />
          </div>
          <div
            onClick={() => {
              setIsIEVisible(true);
            }}
          >
            <Application
              appName='internet explorer'
              img={{
                src: `${imgPath}internet-explorer.ico`,
                alt: 'internet explorer icon',
              }}
            />
          </div>
        </div>
        <div id='projects' className={styles.contents}>
          {/* {isProjectVisible && ( */}
          <Window
            parentId='projects'
            id='window'
            icon={{ src: `${imgPath}folder.ico`, alt: 'folder icon' }}
            title='my projects'
            hasMaximize={true}
            hasMinimize={true}
            isPopupVisible={isProjectVisible}
            setVisibility={setIsProjectVisible}
          >
            <Projects />
          </Window>
        </div>
        <div id='resume' className={styles.contents}>
          {/* {isResumeVisible && ( */}
          <Window
            parentId='resume'
            id='window'
            icon={{ src: `${imgPath}file.ico`, alt: 'file icon' }}
            title='my resume'
            width={600}
            height={700}
            hasMaximize={true}
            hasMinimize={true}
            isPopupVisible={isResumeVisible}
            setVisibility={setIsResumeVisible}
          >
            <Resume />
          </Window>
          {/* )} */}
        </div>
        <div id='my-computer' className={styles.contents}>
          {/* {isComputerVisible && ( */}
          <Window
            parentId='my-computer'
            id='window'
            icon={{ src: `${imgPath}my-computer.ico`, alt: 'computer icon' }}
            title='my computer'
            hasMaximize={true}
            hasMinimize={true}
            isPopupVisible={isComputerVisible}
            setVisibility={setIsComputerVisible}
          />
          {/* )} */}
        </div>
        <div id='recycle-bin' className={styles.contents}>
          {/* {isRecycleVisible && ( */}
          <Window
            parentId='recycle-bin'
            id='window'
            icon={{ src: `${imgPath}recycle-bin.ico`, alt: 'recycle bin icon' }}
            title='recycle bin'
            hasMaximize={true}
            hasMinimize={true}
            width={600}
            height={700}
            isPopupVisible={isRecycleVisible}
            setVisibility={setIsRecycleVisible}
          >
            <RecycleBin />
          </Window>
          {/* )} */}
        </div>
        <div id='ie' className={styles.contents}>
          {/* {isIEVisible && ( */}
          <Window
            parentId='ie'
            id='window'
            icon={{
              src: `${imgPath}internet-explorer.ico`,
              alt: 'internet explorer icon',
            }}
            title='internet explorer'
            hasMaximize={true}
            hasMinimize={true}
            isPopupVisible={isIEVisible}
            setVisibility={setIsIEVisible}
          />
          {/* )} */}
        </div>
      </div>
      <Footer />
    </main>
  );
}
