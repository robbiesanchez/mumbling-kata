function accum(s) {
  let total = "";
  for(let i = 0; i < s.length; i++) {
    let low = s[i].toLowerCase(s[i]);
    let upper = s[i].toUpperCase(s[i]);
    let lowers = low.repeat(i)
    total+=  upper + lowers + "-";
    }
  console.log(total.slice(0,-1));
}

accum("aAawTG");