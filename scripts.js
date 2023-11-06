const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      seachBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});
seachBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});


modeSwitch.addEventListener("click", () => {
   
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Ligth Mode"
    }else{
        modeText.innerText = "Dark Mode"
    }
});