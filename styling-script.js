const input_box_cooling = document.getElementById("input-box-cooling");
const my_input_cooling = document.getElementById("my-input-cooling");
const dropdown_cooling_li = document.querySelectorAll("#dropdown-cooling li");
const dropdown_cooling = document.querySelector("#dropdown-cooling");
    
    input_box_cooling.addEventListener("click", () => {
        dropdown_cooling.classList.toggle("active-cooling");
        });
    
    dropdown_cooling_li.forEach(item => {
        item.addEventListener("click", () => {
          dropdown_cooling.classList.remove("active-cooling");
          my_input_cooling.value = item.innerHTML;
        });
      });


const input_box_thickness = document.getElementById("input-box-thickness");
const my_input_thickness = document.getElementById("my-input-thickness");
const dropdown_thickness_li = document.querySelectorAll("#dropdown-thickness li");
const dropdown_thickness = document.querySelector("#dropdown-thickness");
    
    input_box_thickness.addEventListener("click", () => {
        dropdown_thickness.classList.toggle("active-thickness");
        });
    
    dropdown_thickness_li.forEach(item => {
        item.addEventListener("click", () => {
          dropdown_thickness.classList.remove("active-thickness");
          my_input_thickness.value = item.innerHTML;
        });
      });


const input_box_floor = document.getElementById("input-box-floor");
const my_input_floor = document.getElementById("my-input-floor");
const dropdown_floor_li = document.querySelectorAll("#dropdown-floor li");
const dropdown_floor = document.querySelector("#dropdown-floor");
    
    input_box_floor.addEventListener("click", () => {
        dropdown_floor.classList.toggle("active-floor");
        });
    
    dropdown_floor_li.forEach(item => {
        item.addEventListener("click", () => {
          dropdown_floor.classList.remove("active-floor");
          my_input_floor.value = item.innerHTML;
        });
      });


const input_box_doortype = document.getElementById("input-box-doortype");
const my_input_doortype = document.getElementById("my-input-doortype");
const dropdown_doortype_li = document.querySelectorAll("#dropdown-doortype li");
const dropdown_doortype = document.querySelector("#dropdown-doortype");
    
    input_box_doortype.addEventListener("click", () => {
        dropdown_doortype.classList.toggle("active-doortype");
        });
    
    dropdown_doortype_li.forEach(item => {
        item.addEventListener("click", () => {
          dropdown_doortype.classList.remove("active-doortype");
          my_input_doortype.value = item.innerHTML;
        });
      });


const input_box_doorlocation = document.getElementById("input-box-doorlocation");
const my_input_doorlocation = document.getElementById("my-input-doorlocation");
const dropdown_doorlocation_li = document.querySelectorAll("#dropdown-doorlocation li");
const dropdown_doorlocation = document.querySelector("#dropdown-doorlocation");
    
    input_box_doorlocation.addEventListener("click", () => {
        dropdown_doorlocation.classList.toggle("active-doorlocation");
        });
    
    dropdown_doorlocation_li.forEach(item => {
        item.addEventListener("click", () => {
          dropdown_doorlocation.classList.remove("active-doorlocation");
          my_input_doorlocation.value = item.innerHTML;
        });
      });


const input_box_coolingunit = document.getElementById("input-box-coolingunit");
const my_input_coolingunit = document.getElementById("my-input-coolingunit");
const dropdown_coolingunit_li = document.querySelectorAll("#dropdown-coolingunit li");
const dropdown_coolingunit = document.querySelector("#dropdown-coolingunit");
    
    input_box_coolingunit.addEventListener("click", () => {
        dropdown_coolingunit.classList.toggle("active-coolingunit");
        });
    
    dropdown_coolingunit_li.forEach(item => {
        item.addEventListener("click", () => {
          dropdown_coolingunit.classList.remove("active-coolingunit");
          my_input_coolingunit.value = item.innerHTML;
        });
      });


const input_box_installation = document.getElementById("input-box-installation");
const my_input_installation = document.getElementById("my-input-installation");
const dropdown_installation_li = document.querySelectorAll("#dropdown-installation li");
const dropdown_installation = document.querySelector("#dropdown-installation");
    
    input_box_installation.addEventListener("click", () => {
        dropdown_installation.classList.toggle("active-installation");
        });
    
    dropdown_installation_li.forEach(item => {
        item.addEventListener("click", () => {
          dropdown_installation.classList.remove("active-installation");
          my_input_installation.value = item.innerHTML;
        });
      });


const input_box_stripcurtain = document.getElementById("input-box-stripcurtain");
const my_input_stripcurtain = document.getElementById("my-input-stripcurtain");
const dropdown_stripcurtain_li = document.querySelectorAll("#dropdown-stripcurtain li");
const dropdown_stripcurtain = document.querySelector("#dropdown-stripcurtain");
    
    input_box_stripcurtain.addEventListener("click", () => {
        dropdown_stripcurtain.classList.toggle("active-stripcurtain");
        });
    
    dropdown_stripcurtain_li.forEach(item => {
        item.addEventListener("click", () => {
          dropdown_stripcurtain.classList.remove("active-stripcurtain");
          my_input_stripcurtain.value = item.innerHTML;
        });
      });


const input_box_floorbeams = document.getElementById("input-box-floorbeams");
const my_input_floorbeams = document.getElementById("my-input-floorbeams");
const dropdown_floorbeams_li = document.querySelectorAll("#dropdown-floorbeams li");
const dropdown_floorbeams = document.querySelector("#dropdown-floorbeams");
    
    input_box_floorbeams.addEventListener("click", () => {
        dropdown_floorbeams.classList.toggle("active-floorbeams");
        });
    
    dropdown_floorbeams_li.forEach(item => {
        item.addEventListener("click", () => {
          dropdown_floorbeams.classList.remove("active-floorbeams");
          my_input_floorbeams.value = item.innerHTML;
        });
      });


const input_box_racking = document.getElementById("input-box-racking");
const my_input_racking = document.getElementById("my-input-racking");
const dropdown_racking_li = document.querySelectorAll("#dropdown-racking li");
const dropdown_racking = document.querySelector("#dropdown-racking");
    
    input_box_racking.addEventListener("click", () => {
        dropdown_racking.classList.toggle("active-racking");
        });
    
    dropdown_racking_li.forEach(item => {
        item.addEventListener("click", () => {
          dropdown_racking.classList.remove("active-racking");
          my_input_racking.value = item.innerHTML;
        });
      });

