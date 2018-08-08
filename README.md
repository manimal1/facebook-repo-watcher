# Facebook Github Repos Search App
An app that fetches Facebook Github project repos, presented and sorted by number of watchers.  Clicking on a repo menu item in the sidebar navigation will bring up a table of that repo's contributors, with pagination that allows you to click through and see them all.<br>
It uses React and Redux.  I hope you enjoy it.
  
  
## Getting started
After cloning and before initial startup, run:
```sh
npm install
```
  
### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  
    
## Component Structure
- 1.0 [Containers](./src/containers/containers.md)  
- 2.0 [Modules](./src/modules/modules.md)  
- 3.0 [Components](./src/components/components.md)  
- 4.0 [Github API Services](./src/gh-services/gh-services.md)
  
  
## Main tools and libraries used
  
* [create-react-app](https://github.com/facebook/create-react-app)
* [Redux](https://redux.js.org/)
* [redux-logger](https://github.com/evgenyrodionov/redux-logger)
* [material-ui](https://material-ui.com/)
* [eslint](https://eslint.org/)
  
  
## A note on styles
I did not spend a lot of time styling the application.  I used the [material-ui](https://material-ui.com/) library.  I tend to use Sass in most projects, but I opted for using material-ui's own standard JSS method of styling.  I chose this primarily for speed - but also because I wanted to test it out as I haven't had much opportunity to use it.  It was fun.
  