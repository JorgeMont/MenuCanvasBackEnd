

const generarId = () => {

    const tokenFirst = Math.random().toString(32).substring(2);
    const tokenSecond = Date.now().toString(32);

    return tokenFirst + tokenSecond;
}


module.exports = generarId;