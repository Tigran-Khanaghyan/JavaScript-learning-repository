"use strict";

let findBook = document.querySelector(".find-button");
let searchBox = document.querySelector(".search-container");
let search = document.querySelector(".search-field");
let main = document.querySelector(".container");

let url = new URL("http://openlibrary.org/search.json");

async function findBooks(url) {
  let response = await fetch(url);
  return await response.json();
}

findBook.addEventListener("click", () => {
  let oldDiv = document.querySelector(".books");
  if (oldDiv) {
    div.remove();
  }

  let div = document.createElement("div");
  div.classList.add("books");
  let linksUl = document.createElement("ul");
  div.append(linksUl);
  main.insertAdjacentElement("afterend", div);
  let parameters = search.value;
  let newUrl = url;
  newUrl.searchParams.set("q", parameters);
  findBooks(newUrl).then((data) => {
    let pageQuantity = Math.ceil(data.numFound / 100);

    let pageUl = document.createElement("ul");
    pageUl.classList.add("pages");
    document.body.append(pageUl);
    for (let i = 1; i <= pageQuantity; ++i) {
      let pageLi = document.createElement("li");
      pageLi.textContent = i;
      let link = newUrl + "&page=" + i;
      pageLi.addEventListener("click", () => {
        let pageNumbers = document.querySelector(".pages");
        pageNumbers.style.display = "none";
        let oldDiv = document.querySelector(".books");
        if (oldDiv) {
          oldDiv.remove();
        }
        findBooks(link).then((newPageData) => {
          let div = document.createElement("div");
          div.classList.add("books");
          let linksUl = document.createElement("ul");
          div.append(linksUl);
          main.insertAdjacentElement("afterend", div);
          let parameters = search.value;
          let newUrl = url;
          newUrl.searchParams.set("q", parameters);
          newPageData.docs.forEach((book) => {
            let bookUrl = url.protocol + url.host;
            bookUrl = new URL(book.key, bookUrl);
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = bookUrl;

            if (book.title) {
              a.textContent = book.title;
            }
            if (book.author_name) {
              a.textContent = a.textContent + "    " + book.author_name;
            }
            if (book.first_publish_year) {
              a.textContent +=
                " " + "First published::" + " " + book.first_publish_year;
            }

            li.append(a);
            linksUl.append(li);
          });
          pageNumbers.style.display = "block";
        });
      });
      pageUl.append(pageLi);
    }
    data.docs.forEach((book) => {
      let bookUrl = url.protocol + url.host;
      bookUrl = new URL(book.key, bookUrl);
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = bookUrl;

      if (book.title) {
        a.textContent = book.title;
      }
      if (book.author_name) {
        a.textContent = a.textContent + "    " + book.author_name;
      }
      if (book.first_publish_year) {
        a.textContent +=
          " " + "First published::" + " " + book.first_publish_year;
      }

      li.append(a);
      linksUl.append(li);
    });
  });
});
