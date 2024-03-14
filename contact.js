
var sideNavMenu = document.getElementById("side-navbar-activate");
var sidenavbar = document.querySelector(".side-navbar");

sideNavMenu.addEventListener("click", function(){
    sidenavbar.style.marginLeft = "0px";
});

document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%";
});

var submit = document.getElementsByName("submit");

for (var i = 0; i < submit.length; i++) {
    submit[i].addEventListener("click", function(){
        alert("Your contact is submitted");
    });
}
