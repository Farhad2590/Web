const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        count = count + 1;
        
        const placeName = event.target.parentNode.childNodes[1].innerText;
        const placeCost = event.target.parentNode.childNodes[3].childNodes[1].innerText;

        const selectContainer = document.getElementById('selected-place-container');

        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = placeName;
        const p2 = document.createElement("p");
        p2.innerText = placeCost;

        li.appendChild(p);
        li.appendChild(p2);
        selectContainer.appendChild(li);

        const totalCOst = document.getElementById('total-cost').innerText;
        const convertedNumber = parseInt(totalCOst);


        const placePrice = parseInt(placeCost);
        const sum = convertedNumber + placePrice;



        const grandTotal = document.getElementById('grand-total').innerText;
        const convertedgrandTotal = parseInt(grandTotal);

        const sum2 = convertedgrandTotal + placePrice;

        setInnerText('total-cost', sum);
        setInnerText('cart-count', count);
        setInnerText('grand-total', sum2);
        
    })

}