const $add = document.querySelector(".add");
const $inp = document.querySelector(".text");
const $listWrap = document.querySelector(".list-wrap");
const $delete = document.querySelector(".delete");

// 할일 추가 버튼
$add.addEventListener("click", () => {
  if ($inp.value == "") {
    alert("글자를 입력하세요!");
  }
  const $myLi = document.createElement("li");

  $myLi.innerHTML = $inp.value;

  $listWrap.appendChild($myLi);

  $myLi.classList.add("li-style");
  $inp.value = "";
});

// 모두 삭제 버튼
$delete.addEventListener("click", () => {
  const $ul = document.querySelectorAll(".li-style");
  for (let i = 0; i < $ul.length; i++) {
    $listWrap.removeChild($ul[i]);
  }
});
