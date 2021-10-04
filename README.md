# react-training
React Training

## Day 1
1. NextGen JS
    - Understanding let vs const
        - They bind scoping rules unlike vars
    - Arrow functions
        - Holds the parent conext in the 'this' 
    - Exports and imports
        - Can referance one JS from other JS file
        - 'default' export and named export and differances while import
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
    