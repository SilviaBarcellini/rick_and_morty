import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc, name, status, species, origin }) {
  return createElement("article", {
    className: "card",
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
          createElement("p", {
            className: "card__origin",
            innerText: origin.name,
          }),
        ],
      }),
    ],
  });
}
