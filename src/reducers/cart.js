const cartReducerDefaultState = [];

const cartReducer = (state = cartReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state, action.item];
        case 'ADD_QUANTITY':
            return state.map((item) => {
                if(item.id === action.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            });
        case 'REMOVE_QUANTITY':
            return state.map((item) => {
                if(item.id === action.id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                return item;
            });
        case 'REMOVE_ITEM':
            return state.filter((item) => {
                return item.id !== action.id
            })
        default:
            return state;
    }
}

export default cartReducer;