import View from './view';
import Game from './game';
import Colors from './colors';
import Level from './level';
import FastClick from './fastclick';

$( () => {
    new Level(1);
});

$( () => {
    FastClick.attach(document.body);
});
