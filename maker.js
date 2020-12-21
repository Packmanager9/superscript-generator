
let copyText = document.getElementById("form");
let btn = document.getElementById("run");
btn.onclick = getRandomLightstring
function getRandomLightstring(){
    let letters = `\u1d43\u1d47\u1d9c\u1d48\u1d49\u1da0\u1d4d\u02b0\u2071\u02b2\u1d4f\u02e1\u1d50\u207f\u1d52\u1d56q\u02b3\u02e2\u1d57\u1d58\u1d5b\u02b7\u02e3\u02b8\u1dbb '"!?,.\u2070\u00b9\u00b2\u00b3\u2074\u2075\u2076\u2077\u2078\u2079`

    console.log(letters)
    var lettersbig = `abcdefghijklmnopqrstuvwxyz '"!?,.0123456789`;
    let letterman = lettersbig.split('')
    var string = '';
    console.log(copyText.value)
    for (var i = 0; i < copyText.value.split('').length; i++) {
        string += letters[letterman.indexOf(copyText.value[i].toLowerCase())];
    }
    copyText.value = string
    copyText.select();
    document.execCommand("copy")
    return string;
}
