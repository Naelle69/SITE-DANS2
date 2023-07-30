/* Modification de la navbar */

/* document.getElementById("navbar").addEventListener("scroll", myFunction);

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('scroll');
  } else {
    $('.navbar').removeClass('scroll');
  }
}); */


//Calendrier d'événements
/* let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectMonth = document.getElementById("month-name");
let months = [  "Janvier",  "Février",  "Mars",  "Avril",  "Mai",  "Juin",  "Juillet",  "Août",  "Septembre",  "Octobre",  "Novembre",  "Décembre"];
let monthAndYear = document.getElementById("month-name");
showCalendar(currentMonth, currentYear);

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbl = document.getElementById("calendar-body");
  tbl.innerHTML = "";

  selectMonth.innerHTML = months[month] + " " + year;

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(date);
        if (
        date === today.getDate() &&
        year === today.getFullYear() &&
        month === today.getMonth()
        ) {
        cell.classList.add("bg-info");
        }
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
    }
    tbl.appendChild(row);
  }
} */


/*.......... Menu hamburger ............*/
/* const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
}); */

/* const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarDropdown = document.querySelector('.navbar-dropdown');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('navbar-mobile-show');
  navbarDropdown.classList.toggle('navbar-mobile-show');
}); */

/* function toggleMenu() {
  var menuDropdown = document.getElementById('menu-dropdown');
  if (menuDropdown.style.display === 'none') {
    menuDropdown.style.display = 'block';
  } else {
    menuDropdown.style.display = 'none';
  }
} */

/*.......... Canlendrier ............*/

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectMonth = document.getElementById("month-name");
let months = [ "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre" ];
let monthAndYear = document.getElementById("month-name");
showCalendar(currentMonth, currentYear);

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbl = document.getElementById("calendar-body");
  tbl.innerHTML = "";

  selectMonth.innerHTML = months[month] + " " + year;

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(date);
        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          cell.classList.add("bg-info");
        }
        cell.appendChild(cellText);
        if (j === 2) {
          cell.setAttribute("title", "Mercredi de 14H30 à 19h danse classique pour tous.");
        } else if (j === 5) {
          cell.setAttribute("title", "De 10h à 12h30 initiation à la danse classique pour les plus petits (2 ans à 5 ans) et de 13h30 à 20h répétition pour les initiés.");
        }
        row.appendChild(cell);
        date++;
      }
    }
    tbl.appendChild(row);
  }
}

/* Formulaire d'inscription */
document.querySelector('#formulaire-inscription').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Formulaire soumis');
  
  const nom = document.querySelector('#nom').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  
  console.log(nom, email, password);
});
 












