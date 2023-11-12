import React, { ReactElement, ReactNode, use, useEffect } from 'react';
import generateDraggableElement from './generateDraggableElement';
import ReactDOM, { createPortal } from 'react-dom';

// generate window component and then append this to the page
export default function generateWindow(
  Window: ReactElement,
  parentId: string,
  id: string,
  appendTo = 'screen'
) {
  const window = document.getElementById(appendTo);
  if (window) {
    // const wrapper = document.createElement('div');
    // wrapper.id = parentId;
    // wrapper.style.position = 'absolute';
    // wrapper.style.top = '15%';
    // wrapper.style.left = '25%';
    // wrapper.innerHTML = ReactDOMServer.renderToString(Window);
    // eslint-disable-next-line react/no-deprecated
    console.log(window);
    {
      createPortal(Window, document.body);
    }
    // console.log(Window);
    // window.appendChild(wrapper);
    // openWindows.push(parentId);
  }
}
