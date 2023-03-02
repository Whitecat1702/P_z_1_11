//zavd1
/*function seconds(total) {
    return total%60;
};*/
//zavd2
/*function perimetr(side, count) {
    return side*count;
}*/
//zavd3
/*function spisok(n) {
    for (let i = 0; i<n; i++){
        if(i%3==0){
            console.log("fizz");
        }else if(i%5==0){
            console.log("buzz");
        }else if(i%3==0 && i%5==0){
            console.log("fizzbuzz")
        }
    }
}*/
//zavd4
/*function Calculate(a, b, c) {
    return (a+b+c)/3;
}*/
//zavd5
//zavd5.1(if)
/*function isDivisible(n, x, y){
    if (n%x==0 && n%y==0){
        console.log("YES");
    }
}*/
//zavd5.2(tern)
/*function isDivisible(n, x, y){
    n%x==0 && n%y==0? console.log("YES"):console.log("NO");
}*/
//zavd5.3(none)
/*function isDivisible(n, x, y) {
    return n%x==0 && n%y ==0;
}*/
//zavd6
/*var arr = [];
var number;
var rozmir = prompt("Enter rozmirnist:");
for (var i = 0; i<rozmir; i++) {
    number = prompt("Enter number");
    arr += parseInt(number);
}
//vuvod masiva
document.write("arr:<br>")
for(var i = 0; i<arr.length; i++){
    document.write(arr[i] + " ")
}
document.write("<br><br>")
//vuvod max
var max = 0;
for (var i = 0; i<arr.length;i++) {
    if (arr[i]>max){
        max=arr[i];
    }
}
document.write("max:" + " " + max);
document.write("<br><br>")
//vuvod min
var min = arr[0];
for (var i = 0; i<arr.length;i++){
    if (arr[i] < min){
        min = arr[i];
    }
}
document.write("min:" + " " + min);
document.write("<br><br>")
//vuvod sum
var sum = 0;
for (var i = 0; i<arr.length; i++) {
    sum += parseInt(arr[i])
}
document.write("sum:" + " " + sum);
document.write("<br><br>")
//vuvod ser
document.write("ser:" + " " + sum/arr.length);
document.write("<br><br>");
//vuvod neparnuh
document.write("Neparni:");
document.write("<br>");
var arrNep = [];
for(var i = 0; i<arr.length; i++){
    if (arr[i]%2!=0){
        document.write(arr[i] + " ");
    }
}*/
//zavd7
/*var n  = 5;
var m = 5;
var arr = new Array();
arr.length = m;
for (var i = 0; i<m; i++){
    arr[i] = new Array();
    arr[i].length = n;
}
for (var i = 0; i < arr.length; i++){
    for (var j =0; j<arr.length; j++){
        var number = prompt("Enter number");
        arr[i][j] = parseInt(number);
    }
}
for (var i = 0; i<arr.length; i++){
    for(var j = 0; j<arr.length; j++){
        if (arr[i][j] < 0){
            arr[i][j] = 0;
        }else if (arr[i][j] >= 0){
            arr[i][j] = -1;
        }j+=1;
    }
}
document.write("arr:<br>")
for (var i=0; i<arr.length; i++)
{
  for (var j=0; j<arr[i].length; j++)
    document.write(arr[i][j]+" ")
  document.write("<br>")
}*/
//zavd8
/*var a = prompt("Enter number:");
var b = prompt("Enter number:");
function Add (a, b){
    document.write("Sum:" + " " + a+b);
}
function Sub (a,b){
    document.write("Riz:" + " " + a-b);
}
function Mul (a,b){
    document.write("Dob:" + " " + a*b);
}
function Div (a,b){
    if (b==0){
        document.write("На 0 ділити не можна!")
    }else{
        document.write("Dil:" + " " + a/b);
    }
}*/
//zav9
/*function Check (a){
    if (a>=0){
        alert("YES");
    }else {
        alert("NO");
    }
}
function Check1 (a){
    if (a%a==0 && a%1==0 && a!=1){
        alert("YES")
    }else {
        alert("NO")
    }
}
function Check2 (a){
    if (a%2==0 && a%5==0 && a%3==0 && a%6==0 && a%9==0){
        alert("YES")
    }else{
        alert("NO")
    }
}*/
//zav10
/*function reverseAndSquare(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      if (typeof arr[i] === 'number') {
        result.push(Math.pow(arr[i], 2));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
 */
//zav11
/*let arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
let result = removeDuplicates(arr);
console.log(result);*/