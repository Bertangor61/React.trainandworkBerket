import React from 'react'
import { Row } from 'reactstrap';

function Product({products,addInCard})  {
    return(
        <Row>
            {products.map((product)=>(
                <div key={product.id} className='col-4 border p-3'>
                    <h2>Product</h2>
                    <p>Product Name: {product.name}</p>
                    <p>Price: {product.price}₺</p>
                    <button onClick={()=>   addInCard(product)}>Add to Basket</button>
                </div>
            ))}
        </Row>
    )
}


export default Product;