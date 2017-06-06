var a = 4,
    b = -21,
    value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value > 0) {
    console.log("wynik dodatni");
}
else {
    console.log("wynik ujemny");
}

if (value == 0) {
    console.log(value + " jest rowne zero"); 
}
else {
    console.log (value + " nie jest rowne zero");
}