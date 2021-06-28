"use strict";

let url = new URL("https://ghibliapi.herokuapp.com/films/");
let main = document.querySelector(".container");

async function getFilmInfo(url) {
  let response = await fetch(url);
  return await response.json();
}

getFilmInfo(url).then((filmsData) => {
  filmsData.forEach((filmData) => {
    let div = document.createElement("div");
    let ul = document.createElement("ul");
    let titleLi = document.createElement("li");
    let title = document.createElement("p");
    title.textContent = "Title : ";
    titleLi.append(title);
    let titleP = document.createElement("p");
    titleP.textContent = filmData.title;
    titleLi.append(titleP);
    ul.append(titleLi);

    let descriptionLi = document.createElement("li");
    let description = document.createElement("p");
    description.textContent = "Description:";
    descriptionLi.append(description);
    let descriptionText = document.createElement('p')
    descriptionText.textContent = filmData.description
    descriptionLi.append(descriptionText)
    ul.appendChild(descriptionLi)

    let directorLi = document.createElement('li')
    let director = document.createElement('p')
    director.textContent = 'Director:'
    directorLi.append(director)
    let directorName = document.createElement('p')
    directorName.textContent = filmData.director
    directorLi.append(directorName)
    ul.appendChild(directorLi)

    let producerLi = document.createElement('li')
    let producer = document.createElement('p')
    producer.textContent = 'Producer:'
    producerLi.append(producer)
    let producerName = document.createElement('p')
    producerName.textContent = filmData.producer
    producerLi.append(producerName)
    ul.appendChild(producerLi)

    let dateLi = document.createElement('li')
    let date = document.createElement('p')
    date.textContent = 'Release Date:'
    dateLi.append(date)
    let dateYear = document.createElement('p')
    dateYear.textContent = filmData.release_date
    dateLi.append(dateYear)
    ul.append(dateLi)

   
    div.append(ul);
    main.append(div);

     console.log(filmData);
  });
});
