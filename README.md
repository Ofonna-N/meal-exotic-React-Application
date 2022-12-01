# Food Ordering app with Basic react tools

First official react project.

made good use of several react hooks, while improving my understanding of react basics

## What I learned
-React hooks - these are by far my best parts of react as they make life extremely easy especially when it comes to managing states and data of your app, the list of hooks used in this project are:
-useContext: used to pass data down my component tree without having to use props. This was expecially useful for my cart as the data was needed by several components 
             in the project.
-useReducer: the more complex version of use state, used to handle my cart update logic, as several actions such as add or remove meal item were utilised as seen in the              proejct.
-useState: used to manage simple state values such as the open and close state of the modal responsible for displaying our cart.

-useRef: used to grab data from our input fields when adding items from menu to cart.

### honorable mentions
useMemo, useCallback and React.memo for optimzation.

### Styling
Despite my journey with scss I also explored css modules in this project and i've grown to love them as they not only make life easier but i prefer them due to not having to transpile my sass to css every time i want to preview a change in my code. 

## Challenges
My major challenge in this project was debugging and having to fix certain problems arrising during the entire development process, Utilizing the console and DOM heirarchy definitely makes that a breeze but still avoiding minor mistakes happen every now and then, coupled with the tendency to make mistakes when dealing with dynamically typed languages.

## Conclusion 
Its been a joy using react so far and looking forward to the progress that will be made along the way.
off to redux, routing, authentication security and much more!


