Foods=[]; 
function Submit(){
Fo1=document.getElementById("Food1").value;
Fo2=document.getElementById("Food2").value;
Fo3=document.getElementById("Food3").value;
Fo4=document.getElementById("Food4").value;
Foods.push(Fo1);
Foods.push(Fo2);
Foods.push(Fo3);
Foods.push(Fo4);
console.log(Foods)
document.getElementById("Display_Name").innerHTML=Foods;
document.getElementById("Sb").style.display="none";
document.getElementById("sob").style.display="inline-block";
}
function Sorting(){
   Foods.sort();
   document.getElementById("Display_Name").innerHTML=Foods;
}