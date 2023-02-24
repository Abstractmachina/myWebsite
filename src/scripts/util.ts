

export function getRandomPoint(x:number,y:number,range:number) : {newX:number, newY:number} {
    let x_r:number = Math.random() * range - range/2;
    let y_r:number = Math.random() * range - range/2;

    let newX = x + x_r;
    let newY = y+ y_r;

    return {newX, newY};
}

export function getCenterPos(spawnRect:DOMRect) : {x:number, y:number} {
    // var rect:DOMRect = element.getBoundingClientRect();
        var x = (spawnRect.left + spawnRect.right)/2;
        var y = (spawnRect.top + spawnRect.bottom)/2;

        return {x, y};
}