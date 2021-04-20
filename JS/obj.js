

var obj = {
    name: "awinas kannan",
    age: 22,
    height: 175,
    weight: 55,
    getAll: function () {
        return "name >> " + this.name + "-age >>" + this.age + "-heigth>> " + this.height;
    },
    setAll: function (name, age) {
        this.name = name;
        this.age = age;
    },
    set firstAndLast(name) {
        this.name = name;

        // this.first =first;
        // this.last=last;
    }
}
    

function getVal() {
    document.getElementById("1").innerHTML = obj.getAll() + "<br>";
    obj.setAll("selvi", 23);
    document.getElementById("1").innerHTML += obj.getAll() + "<br>";
    obj.firstAndLast = "selvi awinas";
    var array = obj.name.split(" ");
    obj.first = array[0];
    obj.last = array[1];
    alert(obj.first + obj.last)
    document.getElementById("1").innerHTML += obj.getAll();

    // document.getElementById("2").innerHTML =newObj.fc;
    // newObj.setfriend("karthika");
    // document.getElementById("3").innerHTML =newObj.friends +"<br>";
    // document.getElementById("3").innerHTML +=newObj.fc;

    // var assig=newObj;
    // assig.name="50";
    // alert(newObj.name + assig.name)

    // newObj.name="60";
    // alert(newObj.name + assig.name)
    // console.log(newObj.name + assig.name)
    // delete newObj.friends
    // alert(newObj.getAll())

}

var newObj = new Object();
newObj.name = "awi";
newObj.class = "b.e";
newObj.friends = ["selvi", "karthi", "viki"];
newObj.fc = newObj.friends.length;
newObj.setfriend = function (name) {

    this.friends[this.fc] = name;
    this.fc = this.friends.length;
}
newObj.getAll = function () {
    return this.name + " -> " + this.friends;
}


function newObjAccess() {
    for (x in obj) {
        alert(x + "  " + newObj[x]);
    }
}

var awi = new functionConstructor("awinas", "kannan", 22, "black");
var chiti = new functionConstructor("chiti", "nathan", 22, "black").instance;

function functionConstructor(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.instance = this;
}


function showFunctionConstructor() {
    for (x in awi) {
        alert(x + "  " + awi[x]);
    }
    for (x in chiti) {
        alert(x + "  " + chiti[x]);
    }

}