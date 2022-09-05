import type { NextPage } from "next";

import Header from "../components/Header";
import characterApi from "../store/features/characterSlice";

const Home: NextPage = () => {
  const { data, isLoading } = characterApi.useGetCharacterQuery();
  const character = data?.results;

  return (
    <div>
      <Header />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        character?.map((item) => (
          <ul key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="#" />
            <p>{item.species}</p>
            <p>{item.status}</p>
            <p>{item.gender}</p>
          </ul>
        ))
      )}

      <h1>ola</h1>
    </div>
  );
};

export default Home;
