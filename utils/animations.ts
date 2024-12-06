export const typewriter = (str: string, speed: number, id: string, idx = 0) => {
    if (idx < str.length) {
        document.getElementById(id)!.innerHTML += str.charAt(idx);
        idx++;
        setTimeout(() => { typewriter(str, speed, id, idx) }, speed);
    }
}

export const deleteTypewriter = (speed: number, id: string) => {
    let str = document.getElementById(id)!.innerHTML ?? '';
    if (str.length > 0) {
        str = str.slice(0, -1)
        document.getElementById(id)!.innerHTML = str;
        setTimeout(() => { deleteTypewriter(speed, id) }, speed);
    }
}