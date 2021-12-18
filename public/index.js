const About = document.querySelector(".About");
const Shop = document.querySelector(".Shop");
const contact = document.querySelector(".contact");
const facebook = document.querySelector(".fa-facebook");
const git = document.querySelector(".fa-github-square");
const insta = document.querySelector(".fa-instagram");
const brandName = document.querySelectorAll(".brand-name");
const btnDetail = document.querySelectorAll(".button-detail");
const feedback = document.querySelector(".feedback");
const viewAll = document.getElementById("button-viewall");
const addproducts = document.querySelector(".addproduct");

About.addEventListener("click", () => {
  window.scrollTo({
    top: 1221,
    behavior: "smooth",
  });
});

Shop.addEventListener("click", () => {
  window.scrollTo({
    top: 1722,
    behavior: "smooth",
  });
  if (location != "http://localhost:8000/") {
    location.replace("http://localhost:8000/allproduct");
  }
});
contact.addEventListener("click", () => {
  window.scrollTo({
    top: 2767,
    behavior: "smooth",
  });
});
facebook.addEventListener("click", () => {
  window.open(
    "https://www.facebook.com/profile.php?id=100006094980856",
    "_blank"
  );
});

insta.addEventListener("click", () => {
  window.open("https://www.instagram.com/whoami6394/", "_blank");
});
git.addEventListener("click", () => {
  window.open("https://github.com/Erosnguyen", "_blank");
});
for (let i = 0; i < brandName.length; i++) {
  brandName[i].addEventListener("click", () => {
    location.reload();
    location.replace("http://localhost:8000/");
  });
}

for (let i = 0; i < btnDetail.length; i++) {
  btnDetail[i].addEventListener("click", () => {
    location = "http://localhost:8000/detail";
  });
}
feedback.addEventListener("click", () => {
  location.replace("http://localhost:8000/feedback");
});

if (viewAll) {
  viewAll.addEventListener("click", () => {
    location.replace("http://localhost:8000/allproduct");
  });
}
if (addproducts) {
  addproducts.addEventListener("click", () => {
    location.replace("http://localhost:8000/addproduct");
  });
}
