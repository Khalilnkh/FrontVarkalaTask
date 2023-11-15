const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");


const optionsMain = document.getElementById("options")

const buttons = document.querySelectorAll('.type-btns button');

buttons.forEach(button => {
  button.addEventListener("click", function() {

    buttons.forEach(btn => {
      btn !== button ? btn.classList.remove('active') : btn.classList.add('active')
    })

  })
})

selectBtn.addEventListener("click",  function() {
  optionsMain.style.visibility = 'visible';
  optionMenu.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
    optionsMain.style.visibility = 'hidden';
  });
});
