import "@testing-library/jest-dom";
import { render ,waitFor,fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
      json:()=>{
        return   Promise.resolve(RESTAURANT_DATA);
        },

    });
});

test("Shimmer load  on Homepage",()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
        <Body/>
        </Provider>
        </StaticRouter>
    );
   const shimmer=body.getByTestId("shimmer");
//    const shimmer=body.getByTestId("shimmer-ui");
  
//    expect(shimmer).toBeInTheDocument();
// expect(shimmer.innerHTML).toBeInTheDocument();
// expect(shimmer.children).toBeInTheDocument();
expect(shimmer.children.length).toBe(10);
   console.log(shimmer) ;


});


test("Restaurants should load on Homepage", async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
        <Body/>
        </Provider>
        </StaticRouter>
    );

    await waitFor(()=>expect(body.getByTestId("search")));

    const resList=body.getByTestId("res-list");

    expect(resList.children.length).toBe(10);

   
});


test("Search for string(food) on Homepage", async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
        <Body/>
        </Provider>
        </StaticRouter>
    );

    await waitFor(()=>expect(body.getByTestId("search")));

    const input=body.getByTestId("search-input");

    fireEvent.change(input,{
        target:{
            value:"food",
        },
    });

    const searchBtn=body.getByTestId("search");
    fireEvent.click(searchBtn);
    const resList=body.getByTestId("res-list");

    expect(resList.children).toBe(10);

   
});