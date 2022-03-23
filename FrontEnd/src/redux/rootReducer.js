
const initState = {
    categories: {
        list: [],
        search: '',
    },
    signIn: {
        data: [],
    }
}
const rootReducer = (state = initState, action) => {
    console.log({ state, action });
    switch (action.type) {
        case 'categories/show':
            return {
                ...state,
                categories: {
                    ...state.categories,
                    list: action.payload,

                }
            }
        case 'categories/search':
            return {
                ...state,
                categories: {
                    ...state.categories,
                    search: action.payload,
                }
            }
        case 'signIn/request':
            return {
                ...state,
                isLoading: true
            }
        case 'signIn/success':
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case 'signIn/failure':
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}
export default rootReducer;