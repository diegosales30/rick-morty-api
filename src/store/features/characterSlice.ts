/* eslint-disable react-hooks/rules-of-hooks */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

type Character = {
  results: [
    {
      id: number;
      name: string;
      image: string;
      status: string;
      species: string;
      gender: string;
    }
  ];
};

//const { count } = useSelector((state: RootState) => state.nextpage);

const characterApi = createApi({
  reducerPath: "character",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query<Character, void>({
      query: () => `/character/?page=${1}`,
    }),
  }),
});

export default characterApi;
