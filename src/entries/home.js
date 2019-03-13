import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
//import Playlist from './src/playlist/components/playlist';
//import data from './src/api.json'

const app = document.getElementById('app')

const holaMundo = <h1>Hola Estudiante!</h1>;

render(<Home />, app);