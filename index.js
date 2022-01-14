
const hqBlock = 42

function distanceFromHqInBlocks(block){
    return Math.abs(block - hqBlock)
}


function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264
    
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    //first 400 feet are free
    //between 400 and 2000 feet, the price is 2 cents per foot
    //charges a flat fare for a distance over 2000 feet and under 2500 feet. 
    //Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far

   let distance = distanceTravelledInFeet(start, destination)
    
    if( distance < 400){
        return 0;
    } else if  (distance > 400 && distance <= 2000){
        return (distance - 400) * .02
    } else if (distance > 2000 && distance <= 2500){
        return 25
    } else {
        return 'cannot travel that far'
    }

  }