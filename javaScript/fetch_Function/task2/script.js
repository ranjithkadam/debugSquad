fetch("https://dummyjson.com/todos")
.then(value => value.json())
.then(data => todos(data.todos)  /*console.log(data.todos)*/)
.catch(error => console.log("Unable to Fect data.."))


function todos(data){
     
    data.forEach( item =>{
        let status="";
        if(item.completed){
            status="Yes";
        }
        else{
            status="No";
        }
        document.getElementById("container").innerHTML+=`
            <tr>
            <td>${item.id}</td>
            <td>${item.todo}</td>  
            <td>${status}</td>
        </tr>
        `;
    })
}