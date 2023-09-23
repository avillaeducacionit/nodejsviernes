const sumar = (n1,n2) => {
    if(n1 == null || n2 == null) {
        throw new TypeError();
    }
    return n1 + n2;
}

module.exports = {
    sumar
}