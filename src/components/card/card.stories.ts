import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { getCharacter, getCharacters } from "../../utils/api";

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
  const characters = [
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

export const CharacterFromAPI = (args, { loaded: { character } }) => {
  return createCard(character);
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(587),
  }),
];

//third commit (import getCharacters, on top of getCharacter from  second commit !!)
//organise the imported datas in a container
export const CharactersFromAPI = (args, { loaded: { characters } }) => {
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
