const res=document.getElementById("res");

function run(){
 let list=mods.value.split("\n").filter(x=>x.trim());
 let set=new Set(list);
 res.innerText=set.size!==list.length?"Duplicate/conflict detected":"No conflicts";
}

