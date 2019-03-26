/**
* Example of how to implement a component.
* You have to import React when using JSX.  Even if the 'React.' module is not
* explicitly used in the code, the render() method and the JSX implicitly needs
it.
* Both coding styles below are valid:  1. returning inline JSX, 2. calling React.createElement
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavigationCard from './NavigationCard/NavigationCard';

class App extends Component {

  // use state returns an array with EXACTLY 2 elements: 1. the current state, 2. a function to amend state
  // With React hooks, tbere is no AUTOMATIC merge of state (as there is with OOTB react).
  state = {
    cards: [{
        title: "See What's Been Hooked!",
        link: "/hooked",
        id: "sdfjdspof09s8"
      },
      {
        title: "Upload a Catch",
        link: "/upload",
        id: "987987234mkj"
      },
      {
        title: "another card title",
        link: "/another",
        id: "09809123hwgfhsdgv"
      }
    ]
  };

  titleChangedHandler = (event, id) => {

    const cardIndex = this.state.cards.findIndex(c => {
      return c.id === id;
    });

    // we don't want to mutate the object (javascript passes by ref) so we
    // use the spread operator to copy into a new object.  Could achieve same thing
    // with Object.assign({}, this.state.cards[cardIndex])
    const card = {
      ...this.state.cards[cardIndex]
    }

    card.title = event.target.value

    // once we have an updated card, add it back into a COPY of the state
    const cards = [...this.state.cards]
    cards[cardIndex] = card

    this.setState({
      cards: cards
    })
  }

  deleteCardHandler = (cardsIndex) => {
    const cards = this.state.cards
    cards.splice(cardsIndex, 1) // remove from the object reference
    this.setState({cards: cards})
  }

  linkClickedHandler = () => {
    alert('link Clicked!')
  }

  // render executes every time state changes
  render = () =>  {
    var cards = <div className='cards'>
          {  // Array.map() makes it easy to to 'build' a valid jsx component array
          this.state.cards.map((card, index) => {
            console.log('index when adding cards? ' + index)
            return <NavigationCard
              click = {() => this.deleteCardHandler(index)} // could also be bind.this, index
              title = {card.title}
              link = {card.link}
              changed = {(event) => this.titleChangedHandler(event, card.id)}
              linkClick = {() => this.linkClickedHandler()}
              key= {card.id} /> //
          })}
        </div>

    return (
    <div className = "App">
      <h1> Hi </h1>
      {cards}
    </div>
  )}
  // : JSX provides a nicer coding approach

}

export default App; // export the class by default
