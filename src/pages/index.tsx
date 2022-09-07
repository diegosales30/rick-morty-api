/* eslint-disable @next/next/no-img-element */

import type { NextPage } from "next";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "../components/Header";
import characterApi from "../store/features/characterSlice";
import { increment, decrement } from "../store/features/nextPageSlice";

import { useSelector } from "react-redux";
import { RootState } from "../store";

const Home: NextPage = () => {
  const { count } = useSelector((state: RootState) => state.nextpage);
  const { data, isLoading } = characterApi.useGetCharacterQuery(count);
  const character = data?.results;

  console.log("teste " + count);

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

      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
    </div>
  );
};

export default Home;
