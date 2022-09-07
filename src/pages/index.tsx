import characterApi from "../store/features/characterSlice";

import type { NextPage } from "next";

import { useDispatch, useSelector } from "react-redux";
import CharacterList from "../components/CharacterList";

import Header from "../components/Header";

import { increment, decrement } from "../store/features/nextPageSlice";
import { RootState } from "../store";

const Home: NextPage = () => {
  const { count } = useSelector((state: RootState) => state.nextpage);
  const { isLoading } = characterApi.useGetCharacterQuery(count);

  const dispatch = useDispatch();

  function next() {
    dispatch(increment());
  }
  function prev() {
    dispatch(decrement());
  }

  return (
    <div>
      <Header />
      {isLoading ? <h1>Loading</h1> : <CharacterList />}

      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
    </div>
  );
};

export default Home;
