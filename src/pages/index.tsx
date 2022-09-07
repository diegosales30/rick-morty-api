import characterApi from "../store/features/characterSlice";

import type { NextPage } from "next";

import CharacterList from "../components/CharacterList";

import Header from "../components/Header";

import { RootState } from "../store";
import { useSelector } from "react-redux";
import Buttons from "../components/Buttons";

const Home: NextPage = () => {
  const { count } = useSelector((state: RootState) => state.nextpage);
  const { isLoading } = characterApi.useGetCharacterQuery(count);

  return (
    <div>
      <Header />
      {isLoading ? <h1>Loading</h1> : <CharacterList />}
      <Buttons />
    </div>
  );
};

export default Home;
