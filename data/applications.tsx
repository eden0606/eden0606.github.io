import AboutMe from '@/components/AboutMe/AboutMe';
import Projects from '@/components/Projects/Projects';
import RecycleBin from '@/components/RecycleBin/RecycleBin';
import Resume from '@/components/Resume/Resume';
import Window from '@/components/Window/Window';

/** 
 * -----------------------------------------
 * application data
 * -----------------------------------------
 */

interface ApplicationsData {
    name: string;
    img: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    };
}

export const applications: ApplicationsData[] = [
    {
        name: 'my projects',
        img: {
            src: '/images/icons/folder.ico',
            alt: 'folder icon',
        },
    },
    {
        name: 'my resume',
        img: {
            src: '/images/icons/file.ico',
            alt: 'resume icon',
        },
    },
    {
        name: 'internet explorer',
        img: {
            src: '/images/icons/internet-explorer.ico',
            alt: 'ie icon',
        },
    },
    {
        name: 'recycle bin',
        img: {
            src: '/images/icons/recycle-bin.ico',
            alt: 'recycle bin icon',
        },
    },
    {
        name: 'about me',
        img: {
            src: '/images/icons/my-computer.ico',
            alt: 'computer icon',
        }
    }
]

/** 
 * -----------------------------------------
 * window application data
 * -----------------------------------------
 */

// dELET IF NO NEED
export const windowApplications = {
    'my projects': <Window
        id='my projects'
        className='window'
        icon={{
            src: `/images/icons/folder.ico`,
            alt: 'folder icon'
        }}
        title='my projects'>
        <Projects />
    </Window>,
    'my resume': <Window
        id='my resume'
        className='window'
        icon={{
            src: '/images/icons/file.ico',
            alt: 'file icon',
        }}
        title='my resume' />,
    'internet explorer': <Window
        id='internet explorer'
        className='window'
        icon={{
            src: '/images/icons/internet-explorer.ico',
            alt: 'internet explorer icon',
        }}
        title='internet explorer' />,
    'recycle bin': <Window
        id='recycle bin'
        className='window'
        icon={{
            src: '/images/icons/recycle-bin.ico',
            alt: 'recycle bin icon',
        }}
        title='recycle bin' />
}

export const renderApplicationWindows = [
    <Window
        id='my-projects-window'
        key='my-projects-window'
        className='window'
        icon={{
            src: `/images/icons/folder.ico`,
            alt: 'folder icon'
        }}
        title='my projects'
    >
        <Projects />
    </Window>,
    <Window
        id='my-resume-window'
        key='my-resume-window'
        className='window'
        icon={{
            src: '/images/icons/file.ico',
            alt: 'file icon',
        }}
        title='my resume'
        width='75vw'
        height='80vh'>
        <Resume />
    </Window>,
    <Window
        id='internet-explorer-window'
        key='internet-explorer-window'
        className='window'
        icon={{
            src: '/images/icons/internet-explorer.ico',
            alt: 'internet explorer icon',
        }}
        title='internet explorer' />,
    <Window
        id='recycle-bin-window'
        key='recycle-bin-window'
        className='window'
        icon={{
            src: '/images/icons/recycle-bin.ico',
            alt: 'recycle bin icon',
        }}
        title='recycle bin'>
        <RecycleBin />
    </Window>,
    <Window
        id='about-me-window'
        key='about-me-window'
        className='window'
        icon={{
            src: '/images/icons/my-computer.ico',
            alt: 'computer icon',
        }}
        title='about me'
        hasMaximize={false}>
        <AboutMe />
    </Window>
]