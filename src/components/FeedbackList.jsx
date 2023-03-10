import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";

function FeedbackList() {
  const { isLoading, feedbacks } = useContext(FeedbackContext);

  // Shows this if loading has finished and there is no feedback at all
  if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
    return <p className="empty-list">No feedback yet!</p>;
  }

  // Creates an array of feedback items with fading animation using the motion library
  const feedbackItems = feedbacks.map((item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <FeedbackItem item={item} />
    </motion.div>
  ));

  // Shows spinner if feedbacks are still loading, otherwise displays them with animation
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>{feedbackItems}</AnimatePresence>
    </div>
  );
}

export default FeedbackList;
