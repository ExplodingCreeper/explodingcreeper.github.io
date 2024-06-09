function openNav() {
    document.getElementById("SideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("SideNav").style.width = "0px";
    var x =
    document.getElementById("addonList");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
    var y =
    document.getElementById("dropable");
    if (y.style.marginTop == "140px") {
        y.style.marginTop = "0px";
    }
}

function addonList() {
    var x =
    document.getElementById("addonList");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    var y =
    document.getElementById("dropable");
    if (y.style.marginTop == "140px") {
        y.style.marginTop = "0px";
    } else {
        y.style.marginTop = "140px";
    }
}

function square(num) {
   num * num;
}

console.log(square(2))
