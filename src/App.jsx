import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import FeedbackContext from "./FeedbackContext";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import AboutIcon from "./components/AboutIcon";
import About from "./components/About";
import API_BASE_URL from "./config";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackInEdit, setFeedbackInEdit] = useState({
    item: {},
    edit: false,
  });

  // Fetches feedbacks when app component mounts
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Function for fetching feedbacks from the API
  async function fetchFeedbacks() {
    const response = await fetch(`${API_BASE_URL}/feedbacks`);
    const data = await response.json();
    setFeedbacks(data);
    setIsLoading(false);
  }

  // Adds a new feedback to the API and updates feedbacks state
  async function addFeedback(newFeedback) {
    const response = await fetch(`${API_BASE_URL}/feedbacks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();

    setFeedbacks([data, ...feedbacks]);
  }

  // Deletes a feedback from the API and update feedbacks state
  async function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      await fetch(`${API_BASE_URL}/feedbacks/${id}`, { method: "DELETE" });

      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  }

  // Sets a feedback in edit mode when it's clicked for editing
  function editFeedback(item) {
    setFeedbackInEdit({ item, edit: true });
  }

  // Updates an existing feedback in the API, updates feedbacks state and removes it from edit mode
  async function updateFeedback(editedItem) {
    const response = await fetch(`${API_BASE_URL}/feedbacks/${editedItem.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedItem),
    });
    const data = await response.json();

    setFeedbacks(feedbacks.map((item) => (item.id === data.id ? data : item)));
    setFeedbackInEdit({ item: {}, edit: false });
  }

  return (
    <FeedbackContext.Provider
      value={{
        isLoading,
        feedbacks,
        feedbackInEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="container">
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </div>
                <AboutIcon />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <div className="container">
                <About />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </FeedbackContext.Provider>
  );
}

export default App;
