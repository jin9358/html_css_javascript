/**
 * 배열 (Array)
 */

const arr1 = [];
const arr2 = new Array();

arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);
console.log(arr2);

console.log(arr1 === arr2);

const obj1 = {key1: "value1", key2: "value2"};
const obj2 = {key1: "value1", key2: "value2"};
console.log(obj1 === obj2);

/** JSON 
 * JS객체 또는 배열을 JSON 문자열로 변환 JSON.stringify();
 * JSON 문자열을 JS객체 또는 배열로 변환 - JSON.parse();
 */  
const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);
console.log(json1);
console.log(json2);
console.log(json1 === json2);

const json3 = JSON.stringify(obj1);
const json4 = JSON.stringify(obj2);
console.log(json3);
console.log(json4);
console.log(json3 === json4);

/**
 * 배열의 기본 내장 함수
 */

const names = ['1진혁', '2진혁', '3진혁'];
// 값 추가
names.push('4진혁');
// 값 제거
console.log(names.pop());
// 값 수정
names.splice(1, 0, '5진혁');
console.log(names);
// 값 찾기
const findFx = n => n === '6진혁';
const foundName = names.find(findFx);
console.log(foundName);
const students = [
    {name: '1진혁', age: 28},
    {name: '2진혁', age: 29},
    {name: '3진혁', age: 28},
    {name: '4진혁', age: 32},
];
console.log(students.find(s => s.name === '4진혁' && s.age === 33));

// 값 존재 유무
console.log(names.includes('5진혁'));

// 필터링
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter(n => n % 2 ===0));
console.log(students);
console.log(students.filter(student => student.age===28));
// students.stream().filter(student -> student.getAge() == 32).collect(collectors.toList());

// 값 변환
console.log(numbers.map(n => n * 10));
console.log(students.map(student => {
    if (student.age === 32) {
        return {
            name: student.name,
        }
    }
    return student;
}));

function map(array,fx) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(fx(array[i], i));
    }
    return newArray;
}

console.log(map(students, student => {
    if (student.age === 32) {
        return {
            name: student.name,
        }
    }
    return student;
}));

const filter = (array, fx) => {

    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if(fx(array[i])) {
            newArray.push(array[1]);
        }
    }   
console.log(students, studnet => student.age === 32);
}

