const displayHeight = document.documentElement.clientHeight+'px';
console.log(displayHeight)

window.onresize = function( event ) {
   document.querySelector('.intro').style.height = screen.height+'px';
};