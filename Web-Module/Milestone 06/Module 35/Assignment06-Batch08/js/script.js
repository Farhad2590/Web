const btnContainer = document.getElementById('btn-container');
const cardContainer = document.getElementById('card-container');
const errorContainer = document.getElementById('error-element');
const sortBtn = document.getElementById('sort-btn');
sortBtn.addEventListener('click', () => {
    sortByView = true;
    fetchDataByCategories(selectedCategory, sortByView)
})

let selectedCategory = 1000;
let sortByView = false;
const fetchCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/videos/categories'
    fetch(url)
        .then((res) => res.json())
        .then(({ data }) => {
            data.forEach((card) => {
                console.log(card);
                const newBtn = document.createElement('button')
                newBtn.classList = 'btnCategory btn '
                newBtn.innerText = card.category;
                newBtn.addEventListener('click', () => {
                    fetchDataByCategories(card.category_id)

                    const allBtn = document.querySelectorAll('.btnCategory')
                    for (const btn of allBtn) {
                        btn.classList.remove('bg-red-500')
                    }
                    newBtn.classList.add('bg-red-500')
                    // console.log(newBtn);
                })
                btnContainer.appendChild(newBtn)
            });
        })
}

const fetchDataByCategories = (categoryId, sortByView) => {
    selectedCategory = categoryId
    console.log(categoryId);
    const url = `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    fetch(url)
        .then((res) => res.json())
        .then(({ data }) => {
            console.log(data);
            if (sortByView) {
                data.sort((a, b) => {
                    const totalViewsStrFirst = a.others?.views;
                    const totalViewsStrSecond = b.others?.views;
                    const totalViewsStrFirstNumber = parseFloat(totalViewsStrFirst.replace("k", '')) || 0;
                    const totalViewsStrSecondNumber = parseFloat(totalViewsStrSecond.replace("k", '')) || 0;

                    return totalViewsStrSecondNumber - totalViewsStrFirstNumber;

                })
            }
            if (data.length === 0) {
                errorContainer.classList.remove('hidden')
            } else {
                errorContainer.classList.add('hidden')
            }
            cardContainer.innerHTML = ''
            data.forEach((video) => {
                let verifiedBadge = '';

                if (video.authors[0].verified) {
                    verifiedBadge = `<img class="w-6 h-6" src="./images/verify.png" alt="">`
                }

                let value = video.others?.posted_date
                const totalSeconds = value
                const remainingMinutes = totalSeconds % 60;
                const totalMinutes = (totalSeconds - remainingMinutes) / 60;

                const remainingHours = totalMinutes % 60;
                const totalHours = (totalMinutes - remainingHours) / 60;

                let time;
                if (value.length == 0) {
                    time;
                }
                else {
                    time = `${totalHours} hours ${remainingHours} minutes ago`
                }
                const newCard = document.createElement('div')
                newCard.innerHTML = `
            <div class="card w-full bg-base-100 shadow-xl">
                    <figure class="overflow-hidden h-72">
                        <img class="w-full" src="${video.thumbnail}" />
                        <h6 class="absolute bottom-[40%] right-12">${time ? time : ''}</h6>
                    </figure>
                    <div class="card-body">
                        <div class="flex space-x-4 justify-start items-start">
                            <div>
                                <img class="w-12 h-12 rounded-full" src="${video.authors[0].profile_picture}" />
                            </div>
                            <div>
                                <h2 class="card-title">${video.title}</h2>
                                <div class="flex mt-3">
                                    <p class="">${video.authors[0].profile_name}</p>
                                    ${verifiedBadge}
                                </div>
                                <p class="mt-3">${video.others.views}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
                cardContainer.appendChild(newCard);
            })
        })
}
fetchCategories()
fetchDataByCategories(selectedCategory, sortByView)