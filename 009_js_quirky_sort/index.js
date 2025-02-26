let arr = [9, 4, 7, 2, 6, 5, 1, 3, 8];















for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
        console.log(arr[i]);
    }, arr[i]);
}