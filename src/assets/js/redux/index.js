import _ from 'lodash';

// actions

export const setShoppingItems = shopping_items => {
    return {
        type: 'SET_SHOPPING_ITEMS',
        shopping_items
    }
}

export const appendShoppingItem = shopping_item => {
    return {
        type: 'APPEND_SHOPPING_ITEM',
        shopping_item
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
        case 'APPEND_SHOPPING_ITEM':
            new_state.shopping_items = _.concat(state.shopping_items, action.shopping_item);
            return new_state;
        default:
            return state
    }
}

export default reducer;