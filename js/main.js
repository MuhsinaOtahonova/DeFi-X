document.addEventListener("DOMContentLoaded", function() {
    var scrollInterval = 2000;

    var wrapper = document.querySelector('.wrapper');
    var boxes = document.querySelectorAll('.defi-popular-box');

    var scrollDistance = boxes[0].offsetWidth + 15;

    
    var activeIndex = 0;

   
    var autoScroll;

    
    document.querySelector('.defi-popular').addEventListener('mouseenter', function() {
        autoScroll = setInterval(function() {
            wrapper.scrollLeft += scrollDistance;
            
            activeIndex++;

            if (activeIndex >= boxes.length) {
                wrapper.scrollLeft = 0;
                activeIndex = 0;
            }
        }, scrollInterval);
    });
    document.querySelector('.defi-popular').addEventListener('mouseleave', function() {
        clearInterval(autoScroll);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var scrollInterval1 = 2000;

    var wrapper1 = document.querySelector('.wrapper1');
    var boxes1 = document.querySelectorAll('.about-us-box');

    var scrollDistance1 = boxes1[0].offsetWidth + 15;

    
    var activeIndex1 = 0;

   
    var autoScroll1;

    
    document.querySelector('.about-us').addEventListener('mouseenter', function() {
        autoScroll1 = setInterval(function() {
            wrapper1.scrollLeft += scrollDistance1;
            
            activeIndex1++;

            if (activeIndex1 >= boxes1.length) {
                wrapper1.scrollLeft = 0;
                activeIndex1 = 0;
            }
        }, scrollInterval1);
    });
    document.querySelector('.about-us').addEventListener('mouseleave', function() {
        clearInterval(autoScroll1);
    });
});



// Tarih bilgisini almak için bir Date objesi oluşturuyoruz
var currentDate1 = new Date();
var currentDate2 = new Date();

// Tarihi "gun ay yıl" formatında alıyoruz ve HTML içindeki ilgili span elementine ekliyoruz
document.getElementById("current-date1").innerHTML = currentDate1.getDate() + " " + getMonthName(currentDate1.getMonth()) + " " + currentDate1.getFullYear();
document.getElementById("current-date2").innerHTML = currentDate2.getDate() + " " + getMonthName(currentDate2.getMonth()) + " " + currentDate2.getFullYear();

// Ay ismini döndüren bir yardımcı fonksiyon
function getMonthName(month) {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[month];
}

function myFunction(index) {
    var dots = document.getElementById("dots"+index);
    var moreText = document.getElementById("more"+index);
    var btnText = document.getElementById("myBtn"+index);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = ">"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "<"; 
      moreText.style.display = "inline";
    }
  }