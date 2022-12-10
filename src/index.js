document.addEventListener('DOMContentLoaded', () => {
    addData();
})

//fetches the dog data
function getDogs(){
    return fetch("http://localhost:3000/dogs")
    .then(resp=>resp.json())
    .then(data=>data)
}


// adds and displays data to the table body
const addData= async ()=>{
    let tableBody = document.getElementById('table-body')
    let dogs = await getDogs()
    console.log(dogs) 
    
    dogs.map(dog=>{
        const tableRow = document.createElement('tr')
        tableRow.innerHTML= `
        <tr>
            <td>${dog.name} </td>
            <td>${dog.breed}</td>
            <td>${dog.sex}</td>
            <td><button>Edit Dog</button></td>
        </tr>        
        `
        tableBody.appendChild(tableRow)       

    })
    tableBody.addEventListener('click',editDog)
}



//edits dog information
const editDog=(e)=>{
    const form = document.querySelector('form')
    const btn = document.querySelector('button')
    let row = btn.parentElement.parentElement.children;
    console.log(row)
	form.children[0].value = row[0].innerText
	form.children[1].value = row[1].innerText
	form.children[2].value = row[2].innerText
	form.children[3].dataset.id = row[3].children[0].dataset.id
}









