async function restaurant(){
    try{
        const apiResponse= await fetch('https://ramen-api.dev/shops?pretty&page=1&perPage=10');
        const drivenData= await apiResponse.json();
        const restoData= drivenData.shops
        // console.log(restoData)
        onSuccess(restoData);
        // console.log(restoData[0].photos[0].url)
    } catch(error){
        console.error("There is a problem", error);
    }
}
restaurant();
function onSuccess(shops) {
for(let shop of shops){
    //creation of elements
    const cardDiv= document.createElement('div');
    const image= document.createElement('img');
    const detailDiv= document.createElement('div');
    const title= document.createElement('h4');
    const description= document.createElement('p');

    //add classes
    cardDiv.classList.add("card");
    image.classList.add("card-img-top");
    detailDiv.classList.add("card-body");
    title.classList.add("card-title");
    description.classList.add("card-text");

    //add content where there is conntent to add
    title.textContent= `${shop.name} ${shop.id.toUpperCase()}`;
    description.textContent= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nulla incidunt minus tempora soluta officiis! Iusto facilis facere, possimus ipsam, sapiente sed totam id ipsum tempore minus ad sequi molestiae.";
    image.src= shop.photos[0].url;
    // image.style.width= "200px";
    cardDiv.style.width= "18rem";
    cardDiv.style.height= "35rem"



    //adding the all to the dom
    detailDiv.append(title,description);
    cardDiv.append(image,detailDiv);
    document.querySelector(".container.mt-5").append(cardDiv);
}
    
}
