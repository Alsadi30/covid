import React from 'react';

const BrandStyle = ({ brand }) => {
    return (
        <div>
            <img src={brand?.image} alt={brand?.title}></img>
        </div>
    );
};

export default BrandStyle;