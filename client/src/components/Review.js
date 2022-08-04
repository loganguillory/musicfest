import React from "react";
import "../App.css";
import ReviewCards from "./ReviewCards";

function Review({ array }) {
  // console.log(Object.values(array.reviews))

  const showReviews = array.map((review) => {
    
   return review.reviews
  });


const showComments = showReviews.map(item =>{
  console.log(item)
  item.map(comment =>{
    console.log(comment)
    return comment  
   
})

})





  return (
    <div>
      <div className="Reviews">{showComments}</div>
    </div>
  );
}

export default Review;
