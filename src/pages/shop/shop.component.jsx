import React from 'react'
import SHOP_DATA from './shop.data'
import '../../components/viewCollection/view-collection.component'
import ViewCollection from '../../components/viewCollection/view-collection.component'


class ShopPage extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return (
        <div>
            {
                collections.map( ({id, ...otherCollectionProps }) => (
                    <ViewCollection key={id}  {...otherCollectionProps} ></ViewCollection>
                )
                )
            }
        </div>
        )
    }

}

export default ShopPage