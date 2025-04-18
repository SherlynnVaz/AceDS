"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"

export default function ArraysPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/topics">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Topics
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-2">Array Data Structure</h1>
          <p className="text-gray-600 mb-6">
            An Array is a linear data structure that stores elements in contiguous memory locations.
            It provides constant-time access to elements using their indices.
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <h2 className="text-2xl font-bold">Array Overview</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Characteristics</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fixed size (static arrays) or variable size (dynamic arrays)</li>
                  <li>Contiguous memory allocation</li>
                  <li>Random access using indices</li>
                  <li>Homogeneous elements (same data type)</li>
                  <li>Zero-based or one-based indexing</li>
                </ul>

                <h3 className="text-xl font-semibold">Types of Arrays</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>One-dimensional Arrays (Linear Arrays)</li>
                  <li>Multi-dimensional Arrays (2D, 3D, etc.)</li>
                  <li>Dynamic Arrays (e.g., C++ vectors)</li>
                  <li>Jagged Arrays (Arrays of Arrays)</li>
                </ul>

                <h3 className="text-xl font-semibold">Time Complexity</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Operation</th>
                        <th className="border border-gray-300 px-4 py-2">Static Array</th>
                        <th className="border border-gray-300 px-4 py-2">Dynamic Array</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Access</td>
                        <td className="border border-gray-300 px-4 py-2">O(1)</td>
                        <td className="border border-gray-300 px-4 py-2">O(1)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Search</td>
                        <td className="border border-gray-300 px-4 py-2">O(n)</td>
                        <td className="border border-gray-300 px-4 py-2">O(n)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Insertion</td>
                        <td className="border border-gray-300 px-4 py-2">O(n)</td>
                        <td className="border border-gray-300 px-4 py-2">O(1) amortized</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Deletion</td>
                        <td className="border border-gray-300 px-4 py-2">O(n)</td>
                        <td className="border border-gray-300 px-4 py-2">O(n)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="implementation" className="space-y-4">
              <h2 className="text-2xl font-bold">Array Implementation</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Static Array</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Static array implementation in C
#include <stdio.h>

#define MAX_SIZE 100

typedef struct {
    int array[MAX_SIZE];
    int size;
} StaticArray;

// Initialize array
void initArray(StaticArray* arr) {
    arr->size = 0;
}

// Insert element at index
int insert(StaticArray* arr, int index, int element) {
    if (arr->size >= MAX_SIZE || index < 0 || index > arr->size) {
        return 0;  // Error
    }
    
    // Shift elements to make space
    for (int i = arr->size; i > index; i--) {
        arr->array[i] = arr->array[i-1];
    }
    
    arr->array[index] = element;
    arr->size++;
    return 1;  // Success
}`}
                </pre>

                <h3 className="text-xl font-semibold">Dynamic Array</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Dynamic array implementation in C
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int* array;
    int size;
    int capacity;
} DynamicArray;

// Initialize dynamic array
DynamicArray* createArray(int initialCapacity) {
    DynamicArray* arr = (DynamicArray*)malloc(sizeof(DynamicArray));
    arr->array = (int*)malloc(initialCapacity * sizeof(int));
    arr->size = 0;
    arr->capacity = initialCapacity;
    return arr;
}

// Resize array when needed
void resize(DynamicArray* arr) {
    int newCapacity = arr->capacity * 2;
    int* newArray = (int*)malloc(newCapacity * sizeof(int));
    
    // Copy elements to new array
    for (int i = 0; i < arr->size; i++) {
        newArray[i] = arr->array[i];
    }
    
    free(arr->array);
    arr->array = newArray;
    arr->capacity = newCapacity;
}`}
                </pre>

                <h3 className="text-xl font-semibold">Common Operations</h3>
                <div className="space-y-2">
                  <h4 className="font-semibold">Search Operation</h4>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Linear search in array
int search(int arr[], int size, int key) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == key) {
            return i;  // Found at index i
        }
    }
    return -1;  // Not found
}`}
                  </pre>

                  <h4 className="font-semibold">Sort Operation</h4>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Bubble sort implementation
void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`}
                  </pre>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="applications" className="space-y-4">
              <h2 className="text-2xl font-bold">Array Applications</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Real-world Applications</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Image Processing (2D Arrays)</li>
                  <li>Database Management Systems</li>
                  <li>Spreadsheet Applications</li>
                  <li>Matrix Operations</li>
                  <li>Memory Management</li>
                  <li>Hash Tables (Array-based)</li>
                </ul>

                <h3 className="text-xl font-semibold">Example: Matrix Addition</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Matrix addition using 2D arrays
void matrixAdd(int A[][100], int B[][100], int C[][100], int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }
}

// Example usage:
int main() {
    int A[100][100], B[100][100], C[100][100];
    int rows = 3, cols = 3;
    
    // Initialize matrices A and B
    // ... initialization code ...
    
    // Perform matrix addition
    matrixAdd(A, B, C, rows, cols);
    
    // Print result matrix C
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d ", C[i][j]);
        }
        printf("\\n");
    }
    
    return 0;
}`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Learning Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Array Basics</span>
                  <span className="text-green-600">Completed</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Implementation</span>
                  <span className="text-yellow-600">In Progress</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Advanced Topics</span>
                  <span className="text-gray-600">Not Started</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-600 h-2 rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Related Topics</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/topics/linked-lists" className="text-blue-600 hover:underline">
                  Linked Lists
                </Link>
              </li>
              <li>
                <Link href="/topics/stacks" className="text-blue-600 hover:underline">
                  Stacks
                </Link>
              </li>
              <li>
                <Link href="/topics/queues" className="text-blue-600 hover:underline">
                  Queues
                </Link>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Practice</h3>
            <Link href="/topics/arrays/lab">
              <Button className="w-full">
                Try Array Lab
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
} 