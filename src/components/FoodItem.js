
const FoodItem=({name,price})=>{
    
    return(
        <div className="w-56 h-96 p-2 m-2 shadow-lg bg-pink-50">
           
            <h2 className="font-bold text-xl">{name}</h2>
           <h4 className="font-bold">{price}</h4>


        </div>
    );
};

export default FoodItem;