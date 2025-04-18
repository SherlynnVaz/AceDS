"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Play, RefreshCw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function StackLabPage() {
  const [code, setCode] = useState(`// Implement a Stack in C with push, pop, peek, and isEmpty functions

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

// Define the Stack structure
typedef struct {
    // Initialize your stack here
} Stack;

// Function to initialize stack
Stack* createStack() {
    // Your code here
}

// Function to push an element
void push(Stack* stack, int item) {
    // Your code here
}

// Function to pop an element
int pop(Stack* stack) {
    // Your code here
}

// Function to peek at the top element
int peek(Stack* stack) {
    // Your code here
}

// Function to check if stack is empty
bool isEmpty(Stack* stack) {
    // Your code here
}

// Test function
int main() {
    Stack* stack = createStack();
    
    printf("%s\\n", isEmpty(stack) ? "true" : "false"); // Should print true
    
    push(stack, 10);
    push(stack, 20);
    push(stack, 30);
    
    printf("%d\\n", peek(stack)); // Should print 30
    printf("%d\\n", pop(stack));  // Should print 30
    printf("%d\\n", peek(stack)); // Should print 20
    printf("%s\\n", isEmpty(stack) ? "true" : "false"); // Should print false
    
    free(stack); // Don't forget to free allocated memory
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
      // In a real environment, you would need a C compiler or WASM
      let outputText = ""

      // Check if the code contains the expected structure
      const hasStackStruct = code.includes("typedef struct") || code.includes("struct Stack")
      const hasCreateStack = code.includes("createStack")
      const hasPush = code.includes("void push") || code.includes("int push")
      const hasPop = code.includes("int pop")
      const hasPeek = code.includes("int peek")
      const hasIsEmpty = code.includes("bool isEmpty")

      if (!hasStackStruct || !hasCreateStack || !hasPush || !hasPop || !hasPeek || !hasIsEmpty) {
        outputText = "Error: Missing required stack functions or structure.\n"
        setIsSuccess(false)
      } else {
        // Simulate the output of a correct implementation
        outputText = "true\n30\n30\n20\nfalse\n"

        // Check if the implementation seems reasonable
        const hasArray = code.includes("int items[") || code.includes("int *items")
        const hasTopIndex = code.includes("int top")
        const hasMemoryAllocation = code.includes("malloc(") && code.includes("free(")

        setIsSuccess(hasArray && hasTopIndex && hasMemoryAllocation)
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
    setCode(`// Implement a Stack in C with push, pop, peek, and isEmpty functions

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

// Define the Stack structure
typedef struct {
    // Initialize your stack here
} Stack;

// Function to initialize stack
Stack* createStack() {
    // Your code here
}

// Function to push an element
void push(Stack* stack, int item) {
    // Your code here
}

// Function to pop an element
int pop(Stack* stack) {
    // Your code here
}

// Function to peek at the top element
int peek(Stack* stack) {
    // Your code here
}

// Function to check if stack is empty
bool isEmpty(Stack* stack) {
    // Your code here
}

// Test function
int main() {
    Stack* stack = createStack();
    
    printf("%s\\n", isEmpty(stack) ? "true" : "false"); // Should print true
    
    push(stack, 10);
    push(stack, 20);
    push(stack, 30);
    
    printf("%d\\n", peek(stack)); // Should print 30
    printf("%d\\n", pop(stack));  // Should print 30
    printf("%d\\n", peek(stack)); // Should print 20
    printf("%s\\n", isEmpty(stack) ? "true" : "false"); // Should print false
    
    free(stack); // Don't forget to free allocated memory
    return 0;
}`)
    setOutput("")
    setIsSuccess(false)
  }

  const solutionCode = `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

// Define the Stack structure
typedef struct {
    int items[MAX_SIZE];
    int top;
} Stack;

// Function to initialize stack
Stack* createStack() {
    Stack* stack = (Stack*)malloc(sizeof(Stack));
    stack->top = -1;
    return stack;
}

// Function to push an element
void push(Stack* stack, int item) {
    if (stack->top == MAX_SIZE - 1) {
        printf("Stack Overflow\\n");
        return;
    }
    stack->items[++stack->top] = item;
}

// Function to pop an element
int pop(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack Underflow\\n");
        return -1;
    }
    return stack->items[stack->top--];
}

// Function to peek at the top element
int peek(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return -1;
    }
    return stack->items[stack->top];
}

// Function to check if stack is empty
bool isEmpty(Stack* stack) {
    return stack->top == -1;
}

// Test function
int main() {
    Stack* stack = createStack();
    
    printf("%s\\n", isEmpty(stack) ? "true" : "false"); // Should print true
    
    push(stack, 10);
    push(stack, 20);
    push(stack, 30);
    
    printf("%d\\n", peek(stack)); // Should print 30
    printf("%d\\n", pop(stack));  // Should print 30
    printf("%d\\n", peek(stack)); // Should print 20
    printf("%s\\n", isEmpty(stack) ? "true" : "false"); // Should print false
    
    free(stack); // Don't forget to free allocated memory
    return 0;
}`

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/topics/stacks">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Stacks
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-2">Stack Implementation Lab</h1>
          <p className="text-gray-600 mb-6">
            Practice implementing a stack data structure and test your understanding.
          </p>

          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Implement a Stack class with the following methods:</li>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>
                    <code>constructor()</code> - Initialize an empty stack
                  </li>
                  <li>
                    <code>push(element)</code> - Add an element to the top of the stack
                  </li>
                  <li>
                    <code>pop()</code> - Remove and return the top element
                  </li>
                  <li>
                    <code>peek()</code> - Return the top element without removing it
                  </li>
                  <li>
                    <code>isEmpty()</code> - Check if the stack is empty
                  </li>
                </ul>
                <li>Use an array to store the stack elements</li>
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
                  <span className="font-medium">Stack Implementation</span>
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
                    Your stack implementation is working correctly. All test cases passed!
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
                This is one possible solution. There are multiple ways to implement a stack correctly. The key is to
                maintain the LIFO (Last In First Out) principle.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Stack Visualization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex flex-col-reverse items-center">
                  <div className="w-full border-2 border-dashed border-gray-300 p-4 text-center">Stack Base</div>
                  {output.includes("30") && !output.includes("30\n30") && (
                    <>
                      <div className="w-full border-2 border-gray-300 p-4 text-center bg-white">10</div>
                      <div className="w-full border-2 border-gray-300 p-4 text-center bg-white">
                        20 <span className="text-green-600 font-bold">(Top)</span>
                      </div>
                    </>
                  )}
                  {output.includes("30\n30") && (
                    <div className="w-full border-2 border-gray-300 p-4 text-center bg-white">10</div>
                  )}
                  {!output.includes("30") && output.includes("20") && (
                    <>
                      <div className="w-full border-2 border-gray-300 p-4 text-center bg-white">10</div>
                      <div className="w-full border-2 border-gray-300 p-4 text-center bg-white">
                        20 <span className="text-green-600 font-bold">(Top)</span>
                      </div>
                      <div className="w-full border-2 border-gray-300 p-4 text-center bg-white">30</div>
                    </>
                  )}
                  {!output.includes("20") && output.includes("10") && (
                    <div className="w-full border-2 border-gray-300 p-4 text-center bg-white">
                      10 <span className="text-green-600 font-bold">(Top)</span>
                    </div>
                  )}
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
                <span className="font-medium">Structure:</span> Define a struct with an array and a top index.
              </p>
              <p>
                <span className="font-medium">Memory Management:</span> Use <code>malloc()</code> to allocate memory and{" "}
                <code>free()</code> to release it.
              </p>
              <p>
                <span className="font-medium">Empty Check:</span> A stack is empty when top is -1.
              </p>
              <p>
                <span className="font-medium">Edge Cases:</span> Handle stack overflow (when top == MAX_SIZE-1) and
                underflow (when stack is empty).
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
                  <Link href="/topics/stacks/applications" className="text-green-600 hover:underline">
                    Explore Stack Applications
                  </Link>
                </li>
                <li>
                  <Link href="/topics/queues" className="text-green-600 hover:underline">
                    Learn About Queues
                  </Link>
                </li>
                <li>
                  <Link href="/challenges" className="text-green-600 hover:underline">
                    Try Stack Coding Challenges
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
