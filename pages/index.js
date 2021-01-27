import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ characters }) {
  return (
    <div>
      {characters.filter(character => character).map((character) => (
        <Link href={`/characters/${character._id}`} key={character._id}>
          <a style={{ display: "block" }}>
            {character.firstname} {character.lastname || ""}
          </a>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://officeapi.dev/api/characters");
  const data = await response.json();

  return {
    props: { characters: data.data },
  };
}
