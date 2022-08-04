import React from "react";
import '../App.css'



function Review({ListofReviews}) {

  const inventoryItems = inventory.map(item => {
    return <InventoryItemCard key={item.id} 
                              item={item} 
                              onCardClicked={onAddItemToReorder}
                              onDelete={onDelete} />
    return (
        <div className="Reviews">
          <h1> helloooo </h1>
           {/* {showList.reviews} */}
        </div>
    )
  }
  
export default Review;

