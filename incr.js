x=document.getElementById("in");
y=document.getElementById("sa");
z=document.getElementById("tex");
w=document.getElementById("pre");
var count=0;
var count1;
w.innerText+=" ";
function increased(){
    count+=1;
    // z.innerText=count;
    z.textContent=count;
}
function display(){
    count1=count+"-";
    w.innerText+=count1;
    z.innerText=0;
    count=0;
}
// document.write("3"+8*6);