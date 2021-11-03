import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectFeaturedCategories } from '../../redux/categories/categories.selectors'
import { GridMenuItem } from '../menu-item/grid-menu-item.component'
import './grid-menu.style.scss'

const GridMenu = ({ featured }) => {
        return (
            <div className="grid-menu">
                {
                    featured.map( ( { id, ...values } ) => {
                        return <GridMenuItem key={ id } { ...values } />
                    })
                }
            </div>
        )    
}

const mapStateToProps = createStructuredSelector({
    featured: selectFeaturedCategories
})

export default connect(mapStateToProps)(GridMenu)