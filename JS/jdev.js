function getVal() {
    var req = document.getElementById("myTextarea").value;
    alert(req);
    var obj = JSON.parse(req);
    
    var newObj = obj;
    newObj.json = new Object();
    newObj.json.zz='zzz';
    newObj.abi=("cdrAbi" in obj) ? obj.cdrAbi : "";
    newObj.organisationUnitId =obj.cdrId; 
    newObj.cdr =obj.cdrCode;
   // newObj.abi =obj.cdrAbi;
   document.getElementById("myTextarea").innerHTML = JSON.stringify(newObj,null,1);
   // alert(JSON.stringify(newObj));
}