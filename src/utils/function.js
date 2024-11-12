export function toCamelCase(str) {
  let ans = str.toLowerCase();
  return ans.split(" ").reduce((s, c) => s
      + (c.charAt(0).toUpperCase() + c.slice(1)));
}
export const color = (item) => {
  switch(item.toLowerCase()) {
    case 'pass':
    case 'active':
    case 'present':
      return "#16BE16";
    case 'fail':
    case 'inactive':
    case 'absent':
      return "#ED1C00"; 
    case 'late':
      return "#E4AD1D"; 
    case 'first half':
      return "#E41DA5";
    default:
      return "#A01494"; 
  }
};
export const checkColor = (item) => {
  switch(item.toLowerCase()) {
    case 'pass':
    case 'active':
    case 'present':
      return "green";
    case 'fail':
    case 'inactive':
    case 'absent':
      return "red"; 
    case 'late':
      return "yellow"; 
    case 'first half':
      return "pink";
    default:
      return "purple"; 
  }
};