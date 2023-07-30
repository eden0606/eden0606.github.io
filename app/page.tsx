'use client';

import Application from '@/components/Application/Application';
import Footer from '@/components/Footer/Footer';
import Window from '@/components/Window/Window';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [isProjectVisible, setIsProjectVisible] = useState(false);
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
      useEffect(() =>  {
dragElement(document.getElementById('contents'));
dragElement(document.getElementById('other'));


      })

// console.log('yurt',document.getElementById('contents'));
function dragElement(elmnt) {
    console.log(elmnt);
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + 'yup')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + 'yup')!.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

  return (
    <main className={styles.main}>
      <div>
      <div>
        <div
          onClick={() => {
            setIsProjectVisible(true);
          }}
        >
          <Application
            appName="my projects"
            img={{ src: `${imgPath}folder.ico`, alt: 'folder icon' }}
          />
        </div>
        <div
          onClick={() => {
            setIsProjectVisible(true);
          }}
        >
          <Application
            appName="my resume"
            img={{ src: `${imgPath}file.ico`, alt: 'file icon' }}
          />
        </div>
        <div
          onClick={() => {
            setIsProjectVisible(true);
          }}
        >
          <Application
            appName="my computer"
            img={{ src: `${imgPath}my-computer.ico`, alt: 'computer icon' }}
          />
        </div>
        <div
          onClick={() => {
            setIsProjectVisible(true);
          }}
        >
          <Application
            appName="recycle bin"
            img={{ src: `${imgPath}recycle-bin.ico`, alt: 'recycle bin icon' }}
          />
        </div>
        <div
          onClick={() => {
            setIsProjectVisible(true);
          }}
        >
          <Application
            appName="internet explorer"
            img={{
              src: `${imgPath}internet-explorer.ico`,
              alt: 'internet explorer icon',
            }}
          />
        </div>
      </div>
      <div id='contents' className={styles.contents}>
        {isProjectVisible && (
          <Window
            parentId='contents'
            id='yup'
            icon={{ src: `${imgPath}folder.ico`, alt: 'folder icon' }}
            title="my projects"
            hasMaximize={true}
            hasMinimize={true}
          />
        )}
      </div>
      <div id='other' className={styles.contents}>
      <Window
            parentId='other'
            id='yup'
            icon={{ src: `${imgPath}folder.ico`, alt: 'folder icon' }}
            title="my projects"
            hasMaximize={true}
            hasMinimize={true}
          />
      </div>
      </div>
      <Footer />
    </main>
  );
}
