let input = document.getElementById("in");
let dis = document.createAttribute("dis");

let listOFData = [];
if(localStorage.data!=null){
    listOFData=JSON.parse(localStorage.data)
   
}else{
    listOFData=[];
}

showData()

document.getElementById("cont").className = "dis";

function addData() {
    var data = {
        text: input.value,
    };
    if(input.value){
        
        listOFData.push(data);
    }

  showData();
  input.value = "";
  localStorage.setItem("data",JSON.stringify(listOFData));
}

function showData() {
  let data = "";
  for (var i = 0; i < listOFData.length; i++) {
    data += `
    <div id="cont" class="cont">
    <h4>${i}</h4>
    <div class="text">${listOFData[i].text}</div>
    <button onclick="delet(${i})" class="delet">delet</button>    
</div>
<p></p>
        `;
  }


  document.getElementById("cont").innerHTML = data;
  if (listOFData.length == 0) {
    document.getElementById("cont").className = "dis";
  } else {
    document.getElementById("cont").className = "contp";
  }
}

function delet(id) {
  listOFData.splice(id, 1);
  localStorage.setItem('data',JSON.stringify(listOFData))

  showData();
}
showData()