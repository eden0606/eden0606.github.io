import ProjectCard from "@/components/Projects/ProjectCard/ProjectCard";
import Window from "@/components/Window/Window";

/** 
 * -----------------------------------------
 * project card data
 * -----------------------------------------
 */
export interface ProjectData {
  name: string;
  date: string;
  tags: string[];
  description: string;
  site?: string;
  icon: {
    src: string;
    alt: string;
  };
  github?: string;
  appSnapshot?: {
    src: string;
    alt: string;
  };
}

// TODO: combine all of this data into one object
export const projects: ProjectData[] = [
  {
    name: 'personal website v2',
    date: 'spring 2024',
    tags: ['react', 'typescript', 'next', 'html/css'],
    description: 'the current site you\'re on! i wanted to revamp my personal website and had a vision to encompass the retro theme of 2000\'s microsoft software. i used next.js with react to create the frontend and hosted it on github pages (can you tell i really like github pages). i used to be a typescript hater because i loved the freedom of javascript, but i have been a recent convert. the strict typing helps more than you think when preventing runtime errors. i\'m really happy with how it turned out and i hope you enjoy it :)',
    site: '/',
    icon: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
    github: 'https://github.com/eden0606/edenchou.com-v2',
    // TODO: add once done with site
    // appSnapshot: {
    //   src: '/images/projects/personal-website-v2-snapshot.png',
    //   alt: 'personal website v2 snapshot',
    // }
  },
  // TODO: uncomment if you want to add this project, it's unfinished but repo exists, idk if node is relevant here
  // {
  //   name: 'personal website v2',
  //   date: 'fall 2023',
  //   tags: ['react', 'typescript', 'next', 'node', 'html/css'],
  //   description: 'lorem',
  //   site: '/',
  //   icon: {
  //     src: '/images/icons/folder.ico',
  //     alt: 'folder icon',
  //   },
  //   github: 'https://github.com/eden0606/edenchou.com',
  // },
  {
    name: 'the 7 wonders',
    date: 'spring 2022',
    tags: ['javascript', 'html/css'],
    description: 'i took an intro to web development class my senior year so that i could get some easy project repetitions under my belt in a structured format. this was the capstone project of the course to display everything we had learned over the semester, and the goal was to a website from scratch. as a lover of travel, i created a travel site for the the 7 wonders of the world. i used vanilla js and html/css to create the frontend and hosted it on github pages. it was a fun project to work on and i enjoyed just being able to do whatever i so pleased.',
    site: 'https://edenchou.com/the-7-wonders/index.html',
    icon: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
    github: 'https://github.com/eden0606/the-7-wonders',
    appSnapshot: {
      src: '/images/projects/the-7-wonders-snapshot.png',
      alt: 'the 7 wonders snapshot',
    }
  },
  {
    name: 'avian diet database',
    date: 'fall 2021',
    tags: ['react', 'typescript', 'node', 'firebase', 'bulma', 'html/css', 'figma'],
    description: 'as a semester long project for one of my cs classes to gain hands on experience of what it would be like working with a client an actual project, i worked on a team of 3 on a avian diet database web app. this site allows users to search for bird species and view their diets based on an existing db. a new feature we worked on was allowing an option to submit data and contribute to the existing db and also implementing an approval/denial process to ensure data was correct before added to the db. we used react for the frontend and firebase for the backend. figma was used to create the wireframes and then translated into the actual site. it was great being able to work with a client on a collaborative project and i learned a lot about the importance of communication and understanding the client\'s needs.',
    site: 'https://aviandiet.unc.edu/',
    icon: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
    github: 'https://github.com/avian-diet-database/dietdb-frontend',
    appSnapshot: {
      src: '/images/projects/avian-diet-db-snapshot.png',
      alt: 'avian diet database snapshot',
    }
  },
  {
    name: 'mPOWER',
    date: 'fall 2021',
    tags: ['html/css', 'javascript', 'next', 'node', 'firebase', 'figma'],
    description: 'this was another project for a local client focused on empowering individuals with chronic illnesses by providing resources for physical, emotional, and financial support. i collaborated on a team of around 8 to create a web app that would allow users to access these resources. this was the first time i used next.js with react and i thoroughly enjoyed it! figma was used to create the wireframes and then translated into the actual site. unfortunately this site is no longer live :(',
    icon: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
    github: 'https://github.com/cssgunc/mPOWER',
    appSnapshot: {
      src: '/images/projects/mpower-snapshot.png',
      alt: 'mpower snapshot',
    }
  },
  {
    name: 'chat-tea',
    date: 'spring 2020',
    tags: ['html/css', 'bulma', 'react', 'node', 'firebase', 'figma'],
    description: 'as a sort of capstone project for one of my cs classes, i was tasked with collaborating with a team to create any kind of web app using all we had learned that semester. my team designed a chat application, using react for the frontend and firebase for the backend. we also used figma to create the wireframes and then translated that into the actual site that was then hosted on github pages. this was my first taste of using keyframes for animations and i am such a fan. this was a great learning experience for me as i was able to see the full lifecycle of a project from ideation to deployment.',
    site: 'https://pichhim.github.io/COMP-426-Final-Project',
    icon: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
    github: 'https://github.com/pichhim/COMP-426-Final-Project',
    appSnapshot: {
      src: '/images/projects/chattea-snapshot.png',
      alt: 'chat-tea snapshot',
    }
  },
  {
    name: 'bot-o-mat',
    date: 'spring 2020',
    tags: ['html/css', 'bulma', 'javascript'],
    description: 'as part of a coding assessment, i created a bot-o-mat to display my knowledge of the mvc design pattern and asynchronous programming. i used vanilla js and html/css to create the frontend and hosted it on github pages. this was a fun project to work on and i learned a lot about the importance of efficient and how to effectively use asynchronous functions.',
    site: '/',
    icon: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
    github: 'https://github.com/eden0606/bot-o-mat',
    appSnapshot: {
      src: '/images/projects/bot-o-mat-snapshot.png',
      alt: 'bot-o-mat snapshot',
    }
  },
  {
    name: 'cads',
    date: 'spring 2020',
    tags: ['wordpress', 'html/css', 'bootstrap'],
    description: 'during my junior and senior year of college, i was part of the executive board of my university\'s club, carolina analytics and data science (cads), as the web development chair. i worked to revamp their existing wordpress site to match the club\'s new branding. i used html/css and bootstrap to create a more modern and visually appealing site.',
    site: 'https://cads.cs.unc.edu/',
    icon: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
    appSnapshot: {
      src: '/images/projects/cads-snapshot.png',
      alt: 'cads snapshot',
    }
  },
  {
    name: '2048',
    date: 'spring 2020',
    tags: ['html/css', 'bulma', 'javascript'],
    description: 'as a project for my web programming class, i created a clone of the popular game 2048. it was a head-scratcher at first to understand how the game operated but was immensely gratifying once i figured it out. i used focused on implemented the mvc design pattern and utilized html/css/js to create the meat of the game. i also used the css framework, bulma, to simplify and expedite overall design process.',
    site: '/',
    icon: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
    // TODO: update github into its own repository 
    github: 'https://github.com/eden0606/www-programming/tree/master/2048',
    appSnapshot: {
      src: '/images/projects/2048-snapshot.png',
      alt: '2048 snapshot',
    }
  },
  {
    name: 'cs dept portal',
    date: 'spring 2020',
    tags: ['html/css', 'bulma', 'react', 'javascript', 'node', 'airtable'],
    description: 'this was a summer project for my university\'s computer science department. the goal was to create a portal for computer science students to access resources, events, and aid in internship/job searches. this was one of my first instances using react, and i had a blast. airtable was used as a db to store student information. this app unfortunately is no longer live :(',
    icon: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
    github: 'https://github.com/cssgunc/CSPortal',
    appSnapshot: {
      src: '/images/projects/cs-dept-snapshot.png',
      alt: 'cs dept portal snapshot',
    }
  },
  {
    name: 'personal website v1',
    date: 'spring 2019',
    tags: ['javascript', 'html/css'],
    description: 'my first ever website i made my sophomore year of college. it is a simple static site that served as a portfolio to display my projects. at the time, i was obsessed with parallax scrolling, so that was the basis for my site design. i used vanilla js and html/css for the frontend and hosted it on github pages with my own custom domain.',
    site: 'https://eden0606.github.io/',
    icon: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
    github: 'https://github.com/eden0606/personal-website-v1',
    appSnapshot: {
      src: '/images/projects/personal-website-v1-snapshot.png',
      alt: 'personal website v1 snapshot',
    }
  },
  {
    name: 'mind above matter',
    date: 'spring 2019',
    tags: [
      'html/css',
      'javascript',
      'flask',
      'sqlalchemy',
      'nginx',
      'python'
    ],
    description: 'my first collaborative project for a client and first true taste of web development. i worked with a team of 6 to create a mental health platform that connects college students with mental health resources and events. i used vanilla js and html/css for the frontend and hosted this website using nginx w/ flask. this site is unfortunately no longer live :(',
    icon: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
    github: 'https://github.com/cssgunc/MindOverMatter',
    appSnapshot: {
      src: '/images/projects/mind-above-matter-snapshot.png',
      alt: 'mind above matter snapshot',
    }
  },
  {
    name: 'ozanamsi',
    date: 'spring 2018',
    tags: ['wix', 'html/css', 'adobe'],
    description: 'this was my first brush with web development if you consider wix as such. i built out this website during an internship to help the business, ozanam strategic insights, with their online presence. there was a smattering of html/css additions for custom frontend visuals and i used the adobe suite to create and edit the graphics. this site is no longer live :(',
    icon: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
    appSnapshot: {
      src: '/images/projects/ozanam-snapshot.png',
      alt: 'ozanamsi snapshot',
    }
  },

  // add factsheet here
];

export const projectCards = projects.map((project, index) => {
  return (
    <ProjectCard {...project} key={`project-${index}`} />
  )
});

/** 
 * -----------------------------------------
 * project window data
 * -----------------------------------------
 */

export const renderProjectWindows = [
  <Window
    id='personal-website-v2-window'
    key='personal-website-v2-window'
    className='window'
    icon={{
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    }}
    title='personal website v2' >
    {projectCards[0]}
  </Window>,
  <Window
    id='the-7-wonders-window'
    key='the-7-wonders-window'
    className='window'
    icon={{
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    }}
    title='the 7 wonders' >
    {projectCards[1]}
  </Window>,
  <Window
    id='avian-diet-database-window'
    key='avian-diet-database-window'
    className='window'
    icon={{
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    }}
    title='avian diet database' >
    {projectCards[2]}
  </Window>,
  <Window
    id='mPOWER-window'
    key='mPOWER-window'
    className='window'
    icon={{
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    }}
    title='mPOWER' >
    {projectCards[3]}
  </Window>,
  <Window
    id='chat-tea-window'
    key='chat-tea-window'
    className='window'
    icon={{
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    }}
    title='chat-tea' >
    {projectCards[4]}
  </Window>,
  <Window
    id='bot-o-mat-window'
    key='bot-o-mat-window'
    className='window'
    icon={{
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    }}
    title='bot-o-mat' >
    {projectCards[5]}
  </Window>,
  <Window
    id='cads-window'
    key='cads-window'
    className='window'
    icon={{
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    }}
    title='cads' >
    {projectCards[6]}
  </Window>,
  <Window
    id='2048-window'
    key='2048-window'
    className='window'
    icon={{
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    }}
    title='2048' >
    {projectCards[7]}
  </Window>,
  <Window
    id='cs-dept-portal-window'
    key='cs-dept-portal-window'
    className='window'
    icon={{
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    }}
    title='cs dept portal' >
    {projectCards[8]}
  </Window>,
  <Window
    id='personal-website-v1-window'
    key='personal-website-v1-window'
    className='window'
    icon={{
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    }}
    title='personal website v1' >
    {projectCards[9]}
  </Window>,
  <Window
    id='mind-above-matter-window'
    key='mind-above-matter-window'
    icon={{
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    }}
    title='mind above matter' >
    {projectCards[10]}
  </Window>,
  <Window
    id='ozanamsi-window'
    key='ozanamsi-window'
    className='window'
    icon={{
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    }}
    title='ozanamsi' >
    {projectCards[11]}
  </Window>
]

