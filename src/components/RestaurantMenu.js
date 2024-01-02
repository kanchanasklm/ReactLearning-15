
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { IMG_CDN_URL, restaurantMenu } from "./Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant"
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";



    
    const RestaurantMenu=()=>{
        const {resId} =useParams()
        const restaurant=useRestaurant(resId)
        const dispatch=useDispatch();   

        // const handleAddItem=()=>{
        //     dispatch(addItem("Grapes"))
        // }
        

        const addFoodItem=(item)=>{
            dispatch(addItem(item))
        }
        
        
        return(!restaurant)? <Shimmer/> :(
        <div className="flex">
        <div className="m-5">
        <h1>Restaurant id:{resId}</h1>
        <h2>{restaurant.name}</h2>
        <img className="w-56"src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
        <h2>{restaurant.area}</h2>
        <h2>{restaurant.city}</h2>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMessages}</h3>
        </div>
        {/* <div>
            <button 
            className="p-2 m-5 bg-green-100"
            onClick={()=>handleAddItem()}>AddItem</button>
        </div> */}
        <div>
            <h1>Menu</h1>
            <ul data-testid="menu">
                {restaurantMenu.map((item)=>(
                    <li 
                    key={item.id}>
                        {item.name}-{""}
                        <button
                        data-testid="addBtn" className="p-1 bg-green-50" onClick={()=>addFoodItem(item)}>Add</button></li>

                
        ))}
            </ul>
        </div>
        </div>
    )
}

export default RestaurantMenu;