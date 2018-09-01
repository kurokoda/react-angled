// Imports ------------------------------------------------------------------------------------------

import {
  css,
  StyleSheet
} from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

// Class declaration ------------------------------------------------------------------------------------------

class Header extends Component {

  // Type validation ------------------------------------------------------------------------------------------

  static propTypes = {
    'foo': PropTypes.string,
  };

  // React lifecycle ------------------------------------------------------------------------------------------

  render() {

    const {classes} = this;

    return (
      <div className={classes.container}>
        Header
      </div>
    );
  }

  // Getters ------------------------------------------------------------------------------------------

  get classes() {
    const styles = Header.getStyles();

    return {
      container: css(styles.container),
    };
  }

  // Static ------------------------------------------------------------------------------------------

  static getStyles = () => {
    return StyleSheet.create({
      container: {
        backgroundColor: 'blue',
        height         : '50px',
      },
    });
  }
}

// Exports ------------------------------------------------------------------------------------------

export default Header;
