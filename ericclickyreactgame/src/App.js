import React, { Component } from 'react';
import './App.css';
import Gameboard from './components/Gameboard';
import Head from './components/Head';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer'
import buttonImages from './utils/buttonImages.json';

class App extends Component {

  state = {
    count: 0,
    highscore: 0,
    messeage: "Click any image to begin!",
    buttonImages
  }

  gameOver = () => {
    if (this.state.count > this.state.highscore) {
      this.setState({highscore: this.state.count}, () => {
        console.log(this.state.highscore);
      });
    }
    this.state.buttonImages.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.count}`);
    this.setState({count: 0});
    return true;
  }
  
  clickCount = id => {
    this.state.buttonImages.find((object, index) => {
      if (object.id === id) {
        if(buttonImages[index].count === 0){
          buttonImages[index].count = buttonImages[index].count + 1;
          this.setState({count : this.state.count + 1, messeage: "Correct!" }, () => {
            console.log(this.state.count);
          });
          this.state.buttonImages.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
          this.setState({messeage: "Incorrect!"})
        }
      }
    });
  }

  componentWillMount () {
    this.state.buttonImages.sort(() => Math.random() - 0.5)
  };

  render() {
    console.log(this);
    return (
      <Wrapper>
        <header>
          <Head score={this.state.count} highscore={this.state.highscore}>{this.state.messeage}</Head>
        </header>
        
        <main>
          <Gameboard buttonImages={buttonImages} clickCount={this.clickCount} />
        </main>

        <footer className="page-footer">
          <Footer />
        </footer>
      </Wrapper>
    );
  }
}

export default App;
