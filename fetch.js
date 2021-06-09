
function getAllData(){
fetch(`https:book-server0905.herokuapp.com/authors`,)
.then(response => response.json())
.then(data => {
    console.log(data)
let output="";
data.forEach(element => {
    output+=`
    
    <h3>${element.authorName}</h3>
    <h3>${element.authorAge}</h3>
    <h3>${element.authorGender}</h3>
    <h3>${element.authorAwards}</h3>
    `
    document.getElementById("display").innerHTML=output;
});
})
}
function postData()
{

    let name=document.getElementById("name").value.trim();
    let age=document.getElementById("age").value.trim();
    let gender=document.getElementById("gender").value.trim();
    let Awards=document.getElementById("Awards").value.trim();
        console.log(name,age,gender,Awards)
    fetch("https://book-server0905.herokuapp.com/authors",{
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify({
            authorName:name,
            authorAge:age,
            authorGender:gender,
            authorAwards:Awards
        })

    }).then(response=>{return response.json()})
    .then(data=>console.log(data))
    console.log(response)
}
function getUser()
{
    
    const author=document.getElementById("search").value.trim();
    if(author == ''){
    alert("invalid input");
    }
    else{
        fetch(`https://book-server0905.herokuapp.com/authors/${author}`)
.then(response => response.json())
.then(data => {
  
let output='';

    output=`
    
    <h3>${data.authorName}</h3>
    <h3>${data.authorAge}</h3>
    <h3>${data.authorGender}</h3>
    <h3>${data.authorAwards}</h3>
    `
    document.getElementById("display").innerHTML=output;
});

    }
}
function updateData()

{
    
    let authorName=document.getElementById("nameUpadte").value.trim();
    let updatedAuthorAge=document.getElementById("AgeUpdate").value.trim();
    let updatedAuthorgender=document.getElementById("gender").value.trim();
    let updatedAuthorAwards=document.getElementById("AwardsUpdate").value.trim();
    fetch(`https://book-server0905.herokuapp.com/authors/${authorName}`,{
        method:'PATCH',
        headers:{
            "content-type" :'application/json'
        },
        body:JSON.stringify({
            
            authorAge:updatedAuthorAge,
            authorAwards:updatedAuthorAwards,
            authorGender:updatedAuthorgender

        })
    })
    .then(response=>response.json()).
     then(data=>console.log(data))
}