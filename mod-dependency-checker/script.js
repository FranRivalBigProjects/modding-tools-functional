const res=document.getElementById("res");

function run(){
 let d=deps.value.split("\n").filter(x=>x.trim());
 let i=installed.value.split("\n").filter(x=>x.trim());
 let missing=d.filter(x=>!i.includes(x));
 res.innerText=missing.length?`Missing: ${missing.join(", ")}`:"All dependencies satisfied";
}

