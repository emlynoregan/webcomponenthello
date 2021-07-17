class HelloWorld extends HTMLElement {
    constructor() {
        super();
        // create a shadow dom
        const shadow = this.attachShadow({ mode: "closed" });
        // create a span element
        const text = document.createElement("span");

        const thing = this.thing();

        // set the content to 'Hello World'
        text.textContent = "Hello World - " + thing ? thing : "...no thing...";
        // insert our created element into our shadow DOM, causing it to appear
        shadow.appendChild(text);        
    }

    get thing() {
        return this.getAttribute('thing');
    }
      
    set thing(newValue) {
        this.setAttribute('thing', newValue);
    }
}

window.customElements.define('hello-world', HelloWorld);