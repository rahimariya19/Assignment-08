import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (



          <div>
              {categories.map(category => (
                <Link key={category.category} to='./cards'><button className='text-lg font-medium text-[#09080F99] rounded-full p-2 m-2 bg-[#09080F0D]'>{category.category}</button>
                </Link>
            ))}

          </div>

    );
};

export default Categories;