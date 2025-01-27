const sideMenu = document.getElementById('sideMenu');

function openMenu() {
      sideMenu.style.display = "block";
}
function closeMenu() {
      sideMenu.style.display = "none";
}

window.onclick = function (event) {
      if (event.target == sideMenu) {
            sideMenu.style.display = "none";
      }
}