let rectangle = {
    topLeft:{
        x: 1,
        y: 1
    },
    bottomRight:{
        x: 0,
        y: 0
    }
}

//1
function getPoints(obj){
    if(obj.topLeft.x < obj.bottomRight.x && obj.topLeft.y > obj.bottomRight.y)
    console.log(`TopLeft(${obj.topLeft.x}, ${obj.topLeft.y})\nBottomRight(${obj.bottomRight.x}, ${obj.bottomRight.y})`);
    else console.log('Enter right coordinates.')
}

//2
function getWidth(obj){
    if(obj.topLeft.x < obj.bottomRight.x && obj.topLeft.y > obj.bottomRight.y)
    console.log(`Width = ${obj.bottomRight.x - obj.topLeft.x}`);
    else console.log('Enter right coordinates.')
}

//3
function getHeight(obj){
    if(obj.topLeft.x < obj.bottomRight.x && obj.topLeft.y > obj.bottomRight.y)
    console.log(`Height = ${obj.topLeft.y - obj.bottomRight.y}`);
    else console.log('Enter right coordinates.')
}

//4
function getQuare(obj){
    if(obj.topLeft.x < obj.bottomRight.x && obj.topLeft.y > obj.bottomRight.y)
    console.log(`S = ${(obj.topLeft.y - obj.bottomRight.y) * (obj.bottomRight.x - obj.topLeft.x)}`);
    else console.log('Enter right coordinates.')
}

//5
function getPerimetr(obj){
    if(obj.topLeft.x < obj.bottomRight.x && obj.topLeft.y > obj.bottomRight.y)
    console.log(`P = ${((obj.topLeft.y - obj.bottomRight.y) + (obj.bottomRight.x - obj.topLeft.x)) * 2}`);
    else console.log('Enter right coordinates.')
}

//6
function changeWidth(obj, n){
    if(obj.topLeft.x < obj.bottomRight.x && obj.topLeft.y > obj.bottomRight.y)
        console.log(`Width = ${obj.bottomRight.x - obj.topLeft.x + n}`);
    else console.log('Enter right coordinates.')
}

//7
function changeHeight(obj, n){
    if(obj.topLeft.x < obj.bottomRight.x && obj.topLeft.y > obj.bottomRight.y)
        console.log(`Height = ${obj.topLeft.y - obj.bottomRight.y + n}`);
        else console.log('Enter right coordinates.')
}

//8
function changeHeightWidth(obj, w, h){
    if(obj.topLeft.x < obj.bottomRight.x && obj.topLeft.y > obj.bottomRight.y){
        console.log(`Width = ${obj.bottomRight.x - obj.topLeft.x + w}`);
        console.log(`Height = ${obj.topLeft.y - obj.bottomRight.y + h}`);
    }
    else console.log('Enter right coordinates.')
}

//9
function moveByX(obj, n){
    if(obj.topLeft.x < obj.bottomRight.x && obj.topLeft.y > obj.bottomRight.y)
        console.log(`TopLeft(${obj.topLeft.x + n}, ${obj.topLeft.y})\nBottomRight(${obj.bottomRight.x + n}, ${obj.bottomRight.y})`);
    else console.log('Enter right coordinates.')
}

//10
function moveByY(obj, n){
    if(obj.topLeft.x < obj.bottomRight.x && obj.topLeft.y > obj.bottomRight.y)
        console.log(`TopLeft(${obj.topLeft.x}, ${obj.topLeft.y + n})\nBottomRight(${obj.bottomRight.x}, ${obj.bottomRight.y + n})`);
    else console.log('Enter right coordinates.')
}

//11
function moveByXY(obj, vx, vy){
    if(obj.topLeft.x < obj.bottomRight.x && obj.topLeft.y > obj.bottomRight.y)
        console.log(`TopLeft(${obj.topLeft.x + vx}, ${obj.topLeft.y + vy})\nBottomRight(${obj.bottomRight.x + vx}, ${obj.bottomRight.y + vy})`);
    else console.log('Enter right coordinates.')
}

//12
function isMiddlePoint(obj, vx, vy){
    if(obj.topLeft.x < obj.bottomRight.x && obj.topLeft.y > obj.bottomRight.y){
        console.log(`TopLeft(${obj.topLeft.x}, ${obj.topLeft.y})\nBottomRight(${obj.bottomRight.x}, ${obj.bottomRight.y})`);
        let x = (obj.bottomRight.x - obj.topLeft.x) / 2;
        let y = (obj.topLeft.y - obj.bottomRight.y) / 2;
        console.log(`(${x},${y})`);
        return (vx === x && vy === y) ? true : false;
    }
}