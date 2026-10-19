import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const groceriesApi = createApi({
    reducerPath: 'groceriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getGroceries: builder.query({
            query: () => 'products/category/groceries?limit=0',
            transformResponse: (response) => response.products.map((product) => ({
                id: product.id,
                title: product.title,
                description: product.description,
                categoryLabel: product.tags?.[0] ?? product.category,
                price: product.price,
                image: product.images[0],
            })),
        }),
    }),
});

export const { useGetGroceriesQuery } = groceriesApi;
