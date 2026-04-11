const res=document.getElementById("res");

function run(){
 try{
   JSON.parse(json.value);
   res.innerText="Valid JSON";
 }catch(e){
   res.innerText="Invalid JSON";
 }
}

