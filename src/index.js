import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// let str = "email=" + encodeURIComponent('max@test.com') + "&password=" + encodeURIComponent('12345');
// console.log(str);

// fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1")
//     .then((response) => {
//         if (response.status === 200) {
//             return response.text();
//         } else {
//             alert('Ошибка сервера: ' + response.status + '. Пожалуйста обновите страницу.');
//         }   
//     })
//     .then((answer) => {
//         answer = JSON.parse(answer);
//         console.dir(answer);
//     });

// let xhr = new XMLHttpRequest();
// xhr.open("POST", "https://mysterious-reef-29460.herokuapp.com/api/v1/validate" , true);
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.send(str);
// xhr.onreadystatechange = function() // Ждём ответа от сервера
// {
//   if (xhr.readyState === 4) // возвращает текущее состояние объекта(0-4)
//   {
//     if(xhr.status === 200) // код 200 (если страница не найдена вернет 404)
//     {
//       console.log(xhr.responseText); // Выводим ответ сервера
//     }
//   }
// }



ReactDOM.render(<App /> , document.getElementById('root'));

reportWebVitals();
