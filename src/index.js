module.exports = function warmup(temperature) {
    let tempCel = temperature;
    let tempFar = 32;
    let result;
    result = (tempCel *1.8) +tempFar;
    console.log(result);
    return result;
};
