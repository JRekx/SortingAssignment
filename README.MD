# Sorting Algorithms Assignment

This repository contains implementations of various sorting algorithms as part of an assignment. The implemented sorting algorithms include:

- Bubble Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Radix Sort
- Selection Sort

## Table of Contents

- [Introduction](#introduction)
- [Algorithms](#algorithms)
  - [Bubble Sort](#bubble-sort)
  - [Insertion Sort](#insertion-sort)
  - [Merge Sort](#merge-sort)
  - [Quick Sort](#quick-sort)
  - [Radix Sort](#radix-sort)
  - [Selection Sort](#selection-sort)
- [Usage](#usage)
- [Testing](#testing)

## Introduction

The purpose of this assignment is to implement and analyze various sorting algorithms. Each algorithm is implemented in its own file and can be used to sort arrays of numbers.

## Algorithms

### Bubble Sort

Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The algorithm repeats this process until the list is sorted.

### Insertion Sort

Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one element at a time. It iterates through the input array and inserts each element into its proper position in the sorted portion of the array.

### Merge Sort

Merge Sort is a divide-and-conquer sorting algorithm that recursively divides the input array into smaller subarrays, sorts them, and then merges them back together to obtain the final sorted array.

### Quick Sort

Quick Sort is a divide-and-conquer sorting algorithm that selects a pivot element and partitions the array around the pivot. The sub-arrays are then recursively sorted until the entire array is sorted.

### Radix Sort

Radix Sort is a non-comparative sorting algorithm that sorts elements based on their individual digits or radix. It performs sorting by grouping elements according to their digits, starting from the least significant digit to the most significant digit.

### Selection Sort

Selection Sort is a simple comparison-based sorting algorithm that divides the input array into two parts: the sorted portion and the unsorted portion. It repeatedly selects the smallest element from the unsorted portion and swaps it with the first element of the unsorted portion.

## Usage

To use the sorting algorithms, you can import the respective files and call the corresponding functions. Each sorting algorithm is implemented as a separate function that takes an array as input and returns the sorted array.

## Testing

The repository includes test files for each sorting algorithm. You can run the tests using a testing framework such as Jest or Mocha to ensure the correctness of the implementations.

