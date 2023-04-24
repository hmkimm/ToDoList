const add = document.querySelector(".add");
const inp = document.querySelector(".text");
const listWrap = document.querySelector(".list-wrap");
const $delete = document.querySelector(".delete");

let myArr = [];

function save() {
  localStorage.setItem("todos", JSON.stringify(myArr));
}
// 할일 추가, 완료, 삭제 버튼
add.addEventListener("click", () => {
  if (inp.value == "") {
    alert("할 일을 입력하세요!");
  } else {
    const myLi = document.createElement("li");
    myLi.innerHTML = inp.value;
    listWrap.appendChild(myLi);

    const todo = {
      id: Date.now(),
      text: inp.value,
    };

    myLi.id = todo.id;
    // save();
    const myBtn = document.createElement("button");
    myBtn.innerHTML = "X";
    myLi.appendChild(myBtn);

    // array에 할 일 집어넣기
    myArr.push(todo);
    inp.value = "";

    //삭제
    myBtn.addEventListener("click", (e) => {
      myArr = myArr.filter((todo) => todo.id != e.target.parentElement.id);
      myLi.remove();
      save();
    });

    //수정;
    myLi.addEventListener("click", () => {
      myLi.classList.toggle("horizontal-line");
    });

    //li style;
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

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  // console.log("check:" + userTodos);
  // console.log("hi");

  // if (userTodos != "") {
  //   userTodos.forEach((todo) => {
  //     addItem(todo);
  //   });
  // }

  myArr = userTodos;
};

const addItem = (text) => {
  if (text !== "") {
    const myLi = document.createElement("li");
    myLi.innerHTML = inp.value;
    listWrap.appendChild(myLi);

    const myBtn = document.createElement("button");
    myBtn.innerHTML = "X";
    myLi.appendChild(myBtn);
  }
};

init();
