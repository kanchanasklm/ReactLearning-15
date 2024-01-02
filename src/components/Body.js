
import { restaurantList } from "./Constants";

import { RestaurantCard } from "./RestaurantCard";

import { useState,useEffect,useContext } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import {filterData} from "../utils/helper";

import useOnline from "../utils/useOnline";

import UserContext from "../utils/userContext";



const Body=()=>{

    const[searchTxt,setSearchTxt]=useState("KFC")
    const[allRestaurants,setAllRestaurants]=useState([])
    const[filteredRestaurants,setFilteredRestaurants]=useState([])
    const{user,setUser}=useContext(UserContext)
    

    
    
    useEffect(()=>{
        getRestaurants();

    },[]);

    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log("render")

    
const isOnline=useOnline()



if(!isOnline){
       return <h1>Offline,Please check your network connection</h1>
    }

if(!allRestaurants) return null;




    return (allRestaurants?.length===0)? (<Shimmer/>) :(
        <>
        <div className="p-5 bg-pink-200 my-5">
            <input 
            data-testid="search-input" 
            type="search" 
                   className="search-input focus:bg-green-50  m-2 p-2"
                   placeholder="search"
                   value={searchTxt}
                   onChange={(e)=>{
                    setSearchTxt(e.target.value)
                   }}/>
           
            <button 
            data-testid="search"
            className="p-2 m-2 bg-purple-500 hover:bg-gray-500 text-white rounded-md"
            onClick={()=>{
                const data=filterData(searchTxt,allRestaurants)
                console.log(data)
                setFilteredRestaurants(data)
                } }>Search</button>

                <input 
                value={user.name} 
                onChange={e=>setUser({
                   
                    name:e.target.value,
                    
                })
            }></input>
           
           

<input 
                value={user.email} 
                onChange={e=>setUser({

                    
                    email:e.target.value,
                })
            }></input>
                </div>
       
        <div className="flex flex-wrap" data-testid="res-list">
           {filteredRestaurants.map((restaurant)=>{
            return(
                <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
             <RestaurantCard {...restaurant.info} />
             </Link>
            )
           })}
       
       </div>
       </>
    );
};

export default Body;
