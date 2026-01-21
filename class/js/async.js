// function fetchData(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);  
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error); 
//     });
// }
// fetchData("https://jsonplaceholder.typicode.com/todos/1");






async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("something went wrong");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
fetchData("https://jsonplaceholder.typicode.com/todos/1");

setTimeout(() => {
  console.log("waiting");
  setTimeout(() => {
    console.log("waiting");
  }, 2000);
}, 5000);

console.log("hi");

