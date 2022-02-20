const buttons = document.querySelectorAll(".accordion-button");

document.querySelectorAll('.accordion-content').forEach((item) => {
  item.style.maxHeight = 0;
})

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});
