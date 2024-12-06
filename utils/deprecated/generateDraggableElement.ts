
/**
 * Deprecated drag functionality in favor of the `draggable` package.
 */

export default function useDragElement(element: HTMLElement | null, elementId: string) {

  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (!element) {
    return;
  }

  if (document.getElementById(`${elementId}-header`)) {
    // if present, the header is where you move the DIV from
    document.getElementById(`${elementId}-header`)!.onmousedown = dragMouseDown;
    document.getElementById(`${elementId}-header`)!.ontouchstart = dragTouchEvent;

  } else {
    // otherwise, move the DIV from anywhere inside the DIV
    if (element?.parentElement) {
      element.parentElement.onmousedown = dragMouseDown;
      element.parentElement.ontouchstart = dragTouchEvent;
    }
  }

  function dragMouseDown(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves
    document.onmousemove = elementMouseDrag;

    const visibleWindows = document.querySelectorAll('[window-visible]');

    if (visibleWindows) {
      visibleWindows.forEach((window) => {
        if (window.children[0].id === elementId) {
          (window as HTMLElement).style.zIndex = '2';
        } else {
          (window as HTMLElement).style.zIndex = '1';
        }
      });
    }
  }

  function dragTouchEvent(e: TouchEvent) {
    e = e || window.event;
    // get the mouse cursor position at startup
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    document.ontouchend = closeDragElement;
    // call a function whenever the cursor moves
    document.ontouchmove = elementTouchDrag;

    const visibleWindows = document.querySelectorAll('[window-visible]');

    if (visibleWindows) {
      visibleWindows.forEach((window) => {
        if (window.children[0].id === elementId) {
          (window as HTMLElement).style.zIndex = '2';
        } else {
          (window as HTMLElement).style.zIndex = '1';
        }
      });
    }
  }

  function elementMouseDrag(e: MouseEvent) {
    if (!element) {
      return;
    }
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    element.style.top = element.offsetTop - pos2 + 'px';
    element.style.left = element.offsetLeft - pos1 + 'px';
  }

  function elementTouchDrag(e: TouchEvent) {
    if (!element) {
      return;
    }
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.touches[0].clientX;
    pos2 = pos4 - e.touches[0].clientY;
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    // set the element's new position:
    element.style.top = element.offsetTop - pos2 + 'px';
    element.style.left = element.offsetLeft - pos1 + 'px';
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchstart = null;
  }
}
