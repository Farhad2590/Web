const loadCard = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const card = data.data;

    displayCard(card)

}
const card_container = document.getElementById('card-container');
const featuresContainer = document.getElementById("featuresContainer");
const displayCard = (card) => {
    //  console.log(card);
    let tool = card.tools;

    tool.forEach(cards => {
        console.log(cards);

        // const feature = cards.features.forEach(feature => {
        //     const listItem = document.createElement("li");
        //     listItem.textContent = feature;
        //     featuresContainer.appendChild(listItem);
        // });
        // console.log(feature);

        const div = document.createElement('div')
        div.innerHTML = `
    <div class="card bg-base-100 shadow-xl p-5">
            <figure><img src="${cards.image}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    Features
                </h2>
                <ol>
                    <li value="1">${cards.features[0]}</li>
                    <li value="2">${cards.features[1]}</li>
                    <li value="3">${cards.features[2]}</li>
                </ol>
                <div class="border-[1px] border-gray-400"></div>
                <h2 class="card-title">
                ${cards.name}
                </h2>
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <i class="fa-solid fa-calendar-days"></i>
                        <p>${cards.published_in}</p>
                    </div>
                    <div class="bg-pink-600 rounded-full p-5">
                        <i class="fa-solid fa-arrow-right" style="color: #ff85ba;"></i>
                    </div>
                </div>
            </div>
        </div>
    `
        card_container.appendChild(div)
    });

}
loadCard()



// for (const key in card) {
//     console.log(card[key]);

//     const div = document.createElement('div')
//     div.innerHTML = `
//     <div class="card w-96 bg-base-100 shadow-xl p-5">
//             <figure><img src="${card[key][0].image}" alt="Shoes" /></figure>
//             <div class="card-body">
//                 <h2 class="card-title">
//                     Features
//                 </h2>
//                 <ol>
//                     <li value="1">Natural language processing</li>
//                     <li value="2">Contextual understanding</li>
//                     <li value="3">Text generation</li>
//                 </ol>
//                 <div class="border-[1px] border-gray-400"></div>
//                 <h2 class="card-title">
//                     ChatGPT
//                 </h2>
//                 <div class="flex justify-between items-center">
//                     <div class="flex">
//                         <i class="fa-solid fa-calendar-days"></i>
//                         <p>11/01/2022</p>
//                     </div>
//                     <div class="bg-pink-600 rounded-full p-5">
//                         <i class="fa-solid fa-arrow-right" style="color: #ff85ba;"></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `
//     card_container.appendChild(div)
// }