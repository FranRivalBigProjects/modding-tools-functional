const res=document.getElementById("res");

function run(){
 let lines=cfg.value.split("\n").filter(x=>x.trim());
 let bad=lines.filter(l=>!l.includes(":"));
 res.innerText=bad.length?`Invalid entries: ${bad.length}`:"Config structure OK";
}

