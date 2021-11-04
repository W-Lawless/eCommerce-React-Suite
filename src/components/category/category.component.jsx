import React from "react";
import { connect } from 'react-redux'
import collectionItem from "../collectionItem/collectionItem.component";

import './category.style.scss'
import { selectProductCategory } from "../../redux/shop/shop.selectors";

const CategoryPage = ({ category }) => {
    console.log("THIS IS THE MATCH",category)
    return( <div className='category'>
        <h2>CATEGORY PAGE</h2>
    </div>)
}

const mapStateToProps = (state, ownProps) => ({
    category: selectProductCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage)