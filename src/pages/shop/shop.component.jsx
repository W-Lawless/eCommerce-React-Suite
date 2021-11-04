import React from 'react'
import { Route } from 'react-router-dom'
import '../../components/viewCollection/view-collection.component'

import ViewCollection from '../../components/viewCollection/view-collection.component'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectProducts } from '../../redux/shop/shop.selectors'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CategoryPage from '../../components/category/category.component'

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`}  component={CategoryPage} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    products: selectProducts
})

export default connect(mapStateToProps)(ShopPage)