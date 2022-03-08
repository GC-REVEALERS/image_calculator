function printval(para){
    document.getElementById('ans').value += para
}
const firstval = 0;
function solve(){
    tval = document.getElementById('ans').value
    total = eval(tval)
    document.getElementById('ans').value = total
}