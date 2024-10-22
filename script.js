import addBtn from "./Add-btn.js"
import Table from "./table.js"
import Form from "./form.js"
const bodyCont = document.getElementById("body-cont")
function displayAppended(){
    bodyCont.append(addBtn(), Table(), Form())
}
displayAppended()
const addButton = document.getElementById("btnName")
const formDisplay = document.getElementById("formDiv")
const iconDisplay = document.getElementById("hide")
const form = document.getElementById("form")
const bookTitle = document.getElementById("title")
const bookAuthor = document.getElementById("author")
const bookPub = document.getElementById("pub-year")
const bookISBN = document.getElementById("isbn")
const bookStatus = document.getElementById("status")
const bookDate = document.getElementById("date")
const tableBody = document.getElementById("bookBody")


function displayForm(){
    addButton.addEventListener("click", ()=>{
      formDisplay.style.visibility = formDisplay.style.visibility === "visible" ? "hidden" : "visible"
    })
    
    iconDisplay.addEventListener("click", ()=>{
        formDisplay.style.visibility = formDisplay.style.visibility === "visible" ? "hidden" : "visible";
    })
}
displayForm()

form.addEventListener("submit", formSubmit)

function validateInput1(){
    if(bookAuthor.value.length === 0){
        alert("Please enter a value")
        return false
    }else if(!bookAuthor.value.trim().match(/^[a-zA-Z\s-]+$/i)){
        alert("Please enter a valid author name (letters, spaces, or hyphens only)")
        return false
    }else{
        return true
    }
}

function validateInput2(){
    if(bookTitle.value.length === 0){
        alert("Please enter a value")
        return false
    }else if(!bookTitle.value.trim().match(/^[a-zA-Z\s-]+$/i)){
        alert("Please enter a valid title name (letters, spaces, or hyphens only)")
        return false
    }else{
        return true
    }
}

function validateInput3(){
    if(bookPub.value.length === 0){
        alert("Please enter a value")
        return false
    }else if(!bookPub.value.trim().match(/^[1-9]\d{3}$/)){
        alert("Please enter a valid publication name (letters, spaces, or hyphens only)")
        return false
    }else{
        return true
    }
}

function validateInput4(){
    if(bookISBN.value.length === 0){
        alert("Please enter a value")
        return false
    }else if(!bookISBN.value.trim().match(/^(?:978|979)\d{9}[\dX]$/)){
        alert("Please enter a valid isbn name (letters, spaces, or hyphens only)")
        return false
    }else{
        return true
    }
}

function validateInput5(){
    if(bookStatus.value.length === 0){
        alert("Please enter a value")
        return false
    }else if(!bookStatus.value.trim().match(/^(true|false)$/)){
        alert("Please enter a valid status name (letters, spaces, or hyphens only)")
        return false
    }else{
        return true
    }
}


let arrayForm = []
let signal = -1

function formSubmit(event){
    event.preventDefault();

    let authorValue = bookAuthor.value;
    let titleValue = bookTitle.value;
    let pubValue = bookPub.value;
    let isbnValue = bookISBN.value;
    let statusValue = bookStatus.value;
    let dateValue = bookDate.value;


    if(signal >= 0){
        arrayForm = arrayForm.map((item, index)=>{
            if(signal === index){
                return{
                    authorObj : authorValue,
                    titleObj : titleValue,
                    pubObj : pubValue,
                    isbnObj : isbnValue,
                    statusObj : statusValue,
                    dateObj : dateValue
                }
            }
            return item
        })
        localStorage.setItem("Form Details", JSON.stringify(arrayForm));
        signal = -1;
    }else{
        if(validateInput1() && validateInput2() && validateInput3() && validateInput4() && validateInput5()) {
            let formObj = {
                authorObj : authorValue,
                titleObj : titleValue,
                pubObj : pubValue,
                isbnObj : isbnValue,
                statusObj : statusValue,
                dateObj : dateValue,
            };
            arrayForm.push(formObj);
            localStorage.setItem("Form Details", JSON.stringify(arrayForm));
        }
    }
    getProps();
    formDisplay.style.visibility = "hidden";
    form.reset();
}


window.addEventListener("load", ()=>{
    getProps()
})

function getProps(){
    if(localStorage.getItem("Form Details") !== null){
    arrayForm = JSON.parse(localStorage.getItem("Form Details"))
    }else{
        arrayForm = []
    }
    displayBody()
}


function displayBody(){
    tableBody.innerHTML = ""
    arrayForm.forEach((item, index)=>{
        let tableRow = document.createElement("tr")
        tableRow.setAttribute("id", `${index}`)
        tableRow.classList.add("return")

       

        let authorTd = document.createElement("td")
        authorTd.textContent = item.authorObj
  

        let titleTd = document.createElement("td")
        titleTd.textContent = item.titleObj

        let pubTd = document.createElement("td")
        pubTd.textContent = item.pubObj

        let isbnTd = document.createElement("td")
        isbnTd.textContent = item.isbnObj

        let statusTd = document.createElement("td")
        statusTd.textContent = item.statusObj

        let dateTd = document.createElement("td")
        dateTd.textContent = item.dateObj

        let iconsDiv = document.createElement("div")
        iconsDiv.setAttribute("class", "icons-div")

        let trashIcon = document.createElement("i")
        trashIcon.setAttribute("class", "fa fa-trash")
        trashIcon.setAttribute("aria-hidden", "true")
        trashIcon.setAttribute("data-action", "delete")

        let editIcon = document.createElement("i")
        editIcon.setAttribute("class", "fa fa-pencil")
        editIcon.setAttribute("aria-hidden", "true")
        editIcon.setAttribute("data-action", "edit")

        iconsDiv.append(trashIcon, editIcon)

       function divIcons(){
        iconsDiv.addEventListener("click", (event)=>{

            let userTarget = event.target
            let parentElement = userTarget.parentElement.parentElement
            let updatedParentElement = parentElement.id
           
           
           
           if(!parentElement.classList.contains("return")){
               return
           }
           
           let ID = Number(updatedParentElement)
           let check = userTarget.dataset.action
           
           if(check === "delete"){
            deleteFun(ID)
           }

           if(check === "edit"){
            editFun(ID)
           }
           
           console.log(userTarget)
           console.log(parentElement)
           console.log(ID)
           console.log(check)


        })
       }

       divIcons()

        tableRow.append(titleTd, authorTd, pubTd, isbnTd, statusTd, dateTd, iconsDiv)

        tableBody.append(tableRow)
    })
}

function deleteFun(ID){
    arrayForm = arrayForm.filter((item, index)=>{
       return index !== ID
    })
    localStorage.setItem("Form Details", JSON.stringify(arrayForm))
    getProps()
}

function editFun(ID){
    arrayForm.forEach((item, index)=>{
        if(ID === index){
            bookTitle.value = item.titleObj
            bookAuthor.value = item.authorObj
            bookPub.value = item.pubObj
            bookISBN.value = item.isbnObj
            bookStatus.value = item.statusObj
            bookDate.value =  item.dateObj
            formDisplay.style.visibility = "visible"
            signal = ID
        }
    })
}