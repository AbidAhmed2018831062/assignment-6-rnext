import React from 'react';

function ProductDesc({product}) {
   const discountedPrice=parseFloat(product?.price)-(parseFloat(product?.price)*product?.discountPercentage/100)

 return (
     <div>
            <p class="leading-7">
              {product?.description}
            </p>

            <button class="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
              Add To Cart - ${discountedPrice}
            </button>
          </div>
 );
}

export default ProductDesc;