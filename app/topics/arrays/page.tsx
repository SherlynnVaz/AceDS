"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, BookOpen, Code, Play } from "lucide-react"

export default function ArraysTopicPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/dashboard">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">Arrays</h1>
          <p className="text-gray-600 mb-6">
            Learn about arrays, their operations, and common algorithms.
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> Overview
              </TabsTrigger>
              <TabsTrigger value="implementation" className="flex items-center gap-2">
                <Code className="h-4 w-4" /> Implementation
              </TabsTrigger>
              <TabsTrigger value="applications" className="flex items-center gap-2">
                <Play className="h-4 w-4" /> Applications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="prose max-w-none">
                <h2>What is an Array?</h2>
                <p>
                  An array is a linear data structure that collects elements of the same data type and stores them in contiguous memory locations. 
                  Arrays are one of the most fundamental and widely used data structures in computer programming.
                </p>

                <h3>Key Characteristics</h3>
                <ul>
                  <li>
                    <strong>Fixed Size:</strong> Arrays have a fixed size that needs to be specified during declaration (in most languages)
                  </li>
                  <li>
                    <strong>Random Access:</strong> Elements can be accessed directly using their index
                  </li>
                  <li>
                    <strong>Homogeneous Elements:</strong> All elements must be of the same data type
                  </li>
                  <li>
                    <strong>Contiguous Memory:</strong> Elements are stored in consecutive memory locations
                  </li>
                </ul>

                <h3>Basic Operations</h3>
                <ul>
                  <li>
                    <strong>Access:</strong> O(1) - Direct access using index
                  </li>
                  <li>
                    <strong>Search:</strong> O(n) - Linear search in unsorted array
                  </li>
                  <li>
                    <strong>Insert:</strong> O(n) - Worst case when inserting at beginning
                  </li>
                  <li>
                    <strong>Delete:</strong> O(n) - Worst case when deleting from beginning
                  </li>
                </ul>

                <h3>Visual Representation</h3>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-6 gap-2">
                    {[10, 20, 30, 40, 50, 60].map((item, index) => (
                      <div
                        key={index}
                        className="border-2 border-gray-300 p-4 text-center bg-white"
                      >
                        {item}
                        <div className="text-xs text-gray-500">Index: {index}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="outline" disabled>
                  <ArrowLeft className="h-4 w-4 mr-2" /> Previous
                </Button>
                <Button onClick={() => setActiveTab("implementation")}>
                  Next <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="implementation" className="space-y-6">
              <div className="prose max-w-none">
                <h2>Array Implementation</h2>
                <p>Arrays can be implemented in various ways depending on the programming language. Here are some common implementations:</p>

                <h3>Static Array Implementation</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="language-javascript">{`// C++ implementation
int arr[5]; // Static array of size 5

// Initialize array
for(int i = 0; i < 5; i++) {
    arr[i] = i * 10;
}

// Access elements
int firstElement = arr[0];
int lastElement = arr[4];

// Modify elements
arr[2] = 25;`}</code>
                </pre>

                <h3>Dynamic Array Implementation</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="language-javascript">{`// C++ implementation using vectors
#include <vector>

vector<int> arr; // Dynamic array

// Add elements
arr.push_back(10);
arr.push_back(20);
arr.push_back(30);

// Remove last element
arr.pop_back();

// Insert at position
arr.insert(arr.begin() + 1, 15);

// Remove from position
arr.erase(arr.begin() + 1);

// Get size
int size = arr.size();`}</code>
                </pre>

                <h3>Common Array Operations</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="language-javascript">{`class ArrayOperations {
    // Linear Search
    int linearSearch(int arr[], int n, int key) {
        for(int i = 0; i < n; i++) {
            if(arr[i] == key)
                return i;
        }
        return -1;
    }

    // Binary Search (for sorted arrays)
    int binarySearch(int arr[], int left, int right, int key) {
        while(left <= right) {
            int mid = left + (right - left) / 2;
            
            if(arr[mid] == key)
                return mid;
            
            if(arr[mid] < key)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1;
    }

    // Insertion at specific position
    void insert(int arr[], int& n, int pos, int value) {
        for(int i = n; i > pos; i--)
            arr[i] = arr[i-1];
        arr[pos] = value;
        n++;
    }

    // Deletion from specific position
    void remove(int arr[], int& n, int pos) {
        for(int i = pos; i < n-1; i++)
            arr[i] = arr[i+1];
        n--;
    }
}`}</code>
                </pre>
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setActiveTab("overview")}>
                  <ArrowLeft className="h-4 w-4 mr-2" /> Previous
                </Button>
                <Button onClick={() => setActiveTab("applications")}>
                  Next <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              <div className="prose max-w-none">
                <h2>Applications of Arrays</h2>
                <p>
                  Arrays are one of the most versatile data structures and are used in numerous applications. Here are some common use cases:
                </p>

                <h3>1. Data Storage and Management</h3>
                <ul>
                  <li>Storing and managing collections of similar data</li>
                  <li>Database record management</li>
                  <li>Memory allocation in programming languages</li>
                </ul>

                <h3>2. Algorithm Implementation</h3>
                <ul>
                  <li>Sorting algorithms (Bubble Sort, Quick Sort, etc.)</li>
                  <li>Searching algorithms (Linear Search, Binary Search)</li>
                  <li>Dynamic Programming solutions</li>
                </ul>

                <h3>Example: Array Sorting</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="language-javascript">{`// Bubble Sort Implementation
void bubbleSort(int arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        for(int j = 0; j < n-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                // Swap elements
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

// Usage Example
int arr[] = {64, 34, 25, 12, 22, 11, 90};
int n = sizeof(arr)/sizeof(arr[0]);
bubbleSort(arr, n);`}</code>
                </pre>

                <h3>3. Matrix Operations</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="language-javascript">{`// Matrix Addition
void matrixAdd(int A[][100], int B[][100], int C[][100], int rows, int cols) {
    for(int i = 0; i < rows; i++) {
        for(int j = 0; j < cols; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }
}`}</code>
                </pre>
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setActiveTab("implementation")}>
                  <ArrowLeft className="h-4 w-4 mr-2" /> Previous
                </Button>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/topics/arrays/lab">
                    Try It Yourself <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-80 space-y-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Learning Progress</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overview</span>
                  <span className="text-green-600">Completed</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Implementation</span>
                  <span className="text-amber-500">In Progress</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Applications</span>
                  <span className="text-gray-400">Not Started</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Practice Lab</span>
                  <span className="text-gray-400">Not Started</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Related Topics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/topics/linked-lists" className="text-green-600 hover:underline">
                    Linked Lists
                  </Link>
                </li>
                <li>
                  <Link href="/topics/sorting" className="text-green-600 hover:underline">
                    Sorting Algorithms
                  </Link>
                </li>
                <li>
                  <Link href="/topics/searching" className="text-green-600 hover:underline">
                    Searching Algorithms
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-green-600 hover:underline flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" /> Array Visualization
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:underline flex items-center">
                    <Code className="h-4 w-4 mr-2" /> Practice Problems
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:underline flex items-center">
                    <Play className="h-4 w-4 mr-2" /> Video Tutorial
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 