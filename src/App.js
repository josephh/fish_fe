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
        link: "/hooked"
      },
      {
        title: "Upload a Catch",
        link: "/upload"
      },
      {
        title: "another card title",
        link: "/another"
      }
    ],
    showCards: false
  };

  switchTitleHandler = () => {
      this.setState({
        cards: [{
            title: "See What's Been cooked!",
            link: "/hooked"
          },
          {
            title: "Upload a Catch",
            link: "/upload"
          },
          {
            title: "another card bitle",
            link: "/another"
          },
        ]
      })
    }

  titleChangedHandler = (event) => {
    this.setState({
      cards: [{
          title: "see what's been cooked",
          link: "/hooked"
        },
        {
          title: event.target.value,
          link: "/upload"
        },
        {
          title: "event.target.value",
          link: "/another"
        }
      ]
    })
  }

  toggleNavigationCardsHandler = () => {
    const doesShow = this.state.showCards;
    this.setState({showCards: !doesShow});
  }

  render = () =>  { return (
    <div className = "App">
      <h1> Hi </h1>
      <div>
        <button onClick = { this.toggleNavigationCardsHandler }> Switch Title </button>
      </div>
      {this.state.showCards ?
        <div>
          <NavigationCard
            title = {this.state.cards[0].title}
            link = {this.state.cards[0].link}
            changed = {this.titleChangedHandler}/>
          <NavigationCard
            title = {this.state.cards[1].title}
            link = {this.state.cards[1].link}
            changed = {this.titleChangedHandler}>
            <strong> something in between </strong>
          </NavigationCard>
          <NavigationCard
            title = {this.state.cards[2].title}
            link = {this.state.cards[2].link}
            changed = {this.titleChangedHandler}>
          </NavigationCard>
        </div>
      : null}
    </div>
  )}
  // : JSX provides a nicer coding approach

}

export default App; // export the class by default
