import React from 'react';

function ProductPrice({product}) {
  const discountedPrice=parseFloat(product?.price)-(parseFloat(product?.price)*product?.discountPercentage/100)

 return (
   <div>
            <p class="my-3">
              <span class="text-rose-600 opacity-60 line-through">${product.price}</span>
              <span class="font-bold text-2xl">${discountedPrice}</span>
            </p>
          </div>
 );
}

export default ProductPrice;