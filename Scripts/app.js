//IIFE

let myglobalvariable=0;

(function(){
    let myfunctionalvariable=0;

function start()
{
    console.log(`app started..${myfunctionalvariable}`)
}

window.addEventListener("load",start);

})();