const res=document.getElementById("res");

function run(){
 let v=version.value,m=modver.value;
 if(!v||!m){res.innerText="Enter values";return;}
 res.innerText=v===m?"Compatible":"Possible incompatibility";
}

