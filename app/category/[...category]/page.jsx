import CategoryBasedSorting from '@/app/components/CategoryPage/CategoryBasedSorting';
import React from 'react';

function CategorySort({params }) {
 const {category}=params;
 return (
    <div class="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
        <CategoryBasedSorting categoryName={category[0]}/>
      </div>
 );
}

export default CategorySort;