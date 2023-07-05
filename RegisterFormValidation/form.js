 const form=document.getElementById("form");
 let email=document.getElementById("email");
    let password=document.getElementById("password")
    let cpassword=document.getElementById("cpassword")
    localStorage.setItem('email',email.value)
   form.addEventListener("submit",function(e){
    e.preventDefault();
    mandatoryCheck([email,password,cpassword])
   })
function mandatoryCheck(inputs)
{
    inputs.forEach((input)=>{
     if(input.value.trim()=="")
     {
        errormessage(input,"Please fill the form")
     }
     else{
        sucessMessage(input)
     }
    })
}

function errormessage(input,message)
{
  const formgp=input.parentElement;
  formgp.className="inputtxt error";
  const p=formgp.querySelector("p");
  p.innerHtml="hello";
  console.log("hello")
}
function sucessMessage(inputs){
    const formgp=inputs.parentElement;
    formgp.className="inputtxt success";
    const p=formgp.querySelector("p");
    p.innerHtml="";
}
