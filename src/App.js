import React, { Component } from 'react';  
import Header from './components/header';
import Section from './components/Product';
import Footer from './components/Footer';
class App extends Component {  
  render() {  
    return (  
      <div>  
        <Header />
        <Section />
        <Footer />
      </div>  
    )  
  }  
}  
export default App;
