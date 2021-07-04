import React from 'react';
import ProductList from '../products.json';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import IndividualProduct from './IndividualProduct';

const Products = () => {

    const { url, path } = useRouteMatch();

    return (
        <div>
            <h2>Products</h2>

            {/* The component inside the below Route will be rendered only
             when the path exactly matches with the main route path.
            This can be helpfull if we want to render something during the initial render.
            It disappears when the path changes. i.e one of the product is selected. */}
            <Route exact path={path}>
                <h4>Please select a product</h4>
            </Route>


            <ul>
                {
                    ProductList.productData.map(ele => (
                        <li key={ele.id}><Link to={`${url}/${ele.id}`}>{ele.name}</Link></li>
                    ))
                }
            </ul>

            <Route path={`${path}/:productId`}>
                <IndividualProduct data={ProductList.productData} />
            </Route>
            
        </div>
    );
}

export default Products;
