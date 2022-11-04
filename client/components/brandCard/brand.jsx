import React from 'react';

const Brand = ({ brand }) => {
    console.log(brand)
    return (
        <div>
            <img src={brand.attributes.avater.data.attributes.url} alt={brand?.attributes.name}></img>
            <p>{ brand.attributes.name }</p>
        </div>
    );
};

export default Brand;