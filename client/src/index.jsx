import React from 'react';
import ReactDOM from 'react-dom';
import RatingsAndReviewsService from './/RatingAndReviews/RatingsAndReviewsService.jsx';

class App extends React.Component {

  render() {

    return (

      <div>
        <h1>Cats Walking</h1>
        <div>Product</div>
        <div>Overview</div>
        <div>Module</div>
        <div>Goes</div>
        <div>Up</div>
        <div>HERE!!!</div>
        <RatingsAndReviewsService />
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
