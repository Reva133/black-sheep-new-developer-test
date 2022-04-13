let countDownDate = new Date("Apr 29, 2022 00:00:00").getTime();
// account for local date??? where is the site based??

let x = setInterval(()=>{
    let now = Date.now();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance / (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance / (1000 * 60 * 60) / (1000 * 60));

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    if(distance < 0) {
        clearInterval(x);
        document.getElementById("timer").textContent = "The site is up!";
    }
});
