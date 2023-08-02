import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css'],
})
export class AlgorithmComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  linearArray = [1, 45, 123, 4, 54, 4, 6, 565, 65, 46, 65];
  linearSearch(input) {
    // temp is used to find all occurences of input
    let temp = false;
    for (let i = 0; i < this.linearArray.length; i++) {
      if (this.linearArray[i] == input) {
        temp = true;
        console.log('The value exists at index ' + i);
      }
    }
    if (!temp) {
      console.log('The value doesn"t exist');
    }
  }

  binaryArray = [1, 7, 12, 14, 34, 41, 46, 56, 65];
  binarySearch(input) {
    let start = 0;
    let end = this.binaryArray.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (this.binaryArray[mid] != input && start <= end) {
      if (this.binaryArray[mid] < input) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
      mid = Math.floor((start + end) / 2);
    }
    if (this.binaryArray[mid] == input) {
      console.log('the index is ' + mid);
      return mid;
    } else {
      console.log('not found');
      return -1;
    }
  }

  longString = 'Today is Ha Ha day, very funny Ha Ha';
  naiveStringSearch(input) {
    let count = 0;
    for (let i = 0; i < this.longString.length; i++) {
      for (let j = 0; j < input.length; j++) {
        if (input[j] !== this.longString[i + j]) {
          break;
        }
        if (j == input.length - 1) {
          count++;
        }
      }
    }
    console.log('the occurences are ' + count);
  }

  bubbleArray = [10, 4, 123, 4, 54, 8, 6, 565, 65, 46, 65];
  bubbleSort() {
    for (let i = this.bubbleArray.length; i > 0; i++) {
      let swap = true;
      for (let j = 0; j < i - 1; j++) {
        if (this.bubbleArray[j] > this.bubbleArray[j + 1]) {
          let temp = this.bubbleArray[j];
          this.bubbleArray[j] = this.bubbleArray[j + 1];
          this.bubbleArray[j + 1] = temp;
          swap = false;
        }
      }
      if (swap) break;
    }
    console.log('The sorted array is ' + this.bubbleArray);
  }

  selectionSort() {
    for (let i = 0; i < this.bubbleArray.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < this.bubbleArray.length; j++) {
        if (this.bubbleArray[j] < this.bubbleArray[lowest]) lowest = j;
      }
      if (i !== lowest) {
        let temp = this.bubbleArray[lowest];
        this.bubbleArray[lowest] = this.bubbleArray[i];
        this.bubbleArray[i] = temp;
      }
    }
    console.log('The array after selection sort is ' + this.bubbleArray);
  }

  insertionSort() {
    console.log('To be continued....');
  }

  merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    return results;
  }

  mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = this.mergeSort(arr.slice(0, mid));
    let right = this.mergeSort(arr.slice(mid));
    return this.merge(left, right);
  }
  mergeSortArray = [44, 54, 54, 62, 3, 5, 4];
  mergeSortcall() {
    let sortedArray = this.mergeSort(this.mergeSortArray);
    console.log("The sorteed array is " + sortedArray);
  }
}
