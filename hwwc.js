class HelloWorld extends HTMLElement {
    constructor() {
        super();
        // create a shadow dom
        const shadow = this.attachShadow({ mode: "closed" });
        // create a span element
        const text = document.createElement("span");
        // set the content to 'Hello World'
        text.textContent = "Hello World";
        // insert our created element into our shadow DOM, causing it to appear
        shadow.appendChild(text);        
    }
}

window.customElements.define('hello-world', HelloWorld);