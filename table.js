function Table(){
    let table = document.createElement("table")
    table.setAttribute("id", "bookTable")

    let tableHead = document.createElement("thead")
    tableHead.setAttribute("id", "tHead")

    let tableRow = document.createElement("tr")

    let th1 =  document.createElement("th")
    th1.textContent = "Title"

    let th2 =  document.createElement("th")
    th2.textContent = "Author"

    let th3 =  document.createElement("th")
    th3.textContent = "Publication Year"

    let th4 =  document.createElement("th")
    th4.textContent = "ISBN"

    let th5 =  document.createElement("th")
    th5.textContent = "Book Status"

    let th6 =  document.createElement("th")
    th6.textContent = "Date Added"

    let tableBody =  document.createElement("tbody")
    tableBody.setAttribute("id", "bookBody")

    tableRow.append(th1, th2, th3, th4, th5, th6)
    tableHead.append(tableRow)
    table.append(tableHead, tableBody)
    return table
}

export default Table