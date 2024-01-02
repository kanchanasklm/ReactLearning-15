

import "@testing-library/jest-dom";
import { render ,waitFor,fireEvent } from "@testing-library/react";

import Header from "../header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";
import { MENU_DATA } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
      json:()=>{
        return   Promise.resolve(RESTAURANT_DATA);
        },

    });
});

test("Add Item to cart", async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
        <RestaurantMenu/>
        </Provider>
        </StaticRouter>
    );

    await waitFor(()=>expect(body.getByTestId("menu")));

    const addBtn=body.getByTestId("addBtn");

    

   
    fireEvent.click(addBtn[0]);
    const cart=body.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart-1 items");

   
});