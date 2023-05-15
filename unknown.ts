let data: unknown;
data = "hello";
data = true;
let item: string;

// in any type we can assign any value
// any type will switch off power of typescript
if (typeof data === "string") {
  item = data;
}
