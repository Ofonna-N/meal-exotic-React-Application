import { useReducer } from "react";

import CartContext from "./cart-context";

const ACTIONS =
{
    ADD: "add",
    REMOVE: "remove"
}

function cartReducer(state, action) {
    let mealIndex = undefined;
    // console.log(state.menu_items);
    let newMeal = undefined;
    let newItems = undefined;
    let newTotalAmount = undefined

    switch (action.type) {
        case ACTIONS.ADD:
            mealIndex = state.menu_items.findIndex(x => x.title === action.payload.item.title);
            if (mealIndex !== -1) {
                // console.log(`updating ${action.payload.item.title} in cart...`);
                newItems = [...state.menu_items];
                newMeal = newItems[mealIndex];
                newMeal.count += action.payload.count;
                newTotalAmount = state.total_amount + newMeal.price * action.payload.count;
                // return {newItems, newTotalAmount};
            }
            else {
                //console.log(`adding ${action.payload.item.title} to cart...`);
                newMeal = { ...action.payload.item, count: action.payload.count };
                newItems = [...state.menu_items, newMeal];
                newTotalAmount = state.total_amount + newMeal.price * action.payload.count;
                // console.log(newMeal);
                // console.log(newItems);
                // console.log(newTotalAmount);
            }
            return { menu_items: newItems, total_amount: newTotalAmount };

        case ACTIONS.REMOVE:
            mealIndex = state.menu_items.findIndex(x => x.id === action.payload.id);
            // console.log(`removing ${action.payload.id} ${mealIndex} from cart...`);

            if (state.menu_items[mealIndex].count > 1) 
            {
                // console.log(`updating ${action.payload.id} in cart...`);
                newItems = [...state.menu_items];
                newMeal = newItems[mealIndex];
                newMeal.count -= 1;
                newTotalAmount = state.total_amount - newMeal.price;
                
            }
            else 
            {
                newMeal = state.menu_items[mealIndex];
                newItems = state.menu_items.filter(x => x.id !== action.payload.id);
                newTotalAmount = state.total_amount - newMeal.price;
            }
            if(newTotalAmount <= 0)newTotalAmount = 0;
            return { menu_items: newItems, total_amount: newTotalAmount };
        default:
            break;
    }
    return state;
}


const CartContextProvider = ({ children }) => {
    const [{ menu_items, total_amount }, dispach] = useReducer(cartReducer,
        {
            menu_items:
                [
                    // {
                    //     id: Math.random(),
                    //     title:"Goat Leg Soup",
                    //     description:"Goat meat with steam broccoli soup",
                    //     price: 59.99
                    // },
                    // {
                    //     id: Math.random(),
                    //     title:"Frog Leg Soup",
                    //     description:"Goat meat with steam broccoli soup",
                    //     price: 99.99
                    // }
                ],
            total_amount: 0
        });


    const addItemHandler = (item, count) => {
        //console.log(count);
        // console.log(`Add ${count} ${item} Item`);

        dispach({ type: ACTIONS.ADD, payload: { item, count } });
    }

    const removeItemHandler = (id) => {
        // console.log("Remove Item");
        dispach({ type: ACTIONS.REMOVE, payload: { id } });
    }

    const cart =
    {
        items: menu_items,
        total_amount: total_amount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }


    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    );
}


export default CartContextProvider;