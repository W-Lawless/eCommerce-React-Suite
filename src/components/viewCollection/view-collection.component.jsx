import React from 'react'
import CollectionItem from '../collectionItem/collectionItem.component'
import './view-component.style.scss'

const viewCollection = ( { title, items } ) => {
    return (<div className="collection">
        <h1 className="title"> { title } </h1>
        <div className="body">
            {
                items
                .filter((item,idx) => idx < 4)
                .map((item) => (
                     
                    <CollectionItem key={item.id} item={item} >  </CollectionItem>
                
                    )
                ) 
            }
        </div>
    </div>)
}

export default viewCollection