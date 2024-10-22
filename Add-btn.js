function addBtn(){
    let header = document.createElement("div")
    header.setAttribute("class", "header")


    let logo = document.createElement("div")
    logo.setAttribute("class", "logo")

    let image = document.createElement("img")
    image.setAttribute("src", "Images/depositphotos_209906186-stock-photo-library-icon-internet-button-white-removebg-preview.png")

    let searchBar = document.createElement("div")
    searchBar.setAttribute("class", "search-bar")

    let searchInput = document.createElement("input")
    searchInput.setAttribute("type", "search")
    searchInput.setAttribute("name", "search")
    searchInput.setAttribute("id", "search")

    let searchIcon = document.createElement("i")
    searchIcon.setAttribute("class", "fa fa-search")
    searchIcon.setAttribute("aria-hidden", "true")

    let btnAdd = document.createElement("div")
    btnAdd.setAttribute("class", "add-btn")

    let button1 = document.createElement("button")
    button1.setAttribute("id", "btnName")
    button1.textContent = "Add button"

    logo.append(image)
    searchBar.append(searchInput, searchIcon)
    btnAdd.append(button1)
    header.append(logo, searchBar, btnAdd)
    return header
}

export default addBtn

