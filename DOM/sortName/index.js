function sortName() {
    let arr = []
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var name4 = document.getElementById("name4").value;
    arr.push(name1);
    arr.push(name2);
    arr.push(name3);
    arr.push(name4);
    document.getElementById("demo").textContent = arr.sort()
}

var x = 3;
var y = "3";
console.log(x+y);