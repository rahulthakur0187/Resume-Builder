function addEdu() {
  let addnewedu = document.querySelector(".addnewedu");

  let textareaObj = document.createElement("textarea");
  textareaObj.classList.add("education");

  addnewedu.appendChild(textareaObj);
}

// this function i screated for adding extra input for skills
function addskills() {
  // in which div i want to add a element
  let newskilladdOb = document.getElementById("newskilladd");

  let inputElement = document.createElement("input");
  // this classlist take the property from class =skills
  inputElement.classList.add("skills");

  newskilladdOb.appendChild(inputElement);
}

// this function i screated for adding extra experience textarea
function addexp() {
  let addnewexpOb = document.getElementById("addnewexp");
  let textareaOb = document.createElement("textarea");
  textareaOb.classList.add("experience");
  // textareaOb.setAttribute("rows",2);  set attribute can set the value

  addnewexpOb.appendChild(textareaOb);
}

// generate btn function

function generateCV() {
  let name = document.getElementById("name").value;
  let namet1 = document.getElementById("namet1");
  let namet2 = document.getElementById("namet2");
  namet1.innerHTML = name;
  namet2.innerHTML = name;

  // shorter or faster way to compare the values
  document.getElementById("numbert").innerHTML =
    document.getElementById("number").value;
  document.getElementById("emailt").innerHTML =
    document.getElementById("email").value;
  document.getElementById("addresst").innerHTML =
    document.getElementById("address").value;
  document.getElementById("linkedint").innerHTML =
    document.getElementById("linkedin").value;
  document.getElementById("objectivet").innerHTML =
    document.getElementById("objective").value;

  // this is for education

  let educationO = document.getElementsByClassName("education");

  let str1 = "";
  for (let e of educationO) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }
  document.getElementById("educationt").innerHTML = str1;

  // skill

  let skillsO = document.getElementsByClassName("skills");
  let str2 = "";
  for (let e of skillsO) {
    str2 = str2 + `<li> ${e.value} </li>`;
  }
  document.getElementById("skillst").innerHTML = str2;

  // for experience

  let experienceO = document.getElementsByClassName("experience");
  let str3 = "";
  for (let e of experienceO) {
    str3 = str3 + `<li> ${e.value} </li>`;
  }
  document.getElementById("experiencet").innerHTML = str3;

  let fileInput = document.getElementById("yourimage");
  let file = fileInput.files[0];

  // used this condition if  you don't want to select  image file

  if (file) {
    let reader = new FileReader();

    reader.readAsDataURL(file);

    // Set the image source on load
    reader.onloadend = function () {
      document.getElementById("imgtemp").src = reader.result;
    };
  } else {
    // Handle the case when no file is selected
    console.log("No file selected. Continue with the rest of the process.");
    // Add your logic to continue the process or display a message as needed
  }

  // here we show the resume template file
  document.getElementById("resume-form").style.display = "none";
  document.getElementById("resume-template").style.display = "block";
}

function downloadCV() {
  window.print();
}
