// Rover Object Goes Here
var marsRover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================

// ======================
function turnLeft(marsRover) {
    
  switch (marsRover.direction) {
  
    case "N":
    marsRover.direction = "W";
    break;
  
    case "W":
    marsRover.direction = "S";
    break;
  
    case "S":
    marsRover.direction = "E";
    break;
  
    case "E":
    marsRover.direction = "N";
    break;

    default:
    break;

}
  console.log("marsRover se dirige hacia el " + marsRover.direction);
}

function turnRight(marsRover){
  
  switch (marsRover.direction) {
  
    case "N":
    marsRover.direction = "E";
    break;

    case "E":
    marsRover.direction = "S";
    break;

    case "S":
    marsRover.direction = "W";
    break;

    case "W":
    marsRover.direction = "N";
    break; 

    default:
    break;
}
  console.log("El Mars Rover se dirige hacia el " + marsRover.direction);
}

function moveForward(marsRover){
 
  switch (marsRover.direction) {
    
    case "N":
    marsRover.y--;
    break;

    case "E":
    marsRover.x++;
    break;

    case "S":
    marsRover.y++;
    break;

    case "E":
    marsRover.x--;
    break;
  
    default:
    break;
}
  console.log("Posición del Mars Rover (coordenadas). Eje x: " + marsRover.x + ". Eje y: " + marsRover.y + ".");
}

function listOfCommands(marsRover, command) {

for (i = 0; i < command.length; i++) {
var theOrder = command[i];

switch (theOrder) {
  
  case "f":
  moveForward(marsRover);
  marsRover.travelLog.push("x = " + marsRover.x + " y = " + marsRover.y);
  break;

  case "r":
  turnRight(marsRover);
  marsRover.travelLog.push("x = " + marsRover.x + " y = " + marsRover.y);
  break;

  case "l":
  turnLeft(marsRover);
  marsRover.travelLog.push("x = " + marsRover.x + " y = " + marsRover.y);
  break;

  default:
  break;
}
}
  console.log(marsRover.travelLog);
}