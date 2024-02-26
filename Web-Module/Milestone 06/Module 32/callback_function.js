function greeting(greetingHandler,name){
    greetingHandler(name);
}
function greetingHandler(name){
    console.log("Good Morning",name);
}
function greetingEvening(name){
    console.log("Good Evening",name);
}
greeting(greetingHandler, 'Farhad')
greeting(greetingEvening, 'Hossen')