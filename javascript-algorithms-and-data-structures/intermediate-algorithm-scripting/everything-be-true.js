function truthCheck(collection, pre) {
  console.log(collection.every(obj=>obj[pre]))
  return collection.every(obj=>obj[pre])
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name");
