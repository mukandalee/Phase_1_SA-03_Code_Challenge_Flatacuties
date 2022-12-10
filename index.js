//getting elements by id from the index. html
const names = document.getElementById("character-bar");
const name = document.querySelector("#name");
const image = document.querySelector("#image");
let votes = document.querySelector("#vote-count");
let allData = [];
// fetch function declaration
function fetchData(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      naming(data);
    });
}
fetchData("http://localhost:3000/characters");
function naming(data) {
  //map data and return span with data.names
  data.map((item) => {
    console.log("item name: ", item.name);
    // create a span Element
    let spanTag = document.createElement("span");
    // create the e.content
    spanTag.textContent = item.name;
    names.appendChild(spanTag);
    spanTag.addEventListener("click", (e) => {
      name.textContent = item.name;
      console.log(image.src);
      image.src = item.image;
      votes.textContent = item.votes;
    });
  });
}
// votes.textContent = item.votes//
//  names.appendChild(totalCount)
const form = document.getElementById("votes-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const votes = document.getElementById("votes").value;
  const newVotes = parseInt(event.target.votes.value);
  // let votecount = (current += newVotes);
  // characterVoteCount.innerText = votecount;
  console.log(votes +=newVotes);
  // form.reset();
});
