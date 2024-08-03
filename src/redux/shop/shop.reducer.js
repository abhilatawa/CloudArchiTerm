import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA || [] // Ensure it's an array
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            console.log(SHOP_DATA)
            return state;
    }
};

export default shopReducer;