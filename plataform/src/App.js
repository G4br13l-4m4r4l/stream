import React, { Component } from 'react';
import Row from './components/row';
import categories from './api';
import './App.css'
import Banner from './components/Banner';

class App extends Component {
  render() {
    return (
      <div>
        {/*Navbar*/}
        {/*Destaque */}
        <Banner/>
        {categories.map((category)=>{
          return (<Row key={category.name} title={category.title} path={category.path} isLarge={category.isLarge} />);
        })}
        
      </div>
    );
  }
}

export default App;
