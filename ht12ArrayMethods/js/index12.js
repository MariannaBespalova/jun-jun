// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const arr12 = [1, 2, 3, 4, 5];

arr12.splice(1, 0, "a", "b");
arr12.splice(6, 0, "c");
arr12.splice(arr12.length, 0, "e")

console.log(arr12);