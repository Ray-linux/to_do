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
