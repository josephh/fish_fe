/**
* Example of how to implement a component.
* You have to import React when using JSX.  Even if the 'React.' module is not
* explicitly used in the code, the render() method and the JSX implicitly needs
it.
* Both coding styles below are valid:  1. returning inline JSX, 2. calling React.createElement
*/
import React, {
  useState
} from 'react'; // useState is part of 'React hooks'
import ReactDOM from 'react-dom';
import './App.css';
import NavigationCard from './NavigationCard/NavigationCard';

const app = props => {

  // use state returns an array with EXACTLY 2 elements: 1. the current state, 2. a function to amend state
  const [cardsState, setCardsState] = useState({
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
      },
    ]
  });

  const // prefer es6 arrow functions here as it avoids problems with this keyword
    switchTitleHandler = () => {
      setCardsState({
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

  // render() { // this is the most important thing that each React component needs to do...but only required for classes extending 'Component'

  // don't add parentheses after the call to the handler - it's to be registered not immediately invoked!
  return (
    <div className = "App">
      <h1>Hi</h1>
      <div>
        <button onClick = { switchTitleHandler }> Switch Title </button>
      </div>
      <NavigationCard title = { cardsState.cards[0].title } href = { cardsState.cards[0].link } />
      <NavigationCard title = { cardsState.cards[1].title } href = { cardsState.cards[1].link } >
        <strong > something in between </strong>
      </NavigationCard >
      <NavigationCard title = { cardsState.cards[2].title } href = { cardsState.cards[2].link } > </NavigationCard>
    </div>
  )
  // : JSX provides a nicer coding approach


  // the following line means add an element and nest any no. of child elements inside it...
  // React.createElement('div', null, 'h1', 'It\'s a react app!?') // the nested h1 in the code exmaple  is interpreted as text,
  // instead we need to call createElement again
  // return React.createElement(
  //   'div', {className: 'App'} /*options*/, 'Hi!',
  //     React.createElement('h1', null /*options*/, 'Does this bit appear?'),
  //     NavigationCard({title: "See What\'s Been Hooked!"}), // since this is a function
  //     NavigationCard({title: "Upload a Catch"}) // since this is a function
  //   )


}

export default app; // export the class by default
