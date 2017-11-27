// actions

export const setShoppingItems = shopping_items => {
    return {
        type: 'SET_SHOPPING_ITEMS',
        shopping_items
    }
}

// reducers

let initialState = {
    shopping_items: []
};

const reducer = (state = initialState, action) => {
    let new_state = Object.assign({}, state);
    switch (action.type) {
        case 'SET_SHOPPING_ITEMS':
            new_state.shopping_items = action.shopping_items;
            return new_state;
        default:
            return state
    }
}

export default reducer;