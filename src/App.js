import React, {Component} from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Section from './component/Section';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Section orientation='top'/>
        <Section orientation='left'/>
        <Section orientation='right'/>
        <Section orientation='left'/>
        <Section orientation='bottom'/>
        <Footer/>
      </div>
    );
  }
}

export default App;
