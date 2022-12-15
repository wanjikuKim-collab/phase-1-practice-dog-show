document.addEventListener('DOMContentLoaded', () => {
    addData();
    changesMade()
})



const addData= async ()=>{   
    const tableBody = document.getElementById('table-body'); 
    let dogs = await getDogs()
    
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
        tableRow.dataset.id = dog.id;
        tableBody.appendChild(tableRow)       

    })  
    tableBody.addEventListener('click',editDog) 
}



//edits dog information
const editDog=(e)=>{
    const form = document.querySelector('#dog-form');

    //tr refer to tableRow
    let tr = e.target.parentElement.parentElement.children;	
    const nameInput = tr[0].innerText
	const breedInput = tr[1].innerText
	const nameSex= tr[2].innerText
    
    //display table content on the form
    form[0].value=nameInput;
    form[1].value=breedInput;
    form[2].value=nameSex;    
    form.dataset.id = e.target.parentNode.parentNode.dataset.id
}

const changesMade=()=>{
    const form = document.querySelector('#dog-form');
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        //acces by name value
         const dogForm = e.target;
         const id = dogForm.dataset.id;
         console.log(id)
         const name = dogForm.name.value;
         const breed = dogForm.breed.value;
         const sex = dogForm.sex.value;
         updateDog(id,{name,breed,sex})
         
    })
}

//fetches the dog data
function getDogs(){
    return fetch("http://localhost:3000/dogs")
    .then(resp=>resp.json())
    .then(data=>data)
}

// updates dog information
function updateDog(id,{name,breed,sex}){
    fetch(`http://localhost:3000/dogs/${id}`,{
        method: "PATCH",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name,breed,sex})
    }
    )
    .then(resp=>resp.json())
    .then(data=>console.log(data))
}











