import React from 'react';
import ReactDOM from 'react-dom';
import QnAParentComp from './qaComponents/QnAParentComp';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      test: 'test',
    };
  }

  render() {
    const { test } = this.state;
    return (
      <div>
        Booya. I am the App.
        <QnAParentComp stateTest={test} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
