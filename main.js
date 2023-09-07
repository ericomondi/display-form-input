
let list1 = []
let list2 = []
let list3 = []


let n = 1
let x = 0 

function insert_row(){

    list1[x] = document.getElementById("first_name").value
    list2[x] = document.getElementById("second_name").value
    list3[x] = document.getElementById("email").value

    let get_table = document.getElementById("table")
    let newrow = get_table.insertRow(n)


    let cell1 = newrow.insertCell(0)
    let cell2 = newrow.insertCell(1)
    let cell3 = newrow.insertCell(2)

    cell1.innerHTML = list1[x]
    cell2.innerHTML = list2[x]
    cell3.innerHTML = list3[x]

    n++
    x++

}

let user_details = document.getElementById("details_form");
user_details.addEventListener("submit", function (e) {
  // prevents the browser from refreshing
  e.preventDefault();
  let first_name = document.getElementById("first_name");
  let second_name = document.getElementById("second_name");
  let email = document.getElementById("email");

  if (
    first_name.value.length > 0 &&
    second_name.value.length > 0 &&
    email.value.length > 0
  ) {
    document.getElementById("suc_alertmes").innerText = "Succesfully Submited";
  } else {
    document.getElementById("err_alertmes").innerText =
      "ensure all fields are entered";
  }
});

