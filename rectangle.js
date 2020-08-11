module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0)
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y), 
            null),
            0);
    else
        setTimeout(() => 
            callback(null, {
                perimeter: () => (2*(x+y)),
                area:() => (x*y)
            }), 
            0);
}