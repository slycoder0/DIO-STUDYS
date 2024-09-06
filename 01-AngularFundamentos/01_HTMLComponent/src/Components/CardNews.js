class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    // criando card
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    // criando left
    const cardLeft = document.createElement('div');
    cardLeft.setAttribute('class', 'card__left');

    // criando elementos
    const autor = document.createElement('span');
    autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymo');

    const linkTitle = document.createElement('a');
    linkTitle.textContent = this.getAttribute('title');
    linkTitle.href = this.getAttribute('link-url');

    const newsContent = document.createElement('p');
    newsContent.textContent = this.getAttribute('content');

    // pendurando os filhos no pai
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    // criando right
    const cardRight = document.createElement('div');
    cardRight.setAttribute('class', 'card__right');

    // criando tag imgphoto="./assets/img/asset-vader.png"
    const newsImg = document.createElement('img');
    newsImg.src = this.getAttribute('photo') || './assets/img/foto-default.jpg';
    newsImg.alt = 'Foto da Noticia';
    cardRight.appendChild(newsImg);

    // filhos do card // root
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    // retornando card/root
    return componentRoot;
  }
  styles() {
    const style = document.createElement('style');
    style.textContent = `
    .card {
  width: 600px;
  border: 1px solid gray;
  box-shadow: 9px 9px 20px black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  margin: 2rem;
}
.card__right{
display: flex;
justify-content: center;
align-items: center;
}
.card__left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card__left > span {
  font-weight: 400;
  font-size: 2rem;
}

.card__left > h1 {
  margin-top: 10px;
}

.card__left > p {
  color: #fff;
  font-size: 1rem;

}
    `;

    return style;
  }
}

customElements.define('card-news', Cardnews);
