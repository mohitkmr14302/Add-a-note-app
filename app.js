console.log("wlcome to app js");
showdata();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let inputtxt = document.getElementById("inputtxt");
    let addtittle = document.getElementById("addtittle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myobj = {
        tittle: addtittle.value,
        txt: inputtxt.value
    }
    notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    // console.log(notesobj);
    inputtxt.value = "";
    addtittle.value = "";
    showdata();
})

function showdata() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div id="show" class="showdiv">
            <h3> ${element.tittle}</h3>
            <p>${element.txt}</p>
            <button id="showbtn" onclick="deletenote(${index})">Delete </button>
        </div>
        `
    });
    let showtext = document.getElementById("showtext");
    if (notesobj.length != 0) {
        showtext.innerHTML = html;
    }
    else {
        showtext.innerHTML = `Nothing to show! Add a Note section to add note`;
    }
}
function deletenote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showdata();

}

let searchbar = document.getElementById("searchbar");
searchbar.addEventListener("input", function () {
    // console.log("input event fired");
    let inputval = searchbar.value;
    let notecard = document.getElementsByClassName("showdiv");
    Array.from(notecard).forEach(function (element) {
       let ctext=element.getElementsByTagName("p")[0].innerText;
        // console.log(ctext);
        if(ctext.includes(inputval)){
            element.style.display="block";
        }
        else{      
    element.style.display="none";
        }
    })
})