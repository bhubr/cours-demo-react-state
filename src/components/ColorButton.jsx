import React from 'react';

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      bold: false,
      font: 'Georgia'
    };
  }

  changeColor = (event) => {
    // Calcul de la nouvelle couleur en fonction de l'ancienne
    const oldColor = this.state.color;
    let newColor;
    if (oldColor === 'red') {
      newColor = 'blue';
    } else if (oldColor === 'blue') {
      newColor = 'red';
    }
    this.setState({
      color: newColor,
      bold: !this.state.bold
    });
  }

  render() {
    const buttonStyle = {
      color: this.state.color,
      fontWeight: this.state.bold ? 'bold' : 'normal',
      fontFamily: this.state.font
    };
    return (
      <button type="button" style={buttonStyle} onClick={this.changeColor}>Click me</button>
    )
  }
}

export default ColorButton;
