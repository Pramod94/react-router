import React from 'react';
import { useParams } from 'react-router-dom';


const IndividualProduct = ({ data }) => {
    const { productId } = useParams();
    let product = data.find(ele => ele.id === Number(productId));
    let productData;

    if (product) {
        productData = <div>
            <div>Name : {product.name}</div>
            <div>Description : {product.description}</div>
            <div>Status : {product.status}</div>
        </div>
    } else {
        productData = <div>Product not found</div>
    }

    return (
        <div>
            {productData}
        </div>
    )
}

export default IndividualProduct;
