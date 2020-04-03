function long_string(arr) {
    let longest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
console.log(long_string(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))