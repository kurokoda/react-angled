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
    'orientation': PropTypes.string.isRequired,
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
    const styles        = Section.getStyles();
    const {orientation} = this.props;

    return {
      container: css([styles.container, styles[orientation]]),
    };
  }

  // Static ------------------------------------------------------------------------------------------

  static getStyles = () => {
    return StyleSheet.create({
      container: {
        height         : '250px',
      },
      left: {
        backgroundColor: 'white',
      },
      left: {
        backgroundColor: 'grey',
      },
    });
  }
}

// Exports ------------------------------------------------------------------------------------------

export default Section;
