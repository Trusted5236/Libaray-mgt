function Form(){
    let formDiv = document.createElement("div")
    formDiv.setAttribute("class", "formDiv")
    formDiv.setAttribute("id", "formDiv")

    let form = document.createElement("form")
    form.setAttribute("id", "form")

    let iconDiv = document.createElement("div")
    iconDiv.setAttribute("class", "close-icon")

    let icon =  document.createElement("i")
    icon.setAttribute("class", "fa fa-times")
    icon.setAttribute("aria-hidden", "true")
    icon.setAttribute("id", "hide")

    let inputDiv1 = document.createElement("div")
    inputDiv1.setAttribute("class", "inputs")

    let label1 = document.createElement("label")
    label1.setAttribute("for", "title")
    label1.textContent = "Enter Book Title"

    let input1 =  document.createElement("input")
    input1.setAttribute("type", "text")
    input1.setAttribute("id", "title")
    input1.setAttribute("name", "title")
    input1.setAttribute("placeholder", "Book Title")

    let inputDiv2 = document.createElement("div")
    inputDiv2.setAttribute("class", "inputs")

    let label2 = document.createElement("label")
    label2.setAttribute("for", "author")
    label2.textContent = "Enter Authors Name"

    let input2 =  document.createElement("input")
    input2.setAttribute("type", "text")
    input2.setAttribute("id", "author")
    input2.setAttribute("name", "author")
    input2.setAttribute("placeholder", "Authors Name")


    let inputDiv3 = document.createElement("div")
    inputDiv3.setAttribute("class", "inputs")

    let label3 = document.createElement("label")
    label3.setAttribute("for", "pub-year")
    label3.textContent = "Enter Publication Year"

    let input3 =  document.createElement("input")
    input3.setAttribute("type", "text")
    input3.setAttribute("id", "pub-year")
    input3.setAttribute("name", "pub-year")
    input3.setAttribute("placeholder", "Publication Year")

    let inputDiv4 = document.createElement("div")
    inputDiv4.setAttribute("class", "inputs")

    let label4 = document.createElement("label")
    label4.setAttribute("for", "isbn")
    label4.textContent = "Enter Book ISBN"

    let input4 =  document.createElement("input")
    input4.setAttribute("type", "text")
    input4.setAttribute("id", "isbn")
    input4.setAttribute("name", "isbn")
    input4.setAttribute("placeholder", "Book ISBN")


    let inputDiv5 = document.createElement("div")
    inputDiv5.setAttribute("class", "inputs")

    let label5 = document.createElement("label")
    label5.setAttribute("for", "status")
    label5.textContent = "Enter Book Status"

    let input5 =  document.createElement("input")
    input5.setAttribute("type", "text")
    input5.setAttribute("id", "status")
    input5.setAttribute("name", "status")
    input5.setAttribute("placeholder", "Book Status")

    let inputDiv6 = document.createElement("div")
    inputDiv6.setAttribute("class", "inputs")

    let label6 = document.createElement("label")
    label6.setAttribute("for", "date")
    label6.textContent = "Enter Date Added"

    let input6 =  document.createElement("input")
    input6.setAttribute("type", "date")
    input6.setAttribute("id", "date")
    input6.setAttribute("name", "date")
    input6.setAttribute("placeholder", "Date Added")

    let formBtnDiv = document.createElement("div")
    formBtnDiv.setAttribute("class", "formBtn")

    let formBtn = document.createElement("button")
    formBtn.setAttribute("type", "submit")
    formBtn.textContent = "Submit"

    iconDiv.append(icon)

    inputDiv1.append(label1, input1)
    inputDiv2.append(label2, input2)
    inputDiv3.append(label3, input3)
    inputDiv4.append(label4, input4)
    inputDiv5.append(label5, input5)
    inputDiv6.append(label6, input6)

    formBtnDiv.append(formBtn)

    form.append(iconDiv, inputDiv1, inputDiv2, inputDiv3, inputDiv4, inputDiv5, inputDiv6, formBtnDiv)

    formDiv.append(form)

    

    return formDiv
}

export default Form