var btn1 = document.getElementById("inc");
var btn2 = document.getElementById("save");
var res = document.getElementById("count");
var entries=document.getElementById('prev');
var para =document.getElementById('entries');
let count=0;
function fnc() {
  count+=1;
  res.innerText=count;
  console.log("run");
}
btn1.addEventListener('click', fnc);
var x=count;
function previous()
{
   entries.textContent+=count+'-';
   count=0;
   res.innerText=0;
  
}

btn2.addEventListener('click', previous);
