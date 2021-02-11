import { Character } from "../../utils/api";
import { createElement } from "../../utils/createElement";

/* <article class="card">
<img class="card__portrait" src="https://rickandmortyapi.com/api/character/avatar/587.jpeg" alt="">
<div class="card__info">
<h2 class="info_name">Cavesnake</h2>
<p>❌ - Dead</p><p class="card__species">Animal</p><p class="card__origin">Snake Planet</p>
</div>
</article> */

export function createCard({
  imgSrc,
  name,
  status,
  species,
  origin,
}: Character) {
  return createElement("article", {
    className: "card",
    childs: [
      createElement("article", {
        className: "card",
        childs: [
          createElement("div", {
            className: "card_inner",
            childs: [
              createElement("div", {
                className: "card_front",
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
                        className: "info__name",
                        innerText: name,
                      }),
                      createElement("p", {
                        innerText: `${
                          status === "Alive" ? "💚" : "❌"
                        } - ${status}`,
                      }),
                      createElement("p", {
                        className: "info__species",
                        innerText: species,
                      }),
                      createElement("p", {
                        className: "info__origin",
                        innerText: origin.name,
                      }),
                    ],
                  }),
                ],
              }),
              createElement("div", {
                className: "card_back",
                childs: [
                  createElement("p", {
                    className: "card_back_text",
                    innerText: "card back 💝",
                  }),
                ],
              }),
            ],
          }),

          /* 
          constructor(parameters) {}*/
        ],
      }),

      /* <article class="card">
<div class="card_inner">
<img class="card__portrait" src="https://rickandmortyapi.com/api/character/avatar/587.jpeg" alt="">
<div class="card__info">
<h2 class="info_name">Cavesnake</h2>
<p class="card__species">Animal</p>
</div>
</div>
<div class="card_back">
<p>❌ - Dead</p>
<p class="card__origin">Snake Planet</p>
</div>
</article>
 */
    ],
  });
}
