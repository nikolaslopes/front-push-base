document.documentElement.addEventListener("mousemove", onMouseMove);

function onMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}
