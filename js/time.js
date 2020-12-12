$(function () {

    function padWithZero(num) {
      return num < 10 ? "0" + num : num
    }
    
    function getTime() {
      const time = new Date();
  
      const hours = padWithZero(time.getHours());
      const minutes = padWithZero(time.getMinutes());
      const seconds = padWithZero(time.getSeconds());
    //   const day_night = "AM";
    //   if(hours > 12){
    //     day_night = "PM";
    //     hours = hours - 12;
    //   }
    //   if(seconds < 10){
    //     seconds = "0" + seconds;
    //   }
    //   if(minutes < 10){
    //     minutes = "0" + minutes;
    //   }
    //   if(hours < 10){
    //     hours = "0" + hours;
    //   }

      const timeText = `${hours}:${minutes}:${seconds}`
  
      $("#time").text(timeText);
    }
  
    setInterval(getTime, 1000);
  })