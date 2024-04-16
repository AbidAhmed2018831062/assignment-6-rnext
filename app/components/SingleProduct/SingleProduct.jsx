/* eslint-disable @next/next/no-img-element */
import images from '@/app/constants/images';
import Image from 'next/image';
import React from 'react';
import Rating from './Rating';
import ProductHeader from './ProductHeader';
import ProductDesc from './ProductDesc';
import Category from '../common/Category';

function SingleProduct({product}) {
 return (
   <section class="bg-[#fafaf2] h-full py-20">
      <div class="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
      <ProductHeader product={product}/>
        <div class="w-full lg:w-5/12">
          <h1 class="italic text-xl lg:text-3xl font-serif font-semibold">{product.title}</h1>
          <Category product={product}/>
          <Rating product={product}/>
          <hr class="my-5 bg-black" />
        <ProductDesc product={product}/>
        </div>
      </div>
    </section>
 );
}

export default SingleProduct;