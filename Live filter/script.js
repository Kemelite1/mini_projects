// declare variables result, filter, and listItems and assign them 
// the corresponding elements retrieved from the DOM using document.getElementById
const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

// calls the getData function which fetches data from an API and populates the results array with the retrieved data.
getData();

// adds an event listener to the filter element, listening for the 'input' event.
// triggers the callback function () => filterData(filter.value) when the user inputs a value into the filter
filter.addEventListener('input', () => filterData(filter.value));

// the getData function responsible for fetching data from 
// the specified API URL and populating the UI with the retrieved data.
async function getData() {
  const res = await fetch('https://randomuser.me/api?results=100'); /*fetch function is used to send a GET request to the API and 
  retrieve the response, which is stored in the res variable.*/
  const { results } = await res.json(); /*await keyword is used to pause the execution and wait for the response to be resolved*/
  result.innerHTML = ''; /*cleared to remove any existing content*/
  results.forEach((user) => {
    const li = document.createElement('li');
    listItems.push(li);
    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user_info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>`;
    result.appendChild(li);
  });
}
// responsible for filtering the displayed data based on the provided search term.
function filterData(searchTerm) {
  listItems.forEach((item) => {
    item.classList.toggle('hide', !item.innerText.toLowerCase().includes(searchTerm.toLowerCase()));
  });
}
