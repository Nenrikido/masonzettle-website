function setActiveH(button) {
    document.getElementsByClassName("active")[0].className = "";

    button.className = "active";

    document.getElementById("main").classList.add("home");

    if(document.getElementById("main").classList.contains("projects") )
      document.getElementById("main").classList.toggle("projects");
}

function setActiveP(button) {
    document.getElementsByClassName("active")[0].className = "";

    button.className = "active";

    document.getElementById("main").classList.add("projects");

    if(document.getElementById("main").classList.contains("home") )
      document.getElementById("main").classList.toggle("home");
}
