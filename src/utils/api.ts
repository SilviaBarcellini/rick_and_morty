export type APICharacter = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

//Third commit! Get all the cards without typing a single number!!!!
export type APICharacters = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: APICharacter[];
};
//End commit 3!!!!!!!!!!!!!!!!!!!!!!!!!!

//START commit 4: convert to character!!! (cfr. https response)
export type Character = {
  imgSrc: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  origin: {
    name: string;
  };
  isMale: boolean;
};

//TODO-START 4
//Create the FUNCTION from export type Character + boolean + RETURN!!!!!
function convertToCharacter(apiCharacter: APICharacter): Character {
  return {
    imgSrc: apiCharacter.image,
    name: apiCharacter.name,
    status: apiCharacter.status,
    origin: { name: apiCharacter.origin.name },
    species: apiCharacter.species,
    isMale: apiCharacter.gender === "Male",
  };
  //TODO-END 4
}
//END commit 4: convert to character!!!!!!!!!!!!

export async function getCharacter(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  //START commit 4.1
  if (!response.ok) {
    const result = await response.json();
    return {
      imgSrc: "",
      name: result.error,
      status: "Dead",
      species: "Human",
      origin: {
        name: "Internet",
      },
    } as Character;
  }
  //END commit 4.1
  const result = (await response.json()) as APICharacter;
  /* OLD!!!
    const character = {
    imgSrc: result.image,
    name: result.name,
    status: result.status,
    species: result.species,
    origin: { name: result.origin.name },
  }; */
  const character = convertToCharacter(result); //NEW LINE!! (CONTINUE COMMIT 4)
  return character;
}

//continue commit 3!!!!!!!!
/* OLD!! REPLACED BY COMMIT #5 
export async function getCharacters() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`); */
//COMMIT #5
export async function getCharacters(name?: string) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${name ? `?name=${name}` : ""}`
  );
  //END COMMIT #5
  if (!response.ok) {
    //commit 4.1
    return []; //commit 4.1
  } //commit 4.1
  const result = (await response.json()) as APICharacters;
  /* OLD!!!const characters = result.results.map((APICharacter) => ({
    imgSrc: APICharacter.image,
    name: APICharacter.name,
    status: APICharacter.status,
    species: APICharacter.species,
    origin: { name: APICharacter.origin.name },
  })); */
  const characters = result.results.map(
    (
      apiCharacter //COMMIT 4
    ) => convertToCharacter(apiCharacter) //COMMIT 4
  );
  return characters;
}
