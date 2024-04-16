import SingleProduct from '@/app/components/SingleProduct/SingleProduct';
import { data } from '@/app/utils/data';
import React from 'react';

function SingleProductShow({params}) {
 const {id}=params;
 console.log(id);
 const product=data?.products?.find(e=>e.id===parseInt(id));
 return (
  <SingleProduct product={product}/>
 );
}

export default SingleProductShow;