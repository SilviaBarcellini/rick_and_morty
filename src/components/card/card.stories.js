import "./card.css";
import { createCard } from "./card";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    lastKnownLocation: "Earth,(C-137)",
  });

export const Garblovian = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/133.jpeg",
    name: "Garblovian",
    status: "Alive",
    species: "Alien",
    lastKnownLocation: "unknown",
  });

export const Todd_Crystal = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/355.jpeg",
    name: "Todd Crystal",
    status: "Alive",
    species: "Alien",
    lastKnownLocation: "Unity's Planet",
  });

export const Pencilvester = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/259.jpeg",
    name: "Pencilvester",
    status: "dead",
    species: "Alien",
    lastKnownLocation: "Earth (Replacement Dimension)",
  });

export const Flansian = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/125.jpeg",
    name: "Flansian",
    status: "Alive",
    species: "Alien",
    lastKnownLocation: "Planet Squanch",
  });
