import React from 'react';

const Brand = ({ brand }) => {
    return (
        <div>
            <img src={brand?.image} alt={brand?.title}></img>
        </div>
    );
};

export default Brand;