const loadPhone = async (searchText,isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones,isShowAll);
}
const displayPhones = (phones,isShowAll) => {
    // console.log(phones);
    const divContainer = document.getElementById('phone-container')
    divContainer.textContent =''

    const loadButton = document.getElementById('phoneAll');
    if(phones.length > 12 && !isShowAll){
        // loadButton.classList.remove('hidden')
        loadButton.classList.remove('hidden')
    }
    else{
        loadButton.classList.add('hidden')
    }
    // console.log("clicked",isShowAll);
    if(!isShowAll){
        phones = phones.slice(0,12)
    }

    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 shadow-xl`
        phoneCard.innerHTML = `
        <div class="p-5">
            <figure class="px-5 pt-5 bg-cyan-100">
                <img src="${phone.image}" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered
                </p>
                <h2 class="card-title">$999</h2>
                <div class="card-actions">
                    <button onclick="showDetails('${phone.slug}')" class="btn btn-info text-white">Show Details</button>
                </div>
            </div>
        </div>
        `
        divContainer.appendChild(phoneCard)
    });
    toggleHandleSpinner(false)
}

const showDetails =async (id) =>{
    // console.log("Clicked",id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    // console.log(data);
    const phone = data.data;
    showPhoneDetails(phone)
}

const showPhoneDetails = (phone) => {
    console.log(phone);
    const phone_name = document.getElementById('show-phone-name');
    phone_name.innerText = phone.name;
    const show_container = document.getElementById('show-container');
    show_container.innerHTML = `
    <img  src="${phone.image}" />
    <h6><span class="font-bold">Storage:</span>${phone?.mainFeatures?.storage}</h6>
    <h6><span class="font-bold">Display Size:</span>${phone?.mainFeatures?.displaySize}</h6>
    <h6><span class="font-bold">Chip set:</span>${phone?.mainFeatures?.chipSet}</h6>
    <h6><span class="font-bold">Memory:</span>${phone?.mainFeatures?.memory}</h6>
    <h6><span class="font-bold">Slug:</span>${phone?.slug}</h6>
    <h6><span class="font-bold">Release Date:</span>${phone?.releaseDate}</h6>
    <h6><span class="font-bold">Brand:</span>${phone?.brand}</h6>
    <h6><span class="font-bold">Gps:</span>${phone?.others?.GPS || "No Gps Available"}</h6>
    `
    show_Modal.showModal()
}

const handleSubmit = (isShowAll) =>{
    toggleHandleSpinner(true);
    // console.log('searchHandle');
    const searchField = document.getElementById('Searchfield');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText, isShowAll)
}
// loadPhone()

const toggleHandleSpinner = (isLoading) =>{
    const loadSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadSpinner.classList.remove('hidden')
    }
    else{
        loadSpinner.classList.add('hidden')
    }
}

const handleShowAll = () =>{
    handleSubmit(true)
}