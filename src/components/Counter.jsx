import React from 'react';

// 1. écrire composant sous forme de classe
// 2. ajouter un constructeur
// 3. ajouter un gestionnaire d'évènements
//    onClick = équivalent de addEventListener('click', (e) => {});
// 4. DANS le gestionnaire d'évènements, appeler setState
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Syntaxe "normale" pour les méthodes
  // handleClick() {
  //   alert('coucou');
  // }

  // Syntaxe "moderne" pour les méthodes
  handleClick = () => {
    const newCount = this.state.count + 1;
    console.log('appel handleClick, nouvelle valeur de count', newCount);
    this.setState({
      count: newCount
    });
  }

  render() {
    const count = this.state.count;
    console.log('appel render, count', count);
    return (
      <button type="button" onClick={this.handleClick}>{count}</button>
    );
  }
}

export default Counter;
