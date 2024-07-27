export interface StartProgramData {
  name: string;
  hasArrow: boolean;
  img: {
    src: string;
    alt: string;
  };
  windowId?: string;
}

export const startPrograms: StartProgramData[] = [
  {
    name: 'Windows Update',
    hasArrow: false,
    img: {
      src: '/images/icons/windows-update.ico',
      alt: 'globe icon',
    },
  },
  {
    name: 'Documents',
    hasArrow: false,
    img: {
      src: '/images/icons/documents.ico',
      alt: 'documents icon',
    },
  },
  {
    name: 'Settings',
    hasArrow: false,
    img: {
      src: '/images/icons/settings.ico',
      alt: 'settings icon',
    },
  },
  {
    name: 'Projects',
    hasArrow: false,
    img: {
      src: '/images/icons/documents.ico',
      alt: 'folder icon',
    },
    windowId: 'my-projects-window',
  },
  {
    name: 'Search',
    hasArrow: false,
    img: {
      src: '/images/icons/search.ico',
      alt: 'search icon',
    },
  },
  {
    name: 'Log Off...',
    hasArrow: false,
    img: {
      src: '/images/icons/log-off.ico',
      alt: 'log off icon',
    },
  },
  {
    name: 'Shut Down...',
    hasArrow: false,
    img: {
      src: '/images/icons/shut-down.ico',
      alt: 'shut down icon',
    },
  },
];
