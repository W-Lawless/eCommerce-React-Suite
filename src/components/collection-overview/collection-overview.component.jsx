import React from "react";
import './collection-overview.style.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import ViewCollection from "../viewCollection/view-collection.component";

import { selectProducts } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({products}) => (
    <div className='collections-overview'>
    {       
        products.map( ({id, ...otherCollectionProps }) => (
            <ViewCollection key={id}  {...otherCollectionProps} ></ViewCollection>
        ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    products: selectProducts
})

export default connect(mapStateToProps)(CollectionOverview)