import React from 'react'
import { Row, Col } from 'reactstrap';

function Category({categories})   {
    return(
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map((category) =>(
                    <li key={category.id}>
                        <Row>
                            <Col xs='1'>
                                <i className={category.icon}></i>
                            </Col>
                            <Col xs='3'>
                                <p>{category.title}</p>
                            </Col>
                        </Row>
                        
                    </li>
                    ) )}
            </ul>
        </div>
    )
}

export default Category;