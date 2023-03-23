import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";

const Products = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(`https://dummyjson.com/products`);
        setProducts(data.products);
        console.log(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
        <h2 className="text-center py-3">Products</h2>
            <div className="row">
                {products.length > 0
                    ? products.map((product) => (
                          <SingleProduct key={product.id} product={product} />
                      ))
                    : "loading..."}
            </div>
        </div>
    );
};

export default Products;
