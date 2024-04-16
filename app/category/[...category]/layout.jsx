
import CategorySideBar from '@/app/components/Header/CategorySideBar';
import React from 'react';

function CategoryLayout({children}) {
 return (
      <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
      <CategorySideBar/>
      {children}
 </section>
 );
}

export default CategoryLayout;