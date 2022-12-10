document.addEventListener('DOMContentLoaded', () => {
    addData();
})
let tableBody = document.getElementById('table-body')
// adds and displays data to the table body
const addData= async ()=>{   
    let dogs = await getDogs()
    console.log(dogs) 

    let tableBody = document.getElementById('table-body')  
    dogs.map(dog=>{
        //create the  table rows
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
    const nameInput= document.getElementById('enter-name')
    const breedInput= document.getElementById('enter-breed')
    const nameSex= document.getElementById('enter-sex')
   
    //tr refer to tableRow
    let tr = e.target.parentElement.parentElement.children;
    console.log(tr)
	
    nameInput.value = tr[0].innerText
	breedInput.value = tr[1].innerText
	nameSex.value = tr[2].innerText
	// form[3].dataset.id = tr[3].children[0].dataset.id
    
    const form = document.getElementById('dog-form')
    if(form){
        form.addEventListener('submit', (e)=>{
            e.preventDefault()
            console.log(e)
            //contents of inputs will be displayed in table
            tr[0].textContent=nameInput.value
            tr[1].textContent=breedInput.value
            tr[2].textContent=nameSex.value
        },false)
    }


}



//fetches the dog data
function getDogs(){
    return fetch("http://localhost:3000/dogs")
    .then(resp=>resp.json())
    .then(data=>data)
}

//updates dog information
// function updateDog(dogObj){
//     fetch(`http://localhost:3000/dogs/${dogObj.id}`,{
//         method: "PATCH",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(dogObj)
//     }
//     )
//     .then(resp=>resp.json())
//     .then(dog=>console.log(dog))
// }











