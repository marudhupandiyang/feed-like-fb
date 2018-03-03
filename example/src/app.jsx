import React from 'react';

import Feed from 'react-feeds';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      data,
    } = this.state;

    return (
      <div>
        <Feed
          data={data}
        />
      </div>);
  }
}


export default App;
