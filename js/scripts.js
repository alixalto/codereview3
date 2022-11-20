function roboger(n) {
  let result = []
  for (let i = 0; i <= n; i++) {
  
    if (i.toString().includes("3")) {
    result[i] = "Won't you be my neighbor?";
  } else if (i.toString().includes("2")) {
    result[i] = "Boop!";
  } else if (i.toString().includes("1")) {
    result [i] = "Beep!";
  } else {
    result [i] = n;
  }
 }
 return result
}