import React from 'react';

import Header from './components/Header/Header';

import Main from './components/Main/Main';

import Footer from './components/Footer/Footer';

import Features from './components/Features/Features';

// import Details from './components/Details/Details';

// import Calendar from './components/Calendar/Calendar';

import FetchData from './service/FetchData';

import './style.css';



class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
  };



  componentDidMount() {
    this.updateRocket();
  }


  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name) });

        return data
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({ rocketFeatures }));
  }

  render(){

    return (
      <React.Fragment>
      
        <Header rockets={this.state.rockets} />
    
        <Main  rocket={this.state.rocket} />
    
        <Features />
    
        <Footer />
      
    </React.Fragment>
    )
  }

}


export default App;
