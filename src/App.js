import React, {Component} from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Section from './component/Section';
import Top from './component/Top';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Top/>
        <Section/>
        <Section/>
        <Section final={true}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
