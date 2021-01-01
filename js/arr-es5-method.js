// 2020.01.01

// ---------------------------- Array.forEarh ----------------------------

[1, 2, 3, 4].forEach((v, i, arr) => {
  console.log(this)
}, thisObj);

// 
// [].forEach(cb, thisObj)
// cb -> function(value, index, array) {}

// [].__proto__.forEach -》Array.prototype.forEach

[1, 2, 3].forEach(function (val, index, array) {
}, window)

var a = { b: 3 }
a.hasOwnProperty('b')

if (typeof Array.prototype.forEach !== 'function') {
  Array.prototype.forEach = function (fn, context) {
    for (let index = 0; index < this.length; index++) {
      if (typeof fn === 'function' && Object.prototype.hasOwnProperty.call(this, index)) {
        fn.call(context, this[index], index, this)
      }
    }
  }
}


// ---------------------------- Array.map ----------------------------
// 返回新的数组

var users = [
  { name: "张含韵", email: "zhang@email.com" },
  { name: "江一燕", email: "jiang@email.com" },
  { name: "李小璐", email: "li@email.com" }
];

const aClsEmail = users.map(x => x.email)


// 兼容处理
if (typeof Array.prototype.map !== 'function') {
  Array.prototype.map = function (fn, context) {
    let arr = []
    for (let index = 0; index < this.length; index++) {
      if (typeof fn === 'function' && Object.prototype.hasOwnProperty.call(this, index)) {
        arr.push(fn.call(context, this[index], index, this))
      }
    }
    return arr
  }
}


// ---------------------------- Array.filter ----------------------------
// return 为 true item
var users = [
  { name: "张含韵", email: "zhang@email.com" },
  { name: "江一燕", email: "jiang@email.com" },
  { name: "李小璐", email: "li@email.com" }
];


var arrayFilter = users.filter(function (item) {
  return item.email === 'zhang@email.com'
});

// [{ name: "张含韵", email: "zhang@email.com" }]

// 兼容处理
if (typeof Array.prototype.filter !== 'function') {
  Array.prototype.filter = function (fn, context) {
    let arr = []
    for (let index = 0; index < this.length; index++) {
      if (typeof fn === 'function' && Object.prototype.hasOwnProperty.call(this, index)) {
        // flag = fn.call(context, this[index], index, this)
        // if (flag) arr.push(this[index])
        fn.call(context, this[index], index, this) && arr.push(this[index])
      }
    }
    return arr
  }
}


// ---------------------------- Array.reduce ----------------------------
[].reduce(function (previous, current, index, array) {
  
}, initialVal); 

// [1,2,3,4] initial = 4 , 求 sum。 4 + 1 + 2 + 3 + 4

[1, 2, 3, 4].reduce(function (pre, cur) {
  // 第一次 pre 4  cur 1
  // 第二次 pre 5 cur 2
  // 第三次 pre 7 cur 3
  // 第四次 pre 10 cur 4
  return pre + cur
}, 4)


var a = {
  a: {
    b: {
      c: {
        d: 1
      }
    }
  }
}

// a.a.b.c.d
let str  = 'a.b.c.d'

// [a, b, c, d]
str.split('.').reduce((pre, cur) => {
  // 第一次 pre-> a {}, cur 'a' -> a.a
  // 第二次 pre-> a.a, cur 'b' -> a.a.b
  // ......
  return pre[cur]
}, a)

// reduce 实现
if (typeof Array.prototype.reduce !== 'function') {
  // fn -> function(pre, cur, index, array)  {}
  Array.prototype.reduce = function (fn, initial) {
    // 初始值定义
    let arr = this;
    let pre   = this[0]
    let cur  = this[1]
    let i = 1
    if (initial !==  undefined) {
      pre = initial
      cur = this[0]
      i = 0
    }


    for (i; i < this.length; i++) {
      // TODO:
      fn(pre, cur, index, array)
    }
  }
}

// reduece 实现
if (typeof Array.prototype.reduce != "function") {
  Array.prototype.reduce = function (callback, initialValue ) {
    // 定义初始值 循环的起始index
     var previous = initialValue, k = 0, length = this.length;
     if (typeof initialValue === "undefined") {
        previous = this[0];
        k = 1;
     }
    
    if (typeof callback === "function") {
      for (k; k < length; k++) {
         previous = callback(previous, this[k], k, this)
      }
    }
    return previous;
  };
}