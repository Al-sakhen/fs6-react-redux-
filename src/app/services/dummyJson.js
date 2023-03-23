import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dummyJson = createApi({
    reducerPath: 'dummyJson',
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
        }),
        updateProduct: builder.mutation({
            query: ({id , body}) =>({
                url: `/products/${id}`,
                method: 'PUT',
                body ,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
    })
})


export const { useGetProductsQuery , useUpdateProductMutation } = dummyJson