export async function getCharacters() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");

    const characters = await res.json();
    console.log(characters);
    return characters;
  } catch (error) {
    console.error(error);
  }
}
