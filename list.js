const $add = document.querySelector(".add");
const $inp = document.querySelector(".text");
const $listWrap = document.querySelector(".list-wrap");
const $delete = document.querySelector(".delete");

$add.addEventListener("click", () => {
  const $myLi = document.createElement("ul");
  const $myBtn = document.createElement("button");
  $myLi.innerHTML = $inp.value;
  $myBtn.innerHTML = "+";
  $listWrap.appendChild($myLi);
  $listWrap.appendChild($myBtn);

  $myLi.style.backgroundColor = "white";
});
