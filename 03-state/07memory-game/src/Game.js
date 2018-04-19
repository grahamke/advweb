import React, { Component } from 'react';
import './Game.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clickCard(this.props.idx);
  }

  render() {
    let color = '#7E7D80';
    if(this.props.revealed) {
      color = this.props.color;
    }
    return (
      <div onClick={this.handleClick} className="card" style={{backgroundColor: color}}></div>
    );
  }
}

class Game extends Component {

  constructor(props) {
    super(props);

    this.clickCard = this.clickCard.bind(this);
    this.startNewGame = this.startNewGame.bind(this);

    this.startNewGame();
  }

  startNewGame() {
    const randColors = Array(this.props.numColors).fill().map(this.getRandomColor, this);
    const deck = [];
    randColors.forEach(function(val, idx, arr) {
      deck.push({color: randColors[idx], revealed: false});
      deck.push({color: randColors[idx], revealed: false});
    });
    // this.shuffle(deck);
    this.state = {
      deck,
      firstCard: null
    }
  }

  clickCard(idx) {
    if(this.state.deck[idx].revealed) {
      return;
    }
    if(this.state.firstCard === null) {
      console.log('slicking deck');
      const deck = this.state.deck.slice();
      deck[idx].revealed = true;
      this.setState({deck, firstCard: idx});
    }
    else {
      if(this.state.firstCard === idx) {
        return;
      }
      const deck = this.state.deck.slice();
      deck[idx].revealed = true;
      const matched = deck[idx].color === deck[this.state.firstCard].color;
      console.log('matched: ',matched);
      const fIdx = this.state.firstCard;
      this.setState({deck, firstCard: null});
      setTimeout(() => {
        console.log('matched: ',matched);
        if(!matched) {
          const deck = this.state.deck.slice();
          deck[idx].revealed = false;
          deck[fIdx].revealed = false;
          this.setState({deck})
        }
      }, 3000);
    }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }

  render() {

    const cards = this.state.deck.map((val, idx) => (
        <Card clickCard={this.clickCard} color={val.color} revealed={val.revealed} idx={idx} key={idx} />
    ));
    return (
      <div>
        <div className="board">
          { cards.filter((x, idx) => (idx < cards.length / 2 )) }
        </div>
        <div className="board">
          { cards.filter((x, idx) => (idx >= cards.length / 2 )) }
        </div>
      </div>
    );
  }
}

Game.defaultProps = {
  numColors: 8,
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default Game;
