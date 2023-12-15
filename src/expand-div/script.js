const coll = document.querySelector(".collapsible");
const content = document.querySelector(".content");

coll.addEventListener("click", function () {
  coll.classList.toggle("active");
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});
