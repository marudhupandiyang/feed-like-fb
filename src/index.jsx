import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      data,
    } = this.props;

    debugger; // eslint-disable-line

    return (
      <div
        className="feed-container"
      >
        {
          map(data, section => (
            <div key={section}>
              {section}
            </div>))
        }
      </div>
    );
  }
}

Feed.propTypes = {
  data: PropTypes.typeof([]).isRequired,
};

export default Feed;
