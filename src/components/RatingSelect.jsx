function RatingSelect({ rating, setRating }) {
  // Updates the rating state when the user selects a new rating.
  function handleRatingChange(e) {
    const newRating = +e.currentTarget.value;
    setRating(newRating);
  }

  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          name="rating"
          id="num1"
          value="1"
          onChange={handleRatingChange}
          checked={rating === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num2"
          value="2"
          onChange={handleRatingChange}
          checked={rating === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num3"
          value="3"
          onChange={handleRatingChange}
          checked={rating === 3}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num4"
          value="4"
          onChange={handleRatingChange}
          checked={rating === 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value="5"
          onChange={handleRatingChange}
          checked={rating === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num6"
          value="6"
          onChange={handleRatingChange}
          checked={rating === 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num7"
          value="7"
          onChange={handleRatingChange}
          checked={rating === 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num8"
          value="8"
          onChange={handleRatingChange}
          checked={rating === 8}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num9"
          value="9"
          onChange={handleRatingChange}
          checked={rating === 9}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num10"
          value="10"
          onChange={handleRatingChange}
          checked={rating === 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
