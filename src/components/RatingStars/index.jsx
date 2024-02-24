import { Rating } from 'react-simple-star-rating';
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";

export function RatingStars({size = 20, ...rest}) {
  return(
    <Rating
      fillColorArray={["#FF859B", "#FF859B", "#FF859B", "#FF859B", "#FF859B" ]}
      emptyIcon={ <IoStarOutline color="#FF859B" size={size} /> }
      fillIcon={ <IoStarSharp size={size} /> }
      {...rest}
    />
  )
}