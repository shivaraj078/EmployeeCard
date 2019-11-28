// var langs = ["java","nodejs", "python","ruby"];
// langs.pop();           //------removes ruby
// console.log(langs);

// var langs = ["java","nodejs", "python","ruby"];
// langs.shift();          //--------removes java
// console.log(langs);


// var langs = ["java","nodejs", "python","ruby"];
// langs.push("angular");          //--------inserts angular after ruby(last position)
// console.log(langs);


// var langs = ["java","nodejs", "python","ruby"];
// langs.unshift("angular");          //--------inserts angular befor java ruby(1st position)
// console.log(langs);


// var langs = ["java","nodejs", "python","ruby"];
// langs.splice(1,0,"react");          //--------deletes nodejs (pos1) and adds react in tht place
// console.log(langs);                 //(1,1,"react") => 1:start pos, 1:how many elements to delete from strt pos, react:the element which added instead of deleted element


// ---------------------iterate array values------------------//
//traditional way
    // var langs = ["java","python","nodejs","react"];
    // for (var i=0 ; i<=langs.length;i++)
    // {
    //     console.log(langs[i]);
    // }

//array method (foreach)
    // var langs = ["java","python","nodejs","react"];
    // langs.forEach(function(value,index,array)
    // {
    //     console.log(`${index} : ${value}`);
    // })

var employees = [
    {
        emp_id : "cap101",
        emp_name : "John",
        emp_photo : "https://cdn.pixabay.com/photo/2015/07/20/12/57/man-852766_960_720.jpg",
        emp_age : 20, 
        emp_gender : "male",
        emp_company : "capgemini",
        emp_salary : 30000,
        emp_designation : "web developer",
        emp_doj  : new Date("2015/05/05"),
        emp_location : "bangalore",
        emp_education : "BE"

    },
    {
        emp_id : "cap102",
        emp_name : "Sam",
        emp_photo : "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083384_960_720.jpg",
        emp_age : 21, 
        emp_gender : "female",
        emp_company : "capgemini",
        emp_salary : 25000,
        emp_designation : "java developer",
        emp_doj  : new Date("2015/05/06"),
        emp_location : "mangalore",
        emp_education : "BE"

    },
    {
        emp_id : "cap103",
        emp_name : "Britto",
        emp_photo : "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg",
        emp_age : 22, 
        emp_gender : "male",
        emp_company : "capgemini",
        emp_salary : 50000,
        emp_designation : "angular developer",
        emp_doj  : new Date("2015/05/07"),
        emp_location : "mandya",
        emp_education : "BE"

    },
    {
        emp_id : "cap104",
        emp_name : "Angel",
        emp_photo : "https://cdn.pixabay.com/photo/2016/03/23/04/01/beautiful-1274056_960_720.jpg",
        emp_age : 20, 
        emp_gender : "female",
        emp_company : "capgemini",
        emp_salary : 15000,
        emp_designation : "python developer",
        emp_doj  : new Date("2015/05/05"),
        emp_location : "gujarat",
        emp_education : "BE"

    }
];

var emp =[];
employees.forEach(empData =>
{
    var test = emp.push( `<div class="card">
    <img src="${empData.emp_photo}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${empData.emp_name}</h5>
      <span class="badge badge-success float-right">${empData.emp_id}</span><br>
      <hr class="hr">
      <span class="badge badge-danger float-right">${empData.emp_designation}</span><br>
      <li class="list-group-item"> Salary : ${empData.emp_salary}</li>
      <li class="list-group-item"> Location : ${empData.emp_location}</li>
      <li class="list-group-item"> Age : ${empData.emp_age}</li>
      <li class="list-group-item"> Company : ${empData.emp_company}</li>
      <li class="list-group-item"> Gender : ${empData.emp_gender}</li>
      <li class="list-group-item"> Date Of Joining : ${empData.emp_doj.toString()}</li>
    </div>
  </div>`);

});

document.getElementById('template').innerHTML = emp ;