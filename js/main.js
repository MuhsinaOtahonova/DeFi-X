function shiftBoxes() {
    // İki wrapper'ı da seçelim
    var firstWrapper = document.querySelector('.about-us-boxes');
    var secondWrapper = document.querySelector('.defi-popular-boxes');

    // İlk wrapper için işlemler
    shiftWrapper(firstWrapper);

    // İkinci wrapper için işlemler
    shiftWrapper(secondWrapper);
}

function shiftWrapper(wrapper) {
    var firstBox = wrapper.firstElementChild;
    var boxWidth = firstBox.offsetWidth; 

    wrapper.style.transition = "transform 0.5s ease-in-out";
    wrapper.style.transform = "translateX(-"+(boxWidth)+")";

    setTimeout(function() {
        wrapper.removeChild(firstBox); 
        wrapper.appendChild(firstBox); 
    }, 500); 
}

setInterval(shiftBoxes, 6000);




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

