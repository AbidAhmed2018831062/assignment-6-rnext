import images from '@/app/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Category from '../common/Category';

function Product({product}) {
  const discountedPrice=parseFloat(product?.price)-(parseFloat(product?.price)*product?.discountPercentage/100)
console.log(product?.thumbnail)
 return (
    <div>
          <div>
{             // eslint-disable-next-line @next/next/no-img-element
}             <img src={product?.thumbnail} className='relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8 bg-cover bg-center transition-all duration-3000 ease-in-out transform' alt="Product Thumbnail"/>
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <Link className="text-base font-bold" href={`/products/${product?.id}`}>
           {product?.title}
            </Link>
             <Category product={product}/>
          </h2>
          <p className="text-[#919090] text-sm ">{product?.description}</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">${product.price}</span> ${discountedPrice}</p>
        </div>
 );
}

export default Product;