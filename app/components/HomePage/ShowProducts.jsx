import { data } from '@/app/utils/data';
import React from 'react';
import Product from './Product';

function ShowProducts() {
 console.log(data);
 return (
   <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
   {data?.products?.map(e=>{
    return <Product key={e} product={e}/>
   })}
  </div>
  </section>
 );
}

export default ShowProducts;