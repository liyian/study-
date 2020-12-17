# study-
 objects are considered to be instances of a particular reference type.
 let item = colors.shift(); // get the first item
 
 alert(Array.from("Matt")); // ["M", "a", "t", "t"] convert every iterable to array element
 
function a（）{this.name=1}
 new a()
 1. A new object is created in memory.
2. The new object’s internal [[Prototype]] pointer is assigned to the constructor’s proto-
type property.
3. The this value of the constructor is assigned to the new object (so this points to the
new object).
4. The code inside the constructor is executed (adds properties to the new object).
5. If the constructor function returns a non-null value, that object is returned. Otherwise, the new object that was just created is returned.



 prototypea
 Each function is created with a prototype property, which is an object containing properties and methods that should be available to instances of a particular reference type.

The benefit of using the prototype is that all of its properties and methods are shared among object instances. 
 Person.prototype. constructor points to Person. 
 
 
 
 
 this 问题 https://juejin.cn/post/6844903511868571656
