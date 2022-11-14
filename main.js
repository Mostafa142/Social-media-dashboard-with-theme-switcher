const toggler = document.getElementById("flexSwitchCheckChecked");

toggler.addEventListener("click", () => {
  console.log(document.body.classList.toggle('dark-theme'));
});
