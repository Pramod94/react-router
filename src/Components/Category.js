import React from 'react';
import { Link, Route, useRouteMatch, useParams } from 'react-router-dom';

const Item = () => {

    // Returns the params object
    console.log("useParams-------", useParams());

    const { name } = useParams();

    // return <div> Item : {name}</div>

    switch(name){
        case "shoes": return <div>Shoes component</div>
        case "boots": return <div>Boots component</div>
        case "slippers": return <div>Slippers component</div>
        default: return <div>Default</div>;
    }
}

const Category = () => {

    console.log("useRouteMatch-------", useRouteMatch());

    // url: a string that returns the matched portion of the URL.

    const { url, path } = useRouteMatch();

    return (
        <div>
            <h2>Category</h2>
            <ul>
                <li><Link to={`${url}/shoes`}>Shoes</Link></li>
                <li><Link to={`${url}/boots`}>Boots</Link></li>
                <li><Link to={`${url}/slippers`}>Slippers</Link></li>
            </ul>

        {/* Once the one of the above <Link> is clicked, :name in Route path catches everything after the path, 
        until it encounter another "/".
        The matched route path can be accessed using params object using useParams(). 
        */}

            <Route path={`${path}/:name`}>
                <Item />
            </Route>

        </div>
    );
}

export default Category;
