document.addEventListener('DOMContentLoaded', () => {
    addData()
})


function getDogs(){
    return fetch("http://localhost:3000/dogs")
    .then(resp=>resp.json())
    .then(data=>data)
}


const addData= async ()=>{
    let tableBody = document.getElementById('table-body')
    let dogs = await getDogs()
    console.log(dogs) 
    
    dogs.map(dog=>{
        const row = document.createElement('tr')
        row.innerHTML= `
        <tr>
            <td>${dog.name} </td>
            <td>${dog.breed}</td>
            <td>${dog.sex}</td>
            <td><button>Edit Dog</button></td>
        </tr>        
        `
        tableBody.appendChild(row)
        
        const btn = document.querySelector('button');
        btn.addEventListener('click',editDog)
    })
}











