
type Operation = "multiply" | "add" | "divide";
type Result = number;

export const calculator = (value1: number, value2: number, op: Operation): Result => {
  switch (op) {
    case "multiply":
      return value1 * value2;

    case "add":
      return value1 + value2;

    case "divide":
      if (value2 === 0) throw new Error('can\'t divide by 0');
      return value1 / value2;

    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
};

try {
  //console.log(multiplicator(2, 4, 'add'));
  console.log(process.argv);

} catch (e) {
  const errorMessage = 'Error, something bad happened, message: ';
  if (e instanceof Error) {
    //Read this to understand why we need the if clause
    //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#unknown-on-catch-clause-bindings
    //https://stackoverflow.com/questions/60151181/object-is-of-type-unknown-typescript-generics
    console.log(errorMessage, e.message);
  }
}