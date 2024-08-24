// №1
// function extractNumbers(str) {
//     return str.match(/\d+/g).map(Number);
// }
// console.log(extractNumbers("a1fg5hj6")); 

// №2
// function fibonacci(n1, n2){
//     if (n1 > 144){
//         return;
//     }
//     console.log(n1);
//     setTimeout(function(){
//         fibonacci(n2, n1 + n2)
//     }, 1000)
// }
// fibonacci(0, 1)

// №3
// async function fetchProductTitles() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
        
//         if (!response.ok) {
//             throw new Error(`Ошибка: ${response.status}`);
//         }
        
//         const products = await response.json();
        
//         products.forEach(product => {
//             console.log(product.title);
//         });
//     } catch (error) {
//         console.error('Произошла ошибка:', error.message);
//     }
// }

// fetchProductTitles();

// №4
// const colorButtonsDiv = document.getElementById('color-buttons');

// colorButtonsDiv.addEventListener('click', function(event) {
//     if (event.target.tagName === 'BUTTON') {
//         document.body.style.backgroundColor = event.target.textContent;
//     }
// });

// №5
// const squareBlock = document.getElementById('square-block');
//     const toggleButton = document.getElementById('toggle-button');

//     toggleButton.addEventListener('click', function() {
//         if (squareBlock.style.display === 'none') {
//             squareBlock.style.display = 'block';
//             toggleButton.textContent = 'Hide Block';
//         } else {
//             squareBlock.style.display = 'none';
//             toggleButton.textContent = 'Show Block';
//         }
// });

// №6
// let counterValue = 0;
//     const counterElement = document.getElementById('counter');

//     const intervalId = setInterval(() => {
//         counterValue++;
//         counterElement.textContent = counterValue;

//         if (counterValue === 100) {
//             clearInterval(intervalId); 
//         }
//     }, 1);

// №7
// document.getElementById('fetch-data').addEventListener('click', async () => {
//     try {
//         const response = await fetch('/path/to/your/products.json');
        
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
        
//         const data = await response.json();
        
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// });