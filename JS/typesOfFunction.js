var n1
var n2
function namedFunction() {
    n1 = Number(document.getElementById('tb1').value);
    n2 = Number(document.getElementById('tb2').value);
    addNamed(n1, n2, 12, 56);
}
function addNamed(a, b) {
    document.getElementById('p3').innerHTML = addNamed;
    document.getElementById('p2').innerHTML = a + b;
    
}
function addNamed(a, b,d) {
    document.getElementById('p3').innerHTML = "four val";
    document.getElementById('p2').innerHTML = a + b;
}

var addAnanymous = function (a, b) {
    document.getElementById('p3').innerHTML = "inside ananymous function";
    document.getElementById('p2').innerHTML = a + b;
}

function ananymousFunction() {
    n1 = Number(document.getElementById('tb1').value);
    n2 = Number(document.getElementById('tb2').value);
    addAnanymous(n1, n2)
}

var factNamedFunctinExp = function fnfc(a) {
    if (a <= 1)
        return 1;

    return a = a * fnfc(a - 1);
}

function namedFunctionExpression() {
    n1 = Number(document.getElementById('tb1').value);
    n2 = Number(document.getElementById('tb2').value);
    var result = factNamedFunctinExp(n1, n2)
    document.getElementById('p2').innerHTML = result;
}



function selfInvokedFunctionExpression() {
    n1 = Number(document.getElementById('tb1').value);
    n2 = Number(document.getElementById('tb2').value);

    (function (a, b) {
        document.getElementById('p2').innerHTML = a + b;
    }(n1, n2))


    var factNamedFunctinExp = (function fnfc(a) {
        if (a <= 1)
            return 1;

        return a = a * fnfc(a - 1);
    }(n1));

    document.getElementById('p3').innerHTML = factNamedFunctinExp;
}
