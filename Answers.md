1. What problem does the context API help solve?

It allows developers to pass props without passing them all the way down the react component "tree".

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are your source of data from the store.

Reducers determine the state depending on the deployed action.

The store contains state within your entire application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is used when a certain piece of data, or state, is needed across multiple components. State that is requireds on a singular component, such as a form, is useful only for that component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to run asynchronous code, or return a function inside of a function. We are able to make API calls that affect state this way.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favorite state management system at the moment, but it's pretty difficult!
