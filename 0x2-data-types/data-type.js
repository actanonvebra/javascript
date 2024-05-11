let numOne=3
let numTwo=3

console.log(numOne==numTwo) // true


let js='javascript'
let py='python'

console.log(js==py) // false


let nums =[1, 2, 3]

console.log(nums[0])


/*
primitive ile non-primitive veri tipleri arasındaki
en temel fark : non-primitive verinin değeriyle oynayabilirsin.
*/


let nums1=[1,2,3]
let nums2=[1,2,3]

console.log(nums1==nums2) // false

let user1={
    name: 'tayfun',
    surname: 'erbilen'
}

let user2={
    name: 'tayfun',
    surname: 'erbilen'
}

console.log(nums1==nums2) // false

// Math
console.log(Math.floor(Math.random()*11))


let name='serhat'
let surname='serhat'

// let fullName=name+' '+surname
let fullName2=`${name} ${surname}`

console.log(fullName2)


// \n new line.
let paragraph="serhat\nbulut\n2555"
console.log(paragraph)

let a=2
let b=3
console.log(`${a} is greater than ${b}: ${a > b}`)

// string methods
// everything in javascript is an object.


//length
let youtube='hllo'
console.log(youtube.length) //4

let word=youtube.toUpperCase()
console.log(word)


//substring
let name2="giripgirme"
console.log(name2.substring(0,5))

//split
//genelde boşluk karakteriyle kullanılır.
let name3="bosluk"
console.log(name3.split('o')) // ['b','sluk']


//split-reverse-join
let name4="serhat"
console.log(name4.split("").reverse().join(""))

//trim, sağda ve solda bulunan boşlukları kaldırır.


//includes, aslında içeriyor mu içer miyor mu bool dönüyor.
let dark="bu verilen ifadeyi içeriyor mu?"
console.log(dark.includes("bu")) //true
console.log(dark.includes("Bu")) //false
console.log(dark.includes("ifade")) //true
console.log(dark.includes("ifadeyi")) //true
console.log(dark.includes("ifadeyi ")) //true

//string değeri int değere çevirmek.
let num='5'
let numInt=parseInt(num)
console.log(typeof num) //string
console.log(typeof numInt) //number













