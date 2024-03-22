import React from "react";
import { getCharacters } from "@/app/lib/characters";

async function Card() {
  const characters = await getCharacters();
  console.log(characters);
  return <h2>Card</h2>;
}

export default Card;
