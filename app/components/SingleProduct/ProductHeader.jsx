/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';

function ProductHeader({product}) {
  const [currentImage,setCurrentImage]=useState(product?.thumbnail);
  const handleImageClick=(e)=>{
    setCurrentImage(e);
  }
  return (
      <div class="w-full lg:w-7/12 border border-slate-500/20 p-4">
          <img src={currentImage} class="w-[400px] h-[500px] mx-auto object-cover" alt="" />

          <div class="flex gap-4 mt-4">
            <img src={product?.thumbnail} onClick={()=>handleImageClick(product?.thumbnail)} class="w-[100px] h-[100px] mx-auto border object-cover cursor-pointer" alt="" />
            {product?.images.map(e=>(
            <img key={e} src={e} onClick={()=>handleImageClick(e)}class="w-[100px] h-[100px] mx-auto border object-cover cursor-pointer" alt="" />

            ))}
          
          </div>
        </div>
  );
}

export default ProductHeader;