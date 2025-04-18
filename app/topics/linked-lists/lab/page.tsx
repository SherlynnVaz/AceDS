"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Play, RefreshCw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function LinkedListLabPage() {
  const [code, setCode] = useState(`// Implement a Singly Linked List in C
// Required functions: createNode(), insert(), delete(), search(), display()

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// Your implementation here

int main() {
    // Test your implementation here
    // Example test cases:
    // 1. Create an empty linked list
    // 2. Insert elements: 10 at beginning, 20 at end, 30 after 10
    // 3. Display list (should show: 10 -> 30 -> 20)
    // 4. Delete element 30
    // 5. Display list (should show: 10 -> 20)
    // 6. Search for element 20 (should find it)
    // 7. Search for element 30 (should not find it)
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
      const hasNode = code.includes("struct Node") || code.includes("typedef struct")
      const hasCreateNode = code.includes("createNode")
      const hasInsert = code.includes("insert")
      const hasDelete = code.includes("delete")
      const hasSearch = code.includes("search")
      const hasDisplay = code.includes("display")

      if (!hasNode || !hasCreateNode || !hasInsert || !hasDelete || !hasSearch || !hasDisplay) {
        outputText = "Error: Missing required linked list components.\nMake sure you have implemented:\n- Node structure\n- createNode()\n- insert()\n- delete()\n- search()\n- display()\n"
        setIsSuccess(false)
      } else {
        // Check if the implementation seems reasonable
        const hasPointers = code.includes("->next") || code.includes("->data")
        const hasMemoryAlloc = code.includes("malloc(") && code.includes("free(")
        const hasNullCheck = code.includes("NULL") || code.includes("null")
        const hasTestCases = code.includes("printf") && code.includes("insert") && code.includes("delete")

        if (hasPointers && hasMemoryAlloc && hasNullCheck && hasTestCases) {
          outputText = "Your implementation looks good! Make sure to test with different cases:\n"
          outputText += "1. Empty list operations\n"
          outputText += "2. Insert at beginning, middle, end\n"
          outputText += "3. Delete from beginning, middle, end\n"
          outputText += "4. Search for existing and non-existing elements\n"
          setIsSuccess(true)
        } else {
          outputText = "Implementation incomplete. Check if you have:\n"
          outputText += "- Proper pointer handling\n"
          outputText += "- Memory allocation/deallocation\n"
          outputText += "- NULL pointer checks\n"
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
    setCode(`// Implement a Singly Linked List in C
// Required functions: createNode(), insert(), delete(), search(), display()

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// Your implementation here

int main() {
    // Test your implementation here
    // Example test cases:
    // 1. Create an empty linked list
    // 2. Insert elements: 10 at beginning, 20 at end, 30 after 10
    // 3. Display list (should show: 10 -> 30 -> 20)
    // 4. Delete element 30
    // 5. Display list (should show: 10 -> 20)
    // 6. Search for element 20 (should find it)
    // 7. Search for element 30 (should not find it)
    return 0;
}`)
    setOutput("")
    setIsSuccess(false)
  }

  const solutionCode = `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// Define the Node structure
typedef struct Node {
    int data;
    struct Node* next;
} Node;

// Function to create a new node
Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        printf("Memory allocation failed!\\n");
        exit(1);
    }
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Function to insert at beginning
Node* insertAtBeginning(Node* head, int data) {
    Node* newNode = createNode(data);
    newNode->next = head;
    return newNode;
}

// Function to insert at end
Node* insertAtEnd(Node* head, int data) {
    Node* newNode = createNode(data);
    
    if (head == NULL) {
        return newNode;
    }
    
    Node* current = head;
    while (current->next != NULL) {
        current = current->next;
    }
    current->next = newNode;
    return head;
}

// Function to insert after a node with given value
Node* insertAfter(Node* head, int after, int data) {
    Node* current = head;
    
    while (current != NULL && current->data != after) {
        current = current->next;
    }
    
    if (current == NULL) {
        printf("Element %d not found\\n", after);
        return head;
    }
    
    Node* newNode = createNode(data);
    newNode->next = current->next;
    current->next = newNode;
    return head;
}

// Function to delete a node with given value
Node* delete(Node* head, int data) {
    if (head == NULL) {
        printf("List is empty\\n");
        return NULL;
    }
    
    if (head->data == data) {
        Node* temp = head->next;
        free(head);
        return temp;
    }
    
    Node* current = head;
    while (current->next != NULL && current->next->data != data) {
        current = current->next;
    }
    
    if (current->next == NULL) {
        printf("Element %d not found\\n", data);
        return head;
    }
    
    Node* temp = current->next;
    current->next = temp->next;
    free(temp);
    return head;
}

// Function to search for an element
bool search(Node* head, int data) {
    Node* current = head;
    while (current != NULL) {
        if (current->data == data) {
            return true;
        }
        current = current->next;
    }
    return false;
}

// Function to display the list
void display(Node* head) {
    if (head == NULL) {
        printf("List is empty\\n");
        return;
    }
    
    Node* current = head;
    while (current != NULL) {
        printf("%d", current->data);
        if (current->next != NULL) {
            printf(" -> ");
        }
        current = current->next;
    }
    printf("\\n");
}

// Function to free the entire list
void freeList(Node* head) {
    Node* current = head;
    while (current != NULL) {
        Node* temp = current;
        current = current->next;
        free(temp);
    }
}

int main() {
    Node* head = NULL;
    
    printf("Creating linked list...\\n");
    
    // Test insertions
    printf("\\nInserting elements:\\n");
    head = insertAtBeginning(head, 10);
    display(head);
    
    head = insertAtEnd(head, 20);
    display(head);
    
    head = insertAfter(head, 10, 30);
    display(head);
    
    // Test search
    printf("\\nSearching for elements:\\n");
    printf("Search 20: %s\\n", search(head, 20) ? "Found" : "Not found");
    printf("Search 40: %s\\n", search(head, 40) ? "Found" : "Not found");
    
    // Test deletion
    printf("\\nDeleting element 30:\\n");
    head = delete(head, 30);
    display(head);
    
    // Test edge cases
    printf("\\nTesting edge cases:\\n");
    printf("Trying to insert after non-existent element:\\n");
    head = insertAfter(head, 40, 50);
    
    printf("\\nTrying to delete non-existent element:\\n");
    head = delete(head, 40);
    
    // Clean up
    freeList(head);
    return 0;
}`

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/topics/linked-lists">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Linked Lists
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-2">Linked List Implementation Lab</h1>
          <p className="text-gray-600 mb-6">
            Practice implementing a singly linked list with its core operations.
          </p>

          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Implement the following linked list operations:</li>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>
                    <code>createNode(data)</code> - Create a new node with given data
                  </li>
                  <li>
                    <code>insert()</code> - Insert a node (at beginning/end/after)
                  </li>
                  <li>
                    <code>delete(data)</code> - Delete node with given data
                  </li>
                  <li>
                    <code>search(data)</code> - Search for a node with given data
                  </li>
                  <li>
                    <code>display()</code> - Display all nodes in the list
                  </li>
                </ul>
                <li>Handle edge cases:</li>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Empty list operations</li>
                  <li>Memory allocation failures</li>
                  <li>NULL pointer checks</li>
                  <li>Element not found (delete/search)</li>
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
                  <span className="font-medium">Linked List Implementation</span>
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
                    Your linked list implementation looks good! Try testing edge cases and different scenarios.
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
                This solution demonstrates a complete singly linked list implementation with proper memory management,
                pointer handling, and error checking. Study how it maintains the list structure and handles edge cases.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>List Visualization</CardTitle>
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
                <span className="font-medium">Structure:</span> Node with data and next pointer
              </p>
              <p>
                <span className="font-medium">Insert:</span> Update next pointers carefully
              </p>
              <p>
                <span className="font-medium">Delete:</span> Free memory after unlinking
              </p>
              <p>
                <span className="font-medium">Memory:</span> Always check malloc results
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
                  <Link href="/topics/linked-lists/doubly" className="text-green-600 hover:underline">
                    Try Doubly Linked Lists
                  </Link>
                </li>
                <li>
                  <Link href="/topics/stacks" className="text-green-600 hover:underline">
                    Implement Stack using List
                  </Link>
                </li>
                <li>
                  <Link href="/topics/queues" className="text-green-600 hover:underline">
                    Explore Queues
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