
class PonyComponent extends HTMLElement {
    constructor() {
        super();
        console.log('pony!');

        const shadow = this.attachShadow({ mode: 'open'});
        const title = document.createElement('h1');
        title.textContent = 'General Pony!';
        title.addEventListener('click', (e) => {
            const elem = e.target as HTMLElement;
            console.log(elem.style.color);
            const isRed = elem.style.color === '#f00' || elem.style.color === 'rgb(255, 0, 0)';
            elem.style.color = isRed ? '#000' : '#f00';
        })
        shadow.appendChild(title);
    }


}

export default PonyComponent;