function moda(array) {
    let count = 0;
    let countMax = 1;
    let modeItem;

    for (i = 0; i < array.length; i++) {
        for (j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                count++;
            }
            if (countMax < count) {
                countMax = count;
                modeItem = array[i];
            }
        }
        count = 0;
    }
}