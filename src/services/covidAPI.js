import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import axios from "axios";

export const covidAPI = createApi({
    reducerPath: 'covidAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://covidnigeria.herokuapp.com/api"
    }),
    endpoints: (builder) => ({
        fetchData: builder.query({
            query: () => ''
        })
    })
})

export const { useFetchDataQuery } = covidAPI