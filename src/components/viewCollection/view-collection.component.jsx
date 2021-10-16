import React from 'react'
import CollectionItem from '../collectionItem/collectionItem.component'
import './view-component.style.scss'

const viewCollection = ( { title, items } ) => {
    return (<div className="collection">
        <h1 className="title"> { title.toUpperCase() } </h1>
        <div className="body">
            {
                items
                .filter((item,idx) => idx < 4)
                .map(({id, ...itemProps}) => (
                     
                    <CollectionItem key={id} {...itemProps} >  </CollectionItem>
                
                    )
                ) 
            }
        </div>
    </div>)
}

export default viewCollection