import Link from 'next/link';
import React from 'react';

function Category({product}) {
 console.log(product);
 return (
   <span class="text-[#919090] my-3 block"><Link href={`/category/${product?.category}`}>
    {product?.category?.charAt(0).toUpperCase() + product?.category?.slice(1)}
    </Link> 
    </span>
 );
}

export default Category;