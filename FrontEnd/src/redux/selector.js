export const listCategoriesSelector = (state)=> {
    const listCategories = state.categories.list.filter((list)=>{
        return list.name.includes(state.categories.search);
    });
    return listCategories;
};
export const searchCategoriesSelector = (state)=> state.categories.search;
