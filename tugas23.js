function tugas() {
    let deret = [32,33,16,40,9,7,11,2,44,1,66];
    let lebihBesar= deret.filter(deret => {
        return deret > 15;
    });
    return lebihBesar
}

console.log(tugas())