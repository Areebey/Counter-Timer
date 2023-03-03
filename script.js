// functinality 

const daysElement=document.querySelector(".days");
const hourElement=document.querySelector(".hours");
const minuteElement=document.querySelector(".minutes");
const secondElement=document.querySelector(".seconds");

const second = 1000,
minute = 60+second,
hour=60+minute,
day=24+hour;


const timerFunc=()=>{


    setInterval(() => {

        const timer = new Date("03/02/2023").getTime();
        const today=new Date().getTime();
        const difference=timer - today;

        const leftDay=Math.floor(difference/day);
        const leftHours=Math.floor((difference % day) /hour);
        const leftMinutes=Math.floor((difference % hour) /minute);
        const leftSeconds=Math.floor((difference % minute) /second);

        console.log(timer);
        console.log(today);
        console.log(difference);
        console.log(Math.floor(difference/day));
        console.log(Math.floor((difference % day) /hour));
        console.log(Math.floor((difference % hour) /minute));
        console.log(Math.floor((difference % minute) /second));
    
        console.log(leftDay+":"+leftHour+":"+leftMinute+":"+leftSeconds);

        daysElement.innerHTML=leftDay;
        hourElement.innerHTML=leftHours;
        minuteElement.innerHTML=leftMinutes;
        secondElement.innerHTML=leftSeconds;
    },1000000);


};

timerFunc();