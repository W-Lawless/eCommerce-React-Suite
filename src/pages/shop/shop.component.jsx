import React from 'react'
import SHOP_DATA from './shop.data'
import '../../components/viewCollection/view-collection.component'
import ViewCollection from '../../components/viewCollection/view-collection.component'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectProducts } from '../../redux/shop/shop.selectors'

const ShopPage = ({ products }) => (
        <div>
            {
                products.map( ({id, ...otherCollectionProps }) => (
                    <ViewCollection key={id}  {...otherCollectionProps} ></ViewCollection>
                )
                )
            }
        </div>
)

const mapStateToProps = createStructuredSelector(
    {
        products: selectProducts
    }
)

export default connect(mapStateToProps)(ShopPage)