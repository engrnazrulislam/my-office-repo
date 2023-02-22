const message='Hello How Are you';
const age=38;
const condition=true;
const friends=[12,13,14,15,16,17,18];
const students={id: 101, name:'Nazrul', session: '2016-2017', year: '2016',address:'DUET, Gazipur'};
console.log(typeof(message))
console.log(typeof(age))
console.log(typeof(condition))
console.log(Array.isArray(friends))
console.log(typeof(students))
const newFriends=[20,40,50,60];
const newAllFriends=newFriends.concat(friends);
console.log(newAllFriends)