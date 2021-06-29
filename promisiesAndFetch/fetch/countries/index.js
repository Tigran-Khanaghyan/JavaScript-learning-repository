"use strict";

let url = new URL("https://restcountries.eu/rest/v2/all");
let main = document.querySelector(".container");
let search = document.querySelector("input");
let countries = document.querySelector(".countries");
let tempCountries = document.createElement("div");
tempCountries.classList.add("temp");
let info = document.createElement('div')
info.classList.add('info')

async function getAllCountries(url) {
  let response = await fetch(url);
  return await response.json();
}

getAllCountries(url).then((countriesJson) => {
  countriesJson.forEach((countryInfo) => {
    let country = document.createElement("div");
    let flag = document.createElement("img");
    flag.classList.add("flag");
    flag.setAttribute("src", countryInfo.flag);
    country.append(flag);
    let countryName = document.createElement("p");
    countryName.textContent = countryInfo.name;
    country.append(countryName);
    tempCountries.append(country);
    countries.append(tempCountries);
  });
});

search.addEventListener("input", (event) => {
  let searchInputValue = event.target.value;
  let oldDiv = document.querySelector(".temp");
  if (oldDiv) {
    oldDiv.remove();
  }
  fetch(`https://restcountries.eu/rest/v2/name/${searchInputValue}`)
    .then((data) => data.json())
    .then((countriesInfo) => {
      let oldDiv = document.querySelector(".tempDiv");
      if (oldDiv) {
        oldDiv.remove();
      }
      let tempDiv = document.createElement("div");
      tempDiv.classList.add("tempDiv");
      countriesInfo.forEach((item) => {
        let country = document.createElement("div");
        let flagImg = document.createElement("img");
        flagImg.classList.add("flag");
        flagImg.setAttribute("src", item.flag);
        flagImg.addEventListener("click", () => {
          fetch(
            `https://restcountries.eu/rest/v2/name/${item.name.toLowerCase()}`
          )
            .then((response) => response.json())
            .then((filteredCountry) => {
              filteredCountry.forEach((elem) => {
                main.innerHTML = "";
                let countryInfoPage = document.createElement("div");
                countryInfoPage.classList.add('country-info')
                let countryFlag = document.createElement("img");
                countryFlag.setAttribute("src", elem.flag);
                countryInfoPage.append(countryFlag);

                let elemName = document.createElement("h2");
                elemName.textContent = elem.name
                countryInfoPage.append(elemName)

                let borders = elem.borders
                let borderUl = document.createElement('ul')
                let neighbor = document.createElement('li')
                neighbor.classList.add('neighbor')
                neighbor.textContent = 'Neighbors'
                borderUl.append(neighbor)
                borders.forEach((border) => {
                    let borderLi = document.createElement('li')
                    fetch(`https://restcountries.eu/rest/v2/name/${border}`)
                        .then(response => response.json())
                        .then(array => {
                            array.forEach((arr) => {
                                borderLi.textContent = arr.name
                                borderUl.append(borderLi)
                            })
                        })
                })
                info.append(borderUl)

                let infoDiv = document.createElement('div')
                infoDiv.classList.add('infoDiv')
                let capitalP = document.createElement('p')
                capitalP.textContent = 'Capital:' + elem.capital
                infoDiv.append(capitalP)
                let nameP = document.createElement('p')
                nameP.textContent = 'Native name:' + elem.nativeName
                infoDiv.append(nameP)
                let populationP = document.createElement('p')
                populationP.textContent = 'Population :'  + elem.population
                infoDiv.append(populationP)
                let regionP = document.createElement('p')
                regionP.textContent = 'Region :' + elem.region
                infoDiv.append(regionP)
                let languages = elem.languages
                let languagesP = document.createElement('p')
                languages.forEach((language) => {
                    languagesP.textContent += language.name + ' '
                })
                languagesP.textContent = 'Languages :' + languagesP.textContent
                infoDiv.append(languagesP)




                info.append(infoDiv)
                countryInfoPage.append(info)
                main.append(countryInfoPage);
                console.log(filteredCountry)
              });
            });
        });
        country.append(flagImg);
        let countryName = document.createElement("p");
        countryName.textContent = item.name;
        country.append(countryName);
        tempDiv.append(country);
        countries.append(tempDiv);
      });
    });
});
