// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const arr11 = [1, 2, 3, 4, 5];

const addElements = arr11.splice(3, 0, "a", "b", "c");

console.log(arr11);