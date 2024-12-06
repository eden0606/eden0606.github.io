import layoutStyles from "../app/page.module.scss";

export const openWindow = (id: string) => {
  const elem = document.getElementById(id);

  if (elem?.parentElement) {
    elem.parentElement.classList.remove(layoutStyles.displayNone);
    elem.parentElement.setAttribute("window-visible", "true");
    elem.parentElement.style.top = calculateOffset();
  }

  if (elem) {
    dragElement(id);
    bringFocusedWindowToFront(id);
  }
};

export const closeWindow = (app: string) => {
  const elem = document.getElementById(app);
  if (elem?.parentElement) {
    elem.parentElement.classList.add(layoutStyles.displayNone);
    elem.parentElement.removeAttribute("window-visible");
  }
};

export const calculateOffset = () => {
  const numWindowsOpen = document.querySelectorAll("[window-visible]").length;
  return numWindowsOpen * 3 + 2 + "%";
};

export const dragElement = (id: string, customOptions?: {}) => {
  let Draggable = require("Draggable");
  let element = document.getElementById(id);
  let dragHandle = document.getElementById(`${id}-header`);
  let options = {
    handle: dragHandle,
    onDragStart: function () {
      bringFocusedWindowToFront(id);
    },
    ...customOptions,
  };

  if (element) {
    new Draggable(element, options);
  }
};

export const bringFocusedWindowToFront = (id: string) => {
  const visibleWindows = document.querySelectorAll("[window-visible]");

  if (visibleWindows) {
    visibleWindows.forEach((window) => {
      if (window.children[0].id === id) {
        (window as HTMLElement).style.zIndex = "2";
      } else {
        (window as HTMLElement).style.zIndex = "1";
      }
    });
  }
};
