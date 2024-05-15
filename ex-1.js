// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); //False
Object.is(0, -0); //True
Object.is(NaN, 100); //False
Object.is("one", "two"); //False
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); //True => False (referance value of object when compare is address in memory but each object store value in differance address that why the result is False)
Object.is(null, undefined); //False

10 === 20; //False
10 === "10" //False
3.14 !== 3.14; ///False
"TechUp" !== "TechUp"; //False
NaN === NaN; //False
0 !== -0; // False (Af)

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; //True = False (referance value of object when compare is address in memory but each object store value in differance address that why the result is False)

