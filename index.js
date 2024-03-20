const locationOfHQ = 42

function distanceFromHqInBlocks(distanceInBlocks) {
    if (distanceInBlocks > 42) {
       return distanceInBlocks-locationOfHQ
    } else if ( distanceInBlocks < 42 )
    return locationOfHQ - distanceInBlocks
}
function distanceFromHqInFeet (distanceInBlocks){
    if (distanceInBlocks > 42) {
        return ( distanceInBlocks- locationOfHQ) * 264
    } else if (distanceInBlocks < 42) {
        return ( locationOfHQ - distanceInBlocks) * 264
    }
}
function distanceTravelledInFeet(locationOfHQ,distanceInBlocks){
    if(distanceInBlocks > 42){
        return (distanceInBlocks-locationOfHQ) * 264
    } else if (distanceInBlocks < 42) {
        return ( locationOfHQ-distanceInBlocks) * 264
    }

}
function calculatesFarePrice(locationOfHQ,distanceInBlocks) {
    const distance = distanceTravelledInFeet(locationOfHQ, distanceInBlocks)
    if ((distance) <= 400) {
        return 0
    } else if ((distance) <= 2000) {
        return 2.56
    } else if ( distance <=2500 ) {
        return 25
    } else if ( distance > 2500){
        return 'cannot travel that far'
    }

}


