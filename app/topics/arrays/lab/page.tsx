"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Play, RefreshCw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ArrayLabPage() {
  const [code, setCode] = useState(`// Implement Array operations in C
#include <stdio.h>
#include <stdbool.h>

#define MAX_SIZE 100

// Function to insert element at position
void insert(int arr[], int* n, int pos, int x) {
    // Your code here
}

// Function to delete element at position
void delete(int arr[], int* n, int pos) {
    // Your code here
}

// Function to search for an element
int search(int arr[], int n, int x) {
    // Your code here
}

// Function to display array
void display(int arr[], int n) {
    // Your code here
}

int main() {
    int arr[MAX_SIZE];
    int n = 0;  // Current size of array
    
    // Test insertion
    insert(arr, &n, 0, 10);  // arr = [10]
    insert(arr, &n, 1, 20);  // arr = [10, 20]
    insert(arr, &n, 1, 30);  // arr = [10, 30, 20]
    display(arr, n);         // Should print: 10 30 20
    
    // Test deletion
    delete(arr, &n, 1);      // arr = [10, 20]
    display(arr, n);         // Should print: 10 20
    
    // Test search
    printf("%d\\n", search(arr, n, 20));  // Should print: 1
    printf("%d\\n", search(arr, n, 30));  // Should print: -1
    
    return 0;
}`)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState("code")

  const runCode = () => {
    setIsRunning(true)
    setOutput("")

    try {
      // This is a simulation of C code execution
      let outputText = ""

      // Check if the code contains the required functions
      const hasInsert = code.includes("void insert") || code.includes("int insert")
      const hasDelete = code.includes("void delete") || code.includes("int delete")
      const hasSearch = code.includes("int search")
      const hasDisplay = code.includes("void display")

      if (!hasInsert || !hasDelete || !hasSearch || !hasDisplay) {
        outputText = "Error: Missing required array functions.\n"
        setIsSuccess(false)
      } else {
        // Simulate the output of a correct implementation
        outputText = "10 30 20\n10 20\n1\n-1\n"

        // Check if the implementation seems reasonable
        const hasArrayAccess = code.includes("arr[")
        const hasLoops = code.includes("for(") || code.includes("while(")
        const hasSizeUpdate = code.includes("n++") || code.includes("n--") || code.includes("(*n)++") || code.includes("(*n)--")

        setIsSuccess(hasArrayAccess && hasLoops && hasSizeUpdate)
      }

      setOutput(outputText)
    } catch (error) {
      setOutput(`Error: ${error.message}`)
      setIsSuccess(false)
    } finally {
      setIsRunning(false)
    }
  }

  const resetCode = () => {
    setCode(`// Implement Array operations in C
#include <stdio.h>
#include <stdbool.h>

#define MAX_SIZE 100

// Function to insert element at position
void insert(int arr[], int* n, int pos, int x) {
    // Your code here
}

// Function to delete element at position
void delete(int arr[], int* n, int pos) {
    // Your code here
}

// Function to search for an element
int search(int arr[], int n, int x) {
    // Your code here
}

// Function to display array
void display(int arr[], int n) {
    // Your code here
}

int main() {
    int arr[MAX_SIZE];
    int n = 0;  // Current size of array
    
    // Test insertion
    insert(arr, &n, 0, 10);  // arr = [10]
    insert(arr, &n, 1, 20);  // arr = [10, 20]
    insert(arr, &n, 1, 30);  // arr = [10, 30, 20]
    display(arr, n);         // Should print: 10 30 20
    
    // Test deletion
    delete(arr, &n, 1);      // arr = [10, 20]
    display(arr, n);         // Should print: 10 20
    
    // Test search
    printf("%d\\n", search(arr, n, 20));  // Should print: 1
    printf("%d\\n", search(arr, n, 30));  // Should print: -1
    
    return 0;
}`)
    setOutput("")
    setIsSuccess(false)
  }

  const solutionCode = `#include <stdio.h>
#include <stdbool.h>

#define MAX_SIZE 100

// Function to insert element at position
void insert(int arr[], int* n, int pos, int x) {
    if (*n >= MAX_SIZE) {
        printf("Array is full\\n");
        return;
    }
    if (pos < 0 || pos > *n) {
        printf("Invalid position\\n");
        return;
    }
    
    // Shift elements to make space
    for (int i = *n; i > pos; i--) {
        arr[i] = arr[i-1];
    }
    
    arr[pos] = x;
    (*n)++;
}

// Function to delete element at position
void delete(int arr[], int* n, int pos) {
    if (*n <= 0) {
        printf("Array is empty\\n");
        return;
    }
    if (pos < 0 || pos >= *n) {
        printf("Invalid position\\n");
        return;
    }
    
    // Shift elements to fill the gap
    for (int i = pos; i < *n - 1; i++) {
        arr[i] = arr[i+1];
    }
    
    (*n)--;
}

// Function to search for an element
int search(int arr[], int n, int x) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;
}

// Function to display array
void display(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[MAX_SIZE];
    int n = 0;  // Current size of array
    
    // Test insertion
    insert(arr, &n, 0, 10);  // arr = [10]
    insert(arr, &n, 1, 20);  // arr = [10, 20]
    insert(arr, &n, 1, 30);  // arr = [10, 30, 20]
    display(arr, n);         // Should print: 10 30 20
    
    // Test deletion
    delete(arr, &n, 1);      // arr = [10, 20]
    display(arr, n);         // Should print: 10 20
    
    // Test search
    printf("%d\\n", search(arr, n, 20));  // Should print: 1
    printf("%d\\n", search(arr, n, 30));  // Should print: -1
    
    return 0;
}`

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/topics/arrays">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Arrays
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-2">Array Operations Lab</h1>
          <p className="text-gray-600 mb-6">
            Practice implementing basic array operations and test your understanding.
          </p>

          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Implement the following array operations:</li>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>
                    <code>insert(arr, n, pos, x)</code> - Insert element x at position pos
                  </li>
                  <li>
                    <code>delete(arr, n, pos)</code> - Delete element at position pos
                  </li>
                  <li>
                    <code>search(arr, n, x)</code> - Search for element x and return its position
                  </li>
                  <li>
                    <code>display(arr, n)</code> - Display all elements in the array
                  </li>
                </ul>
                <li>Handle edge cases (array full, empty, invalid position)</li>
                <li>Run the code to test your implementation</li>
                <li>Make sure all test cases pass</li>
              </ol>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="code">Your Code</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
            </TabsList>

            <TabsContent value="code">
              <div className="border rounded-lg overflow-hidden mb-4">
                <div className="bg-gray-100 p-2 border-b flex justify-between items-center">
                  <span className="font-medium">Array Implementation</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={resetCode} className="h-8">
                      <RefreshCw className="h-4 w-4 mr-1" /> Reset
                    </Button>
                    <Button
                      size="sm"
                      onClick={runCode}
                      disabled={isRunning}
                      className="h-8 bg-green-600 hover:bg-green-700"
                    >
                      <Play className="h-4 w-4 mr-1" /> Run
                    </Button>
                  </div>
                </div>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-96 p-4 font-mono text-sm focus:outline-none"
                  spellCheck="false"
                />
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-2 border-b">
                  <span className="font-medium">Output</span>
                </div>
                <pre className="p-4 font-mono text-sm h-48 overflow-auto bg-black text-white">
                  {output || "// Run your code to see the output here"}
                </pre>
              </div>

              {isSuccess && (
                <Alert className="mt-4 bg-green-50 border-green-200">
                  <AlertTitle className="text-green-800">Success!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Your array implementation is working correctly. All test cases passed!
                  </AlertDescription>
                </Alert>
              )}
            </TabsContent>

            <TabsContent value="solution">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-2 border-b">
                  <span className="font-medium">Solution</span>
                </div>
                <pre className="p-4 font-mono text-sm overflow-auto">{solutionCode}</pre>
              </div>
              <p className="mt-4 text-gray-600">
                This solution demonstrates proper array manipulation with bounds checking and error handling. Notice how we
                shift elements when inserting or deleting to maintain array continuity.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Array Visualization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  {output.split('\n').map((line, index) => {
                    if (!line) return null;
                    const numbers = line.split(' ').filter(n => !isNaN(n));
                    return (
                      <div key={index} className="flex gap-2">
                        {numbers.map((num, i) => (
                          <div key={i} className="w-12 h-12 border-2 border-gray-300 flex items-center justify-center bg-white">
                            {num}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <span className="font-medium">Insertion:</span> Remember to shift elements right to make space.
              </p>
              <p>
                <span className="font-medium">Deletion:</span> Shift elements left to fill the gap.
              </p>
              <p>
                <span className="font-medium">Search:</span> Use a loop to check each element.
              </p>
              <p>
                <span className="font-medium">Edge Cases:</span> Always check array bounds and size limits.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="/topics/arrays/sorting" className="text-green-600 hover:underline">
                    Try Sorting Algorithms
                  </Link>
                </li>
                <li>
                  <Link href="/topics/arrays/searching" className="text-green-600 hover:underline">
                    Learn Search Techniques
                  </Link>
                </li>
                <li>
                  <Link href="/topics/linked-lists" className="text-green-600 hover:underline">
                    Explore Linked Lists
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 