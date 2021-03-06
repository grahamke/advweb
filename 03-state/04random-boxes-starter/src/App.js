import React, { Component } from 'react';
import './App.css';

const NUM_BOXES = 32;

const Box = ({color}) => {
    // const {color,idx} = props;
    // let dims = {
    //   width: '12%',
    //   height: '120px'
    // };
    // dims = {...dims, backgroundColor:color};
    // return (
    //   <div key={idx} style={dims}></div>
    // );
    const style = {
      width: '180px',
      height: '180px',
      display: 'inline-block',
      backgroundColor: color
    }
    return <div style={style} />;
}

class App extends Component {

  constructor(props) {
    super(props);
    const colors = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    this.state = {colors};

    setInterval(() => {
      const colors = this.state.colors.slice();
      const idx = Math.floor(Math.random() * colors.length);
      colors[idx] = this.getRandomColor();
      this.setState({colors});
    }, 300);
    // let colors = []
    // for( let i = 0; i < NUM_BOXES; ++i) {
    //   let index = Math.floor(Math.random() * this.props.allColors.length);
    //   colors.push(this.props.allColors[index]);
    // }
    // this.state = { colors: colors }
    //
    // setInterval(() => {
    //   const newColor = this.getRandomColor();
    //   const colorToChange = Math.floor(Math.random() * this.state.colors.length);
    //   const colors = this.state.colors.map((color, idx) => {
    //     if(idx === colorToChange) {
    //       return this.getRandomColor();
    //     }
    //     return color;
    //   });
    //   this.setState({colors});
    // }, 300);
  }

  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }

  render() {
    const boxes = this.state.colors.map((color, index) => (
      <Box key={index} color={color} />
    ));
    return (
      <div className="App">
        {boxes}
      </div>
    );

  }
}

App.defaultProps = {
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



export default App;
