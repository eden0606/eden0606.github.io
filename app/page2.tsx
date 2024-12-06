// 'use client';

// import Application from '@/components/Application/Application';
// import Footer from '@/components/Footer/Footer';
// import Window from '@/components/Window/Window';
// import generateDraggableElement from '@/utils/generateDraggableElement';
// import Image from 'next/image';
// import { createContext, useContext, useEffect, useState } from 'react';
// import styles from './page.module.css';
// import Projects from '@/components/Projects/Projects';
// import RecycleBin from '@/components/RecycleBin/RecycleBin';
// import Resume from '@/components/Resume/Resume';
// import IE from '@/components/IE/IE';
// import ProjectWindowContext from './ProjectWindowContext';

// // export let openProjectWindows: string[] = [];

// export default function Home() {
//   const [isProjectVisible, setIsProjectVisible] = useState(false);
//   const [isResumeVisible, setIsResumeVisible] = useState(false);
//   const [isComputerVisible, setIsComputerVisible] = useState(false);
//   const [isRecycleVisible, setIsRecycleVisible] = useState(false);
//   const [isIEVisible, setIsIEVisible] = useState(false);
//   const [isConnectToIEVisible, setIsConnectToIEVisible] = useState(false);
//   const [openWindows, setOpenWindows] = useState<string[]>([]);
//   const setWindowContext = (current: string[], newWindow: string) => {
//     setOpenWindows([...current, newWindow]);
//   };
//   const removeWindowContext = (current: string[], windowToRemove: string) => {
//     const updatedWindows = current.filter(
//       (window) => window !== windowToRemove
//     );
//     console.log('remove', windowToRemove);
//     console.log('updated', updatedWindows);
//     setOpenWindows(updatedWindows);
//   };

//   // const { windowsContext, setWindowContext, removeWindowContext } =
//   //   useContext(ProjectWindowContext);
//   const imgPath = '/images/icons/';

//   // function handlePopup(icon: {src: string, alt: string}, title: string, hasMinimize: boolean, hasMaximize: boolean, size?: {width: number, height: number}) {
//   //   const window = document.getElementById('main');
//   //   window?.appendChild(<Window
//   //     icon={icon}
//   //     title={title}
//   //     hasMaximize={hasMaximize}
//   //     hasMinimize={hasMinimize}
//   //     size={size}
//   //     /> as unknown as Node)
//   // }

//   // Make the DIV element draggable:
//   useEffect(() => {
//     generateDraggableElement(document.getElementById('projects'), 'window');
//     generateDraggableElement(document.getElementById('resume'), 'window');
//     generateDraggableElement(document.getElementById('my-computer'), 'window');
//     generateDraggableElement(document.getElementById('recycle-bin'), 'window');
//     generateDraggableElement(document.getElementById('ie'), 'window');
//     // if (openWindows.includes('project-folder')) {
//     //   generateDraggableElement(
//     //     document.getElementById('project-folder-wrapper'),
//     //     'project-folder'
//     //   );
//     // }
//   });

//   // useEffect(() => {
//   //   console.log(openWindows);
//   // }, [openWindows]);

//   // console.log('yurt',document.getElementById('contents'));

//   return (
//     <ProjectWindowContext.Provider
//       value={{
//         windowContext: openWindows,
//         setWindowContext,
//         removeWindowContext,
//       }}
//     >
//       <main className={styles.main}>
//         <div id='screen' className={styles.screen}>
//           <div className={styles.wrapper}>
//             <div
//               className={styles.applicationWrapper}
//               onClick={() => {
//                 setIsProjectVisible(true);
//                 if (!openWindows.includes('projectswindow')) {
//                   setWindowContext(openWindows, 'projectswindow');
//                 }
//               }}
//             >
//               <Application
//                 appName='my projects'
//                 img={{ src: `${imgPath}folder.ico`, alt: 'folder icon' }}
//               />
//             </div>
//             <div
//               className={styles.applicationWrapper}
//               onClick={() => {
//                 setIsResumeVisible(true);
//                 if (!openWindows.includes('resumewindow')) {
//                   setWindowContext(openWindows, 'resumewindow');
//                 }
//               }}
//             >
//               <Application
//                 appName='my resume'
//                 img={{ src: `${imgPath}file.ico`, alt: 'file icon' }}
//               />
//             </div>
//             <div
//               className={styles.applicationWrapper}
//               onClick={() => {
//                 setIsComputerVisible(true);
//                 if (!openWindows.includes('my-computerwindow')) {
//                   setWindowContext(openWindows, 'my-computerwindow');
//                 }
//               }}
//             >
//               <Application
//                 appName='my computer'
//                 img={{ src: `${imgPath}my-computer.ico`, alt: 'computer icon' }}
//               />
//             </div>
//             <div
//               className={styles.applicationWrapper}
//               onClick={() => {
//                 setIsRecycleVisible(true);
//                 if (!openWindows.includes('recycle-binwindow')) {
//                   setWindowContext(openWindows, 'recycle-binwindow');
//                 }
//               }}
//             >
//               <Application
//                 appName='recycle bin'
//                 img={{
//                   src: `${imgPath}recycle-bin.ico`,
//                   alt: 'recycle bin icon',
//                 }}
//               />
//             </div>
//             <div
//               className={styles.applicationWrapper}
//               onClick={() => {
//                 setIsIEVisible(true);
//                 if (!openWindows.includes('iewindow')) {
//                   setWindowContext(openWindows, 'iewindow');
//                 }
//               }}
//             >
//               <Application
//                 appName='internet explorer'
//                 img={{
//                   src: `${imgPath}internet-explorer.ico`,
//                   alt: 'internet explorer icon',
//                 }}
//               />
//             </div>
//             <div
//               className={styles.applicationWrapper}
//               onClick={() => {
//                 setIsConnectToIEVisible(true);
//                 if (!openWindows.includes('connect-to-iewindow')) {
//                   setWindowContext(openWindows, 'connect-to-iewindow');
//                 }
//               }}
//             >
//               <Application
//                 appName='connect to the internet'
//                 img={{
//                   src: `${imgPath}connect-to-internet.ico`,
//                   alt: 'connect to the internet icon',
//                 }}
//               />
//             </div>
//           </div>
//           <div id='projects' className={styles.contents}>
//             {/* {isProjectVisible && ( */}
//             <Window
//               parentId='projects'
//               id='window'
//               icon={{ src: `${imgPath}folder.ico`, alt: 'folder icon' }}
//               title='my projects'
//               hasMaximize={true}
//               hasMinimize={true}
//               isPopupVisible={isProjectVisible}
//               setVisibility={setIsProjectVisible}
//             >
//               <Projects />
//             </Window>
//           </div>
//           <div id='resume' className={styles.contents}>
//             {/* {isResumeVisible && ( */}
//             <Window
//               parentId='resume'
//               id='window'
//               icon={{ src: `${imgPath}file.ico`, alt: 'file icon' }}
//               title='my resume'
//               width={600}
//               height={700}
//               hasMaximize={true}
//               hasMinimize={true}
//               isPopupVisible={isResumeVisible}
//               setVisibility={setIsResumeVisible}
//             >
//               <Resume />
//             </Window>
//             {/* )} */}
//           </div>
//           <div id='my-computer' className={styles.contents}>
//             {/* {isComputerVisible && ( */}
//             <Window
//               parentId='my-computer'
//               id='window'
//               icon={{ src: `${imgPath}my-computer.ico`, alt: 'computer icon' }}
//               title='my computer'
//               hasMaximize={true}
//               hasMinimize={true}
//               isPopupVisible={isComputerVisible}
//               setVisibility={setIsComputerVisible}
//             />
//             {/* )} */}
//           </div>
//           <div id='recycle-bin' className={styles.contents}>
//             {/* {isRecycleVisible && ( */}
//             <Window
//               parentId='recycle-bin'
//               id='window'
//               icon={{
//                 src: `${imgPath}recycle-bin.ico`,
//                 alt: 'recycle bin icon',
//               }}
//               title='recycle bin'
//               hasMaximize={true}
//               hasMinimize={true}
//               isPopupVisible={isRecycleVisible}
//               setVisibility={setIsRecycleVisible}
//             >
//               <RecycleBin />
//             </Window>
//             {/* )} */}
//           </div>
//           <div id='ie' className={styles.contents}>
//             {/* {isIEVisible && ( */}
//             <Window
//               parentId='ie'
//               id='window'
//               icon={{
//                 src: `${imgPath}internet-explorer.ico`,
//                 alt: 'internet explorer icon',
//               }}
//               title='internet explorer'
//               hasMaximize={true}
//               hasMinimize={true}
//               isPopupVisible={isIEVisible}
//               setVisibility={setIsIEVisible}
//             >
//               <IE />
//             </Window>
//             {/* )} */}
//           </div>
//           <div id='connect-to-ie' className={styles.contents}>
//             {/* {isIEVisible && ( */}
//             <Window
//               parentId='connect-to-ie'
//               id='window'
//               icon={{
//                 src: `${imgPath}connect-to-internet.ico`,
//                 alt: 'connect to internet icon',
//               }}
//               title='connect to the internet'
//               hasMaximize={true}
//               hasMinimize={true}
//               isPopupVisible={isConnectToIEVisible}
//               setVisibility={setIsConnectToIEVisible}
//             >
//               <IE />
//             </Window>
//             {/* )} */}
//           </div>
//         </div>
//         <Footer />
//       </main>
//     </ProjectWindowContext.Provider>
//   );
// }
