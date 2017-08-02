### 读javascript面向对象精要总结

1、下面代码的实际执行过程是什么？

```js
var name = 'fan'
var str = name.charAt(0)     
console.log(str)
```
```js
var name = 'fan'
var temp = new String(name)
var str = temp.charAt(0)
temp = null
console.log(temp)
```
2、使用原始值和原始封装类型是有区别的

```js
var flag = new Boolean(false)
if(flag){
    console.log(flag)
}
```
因为flag是被解析成一个对象的，所以肯定是真的

3、函数是对象，函数有两种字面形式，第一种是函数声明，以`function`关键字开头后面跟函数名字。
```js
function add(){
    //...
}
```
第二种形式是将函数作为一个值赋值给变量
```js
var add = function(){
    
}
```
函数声明会被提升到上下文顶部，可以先使用再定义
```js
var result = add()
function add(){
    //...
}
```
而函数表达式仅能通过变量引用，因此是没有办法提升的。所以下面会报错
```js
var result = add()
var add = function(){
    //...
}
```
4、函数的length属性表示该函数的期望参数个数，实现一个函数，求其接受任意数量的参数并返回他们的和
```js
function sum(){
    var result = 0,
        i = 0,
        l = arguments.length
    while(i < l){
        result += arguments[i]
        i++
    }
    return result
}
```