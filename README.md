## How To Run

1. Clone List_Advisor repo
2. Clone List_Advisors_BFF repo
3. run npm install on both the repos
4. run List_Advisors with command "npm start"
5. run List_Advisors_BFF with command node index.js
6. got to localhost:3000 to check UI flow
7. If you want to check BFF got to localhost:6969

## Note
1. At the moment we are showing max 400 Advisors If we want more we can do that, by just giving greater value for "hasMore" option of infinite scroller.

## Used Libraries Or Tools

1. Used open source Material UI react component library
2. Used React context for local state management
3. Used React's Infinite scroller to handle infinite scrolling
4. Used faker to generate data
5. Used react-testing-library for unit testing.
6. Used graphql and Apollo client to manage data.

## Future Scope
1. more test cases
2. Performance optimization