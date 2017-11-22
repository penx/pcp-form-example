# Presentational Component Package - Form Example

An example of writing a presentational component package (PCP) that contains form components that can be used by redux-form without introducing a reliance on redux in the PCP.

Written to accompany https://medium.com/@penx/form-elements-in-presentational-component-packages-a618e9aa7416

## Architecture

This project contains 3 example node packages:


### Web server

A basic web server using Create React App, that loads in the React Application. This could be replaced with Express or similar.

### Application

The React Application. This handles application logic, redux state/actions/reducers and would also handle routing.

Note that the Application does not have references to DOM elements or CSS - it uses presentational-components for this.


### Presentational Components

A library of presentational React components.

Contains: CSS, HTML.

Does not contain: Application state/logic, redux.

## Running the Example

```
npm install
npm start
```
