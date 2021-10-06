## React Training
1. NextGen JS
    - Understanding let vs const
        - They bind scoping rules unlike vars
    - Arrow functions
        - Holds the parent context in the 'this' 
    - Exports and imports
        - Can reference one JS from other JS file
        - 'default' export and named export and differences while import
    -  Classes
        - Class syntax with inheritance [here](https://jsbin.com/zuneruzixi/edit?js,console,output) 
        - Note the usage of super() in child class's constructor. When constructor of derived class gets called, JS does not create 'this' when extends is present and it expects its to be done in base class. To move the flow to base class we call super. 'this' would not be available in derived class if
        - Reading support [here](https://dev.to/gduple/javascript-es6-super-and-extends-47kl)
        - Es7 made it further simpler to define, properties and methods. See [here](https://jsbin.com/luyomipewu/1/edit?js,console,output)
    - Spread and Rest operators
        - Actually its one operator i.e. free dots.
        - It becomes spread or rest based on usage
        - Spread
            - Used to spread up array elements or object properties
            ```
            const newArray = [...oldArray, 1, 2]
            const newArray = [...oldArray, 1, 2]
            ```
        - Rest
            - Used to merge the list of arguments into an array
            ```
                const sortArgs = (...args) {
                    return args
                }
            ```
        - Destruct
            - Might sound similar to spread
            - Spread takes all items or properties and distributed in new array or object, however destruct allows you to pluck items out of array, objects individually to store inside variable
            ```
                const list = [1,2,3]
                const [a, b] = list

                const object = {name: 'dev', exp: 5}
                const {name, exp} = object
                console.log(name)
            ```
        - Array functions
            - map
            - filter
            - find
            - reduce
            - concat
            - splice
        - Find additional resources guide [here](https://drive.google.com/file/d/1gIK9NBHAZ2OAJDDTqV-Om-Bb1JQzbA53/view?usp=sharing)
    
2. React basics
    - Its lib to create user interfaces through component driven way
    - Component is reusable building block of webpage which has its own defined purpose. (re-use and separation of concerns)
    - React way is all about building these components and then indicate how to compose in declarative way. In vanilla JS we used to instruct browser that where to put element that is not declarative approach
    - We combine HTML, css and JS to create components 
    - Create sample project with create react app
      - CRA is the open source project with goal to provide an integrated tool chain for react applications
      - It sets up your development environment so that you can use the latest JavaScript features
      - It just creates a frontend build pipeline, so you can use it with any backend you want
      - Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.
    - CRA bootstrap
      - index.js is the first file which gets triggered
      - imports react lib dependency - react-dom
      - Executes a ReactDOM.render with a root component and container to load the application
      - Picks the compiled root component and injects it to the container in DOM
      - Demo
        - Observe package.json
        - Bootstrap process 
        - [Setup](https://github.com/sanketjo96/react-training/commit/55347002986c8241541d2a62d1d8b1f982f4a04a)
    - JSX
      - React focuses on the view where it believes rendering logic and view should go hand in hand. 
      - JSX enables devs to write JS with mark ups with which we can create react elements. 
      - This comes with the overhead of transpile the mixed syntaxt to plain js.
      - Advantages
        - It makes code clean and much more redable
        - Easy for creating react elements and no need to write lower level apiS
        - Can leverage JS power while constructing the markup
      - Demo
        - Adding Expense static item, adding it to app.js
        - Applying styles
        - [Simple Component](https://github.com/sanketjo96/react-training/commit/ad6b9d08b177928d4cfb8882be0cc7517ae39530)
    - Passing data to component
      - In order to make component reusable we need to pass the data to it
      - It should accept any data and render accordingly
      - React allows us to pass the data wih props (component cant just use data stored in other components)
      - Demo 1
        - Passing data to ExpenseItem via props
        - Splitting sub component to indicate date
        - Adding a single wrapper as expenses in app.js file
        - [Props and component splitting](https://github.com/sanketjo96/react-training/commit/3d0b72d6f407abd3718ab23afd53875dfb936980)
      - Demo 2
        - Note that both expenseItem and expenses share some similar kind of style as below
        ```
            border-radius: 12px;
            box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
        ```
        - We can force reuse here by using props.children 
        - We can create Card as a wrapper component and encapsulate required markup within
        - [props.children](https://github.com/sanketjo96/react-training/commit/8ff195cea90d84d7fca0dcbf3667b295f299ce76)

3. State
   - Goal - Add button on expense list and try to change title
   - If you just update the title var inside component nothing will happen
   - Demo 1 
     - [Changing title](https://github.com/sanketjo96/react-training/commit/22ea8c533f94a33b09a0ae90c8c5f074d72f926b)
   - So react ignores further updates to normal props vars post render
   - Which is why state comes in picture where when state vars changes react considers re-render
   - Demo 2
     - Observe useState hook
     - Observe setTitle to set state
     - Setting state is more of a scheduling an update and not setting it in sync, one should use call back way
     - [State Update](https://github.com/sanketjo96/react-training/commit/9fb8a88026771ab3cfdcbd6e515b0d880bbbeafd)
   - State initializes once and whenever we set new state, reacts preserves the latest state change and triggers re-render accordingly
   - You can use multiple state hooks and reacts to those updates independently
   - State can get update on user events, on side effects (component mount) or even on timers
   - Demo 3
     - Since state sync is async in react be careful while setting new state which is dependant on old state
     - Note callback function
   - Demo 4
     - Try adding new Form component which can gather title, price and date with multiple states
     - Note how we are listening to user events
     - Note controlled components or 2 way binding
     - Note the form submit and passing data up to the parent.

4. Styling components
   - Condition styling
     - Setting styles inline with the help of style object. (not fan of inline styles ??)
     - Apply classes conditionally. Checkout classNames package to do this easily 
   - Scoping styles
     - Default way with CRA 
       - The styles we are using by default is not a scoped styling
       - The css module inclusion is something which has been taken care by CRA's webpack config
       - Styles can get leaked as there are no scope  
     - [Styled components](https://styled-components.com/)
       - [Tagged template syntax of JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
        ```
            let person = 'Mike';
            let age = 28;

            function myTag(strings, personExp, ageExp) {
            let str0 = strings[0]; // "That "
            let str1 = strings[1]; // " is a "
            let str2 = strings[2]; // "."

            let ageStr;
            if (ageExp > 99){
                ageStr = 'centenarian';
            } else {
                ageStr = 'youngster';
            }

            // We can even return a string built using a template literal
            return `${str0}${personExp}${str1}${ageStr}${str2}`;
            }

            let output = myTag`That ${ person } is a ${ age }.`;
        ```
    - [CSS Modules](https://css-tricks.com/css-modules-part-1-need/)
      - It is the build step and not a new spec
      - Changes class names and selectors to be scoped (i.e. kinda like namespaced).
      - What we need with CRA
        - import styles from './style.module.css'
        - Rename css file style.module.css
        - Module in a name is signal to CRA build process for transformation
        - CRA css module help can be found [here](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)