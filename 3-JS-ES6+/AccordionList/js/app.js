const buttons = document.querySelectorAll(".accordion-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;

    console.log(accordionContent.scrollHeight + "px");

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});
