function looper() {
    var d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var everySecond = setInterval(looper, [1000])
