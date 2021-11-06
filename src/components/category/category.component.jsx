import React from "react";
import { connect } from 'react-redux'
import collectionItem from "../collectionItem/collectionItem.component";

import './category.style.scss'
import CollectionItem from '../collectionItem/collectionItem.component'

import { selectProductCategory } from "../../redux/shop/shop.selectors";
import { selectProducts } from "../../redux/shop/shop.selectors";

const CategoryPage = ({ category }) => {
    console.log("THIS IS THE MATCH",category)
    return( <div className='collection-page'>
        <h2>{category.title}</h2>
        <div className='items'>{       
            category.items.map( (item) => (
                <CollectionItem key={item.id}  item={item} ></CollectionItem  >
            ))
        }</div>
    </div>)
}


const mapStateToProps = (state, ownProps) => ({
    category: selectProductCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage)