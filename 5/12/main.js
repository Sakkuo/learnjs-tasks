let user = {
  name: "Василий Иванович",
  age: 35
};


user = JSON.stringify(user)

// console.log(user)

let parsedUser = JSON.parse(user)

// console.log(parsedUser)




//

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));