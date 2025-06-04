const student = {
    name: '김준일',
    age: 32,
    address : '부산 동래구',
    phone : '010-9988-1916',
};

// 비구조 할당
const { name, address } = student;
console.log(name, address);

// REST 문법
const {age, phone, ...a} = student;
console.log(age, phone, a);

const numbers = [1,2,3,4];
const [n1, n2, ...ns] = numbers;
console.log(n1,n2, ns);

// spread
const newStudent = {
    ...student,
    gender: '남',
}

console.log(newStudent);

// 배열 spread
const newNumbers = [...numbers, 5, 6]; // 얕은복사 - 값만
console.log(newNumbers);

const newNumbers2 = numbers; // 깊은복사 - 주소값까지

let names = [];

function addName(name) {
    names = [...names, name];
}

let obj = {
    data1: "data1",
    data2: "data2",
}

function addProps(props) {
    obj = {
        ...obj,
        ...props
    }
}
addProps({data3 : "data3", data4: "data4"});
console.log(obj);