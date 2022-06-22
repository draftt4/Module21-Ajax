const parser = new DOMParser();

const list = `
<list>
<student1>
  <name lang="en"> Ivan Ivanov</name>
  <age>35</age>
  <prof>teacher</prof>
</student1>
<student2>
  <name lang="ru">Петр Петров</name>
  <age>58</age>
  <prof>driver</prof>
</student2>
</list> `;

const xmlDom = parser.parseFromString(list, "text/xml");

const student1 = 
xmlDom.querySelector("student1");
const nameNode =
student1.querySelector("name");
const ageNode = 
student1.querySelector("age");
const profNode = 
student1.querySelector("prof");

const langAttr = 
nameNode.getAttribute('lang');

const student2 = 
xmlDom.querySelector("student2");
const nameNode2 =
student2.querySelector("name");
const ageNode2 = 
student2.querySelector("age");
const profNode2 = 
student2.querySelector("prof");

const langAttr2 = 
nameNode2.getAttribute('lang');



const result1 = {
    name: nameNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
  };
  console.log('result1', result1);


const result2 = {
    name: nameNode2.textContent,
    age: Number(ageNode2.textContent),
    prof: profNode2.textContent,
    lang: langAttr2,
  };
  console.log('result2', result2);