let promise = new Promise((resolve, reject) => {
    let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const randomArr = arr.map(element => Math.round((Math.random() * 50))**2);
    const sumRandomArr = randomArr.reduce((acc, cv) => acc + cv);
    console.log(sumRandomArr);
    if (sumRandomArr >= 8000) resolve();
    else reject();
})  
