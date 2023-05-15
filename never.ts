// if function return type if void then it nothing return
// when code is break then it return type is never
function error(message: string): never {
  throw new Error(message);
}

function fail(): void {
  // default void
  // return undefined
}
