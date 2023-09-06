function fun_change_inr() {
    var a = document.getElementById('c_inr').value;
    var b = a * 80;
    document.getElementById('usd_inr').innerHTML = b;
    document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/03/61/90/80/360_F_361908075_uqrplAAJPvPOSgsLtlLd557W7zEYsUSc.jpg')";

}

function fun_change_usd() {
    var a = document.getElementById('c_usd').value;
    var b = a / 80;
    document.getElementById('inr_usd').innerHTML = b;
    document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/1300153494/photo/quarter-of-a-us-dollar-coin-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=Jcd4hNIcOJoEZKkenEELXv-v-ahDEheQnFypdmLT9jE=')";
}

function fun_multi_1() {
    var a = document.getElementById('v_1').value;
    var b = document.getElementById('v_2').value;
    var c = a * b;
    document.getElementById('result_multi').innerHTML = c;

}

function fun_add_1() {


    var a = Number(document.getElementById('v_1').value); //  var a = document.getElementById('v_1').value | 0;    // without | 0  value var a b and c will work as string doesnot do addtion

    var b = Number(document.getElementById('v_2').value); //  var b = document.getElementById('v_2').value | 0;

    var c = a + b; // var c= a+b; // if we dont writhe Number() then +a++b also work

    document.getElementById('result_add').innerHTML = c;

}