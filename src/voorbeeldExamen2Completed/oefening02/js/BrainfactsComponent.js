export default class BrainfactsComponent {
  constructor(brainfacts) {
    this.toHTML(brainfacts);
  }

  toHTML(brainfacts) {
    const mainElement = document.querySelector('section');
    let nextImageToUse = 1;
    brainfacts.forEach((fact, i) => {
      const article = document.createElement('article');
      const h2 = document.createElement('h2');
      h2.innerText = `${i + 1}. ${fact.title}`;
      article.appendChild(h2);
      const img = document.createElement('img');
      let image = fact.image
        ? `images/${fact.image}.jpg`
        : `images/brain${nextImageToUse++}.jpg`;
      img.setAttribute('src', image);
      img.setAttribute('alt', 'image of brain');
      img.setAttribute('class', 'center');
      article.appendChild(img);
      const p = document.createElement('p');
      p.innerText = fact.details;
      p.setAttribute('class', 'detail invisible');
      article.appendChild(p);
      h2.onclick = () => {
        const visibleP = document.querySelector('p.visible');
        if (visibleP) visibleP.classList.replace('visible', 'invisible');
        p.classList.remove('invisible');
        p.classList.add('visible');
      };
      mainElement.appendChild(article);
    });
  }
}
