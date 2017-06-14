/**
 * Created by master71 on 13.06.2017.
 */
"Use strict"
var logo = document.getElementsByClassName("logotype");
console.log(logo);

var menu = document.getElementById("list").innerHTML;
console.log(menu);

var bike = document.getElementsByClassName("image");
console.log(bike);

var copy = document.getElementById("copyright").innerHTML;
console.log(copy);

console.log(document.querySelectorAll('div > ul > li > a'));





function pow(a,b) {
    var result = a;
    for(var i = 1; i < b; i ++){
        result *= a;
    }
    return result;
}
console.log(pow(3,3));


function powRecursive(a,b) {
    if( b === 1){
        return a;
    }
    else{
        return a * powRecursive(a, b - 1);
    }
}
console.log(powRecursive(3,3));