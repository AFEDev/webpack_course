import Post from "./Post";
import './styles/styles.css'
import json from './assets/json'
import webpackLogo from './assets/webpack-logo.png'

const post = new Post("Webpack post title", webpackLogo);

console.log('Post to string: ', post.uppercaseTitle());

console.log('Post to string: ', post.toString());

console.log('JSON: ', json);