
class PonyComponent extends HTMLElement {
    constructor() {
        super();
        console.log('pony!');
        const template = document.querySelector('#pony-template');
        const clonedTemplate = document.importNode(template.content, true);
        const shadow = this.attachShadow({ mode: 'open'});
        shadow.appendChild(clonedTemplate);
    }


}

export default PonyComponent;