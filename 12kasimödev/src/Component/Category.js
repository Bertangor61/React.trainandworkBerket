import React from 'react'

function Categories({categories})   {
    return(
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map((category) =>(
                    <li key={category.id}>
                        <p>{category.title}</p>
                    </li>
                    ) )}
            </ul>
        </div>
    )
}

export default Category;