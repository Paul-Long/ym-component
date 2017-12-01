import React from 'react';
import PropTypes from 'prop-types';

class BaseProps extends React.Component {
  static propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
  }
}
export default BaseProps;
