document.body.style.width = "100vw";
document.body.style.height = "100vh";
document.body.style.boxSizing = "border-box";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const divs = document.querySelectorAll("main div");
divs.forEach((div) => {
  div.style.width = "150px";
  div.style.height = "150px";
  div.style.margin = "20px";
});

divs[0].style.backgroundColor = "red";
divs[1].style.backgroundColor = "green";
divs[2].style.backgroundColor = "blue";

const container = document.querySelector("main");
container.style.backgroundColor = "white";
container.style.width = "600px";
container.style.height = "600px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.border = "2px solid black";

divs.forEach((div, index) => {
  div.addEventListener("click", () => {
    switch (index) {
      case 0:
        // Function to execute when the first div is clicked
        console.log("First div clicked!");
        document.body.style.backgroundColor = "red";
        break;
      case 1:
        // Function to execute when the second div is clicked
        console.log("Second div clicked!");
        document.body.style.backgroundColor = "green";
        break;
      case 2:
        // Function to execute when the third div is clicked
        console.log("Third div clicked!");
        document.body.style.backgroundColor = "blue";
        break;
    }
  });
});
