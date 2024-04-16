"use client";
import { data } from '@/app/utils/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function CategorySideBar(props) {
 const path=usePathname();
const categories = data?.products.map(product => (product.category));
const uniqueCategories = [...new Set(categories)];
uniqueCategories.push("all");
 console.log(path);
 return (
 <div class="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
  {uniqueCategories?.map(e=>(<button key={e} class="hover:border-b border-black block h-6 box-border mt-4">
         <Link href={`/category/${e}`} className={`${path===`/category/${e}`?"text-blue-500":"text-black-500"}`}>{e.charAt(0).toUpperCase() + e.slice(1)}</Link>
         </button>))}
      </div>
 );
}

export default CategorySideBar;