import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { Character, getCharacter, getCharacters } from "../../utils/api";

export default {
  title: "Components/card",
  parameters: { layout: "centered" },
};

export const Garblovian = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/133.jpeg",
    name: "Garblovian",
    status: "Alive",
    species: "Alien",
    origin: "unknown",
  });

export const Todd_Crystal = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/355.jpeg",
    name: "Todd Crystal",
    status: "Alive",
    species: "Alien",
    origin: "Unity's Planet",
  });

export const Pencilvester = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/259.jpeg",
    name: "Pencilvester",
    status: "dead",
    species: "Alien",
    origin: "Earth (Replacement Dimension)",
  });

export const Flansian = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/125.jpeg",
    name: "Flansian",
    status: "Alive",
    species: "Alien",
    origin: "Planet Squanch",
  });

export const Multiple = () => {
  const characters: Character[] = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/133.jpeg",
      name: "Garblovian",
      status: "Alive",
      species: "Alien",
      lastKnownLocation: "unknown",
    },

    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/355.jpeg",
      name: "Todd Crystal",
      status: "Alive",
      species: "Alien",
      lastKnownLocation: "Unity's Planet",
    },

    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/259.jpeg",
      name: "Pencilvester",
      status: "dead",
      species: "Alien",
      lastKnownLocation: "Earth (Replacement Dimension)",
    },

    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/125.jpeg",
      name: "Flansian",
      status: "Alive",
      species: "Alien",
      lastKnownLocation: "Planet Squanch",
    },
  ];

  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  return container;
};

/* OLD!! export const CharacterFromAPI = (args, { loaded: { character } }) => { */
type CharacterFromAPIProps = {
  loaded: {
    character: Character;
  };
};
export const CharacterFromAPI = (
  args,
  { loaded: { character } }: CharacterFromAPIProps
) => {
  return createCard(character);
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(587),
  }),
];

//commit #5 API WITH FILTER
//LOOK AT SCREENSHOTS 11.02 MORGEN!!!!!!!!
/* OLD!!! export const CharactersFromAPIWithFilter = (
  args,
  { loaded: { characters } }
) => { */
type CharactersFromAPIProps = {
  loaded: {
    characters: Character[];
  };
};
export const CharactersFromAPI = (
  args,
  { loaded: { characters } }: CharactersFromAPIProps
) => {
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};
CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    innerText: "Load random character",
    onclick: async () => {
      // Verify each step (alert, console.log)
      // generate random character id
      const randomCharacterId = Math.floor(Math.random() * 670) + 1;
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
      // getCharacter from API
      const randomCharacter = await getCharacter(randomCharacterId);
      // create card
      const randomCharacterCard = createCard(randomCharacter);
      // make sure to only display one character
      if (container.childNodes.length > 1) {
        container.removeChild(container.lastChild);
      }
      // append card
      container.append(randomCharacterCard);
      // feel awesome 🐱‍👤
    },
  });

  const container = createElement("div", {
    className: "container",
    childs: [randomButton],
  });
  return container;
};
/* const input = createElement("input", {
    onchange: async () => {
      const newCharacters = await getCharacters(input.value);
      const newCards = newCharacters.map((character) => createCard(character));
      characterContainer.innerHTML = "";
      characterContainer.append(...newCards);
    },
  });

  const characterContainer = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  const container = createElement("div", {
    className: "",
    childs: [input, characterContainer],
  });

  return container;
};

CharactersFromAPIWithFilter.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];
 */
//third commit (import getCharacters, on top of getCharacter from  second commit !!)
//organise the imported datas in a container
/* export const CharactersFromAPI = (args, { loaded: { characters } }) => {
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};

CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    innerText: "Load random character",
    onclick: async () => {
 */ //randomCard‚();
// Verify each step (alert, console.log)
// 1) generate random character id
/* const rdmChar = Math.floor(Math.random() * 670) + 1; */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
// 2) getCharacter from API
/* const char = await getCharacter(rdmChar); */
// 3) create card
/* const charCard = createCard(char); */
// 4) append card
/* container.append(charCard); */
// 5) make sure to only display one character
// 6) feel awesome 🐱‍👤
/*    },
  });
 */
/*  const container = createElement("div", {
    className: "container",
    childs: [randomButton],
  });
  return container;
}; */

/* function randomCard(min, max) {
  min = Math.ceil(0);
  max = Math.floor(670);
  return Math.floor(Math.random() * (max - min) + min);
}

alert(randomCard(0, 670));
 */
