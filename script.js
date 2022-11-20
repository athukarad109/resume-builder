function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateCV() {
  let nameField = document.getElementById("nameField").value;
  document.getElementById("nameT1").innerHTML = nameField;
  document.getElementById("nameT2").innerHTML = nameField;
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;
  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;
  document.getElementById("linkT").innerHTML =
    document.getElementById("linkedField").value;
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  let wef = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wef) {
    str = str + `<li>${e.value}</l1>`;
  }
  document.getElementById("weT").innerHTML = str;

  let wef1 = document.getElementsByClassName("aqField");
  let str1 = "";
  for (let e of wef1) {
    str1 = str1 + `<li>${e.value}</l1>`;
  }
  document.getElementById("aqT").innerHTML = str1;

  let file = document.getElementById("profileImage").files[0];
  if (file != undefined) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      document.getElementById("imgT").src = reader.result;
    };
  }

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("whole-template").style.display = "flex";
  document.getElementById("mainpage").style.display = "none";
  document.getElementById("nav").style.display = "none";
}

function printCV() {
  document.getElementById("btnGroup").style.display = "none";
  document.getElementById("prev-temp").style.display = "none";
  document.getElementById("next-temp").style.display = "none";
  // document.getElementById("cv-template-1").style.width = "100%";
  document.getElementById("cv-template-1").style.border = "none";
  window.print();
  document.getElementById("btnGroup").style.display = "block";
}

function resetCV() {
  document.getElementById("cv-form").style.display = "block";
  document.getElementById("cv-template-1").style.display = "none";
}

templateList = ["tmp-1", "tmp-2", "tmp-3"];

let index = 0;

function prevTemp() {
  // if (index <= 0) {
  //   index = templateList.lenth - 1;
  // } else {
  //   index -= 1;
  // }
  console.log("prev");
  //document.getElementById("cv-template-1").classList.remove(currTemp);
  let currTemp = templateList[index];
  document.getElementById("cv-template-1").classList.add(currTemp);
  index -= 1;
}

function nextTemp() {
  console.log("next");
  let currTemp = templateList[index];
  document.getElementById("cv-template-1").classList.add(currTemp);
  index += 1;
}

prevButton = document.querySelector(".prev-temp");
prevButton.addEventListener("click", prevTemp);

prevButton = document.querySelector(".next-temp");
prevButton.addEventListener("click", nextTemp);

// Drag and drop

var choseElement;

const move = function (element) {
  const elements = document.querySelectorAll(".draggable");
  elements.forEach((element) => {
    element.addEventListener("mousedown", () => {
      element.style.position = "absolute";
      choseElement = element;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;

        choseElement.style.left = x - 50 + "px";
        choseElement.style.top = y - 50 + "px";
      };
    });
  });

  document.onmouseup = (e) => {
    choseElement = null;
  };
};
