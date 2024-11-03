// @ts-check

const template = document.createElement("template");

template.innerHTML = `<h1>Hi there</h1>`;
console.log(template.content);

class Preview extends HTMLElement {
  #inner = this.attachShadow({ mode: "closed" });

  constructor() {
    super();
  }

  connectedCallback() {
    const node = template.content.cloneNode(true);
    this.#inner.append(node);
  }
}

customElements.define("book-preview", Preview);
