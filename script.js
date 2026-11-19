function onesDigit(n) {
	return n%10;
if (typeof n !== "number" || !Number.isFinite(n) || !Number.isInteger(n) || n <= 0) {
    throw new Error("Input must be a positive integer");
  }
 if (n > 999_999_999) {
    throw new Error("Input must have at most 9 digits");
  }
	let t= n % 10;
  return t;
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
