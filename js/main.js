// BTN-Top  // Header // Progress Bar // Count Down
let btnTop = document.querySelector(".btn-top");
let header = document.querySelector(".landing-page");
let about = document.querySelector(".about");
let prog = document.querySelectorAll(
  ".about .row .col-left .skills .progress .progress-bar"
);
window.onscroll = function () {
  if (this.scrollY >= 100) {
    btnTop.classList.add("active");
    header.classList.add("active");
  } else {
    btnTop.classList.remove("active");
    header.classList.remove("active");
  }
  if (this.scrollY >= about.offsetTop + 180) {
    prog.forEach((pro) => {
      pro.style.width = pro.dataset.width;
    });
  }
  if (this.scrollY >= countDown.offsetTop - 150) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
btnTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//links
let link = document.querySelectorAll(".links-container .links li ");
let linkContainer = document.querySelector(".links-container .links");
let btnMenu = document.querySelector(".menu");

link.forEach((el) => {
  el.addEventListener("click", function () {
    link.forEach((li) => {
      li.classList.toggle("active");
    });
    this.classList.toggle("active");
  });
});

btnMenu.addEventListener("click", function () {
  header.classList.add("active");
  linkContainer.classList.toggle("open");
});

//Typing
let text =
  "CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer";
i = 0;
window.onload = function () {
  let typing = setInterval(() => {
    document.querySelector(".content p").textContent += text[i];
    i++;
    if (i > text.length - 1) {
      clearInterval(typing);
    }
  }, 150);
};

// Count Down
let nums = document.querySelectorAll(".count-down .count span");
let countDown = document.querySelector(".count-down");
let started = false;

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1500 / goal);
}
// Gallary
let gallary = document.querySelectorAll(".portofolo .box .img img");
gallary.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    let popupImage = document.createElement("img");
    popupImage.src = img.src;
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);
    let closeButton = document.createElement("span");
    let closeButtonText = document.createTextNode("X");
    closeButton.appendChild(closeButtonText);
    closeButton.className = "close-button";
    popupBox.appendChild(closeButton);
  });
});
//Close Gallary
document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});
