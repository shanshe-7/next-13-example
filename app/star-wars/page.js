import StarWars from "../../components/StarWars";

export default async function page() {
  const people = await fetch("https://swapi.dev/api/people").then((res) =>
    res.json()
  );
  return <StarWars people={people.results} />;
}
