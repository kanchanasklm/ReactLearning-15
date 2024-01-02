
export function filterData(searchTxt,restaurants){
    const filterData=restaurants.filter((restaurant)=>
     restaurant?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
     );
     return filterData;
 }
