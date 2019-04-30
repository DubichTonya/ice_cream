var linkLogin = document.querySelector(".header-user_menu li:nth-child(2)");
var popup = document.querySelector(".modal-window_login");

linkLogin.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

var linkFeedback = document.querySelector(".container-map_contact a");
var popupFeedback = document.querySelector(".modal-window_feedback");
var closeFeebback = document.querySelector(".window-feedback_close");

linkFeedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupFeedback.classList.add("modal-show");
});

closeFeebback.addEventListener("click", function(evt){
  evt.preventDefault();
  popupFeedback.classList.remove("modal-show");
});

var linkCatalog = document.querySelector(".header-site_menu li:nth-child(2)");
var popupCatalog = document.querySelector(".modal-window_catalog");

linkCatalog.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupCatalog.classList.toggle("modal-show");
});

var linkSearch = document.querySelector(".header-user_menu li:first-child");
var popupSearch =document.querySelector(".modal-window_search");

linkSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupSearch.classList.toggle("modal-show");
});


var email = popup.querySelector("[name=useremails]");
var password = popup.querySelector("[name=password]");

var form = popup.querySelector("form");

form.addEventListener("submit", function(evt){
  if (!email.value || !password.value) {
  evt.preventDefault();
  console.log("Нужно ввести логин и пароль");
} else{
  localStorage.setItem("email");
}
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode ===27) {
    evt.preventDefault();

    if(popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  };
});