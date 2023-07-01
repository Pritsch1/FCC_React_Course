import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainContent from './MainContent.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <MainContent/>
);


/*
//Imperative Way of Sufferi.... writting react.

let root = document.getElementById('root');

let node = document.createElement('div');
let h1 = document.createElement('h1');
let ul = document.createElement('ul');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
let p = document.createElement('p');

h1.append("Banaasdnas");
li1.append("1");
li2.append("12");
li3.append("123");
li4.append("1234");
p.append("a paragraph");

ul.append(li1, li2, li3, li4)
node.append(h1, ul, p);

root.appendChild(node);
*/