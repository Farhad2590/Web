const user = {
    id : 5001,
    name : "shorifulraj",
    address :{
        street:{
            first :"Sk Mujib Road",
            second : "Dc Road",
            third : "Bohutola Colony"
        }
    }
}
const user2 = {
    id : 5001,
    name : "shorifulraj",
    address :{
        street:{
            city : "Chittagong",
            address : "Bangladesh"
        }
    }
}
console.log(user.address.street.second);
console.log(user2.address.street?.second);