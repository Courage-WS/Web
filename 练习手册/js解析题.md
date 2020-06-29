

```js
var scene = [
    {
        name: '家中',
        value: 2,
        checked: true
    },
    
    {
        name: '户外',
        value: 3,
        checked: true
    }
];

let arr = new Array();
let [a, b, c] = [ [],[],[] ]; //第一种方法
let [a, b, c] = [arr, arr, arr]; //第二种方法
for (let i = 0; i < scene.length; i++) {
    a.push(scene[i].name);
    b.push(scene[i].value);
}

console.log(a)
console.log(b)


/*
解析：
第一种方法：
new Array != new Array
所以把 name 和 value 的值分别给了 a 和 b 的数组（“[]”）

第二种方法：
把 name 和 value 的值依次添加给同一个数组 arr
所以 a === b === c
*/
```

