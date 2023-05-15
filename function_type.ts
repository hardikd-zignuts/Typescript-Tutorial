const a = 10;
const b = "hello";
const c = undefined;

/**
 * The function "Add" returns a value of type number, but it is missing a parameter "a" which should be
 * defined.
 * @returns The code is incomplete and there is no variable `a` defined in the function, so it will
 * result in an error.
 */
function Add(a: number, b: string): string {
  return a + b;
}
Add(a, b);

function CheckReturnUndefined(): undefined {
  return c;
}
