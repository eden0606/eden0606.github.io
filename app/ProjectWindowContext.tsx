import { createContext } from 'react';

interface ProjectWindowContextType {
  windowContext: string[];
  setWindowContext: (current: string[], newWindow: string) => void;
  removeWindowContext: (current: string[], removeWindow: string) => void;
}
const ProjectWindowContext = createContext<ProjectWindowContextType>({
  windowContext: [],
  setWindowContext: (current: string[], newWindow: string) => {},
  removeWindowContext: (current: string[], removeWindow: string) => {},
  //   windowsContext: openWindows,
  //   setWindowContext: (current: string[], newWindow: string) =>
  //     setOpenWindows([...current, newWindow]),
  //   removeWindowContext: (current: string[], windowToRemove: string) => {
  //     const updatedWindows = current.filter(
  //       (window) => window !== windowToRemove
  //     );
  //     setOpenWindows(updatedWindows);
  //   },
});

export default ProjectWindowContext;
