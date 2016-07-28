(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app = require("./modules/fakeDragnDrop");


},{"./modules/fakeDragnDrop":2}],2:[function(require,module,exports){
(function fakeDragnDrop(){

    var
        activeEl,
        div,
        btn,
        offsetX,
        offsetY;


    function getRandomPosition(element) {
        var x = document.body.offsetHeight-element.clientHeight;
        var y = document.body.offsetWidth-element.clientWidth;
        var randomX = Math.floor(Math.random()*x);
        var randomY = Math.floor(Math.random()*y);
        console.log(x);
        console.log(y);
        return [randomX,randomY];
    }

    function generatedDiv(){
        var div = document.createElement('div');
        var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        var  width = (Math.floor(Math.random()*600));
        var height = (Math.floor(Math.random()*600));

        console.log('width'+width);
        console.log('height'+height);

        var xy = getRandomPosition(div);
        div.style.background = col;
        div.style.width = 300 ;
        div.style.height = 400 ;
        document.body.appendChild(div);
        div.style.top = xy[0] + 'px';
        div.style.left = xy[1] + 'px';

    }

    function mDown(e) {
        activeEl = e.target;
        offsetX = e.offsetX;
        offsetY = e.offsetY;

    }
    function mUp(e) {
        activeEl = null;
    }

    function mMove(e) {
        if (activeEl) {
            activeEl.style.top = (e.clientY - offsetY) + 'px';
            activeEl.style.left = (e.clientX - offsetX) + 'px';
        }
    }

    btn = document.querySelector('.generated-js');
    div = document.getElementsByTagName('div');

    btn.addEventListener("click", generatedDiv);

    document.addEventListener("mousedown", mDown);
    document.addEventListener("mouseup", mUp);
    document.addEventListener("mousemove", mMove);

})();

},{}]},{},[1])