const student = {
    name: "이진혁",
    age: 28,
}

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);
const a = 'name';
const b = 'age';
console.log(student.a);
console.log(student[a]);
console.log(student[b]);
student[a] = '김준일';
console.log(student)
student.name = '김준이';
console.log(student);

student.printName = () => console.log("이름: ", student.name);
student.printName();
const loginButton = {
    text: "로그인",
    value: "test",
    onclick: () => {
        console.log(loginButton.text)
    },
}

loginButton.onclick();
loginButton.onclick = () => {
    console.log("로그인 버튼을 클릭하였습니다.");
}
loginButton.onclick();

console.log(typeof(loginButton));
const loginButtonKeys = Object.keys(loginButton);
// loginButtonKeys = ["text", "value", "onclick"]

console.log(loginButtonKeys);
for (let i = 0; i < loginButtonKeys.length; i++) {
    const keyName = loginButtonKeys[i];
    console.log("keyName :", keyName);
    console.log(loginButton[keyName]);
}

const loginButtonValues = Object.values(loginButton);
console.log(loginButtonValues);
for (let i = 0; i < loginButtonValues.length; i++) {
    console.log(loginButtonValues[i]);
}

const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);
// 엔트리 - 키 밸류를 하나의 배열로 묶어버리기 때문에 키 밸류로 읽을게 아닌 0번 인덱스 1번 인덱스 로 읽어야함
for (let i = 0; i < loginButtonEntries.length; i++) {
    const entry = loginButtonEntries[i];
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}

for (let entry of loginButtonEntries) {
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}

// https://learnjs.vlpt.us/ 2장까지 공부해보기