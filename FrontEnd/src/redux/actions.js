export const showCategories = (data) => {
    return {
        type: 'categories/show',
        payload: data,
    }
}
export const searchCategoriesChange = (text) => {
    return {
        type: 'categories/search',
        payload: text,
    }
}