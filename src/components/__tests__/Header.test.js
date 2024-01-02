import { render } from "@testing-library/react"
import Header from "../header"
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("Logo should load on rendering header",()=>{

    //load header
    const header=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                </Provider>
        </StaticRouter>
    
    );
    //check if logo is loaded 
    console.log(header);
    const logo=header.getAllByTestId("logo");
    console.log(logo[0])
    // expect(logo.props).toBe("dummyLogo.png");
    // expect(logo.innerHTML).toBe("dummyLogo.png");
    // expect(logo.children).toBe("dummyLogo.png");
    expect(logo[0].src).toBe("http://localhost/dummy.png");
});


test("online status should be grren on rendering header",()=>{

//     //load header
    const header=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                </Provider>
        </StaticRouter>
    
    )
   //check if  
    const onlineStatus=header.getByTestId("online-status");
    

    expect(onlineStatus.innerHTML).toBe("✅");
});

test("cart should load on rendering header",()=>{

    //load header
    const header=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                </Provider>
        </StaticRouter>
    
    )
    
    const cart=header.getByTestId("cart");
    

    expect(cart.innerHTML).toBe("Cart-0");
});