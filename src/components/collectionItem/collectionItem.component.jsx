import React from 'react'
import { connect } from 'react-redux'
import './collectionItem.style.scss'

import Button from '../button/button.component'
import { addItem } from '../../redux/cart/cart.actions'

const collectionItem = ({ item, addItem}) => {

    const { name, price, imageUrl } = item 

    return (    <div className="collection-item">
        <div className="image"
        style={
            {
                backgroundImage: `url(${imageUrl})`
            }
        }
        />

        <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button invert onClick={() => addItem(item)}>Add To Cart</Button>
    </div>)

}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(collectionItem)