function openNav() {
    document.querySelector("nav article").style.width = "100%";
    document.querySelector("nav article").style.display = "flex";  
}
  
function closeNav() {
    document.querySelector("nav article").style.width = "0";
    document.querySelector("nav article").style.display = "none"; 
}

function grid1(){
    document.querySelector("main > section:nth-of-type(2)").style.gridTemplateColumns = "100vw";
    document.querySelector("main > section:nth-of-type(1) article svg:nth-of-type(1)").innerHTML = '<path d="M6 10c0-2.188 1.75-4 4-4h20c2.188 0 4 1.813 4 4v20c0 2.25-1.813 4-4 4H10c-2.25 0-4-1.75-4-4V10Z"/>';
    document.querySelector("main > section:nth-of-type(1) article svg:nth-of-type(2)").innerHTML = '<path d="M9 9v6h6V9H9ZM6 9a3 3 0 0 1 3-3h6c1.625 0 3 1.375 3 3v6a3 3 0 0 1-3 3H9c-1.688 0-3-1.313-3-3V9Zm3 16v6h6v-6H9Zm-3 0a3 3 0 0 1 3-3h6c1.625 0 3 1.375 3 3v6a3 3 0 0 1-3 3H9c-1.688 0-3-1.313-3-3v-6ZM31 9h-6v6h6V9Zm-6-3h6c1.625 0 3 1.375 3 3v6a3 3 0 0 1-3 3h-6c-1.688 0-3-1.313-3-3V9a3 3 0 0 1 3-3Zm0 19v6h6v-6h-6Zm-3 0a3 3 0 0 1 3-3h6c1.625 0 3 1.375 3 3v6a3 3 0 0 1-3 3h-6c-1.688 0-3-1.313-3-3v-6Z"/>';
    
}

function grid2(){
    document.querySelector("main > section:nth-of-type(2)").style.gridTemplateColumns = "50vw 50vw";

    /* https://stackoverflow.com/questions/18795028/javascript-remove-li-without-removing-ul */
    document.querySelector("main > section:nth-of-type(2) article:nth-of-type(1) ul").innerHTML = '';
    document.querySelector("main > section:nth-of-type(2) article:nth-of-type(2) ul").innerHTML = '';
    document.querySelector("main > section:nth-of-type(2) article:nth-of-type(3) ul").innerHTML = '';
    document.querySelector("main > section:nth-of-type(2) article:nth-of-type(4) ul").innerHTML = '';
    document.querySelector("main > section:nth-of-type(2) > ul").style.gridColumn= "1 / span 2";
    document.querySelector("main > section:nth-of-type(1) article svg:nth-of-type(1)").innerHTML = '<path xmlns="http://www.w3.org/2000/svg" d="M30 9H10c-.563 0-1 .5-1 1v20c0 .563.438 1 1 1h20c.5 0 1-.438 1-1V10c0-.5-.5-1-1-1ZM10 6h20c2.188 0 4 1.813 4 4v20c0 2.25-1.813 4-4 4H10c-2.25 0-4-1.75-4-4V10c0-2.188 1.75-4 4-4Z"/>';
    document.querySelector("main > section:nth-of-type(1) article svg:nth-of-type(2)").innerHTML = '<path xmlns="http://www.w3.org/2000/svg" d="M18 9v6a3 3 0 0 1-3 3H9c-1.688 0-3-1.313-3-3V9a3 3 0 0 1 3-3h6c1.625 0 3 1.375 3 3Zm0 16v6a3 3 0 0 1-3 3H9c-1.688 0-3-1.313-3-3v-6a3 3 0 0 1 3-3h6c1.625 0 3 1.375 3 3Zm4-16a3 3 0 0 1 3-3h6c1.625 0 3 1.375 3 3v6a3 3 0 0 1-3 3h-6c-1.688 0-3-1.313-3-3V9Zm12 16v6a3 3 0 0 1-3 3h-6c-1.688 0-3-1.313-3-3v-6a3 3 0 0 1 3-3h6c1.625 0 3 1.375 3 3Z"/>';
}


let input = document.querySelector("main section:nth-child(3) > article:nth-child(1) > article input");
let increaseProduct = document.querySelector("main section:nth-child(3) > article:nth-child(1) > article button:nth-of-type(2)");
let decreaseProduct = document.querySelector("main section:nth-child(3) > article:nth-child(1) > article button:nth-of-type(1)");

/* Clamp ge-troubleshoot met ChatGPT */
const clampValue = () => {
  let value = parseInt(input.value);
  if (isNaN(value) || value < 1) value = 1;
  if (value > 3) value = 3;
  input.value = value;
};

increaseProduct.addEventListener('click', () => {
  let value = parseInt(input.value);
  if (value < 3) {
    input.value = value + 1;
  }
});

decreaseProduct.addEventListener('click', () => {
  let value = parseInt(input.value);
  if (value > 1) {
    input.value = value - 1;
  }
});

input.addEventListener('input', clampValue);



/* https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY */
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScrollY) {
    document.querySelector("header").style.top = "0";
  }
  
  else {
    document.querySelector("header").style.top = "-80px";
  }

  lastScrollY = window.scrollY;
});