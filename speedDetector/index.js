const carSpeed = prompt("Please enter your car speed");

const points = Math.floor((carSpeed - 70) / 5)

function speedDetector(speed){
  if (speed < 75){
    return 'OK';
  }else if (points < 12){
    return `Points: ${points}`;
  }else {
    return "Licence suspended";
  }
}

console.log(speedDetector())