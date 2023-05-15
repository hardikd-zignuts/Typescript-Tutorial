//Define Type
type arrType = string[];

let arr: arrType = ["hello", "world"];

// Assign Type at deceleration
let newArr1: [number, string, boolean] = [1, "hello", true];
let newArr2: string[] = ["1", "hello", "true"];

// Assign multiple types at deceleration
let newArr3: (string | number)[] = [1, "hello", "1"];
