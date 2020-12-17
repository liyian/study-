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
 then： 实例方法  在外部用同步方法获取promise内部的异步方法的结果
  These methods can be used to access data returned from an asynchronous operation, handle success and failure outcomes of the promise, serially evaluate promises, or add functions that only execute once the promise enters a terminal state.
 
 this 问题 https://juejin.cn/post/6844903511868571656
