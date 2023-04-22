const add = document.querySelector(".add");
let inp = document.querySelector(".text");
const listWrap = document.querySelector(".list-wrap");
const $delete = document.querySelector(".delete");
const myLi = document.createElement("li");

let myArr = [inp.value];
// 할일 추가, 완료, 삭제 버튼
add.addEventListener("click", () => {
  if (inp.value == "") {
    alert("할 일을 입력하세요!");
  } else {
    createEle();
    myArr.push(inp.value);
    console.log(myArr);

    //수정;
    myLi.addEventListener("click", () => {
      myLi.classList.toggle("horizontal-line");
    });
  }
});

// 추가
myLi.classList.add("li-style");
inp.value = "";

function createEle() {
  myLi.innerHTML = inp.value;
  listWrap.appendChild(myLi);

  const myBtn = document.createElement("button");
  myBtn.innerHTML = "X";
  myLi.appendChild(myBtn);
}

// 개별삭제 버튼
// const delBtn = document.querySelectorAll("li button");
// console.log(delBtn.length);
// for (let i = 0; i < delBtn.length; i++)
//   delBtn[i].addEventListener("click", () => {
//     document.querySelector(".list-wrap").removeChild("myLi");
//     console.log(delBtn.length);
//   });

// myBtn.onClick = function (e) {
//   let pnode = e.target.parentNode;
//   listWrap.removeChild(pnode);
// };

// // 완료 처리 버튼
// myLi.addEventListener("click", () => {
//   myLi.classList.add("horizontal-line");
// });

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
