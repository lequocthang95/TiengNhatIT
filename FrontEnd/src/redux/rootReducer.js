
const initState = {
    vocabularies: {
        showVocabularies: [],
        search: '',
    },
    categories: {
        list: [],
        search: '',
    }
}
const rootReducer = (state = initState, action) => {
    console.log({state, action});
    switch (action.type) {
        case 'categories/show':
            return {
                ...state,
                categories:{
                    ...state.categories,
                    list: action.payload,

                }               
            }
        case 'categories/search':
            return  {
                ...state,
                categories:{
                    ...state.categories,
                    search: action.payload,
                }                 
            }
        default:
            return state;
    }
}
export default rootReducer;