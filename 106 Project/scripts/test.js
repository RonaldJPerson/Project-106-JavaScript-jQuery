
function sayGoodBye() {
    console.log("Bye Bye");
}

function sayHello() {
    console.log("Hello there!");
    sayGoodBye();
    
}
function init() {
    console.log("Hello there!");
    sayHello();
    
}

window.onload = init;// it waits until the html and css gets resolved to execute the logic