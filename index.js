// function digitalClote() {
//     let date = new Date();
//     let hours = date.getHours();
//     let minites = date.getMinutes();
//     let secends = date.getSeconds();
//     let timeformate = 'AM';

//     if (hours === 0) {
//         hours = 12;
//     }
//     if (hours > 12) {
//         hours = hours - 12
//         timeformate = 'PM';
//     }

//     hours = hours < 10 ? '0' + hours : hours;
//     minites = minites < 10 ? '0' + minites : minites;
//     secends = secends < 10 ? '0' + secends : secends;

//     let finalTime = `${hours} : ${minites} : ${secends}`;

//     document.querySelector('#time').innerText = finalTime;
//     document.querySelector('small').innerText = timeformate;

//     setInterval(digitalClote, 1000);
// }
// digitalClote();





function DigitalClock(){
    let date = new Date();
    let hours = date.getHours();
    let minites = date.getMinutes();
    let second = date.getSeconds();
    let timeformate = 'AM';


    if(hours === 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours-12;
        timeformate = 'PM';
    }

    hours = hours < 10 ? '0' + hours : hours;
   minites = minites < 10 ? '0' +  minites : minites;
    second = second < 10 ? '0' + second : second;


    let FinalTime = `${hours} : ${minites} : ${second}`;

    document.querySelector('#time').innerText = FinalTime;
    document.querySelector('small').innerText = timeformate;


    setInterval(DigitalClock, 1000);
}

DigitalClock();







