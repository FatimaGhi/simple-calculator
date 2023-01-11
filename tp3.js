function get(x) {
    document.getElementById("res").value += x;
}
function result(){
    var x= document.getElementById("res").value;
    var y=eval(x);
    document.getElementById("res").value = y;
}
function sup(){
    var c="";
    document.getElementById("res").value = c;
}
