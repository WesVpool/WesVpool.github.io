const tag = document.getElementById('tag1')
var time = 100;
const getTime = ()=>{
    time = time - 1
tag.innerHTML = "Goodbye Turtles: Party Wagon leaves in " + time + 'secs';
}
setInterval(getTime, 1000);
alert("LEAVE NOW IF YOU ARE NOT A FAN OF THE TURTLES")
alert("WELCOME")