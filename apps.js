
// NavBar //
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"), // Dark/Light (Sun/Moon) Toggle //
      searchToggle = document.querySelector(".searchToggle"), // Hamburger SideBar //
      sidebarOpen = document.querySelector(".sidebarOpen"), // Hamburger SideBar //
      siderbarClose = document.querySelector(".siderbarClose"); // Hamburger SideBar //

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// Toggles dark/light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // Keeps user selected mode (dark/light) upon page refresh/file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
 
      
// Toggles sideBar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

// SideBar //
body.addEventListener("click" , e =>{  
    let clickedBurger = e.target;

    if(!clickedBurger.classList.contains("sidebarOpen") && !clickedBurger.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


// Cursor Trail //
window.addEventListener("load", (event) => {
  new cursoreffects.bubbleCursor();
});
const targetElement = document.querySelector("#ghost");
new cursoreffects.bubbleCursor({ element: targetElement });
// Create
let cursorEffect = new bubbleCursor();

// Destroy
cursorEffect.destroy();
