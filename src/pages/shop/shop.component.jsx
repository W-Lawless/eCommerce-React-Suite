import React from 'react'
import '../../components/viewCollection/view-collection.component'
import ViewCollection from '../../components/viewCollection/view-collection.component'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectProducts } from '../../redux/shop/shop.selectors'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'

const ShopPage = ({ products }) => (
    <CollectionOverview />
)

const mapStateToProps = createStructuredSelector({
    products: selectProducts
})

export default connect(mapStateToProps)(ShopPage)