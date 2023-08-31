import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {


    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );
    console.log(data)

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Crafted from luxurious fabrics, this dress features a flowing silhouette and intricate lace details, exuding grace and style.
                </p>
            </div>
            <div className="bottom">
                {error ? "Something went wrong" : (loading ? "loading..." : data.map((item) => <Card item={item} key={item.id} />))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
