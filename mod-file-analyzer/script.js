const res=document.getElementById("res");

function run(){
 let f=+files.value,s=+size.value;
 if(!f||!s){res.innerText="Enter values";return;}
 res.innerText=`Avg file size: ${(s/f).toFixed(2)} MB`;
}

