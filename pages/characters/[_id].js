export default function Character({ character }) {
  return (
    <div>
      <h1>{character && character.firstname}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://officeapi.dev/api/characters");
  const data = await response.json();

  return {
    paths: data.data.filter(character => character).map((character) => ({
      params: {
        _id: character._id,
      },
    })),
    fallback: false, // This must be false for export
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://officeapi.dev/api/characters/${params._id}`
  );
  const data = await response.json();

  return {
    props: { character: data.data },
  };
}
