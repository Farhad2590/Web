const price = 4000;

if(price >= 5000){
    const discount = price * 10 /100;
    const payAmount = price - discount;
    console.log("Please pay this", payAmount);
}

else if(price > 2500){
    const discount = price * 5 /100;
    const payAmount = price - discount;
    console.log("Please pay this", payAmount);
}

else{
    console.log("Please pay", price);
}