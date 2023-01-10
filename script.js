let row = document.getElementById("row");
let Tag = document.getElementById("Tag");
let display = document.getElementById("display");

let form1 = document.getElementById("form");
form1.addEventListener("submit", getCharacter);

async function getCharacter(event) {
  event.preventDefault();
  let searchedCharacter = document.getElementById("hp-input").value;
  console.log(searchedCharacter);

  let response = await fetch("https://hp-api.onrender.com/api/characters");

  let result = await response.json();
  try {
    result
      .filter((ele) => ele.name == `${searchedCharacter}`)
      .map((element) => {
        display.innerHTML = `<div class="card1 mb-3" style="max-width: 540px;">
    <div class="row no-gutters ">
      <div class="col-md-4">
        <img class="image-display" src="${element.image}" alt="Character">
      </div>
      <div class="col-md-8">
        <div class="card-body-1">
          <h5 class="card-title">${element.name}</h5>
          <h6 class="card-title">House : ${element.house}</h6>
          <h6 class="card-title">Species : ${element.species}</h6>
          <h6 class="card-title">Ancestry : ${element.ancestry}</h6>
          <h6 class="card-title">Wand : ${element.wand.core}</h6>
    
          
        </div>
      </div>
    </div>
    </div>`;
      });
  } catch (error) {
    console.log(error);
  }
}

/*===============<<<<<<<<<<<<<<< Home >>>>>>>>>>>>>>>=============== */

async function fetchHome() {
  row.innerHTML = "";

  let response = await fetch("https://hp-api.onrender.com/api/characters");

  let result = await response.json();
  try {
    console.log(result);
    result.forEach((ele) => {
      Tag.innerHTML = "Home";
      row.innerHTML += `<div class="col-lg-4","col-sm-12","col-md-4">
    <div class="main">
    <div  class="card">
    <img class="img" src="${ele.image}"  alt="Photo"  > 
    <div class="card-header" id="card-header"><h6>${ele.name}</h6></div>
        
        <div class="card-body">
        <h5 class="card-title">School Name : <small>Hogwarts School of Witchcraft and Wizardry</small></h5>
          <h5 class="card-title">Gender : ${ele.gender}</h5>
          <h5 class="card-title">House : ${ele.house}</h5>
          <h5 class="card-title">Date of birth : ${ele.dateOfBirth}</h5>
          <h5 class="card-title">Species : ${ele.species}</h5>
         
    </div>
    </div>
    </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

/*===============<<<<<<<<<<<<<<< Students >>>>>>>>>>>>>>>=============== */

async function fetchStudents() {
  Tag.innerHTML = "Students";
  row.innerHTML = "";

  let searchedChar = document.getElementById("hp-input").value;

  let response = await fetch(
    "https://hp-api.onrender.com/api/characters/students"
  );

  let result = await response.json();
  try {
    result.forEach((ele) => {
      row.innerHTML += `<div class="col-lg-4","col-sm-12","col-md-4">
    <div class="main">
    <div  class="card">
    <img class="img" src="${ele.image}"  alt="Photo"  > 
    <div class="card-header" id="card-header"><h6>${ele.name}</h6></div>
        
        <div class="card-body">
        <h5 class="card-title">School Name : <small>Hogwarts School of Witchcraft and Wizardry</small></h5>
          <h5 class="card-title">Gender : ${ele.gender}</h5>
          <h5 class="card-title">House : ${ele.house}</h5>
          <h5 class="card-title">Date of birth : ${ele.dateOfBirth}</h5>
          <h5 class="card-title">Species : ${ele.species}</h5>
         
    </div>
    </div>
    </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

/*===============<<<<<<<<<<<<<<< Staff >>>>>>>>>>>>>>>=============== */

async function fetchSaffs() {
  Tag.innerHTML = "Staffs";
  row.innerHTML = "";

  let searchedChar = document.getElementById("hp-input").value;

  let response = await fetch(
    "https://hp-api.onrender.com/api/characters/staff"
  );

  let result = await response.json();
  try {
    result.forEach((ele) => {
      row.innerHTML += `<div class="col-lg-4","col-sm-12","col-md-4">
    <div class="main">
    <div  class="card">
    <img class="img" src="${ele.image}"  alt="Photo"  > 
    <div class="card-header" id="card-header"><h6>${ele.name}</h6></div>
        
        <div class="card-body">
        <h5 class="card-title">School Name : <small>Hogwarts School of Witchcraft and Wizardry</small></h5>
          <h5 class="card-title">Gender : ${ele.gender}</h5>
          <h5 class="card-title">House : ${ele.house}</h5>
          <h5 class="card-title">Date of birth : ${ele.dateOfBirth}</h5>
          <h5 class="card-title">Species : ${ele.species}</h5>
         
    </div>
    </div>
    </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}
/*===============<<<<<<<<<<<<<<< House >>>>>>>>>>>>>>>=============== */

/*===============<<<<<<<<<<<<<<< Gryffindor >>>>>>>>>>>>>>>=============== */
async function fetchHouseGryffindor() {
  Tag.innerHTML = "House : Gryffindor";
  row.innerHTML = "";

  let response = await fetch(
    "https://hp-api.onrender.com/api/characters/house/gryffindor"
  );

  let result = await response.json();
  try {
    result.forEach((ele) => {
      row.innerHTML += `<div class="col-lg-4","col-sm-12","col-md-4">
                <div class="main">
                <div  class="card">
                <img class="img" src="${ele.image}"  alt="Photo"  > 
                <div class="card-header" id="card-header"><h6>${ele.name}</h6></div>
                    
                    <div class="card-body">
                    <h5 class="card-title">School Name : <small>Hogwarts School of Witchcraft and Wizardry</small></h5>
                      <h5 class="card-title">Gender : ${ele.gender}</h5>
                      <h5 class="card-title">House : ${ele.house}</h5>
                      <h5 class="card-title">Date of birth : ${ele.dateOfBirth}</h5>
                      <h5 class="card-title">Species : ${ele.species}</h5>
                     
                </div>
                </div>
                </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

/*2.===============<<<<<<<<<<<<<<< Slytherine >>>>>>>>>>>>>>>=============== */

async function fetchHouseSlytherine() {
  Tag.innerHTML = "House : Slytherine";
  row.innerHTML = "";

  let response = await fetch(
    "https://hp-api.onrender.com/api/characters/house/Slytherin"
  );

  let result = await response.json();
  try {
    
    result.forEach((ele) => {
      row.innerHTML += `<div class="col-lg-4","col-sm-12","col-md-4">
                <div class="main">
                <div  class="card">
                <img class="img" src="${ele.image}"  alt="Photo"  > 
                <div class="card-header" id="card-header"><h6>${ele.name}</h6></div>
                    
                    <div class="card-body">
                    <h5 class="card-title">School Name : <small>Hogwarts School of Witchcraft and Wizardry</small></h5>
                      <h5 class="card-title">Gender : ${ele.gender}</h5>
                      <h5 class="card-title">House : ${ele.house}</h5>
                      <h5 class="card-title">Date of birth : ${ele.dateOfBirth}</h5>
                      <h5 class="card-title">Species : ${ele.species}</h5>
                     
                </div>
                </div>
                </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

/*3.===============<<<<<<<<<<<<<<< HufflePuff >>>>>>>>>>>>>>>=============== */

async function fetchHouseHufflePuff() {
  Tag.innerHTML = "House : HufflePuff";
  row.innerHTML = "";

  let response = await fetch(
    "https://hp-api.onrender.com/api/characters/house/Hufflepuff"
  );

  let result = await response.json();
  try {
   
    result.forEach((ele) => {
      row.innerHTML += `<div class="col-lg-4","col-sm-12","col-md-4">
        <div class="main">
        <div  class="card">
        <img class="img" src="${ele.image}"  alt="Photo"  > 
        <div class="card-header" id="card-header"><h6>${ele.name}</h6></div>
            
            <div class="card-body">
            <h5 class="card-title">School Name : <small>Hogwarts School of Witchcraft and Wizardry</small></h5>
              <h5 class="card-title">Gender : ${ele.gender}</h5>
              <h5 class="card-title">House : ${ele.house}</h5>
              <h5 class="card-title">Date of birth : ${ele.dateOfBirth}</h5>
              <h5 class="card-title">Species : ${ele.species}</h5>
             
        </div>
        </div>
        </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

/*4.===============<<<<<<<<<<<<<<< Ravenclaw >>>>>>>>>>>>>>>=============== */

async function fetchHouseRavenclaw() {
  Tag.innerHTML = "House : Ravenclaw";
  row.innerHTML = "";

  let response = await fetch(
    "https://hp-api.onrender.com/api/characters/house/Ravenclaw"
  );

  let result = await response.json();
  try {
  
    result.forEach((ele) => {
      row.innerHTML += `<div class="col-lg-4","col-sm-12","col-md-4">
        <div class="main">
        <div  class="card">
        <img class="img" src="${ele.image}"  alt="Photo"  > 
        <div class="card-header" id="card-header"><h6>${ele.name}</h6></div>
            
            <div class="card-body">
            <h5 class="card-title">School Name : <small>Hogwarts School of Witchcraft and Wizardry</small></h5>
              <h5 class="card-title">Gender : ${ele.gender}</h5>
              <h5 class="card-title">House : ${ele.house}</h5>
              <h5 class="card-title">Date of birth : ${ele.dateOfBirth}</h5>
              <h5 class="card-title">Species : ${ele.species}</h5>
             
        </div>
        </div>
        </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

/*===============<<<<<<<<<<<<<<< Spell >>>>>>>>>>>>>>>=============== */
async function fetchSpell() {
  Tag.innerHTML = "Spell";
  row.innerHTML = "";

  let searchedChar = document.getElementById("hp-input").value;

  let response = await fetch("https://hp-api.onrender.com/api/spells");

  let result = await response.json();
  try {
    
    result.forEach((ele) => {
      row.innerHTML += `<div class="col-lg-4","col-sm-12","col-md-4">
    <div class="main">
    <div  class="card">
    
    <div class="card-header" id="card-header"><h6> Spell Name : ${ele.name}</h6></div>
        
        <div class="card-body">
        
          <h5 class="card-title">Description : ${ele.description}</h5>
         
    </div>
    </div>
    </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}
