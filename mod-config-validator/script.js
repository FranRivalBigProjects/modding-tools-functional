const res=document.getElementById("res");

function run(){
 let lines=config.value.split("\n").filter(x=>x.trim());
 let invalid=lines.filter(l=>!l.includes("="));
 res.innerText=invalid.length?`Invalid lines: ${invalid.length}`:"Config valid";
}

