#object----------------------
 objects are considered to be instances of a particular reference type.
 深拷贝一个object？
 
 
 let item = colors.shift(); // get the first item

 alert(Array.from("Matt")); // ["M", "a", "t", "t"] convert every iterable to array element
 
 #new-------------------
function a（）{this.name=1}
 new a()
 1. A new object is created in memory.
2. The new object’s internal [[Prototype]] pointer is assigned to the constructor’s proto-
type property.
3. The this value of the constructor is assigned to the new object (so this points to the
new object).
4. The code inside the constructor is executed (adds properties to the new object).
5. If the constructor function returns a non-null value, that object is returned. Otherwise, the new object that was just created is returned.



 #prototype----------------
 Each function is created with a prototype property, which is an object containing properties and methods that should be available to instances of a particular reference type.

The benefit of using the prototype is that all of its properties and methods are shared among object instances. 
 Person.prototype. constructor points to Person. 
 
 
 #promise --------------------
 http://xiamer.top/2019/05/09/Event-deep/  ：大神的宏任务微任务博客
 
 then： 实例方法  在外部用同步方法获取promise内部的异步方法的结果
  These methods can be used to access data returned from an asynchronous operation, handle success and failure outcomes of the promise, serially evaluate promises, or add functions that only execute once the promise enters a terminal state.
  
  如果p1.then（） 什么也不传 会返回p1 promise resolve的值     如果p1没有写resolve 返回pending
  如果传了方法 let p3 = p1.then(() => undefined);let p4 = p1.then(() => {});let p5 = p1.then(() => Promise.resolve());
    ·没有return   默认的会是resolved undefined   ·有返回值  let p6 = p1.then(() => 'bar'); 会把值包在一个新的resolved里  
    · 丢异常 p1.then(() => { throw 'baz'; }); 会reject并返回 丢error会在resolve
  .then(null,() => undefined) 第二个参数为onRejected  还是会在then里得到resolve 因为不是异常错误
  
  The Promise.prototype.catch() method can be used to attach only a reject handler to a promise.
 catch 方法给promise附加一个reject 控制函数
 let p = Promise.reject();
let onRejected = function(e) {
setTimeout(console.log, 0, 'rejected'); };
p.catch(onRejected);  打印rejected

 
 this 问题 https://juejin.cn/post/6844903511868571656
