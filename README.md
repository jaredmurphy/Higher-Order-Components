# Higher Order Components
An authentication app built with React & Redux to learn more about Higher Order Components in React

This app does not have a backend, so it fakes a server-side authentication process by returning a boolean value from the Redux store. 

The RequireAuth funtion creates an instance of the Authentication class and passes in any component that requires the authentication logic. In this case, I pass the Resources component into the RequireAuth function and users are therefore required to sign in to see the Resources component. 

The Higher Order architecture of the Authentication component allows us to reuse this logic for any number of components needed in the future. 

#### Features
* Users are able to sign in and log out
* Users are not able to visit resources route until logged in 
* If a user tries to visit resources route without logging in, they are booted back the the home route

#### Usage
- Clone this repo
- npm install
- npm start
- Go to localhost:8080

