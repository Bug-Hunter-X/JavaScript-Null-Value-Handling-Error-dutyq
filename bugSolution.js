function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values appropriately.  Options include:
    // 1. Return a default value:
    return 0; // Or another suitable default
    // 2. Throw an error:
    // throw new Error('Null values are not allowed');
    // 3. Return null, indicating failure:
    // return null;
  }
  // ...rest of the function...
}