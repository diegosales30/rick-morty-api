/* eslint-disable react-hooks/rules-of-hooks */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

const characterApi = createApi({
  reducerPath: "character",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query<Character, number>({
      query: (count) => `/character/?page=${count}`,
    }),
  }),
});

export default characterApi;
