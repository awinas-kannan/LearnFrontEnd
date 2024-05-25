var br = "<br/>";
var arr1 = ["awinas", "kannan", "karthi", "viki", "aswin"] //good
var arr3 = new Array(5, 6, 3, 6, 4, 7) //baaaaaaaaddddddddddddddddd
var print;

function ARR() {
    //if one number is present in constructor then it like declaring  the size of array.. 
    //if more then one element is present constructor it is considered as assignng values to array 
    var arr = new Array(10)
    arr[0] = 11
    arr[1] = 12
    var arr3 = new Array(11, 22, 33)
    var arr1 = ["awinas", "kannan", "karthi", "viki", "aswin"]
    var arr2 = new Array("awinas", "kannan", "karthi", "viki", "aswin")
    // alert(arr.length)
    // alert(arr1)
    // alert(arr2)
    // alert(arr3[150]="2")
    // alert (new Array().length)
    document.getElementById("p1").innerHTML = "arr " + arr + br + " arr1 " + arr1 + br + "arr2 " + arr2 + br + "arr3 " + arr3 + br;

}

function push() {

    print = "before push arr1" + br;
    print += arr1 + br
    arr1.push(10)
    arr1.push("20");
    print += "aft push arr1" + br;
    print += arr1 + br
    document.getElementById("p2").innerHTML = print;

}

function unshift() {

    print = "before unshift arr1" + br;
    print += arr1 + br
    arr1.unshift("unshift add element at first--");
    print += "aft unshift arr1" + br;
    print += arr1 + br
    document.getElementById("p2").innerHTML = print;
}

function pop() {

    print = "before pop arr1" + br;
    print += arr1 + br
    var indexk = arr1.indexOf("karthi");

    alert(arr1.pop() + " is removed")
    print += "aft pop arr1" + br;
    print += arr1 + br
    document.getElementById("p2").innerHTML = print;
}

function shift() {

    print = "before shift arr1" + br;
    print += arr1 + br

    alert(arr1.shift() + " is removed")
    print += "aft shift arr1" + br;
    print += arr1 + br
    document.getElementById("p2").innerHTML = print;
}

function reverse() {

    print = "before reverse arr1" + br;
    print += arr1 + br

    var arrrev = arr1.reverse();
    alert('arr rev is' + arrrev);
    print += "aft reverse arr1" + br;
    print += arr1 + br
    document.getElementById("p2").innerHTML = print;
}

function sort() {

    print = "before sort arr1" + br;
    print += arr1 + br

    arr1.sort();
    print += "aft sort arr1" + br;
    print += arr1 + br
    document.getElementById("p2").innerHTML = print;
}

function sortnumber() {

    // a -b -> positive then swap else no swap  
    // positive -> a >b
    // negative -> a<b
    // zero -> a=b

    print = "before sort arr1" + br;
    print += arr3 + br
    // arr3.sort(function (a, b) { return a - b }
    // );   OR
    arr3.sort((a, b) => {
        return a - b
    })


    print += "aft sort arr1" + br;
    print += arr3 + br
    document.getElementById("p2").innerHTML = print;
}

function splice() {

    print = "before splice arr1" + br;
    print += arr1 + br
    var index = arr1.indexOf("karthi");
    var delcount = 0
    arr1.splice(index, delcount, "PREM", "AK");

    print += "aft splice arr1" + br;
    print += arr1 + br
    document.getElementById("p2").innerHTML = print;
}

console.log('test')