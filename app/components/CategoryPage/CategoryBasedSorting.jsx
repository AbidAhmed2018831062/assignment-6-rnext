import { data } from '@/app/utils/data';
import React from 'react';
import Product from '../HomePage/Product';

function CategoryBasedSorting({categoryName}) {

 let categoryProducts=[];
  if(categoryName==="all")
  categoryProducts=data?.products;
 else
  categoryProducts=data?.products.filter(e=>e.category===categoryName);
 console.log(categoryProducts);
 return (
  <>
  {categoryProducts.length>0&&categoryProducts?.map(e=>(
    <Product product={e} key={e}/>
  ))}
  </>
 );
}

export default CategoryBasedSorting;