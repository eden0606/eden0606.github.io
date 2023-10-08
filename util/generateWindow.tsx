import React, { ReactElement, ReactNode, use, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import generateDraggableElement from './generateDraggableElement';

// generate window component and then append this to the page
export default function generateWindow(
  Window: ReactElement,
  parentId: string,
  id: string,
  appendTo = 'screen'
) {
  const window = document.getElementById(appendTo);
  if (window) {
    const wrapper = document.createElement('div');
    wrapper.id = parentId;
    wrapper.style.position = 'absolute';
    wrapper.style.top = '15%';
    wrapper.style.left = '25%';
    wrapper.innerHTML = ReactDOMServer.renderToString(Window);
    // console.log(Window);
    window.appendChild(wrapper);
    // openWindows.push(parentId);
  }
}
