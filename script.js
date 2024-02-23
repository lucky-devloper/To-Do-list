
document.querySelector("#push").onclick = () => {

    const inputE1 = document.querySelector("input").value
    console.log(inputE1);

    if (inputE1 == "") {
        alert("Please Enter Task")
    } else {
        document.querySelector("#task").innerHTML += `<div class = "list">
                <span class = "taskname">${inputE1}</span><button class = "delete"><i class="fa-solid fa-trash"></i></button>
                </div>`
    }

    var delbtn = document.querySelectorAll(".delete");
    for (let i = 0; i < delbtn.length; i++) {
        delbtn[i].onclick = function () {
            this.parentNode.remove();
        }
    }

    var list = document.querySelectorAll(".list");
    for (let i = 0; i < list.length; i++) {
        list[i].onclick = function () {
            this.classList.toggle('complete')
        }
    }

    document.querySelector('input').value = ""

}