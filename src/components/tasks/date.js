let now = new Date();
let hour
let apm;

let h = now.getHours()
if(h<=23 && h>12){
    hour = (h-12).toString()
    apm = "pm"
}
else if(h>0 && h<12){
    hour = h.toString();
    amp = "am"
}
else if(h == 0){
    hour = (h + 12).toString();
    apm = "am"
}
else if(h==12){
    hour = h.toString();
    apm = "noon"
}
let m = now.getMinutes();

let hour_minute = hour.concat(":", m);
let full_time = hour_minute.concat(" ", apm);

let date = now.getDate()
let arrMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let month = now.getMonth()
let year = now.getFullYear()
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = dayNames[now.getDay()]
console.log(date, "/", arrMonth[month], "/", year)
console.log(day)