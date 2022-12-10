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
        //create row element
        let row = document.createElement('tr');

        //create cells
        let c1= document.createElement('td')
        let c2= document.createElement('td')
        let c3= document.createElement('td')
        let c4= document.createElement('td')

        //add data to cells
        c1.textContent=dog.name;
        c2.textContent=dog.breed;
        c3.textContent=dog.sex;
        c4.innerHTML=`<button id="edit">Edit Dog</button>`;

        //append cells to row
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);

        //append row to table body
        tableBody.appendChild(row);
    })
}









