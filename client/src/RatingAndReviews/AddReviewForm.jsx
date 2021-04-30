import React, { useState } from 'react';


const characteristics = {
  quality: {
    1: "poor",
    2: "below average",
    3: "what i expected",
    4: "pretty great",
    5: "perfect",
  },
  comfort: {
    1: "uncomfortable",
    2: "slightly uncomfortable",
    3: "ok",
    4: "comfortable",
    5: "perfect",
  },
  fit: {
    1: "runs tight",
    2: "runs slightly tight",
    3: "perfect",
    4: "runs slightly loose",
    5: "runs loose",
  },
  size: {
    1: "a size too small",
    2: "1/2 size too small",
    3: "perfect",
    4: "1/2 size too big",
    5: "a size too large",
  },
  width: {
    1: "too narrow",
    2: "slightly narrow",
    3: "perfect",
    4: "slightly wide",
    5: "too wide",
  },
  length: {
    1: "runs short",
    2: "runs slightly short",
    3: "perfect",
    4: "runs slightly long",
    5: "runs long",
  },
}

const AddReviewForm = () => {
  const [rating, setRating] = useState(null);
  const [ratingSelected, setRatingSelected] = useState(false)
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setCharacteristics] = useState(null);
  const [summary, setSummary] = useState(null);
  const [body, setBody] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  console.log('ratingSelected:', ratingSelected)

  const handleChange = (setFunc, e) => {
    setFunc(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    document.getElementById("add-review-form").reset();
    // create a function to make a post req to api
  };

  return (
    <form id="add-review-form" onSubmit={handleFormSubmit }>
      <h2>Product Review</h2>
      <div id="rating-select">
        <label>
          Overall Rating:
          <select onClick={() => setRatingSelected(true)} onChange={(e) => handleChange(setRating, e)} >
            <option value="null" disabled={ratingSelected}> Select an Option </option>
            <option value="poor"> 1 stars: Poor </option>
            <option value="fair"> 2 stars: Fair </option>
            <option value="average"> 3 stars: Average </option>
            <option value="good"> 4 stars: Good </option>
            <option value="great"> 5 stars: Great </option>
          </select>
        </label>
      </div>
      <br/>
      <div id="recommend-radio">
        Do you recommend this product?
        <label>
          <input
            type="radio"
            name="recommended-radio"
            value="yes"
            onChange={(e) => handleChange(setRecommend, e)}
          /> Yes
        </label>
        <label>
          <input
            type="radio"
            name="recommended-radio"
            value="no"
            onChange={(e) => handleChange(setRecommend, e)}
          /> No
        </label>
      </div>
      <br/>
      <div id="characteristics">

      </div>
      <br/>
      <div id="summary">
        Review Summary (caption): {" "}
        <input required type="text" placeholder="Example: Best purchase ever!" maxLength="60" onChange={(e) => handleChange(setSummary, e)} />
      </div>
      <br/>
      <div id="body">
        Enter your review here: {" "}
        <textarea required placeholder="Why did you like the product or not?" minLength="50" maxLength="1000" onChange={(e) => handleChange(setBody, e)} />
        <br/>
        (minimum required characters left: (#) / minimum reached)
      </div>
      <br/>
      <div id="nickname">
        What's your nickname? {" "}
        <input required type="text" placeholder="Example: nickName007" maxLength="60" onChange={(e) => handleChange(setNickname, e)} />
        <br/>
        (for privacy reasons, do not use your full name or email address)
      </div>
      <br/>
      <div id="email">
        Email Address:
        <input type="email" required placeholder="Example: somePerson@email.com" maxLength="60" onChange={(e) => handleChange(setEmail, e)} />
        <br/>
        (for authentication reasons, you will not be emailed)
      </div>
      <br />
      <br />
      <input type="submit" value="Submit Review" onClick={() => setRatingSelected(false)} />
    </form>

  );
};

export default AddReviewForm;

/*
rating (selector)
  1star=poor
  2star=fair
  3star=average
  4star=good
  5star=great
recommended (radio btn)
  yes/no
characteristics: (radio btns)
  size,
  width,
  length,
  comfort,
  quality,
  fit
review summary: (up to 60 chars)
review body: (50 - 1000chars)
  placeholder =  “why did you like the product or not?”
  counter:
    keep track of how many char left until:
      50min, 1000max
  *photoUpload - doubtful
username(nickname - up to 60 chars)
email
submit btn


*/