import React from 'react';

const Product = (props) => {
   //console.log(props.product)
  // console.log(product?.img);

const {img} =props.product;



    return (
        <div>
<img src={img} alt=""></img>

        </div>
    );
};

export default Product;