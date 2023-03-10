import { useContext } from "react";
import FeedbackContext from "../FeedbackContext";

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);

  // Calculates the average rating based on the feedbacks array
  let average =
    feedbacks.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedbacks.length;

  // Rounds the average rating to one decimal place
  average = Math.round(average * 10) / 10;

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
