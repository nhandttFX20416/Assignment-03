"use strict";
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Tạo form nhập email để hiện thông tin cá nhân
const btnSubmit = document.querySelector(".btn-submit-email");

btnSubmit.addEventListener("click", function () {
  const getEmail = document.querySelector("#personal-email").value;
  if (getEmail == "") {
    alert("Please input your email");
  } else if (!getEmail.match(regex)) {
    alert("You have entered an invalid email address!");
  } else {
    document.querySelector(".section-content").classList.remove("d-none");
    document.querySelector(".form").classList.add("d-none");
  }
});

// Tạo chức năng ở phần kinh nghiệm

const showViewMore = function (x) {
  x.getElementsByClassName("btn-view-more")[0].classList.remove("d-none");
};
const hideViewMore = function (x) {
  x.getElementsByClassName("btn-view-more")[0].classList.add("d-none");
};

const showContent = function (x) {
  if (x.textContent == "▼ View more") {
    x.textContent = "▼ View less";
    x.parentNode.parentNode
      .querySelector(".job-content")
      .classList.remove("d-none");
  } else {
    x.textContent = "▼ View more";
    x.parentNode.parentNode
      .querySelector(".job-content")
      .classList.add("d-none");
  }
};
