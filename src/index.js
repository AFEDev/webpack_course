import * as $ from 'jquery';
import Post from "./Post";
import './styles/styles.css'
import json from './assets/json'
import webpackLogo from './assets/webpack-logo.png'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import './styles/scss.scss'
import './babel'

const post = new Post("Webpack post title", webpackLogo);

console.log('Post to string: ', post.uppercaseTitle());

$('pre').addClass('code').html(post.toString())

console.log('Post to string: ', post.toString());

console.log('JSON: ', json);

console.log('xml: ', xml);

console.log('CSV:', csv);

