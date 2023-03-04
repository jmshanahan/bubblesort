import { SortData } from "./SortData";
import { Numbers } from "./Numbers";
import { Strings } from "./Strings";
const dateArray: Date[] = [
  new Date("2039 , 9 , 24"),
  new Date("2035 , 9 , 24"),
  new Date("2001 , 9 , 24"),
  new Date("2029 , 9 , 24"),
];

const years: number[] = dateArray.map((date: Date): number => {
  return date.getFullYear();
});
// const newNumbers = new Numbers(years);

// newNumbers.sort();
// console.log(newNumbers.number);

const stringData = new Strings("kbjTR");
stringData.sort();
console.log(stringData);
