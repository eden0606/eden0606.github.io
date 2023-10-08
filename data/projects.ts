export interface ProjectData {
  name: string;
  date: string;
  tags: string[];
  site?: string;
  img: {
    src: string;
    alt: string;
  };
}

export const projects: ProjectData[] = [
  {
    name: 'personal website',
    date: 'fall 2023',
    tags: ['react', 'typescript', 'next', 'node', 'html/css'],
    site: '/',
    img: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
  },
  {
    name: 'avian diet database',
    date: 'fall 2021',
    tags: ['react', 'typescript', 'node', 'firebase', 'bulma', 'html/css'],
    site: '/',
    img: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
  },
  {
    name: 'mPOWER',
    date: 'fall 2021',
    tags: ['html/css', 'next', 'node', 'firebase'],
    site: '/',
    img: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
  },
  {
    name: 'chat-tea',
    date: 'spring 2020',
    tags: ['html/css', 'bulma', 'react', 'node', 'firebase'],
    site: '/',
    img: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
  },
  {
    name: 'bot-o-mat',
    date: 'spring 2020',
    tags: ['html/css', 'bulma', 'javascript'],
    site: '/',
    img: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
  },
  {
    name: 'cads',
    date: 'spring 2020',
    tags: ['wordpress', 'html/css', 'bootstrap'],
    site: '/',
    img: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
  },
  {
    name: '2048',
    date: 'spring 2020',
    tags: ['html/css', 'bulma', 'javascript'],
    site: '/',
    img: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
  },
  {
    name: 'cs dept portal',
    date: 'spring 2020',
    tags: ['html/css', 'bulma', 'react', 'node', 'airtable'],
    img: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
  },
  {
    name: 'mind above matter',
    date: 'spring 2019',
    tags: [
      'html/css',
      'javascript',
      'flask',
      'sqlalchemy',
      'html/css',
      'javascript',
      'flask',
      'sqlalchemy',
      'html/css',
      'javascript',
      'flask',
      'sqlalchemy',
    ],
    site: '/',
    img: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
  },
  {
    name: 'ozanamsi',
    date: 'spring 2018',
    tags: ['wix', 'html/css', 'adobe'],
    site: '/',
    img: {
      src: '/images/icons/folder.ico',
      alt: 'folder icon',
    },
  },
];
