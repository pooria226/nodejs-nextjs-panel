import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useCookie } from "next-cookie";
const cookie = useCookie();

interface loginInterface {
  phone: string;
  password: string;
}
interface deleteUserInterface {
  id: string;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3003/api",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${cookie.get("user")}`);
      return headers;
    },
  }),
  tagTypes: ["USERS"],
  endpoints: (builder) => ({
    login: builder.mutation<any, loginInterface>({
      query: ({ phone, password }) => ({
        url: "/login",
        method: "POST",
        body: { phone, password },
      }),
    }),
    getUsers: builder.query<any, void>({
      query: () => `/users/`,
      providesTags: () => ["USERS"],
    }),
    deleteUser: builder.mutation<any, deleteUserInterface>({
      query: ({ id }) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["USERS"],
    }),
  }),
});

export const { useLoginMutation, useGetUsersQuery, useDeleteUserMutation } =
  api;
