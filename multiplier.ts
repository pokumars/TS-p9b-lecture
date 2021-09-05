type Operation = "multiply" | "add" | "divide";
type Result = number;

const multiplicator = (a: number, b: number, op: Operation): Result => {
  switch (op) {
    case "multiply":
      return a * b;

    case "add":
      return a + b;

    case "divide":
      if (b === 0) throw new Error('can\'t divide by 0');
      return a / b;

    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
}



try {
  //console.log(multiplicator(2, 4, 'add'));
  console.log(process.argv)

} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}