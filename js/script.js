let slideIndex = 1;

function setSlide(input, index) {
  slideIndex = index;
  let item = document.querySelector(`#${input}`);
  let slides = [...document.querySelector(".slides").children];
  slides.forEach((element) => {
    element.classList.remove("active");
  });
  item.classList.add("active");
}

setInterval(() => {
  slideIndex += 1;
  if (slideIndex == 4) {
    slideIndex = 1;
  }
  setSlide(`slide${slideIndex}`, slideIndex);
}, 3000);

/////////////////////////////////////////////////////////////////

let remainingTime = 70000;

function setTime() {
  if (remainingTime == 0) return;
  let h = Math.floor(remainingTime / 3600);
  let m = Math.floor((remainingTime % 3600) / 60);
  let s = (remainingTime % 3600) % 60;
  document.querySelector("#hours").innerHTML = h;
  document.querySelector("#minutes").innerHTML = m;
  document.querySelector("#seconds").innerHTML = s;
}
setInterval(() => {
  remainingTime -= 1;
  setTime();
}, 1000);

////////////////       user panel        /////////////////////////////

function togglePane() {
  let panel = document.querySelector("#panel");
  console.log(panel.className);
  if (panel.className == "panel") {
    panel.classList.replace("panel", "panel-min");
    flag = 0;
    active_user_name_arrow(0);
    activeTextMenuBtn(0);
    activeUserDetails(0);
  } else {
    panel.classList.replace("panel-min", "panel");
    flag = 1;
    active_user_name_arrow(1);
    activeTextMenuBtn(1);
  }
}
function activeTextMenuBtn(flag) {
  let btn_menu_items = document.querySelectorAll(".menu-btn .item");
  let item_texts = document.querySelectorAll(".menu-btn .item span");
  if (flag) {
    btn_menu_items.forEach((ele) => {
      ele.style.justifyContent = "flex-start";
      ele.style.paddingRight = "30px";
    });
    item_texts.forEach((ele) => {
      ele.style.display = "block";
    });
  } else {
    btn_menu_items.forEach((ele) => {
      ele.style.justifyContent = "center";
      ele.style.paddingRight = "0px";
    });
    item_texts.forEach((ele) => {
      ele.style.display = "none";
    });
  }
}
function toggleUserDetails() {
  let userDetails = document.querySelector(".user-info .details");
  let arrow = document.querySelector(".user-info .img-name i");
  if (userDetails.style.display != "none") {
    userDetails.style.display = "none";
    arrow.className = "fas fa-angle-down";
  } else {
    userDetails.style.display = "block";
    arrow.className = "fas fa-angle-up";
  }
}
function activeUserDetails(flag) {
  let userDetails = document.querySelector(".user-info .details");
  let arrow = document.querySelector(".user-info .img-name i");
  if (flag) {
    userDetails.style.display = "block";
    arrow.className = "fas fa-angle-up";
  } else {
    userDetails.style.display = "none";
    arrow.className = "fas fa-angle-down";
  }
}
function active_user_name_arrow(flag) {
  let imgNameBox = document.querySelector(".user-info .img-name");
  let name = document.querySelector(".user-info .img-name .name");
  let arrow = document.querySelector(".user-info .img-name i");
  if (flag) {
    name.style.display = "block";
    arrow.style.display = "block";
    imgNameBox.style.justifyContent = "space-between";
  } else {
    name.style.display = "none";
    arrow.style.display = "none";
    imgNameBox.style.justifyContent = "center";
  }
}
