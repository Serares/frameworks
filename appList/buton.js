

class butonAdaugare extends HTMLButtonElement {
    constructor(){
        super();
        
    }

    connectedCallback(){
        this.innerHTML = `Adaugare`;
        this.style.fontSize = `0.5rem`;
        this.style.padding = '0.4em';
    }
}

customElements.define('buton-add', butonAdaugare, {extends:'button'});


