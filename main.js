window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("headerID").style.fontSize = "20px";
    document.getElementById("headerID").style.padding = "1.5%";
  } else {
    document.getElementById("headerID").style.fontSize = "35px";
    document.getElementById("headerID").style.padding = "4%";
  }
}

mybutton = document.getElementById("topButton");

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}