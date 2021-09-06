interface MultiplyValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    }
  } else {
    throw new Error("Provided values were not numbers!");
  }
}

const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
}

try {
  const { value1, value2 } = parseArguments(process.argv);

  multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}


/* v1 before https://fullstackopen.com/en/part9/first_steps_with_type_script#improving-the-project

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
}*/