const cartReducerDefaultState = [];

const cartReducer = (state = cartReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state, action.item];
        case 'ADD_QUANTITY':
            return state.map((item) => {
                if(item.dbId === action.dbId) {
                    return {
                        ...item,
                        quantity: action.quantity
                    }
                }
                return item;
            });
        case 'REMOVE_QUANTITY':
            return state.map((item) => {
                if(item.dbId === action.dbId) {
                    return {
                        ...item,
                        quantity: action.quantity
                    }
                }
                return item;
            });
        case 'REMOVE_ITEM':
            return state.filter((item) => {
                return item.dbId !== action.dbId
            })
        case 'SET_ITEM':
            return action.items
        default:
            return state;
    }
}

export default cartReducer;