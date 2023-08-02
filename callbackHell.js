function getCheese(callback){
    setTimeout(() => {
       const cheese = "🧀";
       console.log("here is the cheese" , cheese);
       callback(cheese)
    }, 2000);  
}
function makeDough(cheese , callback){
    setTimeout(() => {
        const dough = "🍩";
        console.log("here is the dough and cheese" , dough , cheese);
        callback(dough)
    }, 3000);
}
function bakePizza(dough , callback){
    setTimeout(() => {
        const pizza = "Here's the Pizza "
        console.log("Pizaa is now finally made...");
        callback(pizza);
    }, 4000);
}
getCheese((cheese)=>{
    makeDough(cheese , (dough)=>{
        bakePizza(dough , (pizza)=>{
            console.log("Got my Pizza " , pizza);
        })
    })
})
