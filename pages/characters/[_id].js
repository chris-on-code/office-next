export default function Character({ character }) {
  return (
    <div>
      <h1>
        {character.firstname} {character.lastname}
      </h1>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://officeapi.dev/api/characters");
  const data = await response.json();

  return {
    paths: data.data.map((character) => ({
      params: {
        _id: character._id,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    "https://officeapi.dev/api/characters/5e93b4a43af44260882e33b0"
  );
  const data = await response.json();

  return {
    props: { character: data.data },
  };
}
