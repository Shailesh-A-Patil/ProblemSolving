import { Component, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';

@Component({
  selector: 'app-arrayobject',
  templateUrl: './arrayobject.component.html',
  styleUrls: ['./arrayobject.component.css'],
})
export class ArrayobjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  stringValue = '';

  frequencyCounter(input: string): Object {
    let result = {};
    for (let i = 0; i < input.length; i++) {
      let char = input[i].toLowerCase();
      if (this.isAlphaNumeric(char)) {
        result[char] > 0 ? result[char]++ : (result[char] = 1);
      }
    }
    console.log('The frequency Count is ' + result);
    return result;
  }

  isAlphaNumeric(char): boolean {
    let code = char.charCodeAt(0);
    if (
      !(code > 47 && code < 58) && // 0-9
      !(code > 64 && code < 91) && // A-Z
      !(code > 96 && code < 123) // a-z
    ) {
      return false;
    }
    return true;
  }

  str1 = 'abcdee';
  str2 = 'acbdde';
  anagramCheck() {
    if (this.str1.length !== this.str2.length) return false;
    let anagramObject1 = this.frequencyCounter(this.str1);
    // check for first frequency and compare directly with second data type
    //avoid checking frequency count for both data type
    for (let i = 0; i < this.str2.length; i++) {
      let char = this.str2[i];

      if (!anagramObject1[char]) return false;
      else anagramObject1[char]--;
    }

    console.log('Yes It is Anagram');
  }

  array1 = [1, 2, 3];
  array2 = [1, 4, 9];
  arraySquareCheck() {
    let result = this.frequencyForTwoArrays();
    if (result) {
      console.log("The array has it's respective square");
    } else {
      console.log("The array doesn't have it's respective square");
    }
  }

  frequencyForTwoArrays() {
    if (this.array1.length !== this.array2.length) {
      return false;
    }
    let arrObject1 = {};
    let arrObject2 = {};

    for (let value of this.array1) {
      arrObject1[value] > 0 ? arrObject1[value]++ : (arrObject1[value] = 1);
    }
    for (let value of this.array2) {
      arrObject2[value] > 0 ? arrObject2[value]++ : (arrObject2[value] = 1);
    }

    for (let value in arrObject1) {
      let check = parseInt(value);
      if (!(check ** 2 in arrObject2)) return false;
      if (arrObject1[check] !== arrObject2[check ** 2]) return false;
    }
    return true;
  }

  uniqueCount = [1, 1, 4, 4, 5, 5, 5, 6, 7];
  // Also remove duplicates
  uniqueArrayValueCount() {
    let i = 0;
    let j = i + 1;
    let count = 0;
    while (i < j) {
      if (j > this.uniqueCount.length) break;
      if (this.uniqueCount[i] === this.uniqueCount[j]) {
        j++;
      }
      if (this.uniqueCount[i] !== this.uniqueCount[j]) {
        count++;
        i = j;
        j = i + 1;
      }
    }
    console.log(`The unique values are ${count}`);
  }

  maxSumArray = [1, 4, 11, 3, 5, 2, 6, 8, 2, 3, 4];
  num = 2;
  maxSumSubArray() {
    let tempMax = 0;
    let maxSum = 0;
    if (this.num > this.maxSumArray.length) {
      return false;
    }
    for (let i = 0; i < this.num; i++) {
      tempMax = tempMax + this.maxSumArray[i];
    }
    maxSum = tempMax;
    for (let i = this.num; i < this.maxSumArray.length; i++) {
      tempMax = tempMax - this.maxSumArray[i - this.num] + this.maxSumArray[i];
      maxSum = Math.max(maxSum, tempMax);
    }
    console.log('The maximum sum subarray is ' + maxSum);
  }

  sortZeroOneTwo() {
    let zeroOneTwoAray = [0, 1, 2, 0, 1, 2];
    let lowest = 0;
    let medium = 0;
    let high = zeroOneTwoAray.length - 1;
    while (medium <= high) {
      if (zeroOneTwoAray[medium] === 0) {
        let temp = zeroOneTwoAray[lowest];
        zeroOneTwoAray[lowest] = zeroOneTwoAray[medium];
        zeroOneTwoAray[medium] = temp;
        medium++;
        lowest++;
      } else if (zeroOneTwoAray[medium] === 1) medium++;
      else if (zeroOneTwoAray[medium] === 2) {
        let temp = zeroOneTwoAray[high];
        zeroOneTwoAray[high] = zeroOneTwoAray[medium];
        zeroOneTwoAray[medium] = temp;
        high--;
      }
    }
    console.log(zeroOneTwoAray);
  }
  equilibriumPoint() {
    let array = [1, 2, 6, 4, 0, -1];
    let sum = 0;
    let lsum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    for (let i = 0; i < array.length; i++) {
      sum = sum - array[i]; // sum is now right sum at i
      if (sum === lsum) {
        console.log('equillibrium point is ' + i);
      }
      lsum = lsum + array[i];
    }
    return -1;
  }
  arrayLeader() {
    //element should be higher than it's right side elements
    let array = [15, 18, 5, 3, 6, 2];
    let high = array[array.length - 1];
    let leaders = [];
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] >= high) {
        leaders.push(array[i]);
        high = array[i];
      }
    }
    console.log('the leaders are ' + leaders);
  }
  wordsReverse() {
    // reverse = s.split(" ").reverse().join(" ");
    let s = 'Today is Ha ha day';
    let reverse = '';
    let low = s.length;
    let high = s.length;
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] == ' ' || i == 0) {
        low = i;
        reverse = reverse + s.substring(i, high);
        high = low;
      }
    }
    console.log('reverse of string words ' + reverse);
  }
  removeAdjacentduplicates() {
    let a = 'acaaabbbacddd';
    let i = 0;
    let s = '';
    while (a[i]) {
      if (a[i] != a[i + 1]) {
        s = s + a[i];
        i++;
      }
      if (a[i] == a[i + 1]) {
        while (a[i] == a[i + 1]) {
          i++;
        }
        i++;
      }
    }
    console.log('string is ' + s);
  }
  rotationString() {
    let first = 'mypencil';
    let second = 'encilmyp';
    let compare = first + first; // add first string mypencilmypencil
    for (let i = 0; i < compare.length; i++) {
      for (let j = 0; j < second.length; j++) {
        if (compare[i + j] != second[j]) break;
        if (j == second.length - 1) {
          return console.log('Yes it is rotated');
        }
      }
    }
    console.log('No string is not rotated');
  }
  removeduplicates() {
    let s = 'abcabcde';
    let anagramObject1 = this.frequencyCounter(s);
    let result = '';
    for (let a in anagramObject1) {
      result = result + a;
    }
    console.log('result is ' + result);
  }
  findRepeatingAndMissing() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 7];
    let missing, repeating;
    let results = new Array(arr.length + 1).fill(false);
    for (let i = 0; i < arr.length; i++) {
      if (results[arr[i]] == true) repeating = arr[i];
      results[arr[i]] = true;
    }
    for (let i = 1; i < results.length; i++) {
      if (results[i] == false) missing = i;
    }
    console.log('Missing ' + missing);
    console.log('Repeating ' + repeating);
  }
  // largest number formaed from an array
  largeNumberFormed() {

    let a = [3, 30, 34, 9]; // 934330
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        // to be continued....
      }
    }
    
  }
}
