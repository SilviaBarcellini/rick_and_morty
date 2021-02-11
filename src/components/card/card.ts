import { createElement } from "../../utils/createElement";

/* <article class="card">
<img class="card__portrait" src="https://rickandmortyapi.com/api/character/avatar/587.jpeg" alt="">
<div class="card__info">
<h2 class="info_name">Cavesnake</h2>
<p>❌ - Dead</p><p class="card__species">Animal</p><p class="card__origin">Snake Planet</p>
</div>
</article> */

export function createCard({ imgSrc, name, status, species, origin }) {
  return createElement("article", {
    className: "card",
    childs: [
      createElement("div", {
        className: "card_inner",
        childs: [
          createElement("img", {
            className: "card__portrait",
            src: imgSrc,
            alt: "",
          }),
          createElement("div", {
            className: "card__info",
            childs: [
              createElement("h2", {
                className: "info_name",
                innerText: name,
              }),
              createElement("p", {
                innerText: `${status === "Alive" ? "💚" : "❌"} - ${status}`,
              }),
              createElement("p", {
                className: "card__species",
                innerText: species,
              }),
            ],
          }),
        ],
      }),
      createElement("div", {
        className: "card_back",
        childs: [
          createElement("p", {
            className: "card__origin",
            innerText: origin.name,
          }),
        ],
      }),
      /* 
          constructor(parameters) {
            
          } */
    ],
  });
}
