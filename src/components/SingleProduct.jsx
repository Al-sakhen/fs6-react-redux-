import React from "react";

const SingleProduct = ({ product }) => {
    return (
        <div className="col-md-6 col-lg-4 mb-3">
            <div className="border rounded-4 p-2 text-center">
                <h4>{product.title}</h4>
                <p className="badge bg-secondary">{product.category}</p>
            </div>
        </div>
    );
};

export default SingleProduct;
