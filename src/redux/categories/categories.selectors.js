import { createSelector } from 'reselect'

export const selectCategories = state => state.categories

export const selectFeaturedCategories = createSelector(
    [selectCategories],
    categories => categories.featured
)
