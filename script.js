let aHref = document.querySelectorAll("a");
let checkbox = document.getElementById("checkbox");
let p = document.querySelectorAll("p");
let div = document.querySelectorAll("div");
let h1 = document.querySelectorAll("h1");
const goTopButton = document.querySelector(".fa-arrow-up");

function toggle() {
  if (checkbox.checked) {
    document.body.style.background = "black";
    p.forEach((e) => {
      e.style.color = "white";
    });

    div.forEach((e) => {
      e.style.backgroundColor = "black";
    });
    h1.forEach((e) => {
      e.style.color = "white";
    });
    aHref.forEach((e) => {
      e.style.color = "white";
    });
  } else {
    document.body.style.background = "white";
    p.forEach((e) => {
      e.style.color = "black";
    });
    div.forEach((e) => {
      e.style.backgroundColor = "white";
    });
    h1.forEach((e) => {
      e.style.color = "black";
    });
    aHref.forEach((e) => {
      e.style.color = "black";
    });
  }
}
goTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const yassir = 10;
