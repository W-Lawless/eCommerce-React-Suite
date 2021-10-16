import React from 'react';
import { GridMenuItem } from '../menu-item/grid-menu-item.component'
import './grid-menu.style.scss'

export class GridMenu extends React.Component {
    constructor(){
        super()
        this.state = {
        sections: [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats' 
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
            },
            {
                title: 'mens',
                imageUrl: '',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
            }
         ]
        }
    }

    render() {
        return (
            <div className="grid-menu">
                {
                    this.state.sections.map( ( { id, ...values } ) => {
                        return <GridMenuItem key={ id } { ...values } />
                    })
                }
            </div>
        )
    }
}