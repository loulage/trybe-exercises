const sumRandomSquaredNumbers = () => {
    let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const randomArr = arr.map((element) => Math.round(Math.random() * 50) ** 2);
    const sumRandomArr = randomArr.reduce((acc, cv) => acc + cv);
    console.log(sumRandomArr);
    if (sumRandomArr < 8000) throw new Error();

    return sumRandomArr
}
    
const arrayFromSum = (sumRandomArr) => [2, 3 ,5 ,10].map(number => sumRandomArr / number)

const fetchPromise = async () => {
    try {
        const sumRandomArr = await sumRandomArr();
        const array = await arrayFromSum(sumRandomArr);

        console.log (array);
    }

    catch(e) {
        console.log('É mais de 8000. Promise quebrada')
    }
}

fetchPromise();