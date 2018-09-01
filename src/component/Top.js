// Imports ------------------------------------------------------------------------------------------

import {
  css,
  StyleSheet
} from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

// Class declaration ------------------------------------------------------------------------------------------

class Top extends Component {

  // Type validation ------------------------------------------------------------------------------------------

  static propTypes = {
    'foo': PropTypes.string,
  };

  // React lifecycle ------------------------------------------------------------------------------------------

  render() {

    const {classes} = this;

    return (
      <div className={classes.container}>
        Top
      </div>
    );
  }

  // Getters ------------------------------------------------------------------------------------------

  get classes() {
    const styles = Top.getStyles();

    return {
      container: css(styles.container),
    };
  }

  // Static ------------------------------------------------------------------------------------------

  static getStyles = () => {
    return StyleSheet.create({
      container: {
        backgroundColor: 'ryellowed',
        height         : '50px',
      },
    });
  }
}

// Exports ------------------------------------------------------------------------------------------

export default Top;
