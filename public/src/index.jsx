import React from 'react';
import ReactDOM from 'react-dom';
import sampleSite from '../sampleData/sampleSite';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(sampleSite);
    return (
      <div>
        <h1>Booking Calendar</h1>
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('app'));