function openpopup(e)
{
    e.preventDefault();
   
   var fnam= document.getElementById("fName").value;
   var lnam=document.getElementById('lName').value;
   var date=document.getElementById("dob").value;
   var cont=document.getElementById("country").value;
   var prof=document.getElementById("job").value;
  var g= document.getElementsByName("gender");
   for (m= 0; m < g.length; m++) {
    if (g[m].checked)
    {var gen=g[m].id;}         
}
   

   var em=document.getElementById("email").value;
   var ph=document.getElementById("mobile").value;
//product
   var a=document.getElementsByName("ans");
for (i = 0; i < a.length; i++) {
    if (a[i].checked)
    {var prod=a[i].id;}         
}
   var b=document.getElementsByName("suggest");
   for (j = 0; j < b.length; j++) {
    if (b[j].checked)
    {var coll=b[j].id;}         
}
   
   var c=document.getElementsByName("opinion");
   for (k = 0; k< c.length; k++) {
    if (c[k].checked)
    {var sat=c[k].id;}         
} 
   var com=document.getElementById("comment").value;
   var popupcontent="Firstname: "+fnam+"<br>LastName: "+lnam+"<br>DOB: "+date +
                    "<br>Country:"+ cont+"<br>Profession: "+prof +
                    "<br>Gender: "+gen+"<br>Email: "+em +"<br>MobileNo: "+ph+
                    "<br>Is this First time you are using our products & Service? "+prod+
                    "<br>Would you suggest to your friends or colleagues? "+coll+
                    "<br>How Satisfied are you with our Company? "+sat+
                    "<br>Do you have any suggestions to improve our Service? "+com;
    document.getElementById("output").innerHTML = popupcontent;
    document.getElementById("popup").classList.add("openpopup");
}
function closepopup()
{
    
    document.getElementById("popup").classList.remove("openpopup");
    document.getElementById("myform").submit();
}


// 
            
//                 })
  
    // var popup=window.open("","Popup","width=400,height=400,resizeable,scrollbars") ;
    
    // popup.document.write(popupcontent);            
//} 
// function resetform(ee)
// {
    
//     document.getElementById("myForm").reset();
// }