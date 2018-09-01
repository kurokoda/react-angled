// Imports ------------------------------------------------------------------------------------------

import {
  css,
  StyleSheet
} from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

// Class declaration ------------------------------------------------------------------------------------------

class Section extends Component {

  // Type validation ------------------------------------------------------------------------------------------

  static propTypes = {
    'final': PropTypes.bool,
  };

  // React lifecycle ------------------------------------------------------------------------------------------

  render() {

    const {classes} = this;

    return (
      <div className={classes.container}>
        Section
      </div>
    );
  }

  // Getters ------------------------------------------------------------------------------------------

  get classes() {
    const styles = Section.getStyles();

    return {
      container: css(styles.container),
    };
  }

  // Static ------------------------------------------------------------------------------------------

  static getStyles = () => {
    return StyleSheet.create({
      container: {
        backgroundColor: 'green',
        height         : '50px',
      },
    });
  }
}

// Exports ------------------------------------------------------------------------------------------

export default Section;
