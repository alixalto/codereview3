Describe: stringVariable()
function stringVariable { 
  n = n.toString() {
    }
  return x
  }

Test: "It should turn a numeric variable (5) into a string ("5")"
Code: stringVariable(5);
Expected Output: "5"

Test: "It should turn a numeric variable (5) into a string ("5")"
Code: stringVariable(18);
Expected Output: "18"




Describe: stringNeighbor()
function stringNeighbor { 
  if (n.toString().includes("3")) {
    result[n] = "Won't you be my neighbor?"
    }
  return result
  }

Test: "It should turn a numeric variable into a string and return "Won't you be my neighbor" if the string variable includes the "letter" "3""
Code: stringNeighbor(3);
Expected Output: "Won't you be my neighbor?"

Test: "It should turn a numeric variable into a string and return "Won't you be my neighbor" if the string variable includes the "letter" "3""
Code: stringNeighbor(0);
Expected Output: "0"



Describe: stringNeighborArray()
function stringNeighborArray(n) {
  let result = 0
  for (let i = 0; i <= n; i++) {
  
    if (i.toString().includes("3")) {
    result[i] = "Won't you be my neighbor?"
  }
 }
}

Test: "It should return a string value from 0 to the user's inputted number wherein values including the "letter" 3 are returned as "Won't you be my neighbor?""
Code: stringNeighbor(3);
Expected Output: ["1", "2", "Won't you be my neighbor?"]

Test: "It should return a string value from 0 to the user's inputted number wherein values including the "letter" 3 are returned as "Won't you be my neighbor?""
Code: stringNeighbor(3);
Expected Output: ["1", "2"]




Describe: stringBoop()
function stringBoop(n) {
  let result = 0
  for (let i = 0; i <= n; i++) {
   if (i.toString().includes("2")) {
    result[i] = "Boop"
  }
 }
 return result
}


Test: "It should return a string value from 0 to the user's inputted number wherein values including the "letter" 3 are returned as "Won't you be my neighbor?""
Code: stringBoop(2);
Expected Output: ["1", "Boop"]

Test: "It should return a string value from 0 to the user's inputted number wherein values including the "letter" 3 are returned as "Won't you be my neighbor?""
Code: stringBoop(3);
Expected Output: ["1", "Boop", "3"]




Describe: stringNeighborBoop()
function stringNeighborBoop(n) {
  let result = 0
  for (let i = 0; i <= n; i++) {
  
    if (i.toString().includes("3")) {
    result[i] = "Won't you be my neighbor?";
  } else if (i.toString().includes("2")) {
    result[i] = "Boop!"
 }
 return result
}

Test: "It should return a string value from 0 to the user's inputted number wherein values including the "letter" 3 are returned as "Won't you be my neighbor?" and values including the "letter" 2 are returned as "Boop!", but "Won't you be my neighbor?" takes precedence over "Boop!" in values which contain both a "2" and a "3""
Code: stringNeighborBoop(3);
Expected Output: ["1", "Boop!", "Won't you be my neighbor?"]

Test: "It should return a string value from 0 to the user's inputted number wherein values including the "letter" 3 are returned as "Won't you be my neighbor?" and values including the "letter" 2 are returned as "Boop!", but "Won't you be my neighbor?" takes precedence over "Boop!" in values which contain both a "2" and a "3""
Code: stringNeighborBoop(2);
Expected Output: ["1", "Boop!"]

Test: "It should return a string value from 0 to the user's inputted number wherein values including the "letter" 3 are returned as "Won't you be my neighbor?" and values including the "letter" 2 are returned as "Boop!", but "Won't you be my neighbor?" takes precedence over "Boop!" in values which contain both a "2" and a "3""
Code: stringNeighborBoop(5);
Expected Output: ["1", "Boop!", "Won't you be my neighbor?", "4", "5"]

Test: "It should return a string value from 0 to the user's inputted number wherein values including the "letter" 3 are returned as "Won't you be my neighbor?" and values including the "letter" 2 are returned as "Boop!", but "Won't you be my neighbor?" takes precedence over "Boop!" in values which contain both a "2" and a "3""
Code: stringNeighborBoop(13);
Expected Output: ["1", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "10", "11", "Boop!", "Won't you be my neighbor?"]





Describe: stringNeighborBoopBeep()
function stringNeighborBoopBeep(n) {
  let result = 0
  for (let i = 0; i <= n; i++) {
  
    if (i.toString().includes("3")) {
    result[i] = "Won't you be my neighbor?";
  } else if (i.toString().includes("2")) {
    result[i] = "Boop!";
  } else if (i.toString().includes("!")) {
    result [i] = "Beep!";
  }
 }
 return result
}

Test: "It should return a string value from 0 to the user's inputted number wherein values including the "letter" 3 are returned as "Won't you be my neighbor?", values including the "letter" 2 are returned as "Boop!", and values including the "letter" 1" are returned as "Beep!"; "Won't you be my neighbor?" takes precedence over "Boop!" which takes precedence over "Beep!" in values which contain combinations of "1", "2", and/or "3""
Code: stringNeighborBoopBeep(2);
Expected Output: ["Beep!", "Boop!"]

Test: "It should return a string value from 0 to the user's inputted number wherein values including the "letter" 3 are returned as "Won't you be my neighbor?", values including the "letter" 2 are returned as "Boop!", and values including the "letter" 1" are returned as "Beep!"; "Won't you be my neighbor?" takes precedence over "Boop!" which takes precedence over "Beep!" in values which contain combinations of "1", "2", and/or "3""
Code: stringNeighborBoopBeep(5);
Expected Output: ["Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"]

Test: "It should return a string value from 0 to the user's inputted number wherein values including the "letter" 3 are returned as "Won't you be my neighbor?", values including the "letter" 2 are returned as "Boop!", and values including the "letter" 1" are returned as "Beep!"; "Won't you be my neighbor?" takes precedence over "Boop!" which takes precedence over "Beep!" in values which contain combinations of "1", "2", and/or "3""
Code: stringNeighborBoopBeep(13);
Expected Output: ["Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]