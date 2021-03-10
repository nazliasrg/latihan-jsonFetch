fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        userData(json);
    })

function userData(data){
    let output = '';
    for (let i=0; i<9; i++){
        output += `
        <div class="card mx-3 my-3" style="width: 18rem;">
            <img src="${data[i].url}" class="card-img-top" alt="${data[i].id}">
            <div class="card-body">
                <h5 class="card-title">${data[i].title}</h5>
            </div>
        </div>
        `;
    }

    document.getElementById('card-img').innerHTML = output
}


