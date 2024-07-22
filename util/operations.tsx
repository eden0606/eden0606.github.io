import layoutStyles from '../app/page.module.scss';
import generateDraggableElement from '@/util/generateDraggableElement';


export const openWindow = (app: string) => {
    const elem = document.getElementById(app);

    if (elem?.parentElement) {
        elem.parentElement.classList.remove(layoutStyles.displayNone);
        elem.parentElement.setAttribute('window-visible', 'true');
        elem.parentElement.style.top = calculateOffset();
        generateDraggableElement(elem.parentElement, elem.id);
    }
}

export const closeWindow = (app: string) => {
    const elem = document.getElementById(app);
    if (elem?.parentElement) {
        elem.parentElement.classList.add(layoutStyles.displayNone);
        elem.parentElement.removeAttribute('window-visible');
    }
}

export const calculateOffset = () => {
    const numWindowsOpen = document.querySelectorAll('[window-visible]').length;
    return numWindowsOpen * 3 + 2 + '%';
}