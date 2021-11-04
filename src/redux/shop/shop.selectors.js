import { createSelector } from 'reselect'
import collectionItemComponent from '../../components/collectionItem/collectionItem.component'

const ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop 

export const selectProducts = createSelector(
    [selectShop],
    shop => shop.products
)

export const selectProductCategory = categorySought => createSelector(
    [selectProducts],
    category => category.find(item => item.id === ID_MAP[categorySought]) 
)
