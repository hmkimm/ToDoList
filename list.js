const add = document.querySelector(".add");
const inp = document.querySelector(".text");
const listWrap = document.querySelector(".list-wrap");
const $delete = document.querySelector(".delete");

let myArr = [];

// 할일 추가, 완료, 삭제 버튼
add.addEventListener("click", () => {
  if (inp.value == "") {
    alert("할 일을 입력하세요!");
  } else {
    const myLi = document.createElement("li");
    myLi.innerHTML = inp.value;
    listWrap.appendChild(myLi);

    const myBtn = document.createElement("button");
    myBtn.innerHTML = "X";
    myLi.appendChild(myBtn);

    // array에 할 일 집어넣기
    myArr.push(inp.value);
    inp.value = "";

    //삭제
    myBtn.addEventListener("click", () => {
      myLi.remove();
    });

    //수정;
    myLi.addEventListener("click", () => {
      myLi.classList.toggle("horizontal-line");
    });

    //추가;
    myLi.classList.add("li-style");
    console.log(myArr);
  }

  console.log(myArr);
  localStorage.setItem("todo", JSON.stringify(myArr));
});

// 모두 삭제 버튼
$delete.addEventListener("click", () => {
  let yes = confirm("정말 모두 삭제하시겠습니까?");
  if (yes) {
    const $lis = document.querySelectorAll("li");
    for (let i = 0; i < $lis.length; i++) {
      listWrap.removeChild($lis[i]);
    }
  }
});

// $(".buy").click(function (e) {
//   let title = $(e.target).siblings("h5").html();

//   if (localStorage.getItem("cart") != null) {
//     let 꺼낸거 = JSON.parse(localStorage.cart);
//     꺼낸거.push(title);
//     localStorage.setItem("cart", JSON.stringify(꺼낸거));
//   } else {
//     localStorage.setItem("cart", JSON.stringify([title]));
//   }
// });
