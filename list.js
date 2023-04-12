const $add = document.querySelector(".add");
const $inp = document.querySelector(".text");
const $listWrap = document.querySelector(".list-wrap");
const $delete = document.querySelector(".delete");

// 할일 추가 버튼
$add.addEventListener("click", () => {
  if ($inp.value == "") {
    alert("글자를 입력하세요!");
  }
  const $myLi = document.createElement("ul");
  // const $myBtn = document.createElement("button");
  $myLi.innerHTML = $inp.value;
  // $myBtn.innerHTML = "+";
  $listWrap.appendChild($myLi);
  // $listWrap.appendChild($myBtn);
  $inp.value = "";

  $myLi.style.backgroundColor = "white";
});

// 모두 삭제 버튼
$delete.addEventListener("click", () => {
  $myLi.innerHTML = "";
  $listWrap.removeChild("ul");
  $myLi.remove();
  const $remove = (document.querySelector("ul").innerHTML = "");
});
