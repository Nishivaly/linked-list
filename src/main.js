import LinkedList from "./linkedlist.js";

const myList = new LinkedList();

myList.append("urmom");
myList.append("ursis");
myList.append("urdad");
myList.append("urgrandpa");
myList.append("urunclo");

console.log(myList.contains("urmom"));
console.log(myList.contains("urmam"));

console.log(myList.find("urad"));

myList.toString();
myList.size();

myList.pop();
myList.toString();
myList.size();

myList.pop();
myList.toString();
myList.size();

myList.pop();
myList.toString();
myList.size();

myList.pop();
myList.toString();
myList.size();

myList.pop();
myList.toString();
myList.size();

myList.pop();
myList.toString();
myList.size();
