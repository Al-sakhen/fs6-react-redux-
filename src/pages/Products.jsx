import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    useGetProductsQuery,
    useUpdateProductMutation,
} from "../app/services/dummyJson";
import SingleProduct from "../components/SingleProduct";

const Products = () => {
    // const [products, setProducts] = useState([]);

    // const getData = async () => {
    //     const { data } = await axios.get(`https://dummyjson.com/products`);
    //     setProducts(data.products);
    // };

    // useEffect(() => {
    //     getData();
    // }, []);

    const { data, isLoading } = useGetProductsQuery();

    const [updateProduct, { data: updatedProductData, isLoading: isUpdating }] =
        useUpdateProductMutation();

    console.log({ updatedProductData, isUpdating });

    return (
        <div className="container">
            <h2 className="text-center py-3">Products</h2>
            <button
                className="d-block my-5 mx-auto"
                onClick={() => updateProduct({ id : 1 , body : { title : 'New product name'} })}
            >
                updateProduct
            </button>
            <div className="row">
                {!isLoading
                    ? data.products.map((product) => (
                          <SingleProduct key={product.id} product={product} />
                      ))
                    : "loading..."}
            </div>
        </div>
    );
};

export default Products;
