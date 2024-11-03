// @ts-check

const template = document.createElement("template");

template.innerHTML = `
                        <style>
                            .preview__image {
                            width: 48px;
                            height: 70px;
                            object-fit: cover;
                            background: grey;
                            border-radius: 2px;
                            box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
                                0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
                            }

                            .preview__title {
                            margin: 0 0 0.5rem;
                            font-weight: bold;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;  
                            overflow: hidden;
                            color: rgba(var(--color-dark), 0.8)
                            }

                            .preview__info {
                            padding: 1rem;
                            }

                            .preview__author {
                            color: rgba(var(--color-dark), 0.4);
                            }
                        </style>

                        <img
                        class="preview__image"
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348495562i/42891.jpg"
                    />

                    <div class="preview__info">
                        <h3 class="preview__title">Journeys in English</h3>
                        <div class="preview__author">Bill Bryson</div>
                    </div>
                    `;

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
