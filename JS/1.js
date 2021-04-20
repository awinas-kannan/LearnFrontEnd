// var x=10;

// if(x>5)
// {
//      y=200;
// }
// alert (y + 'global');


var inccount = function () {
     var count = 0;
     var res = function () {
          alert(count);
          document.getElementById('p_inc_count').innerHTML = count++;
     }
     //document.write(res)
     return res;
}();
alert(inccount)