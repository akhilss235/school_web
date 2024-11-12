export function toCamelCase(str) {
  let ans = str.toLowerCase();
  return ans.split(" ").reduce((s, c) => s
      + (c.charAt(0).toUpperCase() + c.slice(1)));
}