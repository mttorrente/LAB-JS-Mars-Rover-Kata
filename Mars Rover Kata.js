// Rover object goes here:
let rover = {
  direction: [ 'North', 'South', 'East', 'West'], // Rover direction values as "north, south, east and west".
  currentDirection: 'North', // Rover default direction will be north.
  x: 0,
  y: 0,
  travelLog:[ { x: 0, y: 0} ],
}
// ======================
function turnLeft(rover) {
  switch (rover.currentDirection) {
    case rover.direction[0]: //Rover direction is facing north
     rover.currentDirection = rover.direction[3]; //Rover is facing west now
     break;
    case rover.direction[1]: //Rover direction is facing south
     rover.currentDirection = rover.direction[2]; //Rover is facing east now
     break;
    case rover.direction[2]: //Rover direction is facing east
     rover.currentDirection = rover.direction[0]; //Rover is facing north now
     break; 
    case rover.direction[3]: //Rover direction is facing west
     rover.currentDirection = rover.direction[1]; //Rover is facing south now
     break;
  }
  console.log(`turnLeft was called! Now Rover is facing ${rover.currentDirection}`);
}

function turnRight(rover) {
  switch (rover.currentDirection) {
   case rover.direction[0]: //Rover direction is facing north
     rover.currentDirection = rover.direction[2]; //Rover is facing east now
     break;
    case rover.direction[1]: //Rover direction is facing south
     rover.currentDirection = rover.direction[3]; //Rover is facing west now
     break;
    case rover.direction[2]: //Rover direction is facing east
     rover.currentDirection = rover.direction[1]; //Rover is facing south now
     break; 
    case rover.direction[3]: //Rover direction is facing west
     rover.currentDirection = rover.direction[0]; //Rover is facing north now
     break;   
  }
  console.log(`turnRight was called! Now Rover is facing ${rover.currentDirection}`);
}

function moveForward(rover) {
  
  if (rover.currentDirection === rover.direction[3]){
      rover.x--; // if rover is facing west, 'x' decrease by 1.
    }
    else if (rover.currentDirection === rover.direction[2]){
      rover.x++ // if rover is facing east, 'x' increase by 1.
    }
    else if(rover.currentDirection === rover.direction[0]){
      rover.y--; // if rover is facing north, 'y' decrease by 1.
    }
    else if (rover.currentDirection === rover.direction[1]){
      rover.y++; // if rover is facing south, 'y' increase by 1.
    }
 
  console.log(`The Rover is positioned: x = ${rover.x}, y = ${rover.y}`);
  
   let roverTravel = { x: rover.x, y: rover.y };
    rover.travelLog.push(roverTravel);
}

//Bonus 2
function moveBackward(rover) {
  
  if (rover.currentDirection === rover.direction[3]){
      rover.x++; // if rover is facing west, 'x' decrease by 1.
    }
    else if (rover.currentDirection === rover.direction[2]){
      rover.x-- // if rover is facing east, 'x' increase by 1.
    }
    else if(rover.currentDirection === rover.direction[0]){
      rover.y++; // if rover is facing north, 'y' decrease by 1.
    }
    else if (rover.currentDirection === rover.direction[1]){
      rover.y--; // if rover is facing south, 'y' increase by 1.
    }
 
  console.log(`The Rover is positioned: x = ${rover.x}, y = ${rover.y}`); 
  
   let roverTravel = { x: rover.x, y: rover.y };
    rover.travelLog.push(roverTravel);
}

//Bonus 1
function gridForward(rover){
  if(rover.currentDirection===rover.direction[0] && rover.y > 0 && rover.y <= 9){ 
      moveForward(rover); 
    } 
  
   else if(rover.currentDirection===rover.direction[1] && rover.y >= 0 && rover.y < 9){
      moveForward(rover);
    }
  
  else if(rover.currentDirection===rover.direction[2] && rover.x >= 0 && rover.x < 9){
     moveForward(rover);
   }
           
  else if (rover.currentDirection===rover.direction[3] && rover.x > 0 && rover.x <= 9){
     moveForward(rover);
   }
   else{
     console.log("Houston we have a problem!"); // direction command out of limits.
   }
}

//Bonus 1
function gridBackward(rover){
  if(rover.currentDirection===rover.direction[0] && rover.y >= 0 && rover.y < 9){ 
      moveBackward(rover); 
    } 
  
   else if(rover.currentDirection===rover.direction[1] && rover.y > 0 && rover.y <= 9){
      moveBackward(rover);
    }
  
  else if(rover.currentDirection===rover.direction[2] && rover.x > 0 && rover.x <= 9){
     moveBackward(rover);
   }
           
  else if (rover.currentDirection===rover.direction[3] && rover.x >= 0 && rover.x < 9){
     moveBackward(rover);
   }
   else{
     console.log("Houston we have a problem!");
   }
} 


function command(rover, orders){
  for( let i = 0; i< orders.length; i++) {
    let order = orders[i];
    switch (order){
      case 'l': //left
        turnLeft(rover);
        break;
      case 'r': //right
        turnRight(rover);
        break;
      case 'f': //forward
        gridForward(rover);
        break;
      case 'b': //backward
        gridBackward(rover);
        break;
      default: // any other command
        console.log("Command not valid"); //Bonus 3
    }
  }
}
command(rover,'rffrfflfrff');

for (let i = 0; i< rover.travelLog.length; i++ ) {
  console.log(`travelLog ${i} ==> x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
}
//console.log(rover.travelLog);
