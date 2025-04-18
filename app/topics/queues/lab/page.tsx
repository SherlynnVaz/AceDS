"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Play, RefreshCw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function QueueLabPage() {
  const [code, setCode] = useState(`// Implement a Queue in C
// Required functions: createQueue(), enqueue(), dequeue(), peek(), isEmpty()

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// Your implementation here

int main() {
    // Test your implementation here
    // Example test cases:
    // 1. Create an empty queue
    // 2. Check if it's empty (should print true)
    // 3. Enqueue elements: 10, 20, 30
    // 4. Peek front element (should print 10)
    // 5. Dequeue an element (should print 10)
    // 6. Peek again (should print 20)
    // 7. Check if empty (should print false)
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
      const hasQueueStruct = code.includes("struct Queue") || code.includes("typedef struct")
      const hasCreateQueue = code.includes("createQueue")
      const hasEnqueue = code.includes("enqueue")
      const hasDequeue = code.includes("dequeue")
      const hasPeek = code.includes("peek")
      const hasIsEmpty = code.includes("isEmpty")

      if (!hasQueueStruct || !hasCreateQueue || !hasEnqueue || !hasDequeue || !hasPeek || !hasIsEmpty) {
        outputText = "Error: Missing required queue components.\nMake sure you have implemented:\n- Queue structure\n- createQueue()\n- enqueue()\n- dequeue()\n- peek()\n- isEmpty()\n"
        setIsSuccess(false)
      } else {
        // Check if the implementation seems reasonable
        const hasArray = code.includes("int items[") || code.includes("int *items")
        const hasFrontRear = code.includes("front") && code.includes("rear")
        const hasMemoryAlloc = code.includes("malloc(") && code.includes("free(")
        const hasTestCases = code.includes("printf") && code.includes("enqueue") && code.includes("dequeue")

        if (hasArray && hasFrontRear && hasMemoryAlloc && hasTestCases) {
          outputText = "Your implementation looks good! Make sure to test with different cases:\n"
          outputText += "1. Empty queue operations\n"
          outputText += "2. Enqueue to full queue (overflow)\n"
          outputText += "3. Dequeue from empty queue (underflow)\n"
          outputText += "4. Multiple enqueue/dequeue operations\n"
          setIsSuccess(true)
        } else {
          outputText = "Implementation incomplete. Check if you have:\n"
          outputText += "- Array or dynamic memory for storage\n"
          outputText += "- Front and rear index tracking\n"
          outputText += "- Proper memory management\n"
          outputText += "- Test cases for all operations\n"
          setIsSuccess(false)
        }
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
    setCode(`// Implement a Queue in C
// Required functions: createQueue(), enqueue(), dequeue(), peek(), isEmpty()

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// Your implementation here

int main() {
    // Test your implementation here
    // Example test cases:
    // 1. Create an empty queue
    // 2. Check if it's empty (should print true)
    // 3. Enqueue elements: 10, 20, 30
    // 4. Peek front element (should print 10)
    // 5. Dequeue an element (should print 10)
    // 6. Peek again (should print 20)
    // 7. Check if empty (should print false)
    return 0;
}`)
    setOutput("")
    setIsSuccess(false)
  }

  const solutionCode = `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

// Define the Queue structure
typedef struct {
    int items[MAX_SIZE];
    int front;
    int rear;
} Queue;

// Function to create a queue
Queue* createQueue() {
    Queue* queue = (Queue*)malloc(sizeof(Queue));
    if (queue == NULL) {
        printf("Memory allocation failed!\\n");
        exit(1);
    }
    queue->front = -1;
    queue->rear = -1;
    return queue;
}

// Function to check if queue is empty
bool isEmpty(Queue* queue) {
    return queue->front == -1;
}

// Function to check if queue is full
bool isFull(Queue* queue) {
    return (queue->rear + 1) % MAX_SIZE == queue->front;
}

// Function to add an element
void enqueue(Queue* queue, int item) {
    if (isFull(queue)) {
        printf("Queue Overflow\\n");
        return;
    }
    
    if (isEmpty(queue)) {
        queue->front = 0;
    }
    
    queue->rear = (queue->rear + 1) % MAX_SIZE;
    queue->items[queue->rear] = item;
    printf("Enqueued: %d\\n", item);
}

// Function to remove an element
int dequeue(Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue Underflow\\n");
        return -1;
    }
    
    int item = queue->items[queue->front];
    
    if (queue->front == queue->rear) {
        // Last element being dequeued
        queue->front = -1;
        queue->rear = -1;
    } else {
        queue->front = (queue->front + 1) % MAX_SIZE;
    }
    
    return item;
}

// Function to get front element
int peek(Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\\n");
        return -1;
    }
    return queue->items[queue->front];
}

// Function to display the queue
void display(Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\\n");
        return;
    }
    
    printf("Queue: ");
    int i = queue->front;
    do {
        printf("%d ", queue->items[i]);
        i = (i + 1) % MAX_SIZE;
    } while (i != (queue->rear + 1) % MAX_SIZE);
    printf("\\n");
}

int main() {
    Queue* queue = createQueue();
    
    printf("Is empty: %s\\n", isEmpty(queue) ? "true" : "false");
    
    // Test enqueue
    printf("\\nEnqueuing elements:\\n");
    enqueue(queue, 10);
    display(queue);
    
    enqueue(queue, 20);
    display(queue);
    
    enqueue(queue, 30);
    display(queue);
    
    // Test peek
    printf("\\nFront element: %d\\n", peek(queue));
    
    // Test dequeue
    printf("\\nDequeuing elements:\\n");
    printf("Dequeued: %d\\n", dequeue(queue));
    display(queue);
    
    printf("Front element: %d\\n", peek(queue));
    printf("Is empty: %s\\n", isEmpty(queue) ? "true" : "false");
    
    // Test edge cases
    printf("\\nTesting edge cases:\\n");
    
    // Test overflow
    printf("Trying to enqueue to full queue:\\n");
    for(int i = 0; i < MAX_SIZE + 1; i++) {
        enqueue(queue, i);
    }
    
    // Test underflow
    printf("\\nTrying to dequeue from empty queue:\\n");
    for(int i = 0; i < MAX_SIZE + 1; i++) {
        dequeue(queue);
    }
    
    free(queue);
    return 0;
}`

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/topics/queues">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Queues
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-2">Queue Implementation Lab</h1>
          <p className="text-gray-600 mb-6">
            Practice implementing a queue data structure with its core operations.
          </p>

          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Implement the following queue operations:</li>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>
                    <code>createQueue()</code> - Initialize a new queue
                  </li>
                  <li>
                    <code>enqueue(item)</code> - Add an element to the rear
                  </li>
                  <li>
                    <code>dequeue()</code> - Remove and return the front element
                  </li>
                  <li>
                    <code>peek()</code> - Return the front element without removing
                  </li>
                  <li>
                    <code>isEmpty()</code> - Check if queue is empty
                  </li>
                </ul>
                <li>Handle edge cases:</li>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Queue overflow (enqueuing to full queue)</li>
                  <li>Queue underflow (dequeuing from empty queue)</li>
                  <li>Memory management (allocation and deallocation)</li>
                  <li>Circular array implementation</li>
                </ul>
                <li>Write test cases in main() to verify your implementation</li>
                <li>Run the code to check if all operations work correctly</li>
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
                  <span className="font-medium">Queue Implementation</span>
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
                    Your queue implementation looks good! Try testing edge cases and different scenarios.
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
                This solution demonstrates a complete queue implementation using a circular array.
                Study how it handles the front and rear pointers, and manages overflow/underflow conditions.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Queue Visualization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  {output.split('\n').map((line, index) => {
                    if (!line.includes(":")) return null;
                    const [operation, value] = line.split(":");
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <span className="font-medium">{operation}:</span>
                        <span>{value}</span>
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
                <span className="font-medium">Structure:</span> Use circular array implementation
              </p>
              <p>
                <span className="font-medium">Enqueue:</span> Add at rear, update rear
              </p>
              <p>
                <span className="font-medium">Dequeue:</span> Remove from front, update front
              </p>
              <p>
                <span className="font-medium">Memory:</span> Allocate in create, free when done
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
                  <Link href="/topics/queues/priority" className="text-green-600 hover:underline">
                    Try Priority Queue
                  </Link>
                </li>
                <li>
                  <Link href="/topics/queues/applications" className="text-green-600 hover:underline">
                    Queue Applications
                  </Link>
                </li>
                <li>
                  <Link href="/topics/trees" className="text-green-600 hover:underline">
                    Explore Trees
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