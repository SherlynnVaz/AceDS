"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Code2, Info, Lightbulb } from "lucide-react"

export default function QueuesPage() {
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
          <h1 className="text-3xl font-bold mb-2">Queues</h1>
          <p className="text-gray-600 mb-6">
            A linear data structure that follows the First-In-First-Out (FIFO) principle, where elements are added at the rear and removed from the front.
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="overview">
                <Info className="h-4 w-4 mr-2" /> Overview
              </TabsTrigger>
              <TabsTrigger value="implementation">
                <Code2 className="h-4 w-4 mr-2" /> Implementation
              </TabsTrigger>
              <TabsTrigger value="applications">
                <Lightbulb className="h-4 w-4 mr-2" /> Applications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Queue Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.
                    Elements are added at the rear (enqueue) and removed from the front (dequeue).
                  </p>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Key Characteristics:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>FIFO (First-In-First-Out) principle</li>
                      <li>Two main operations: enqueue and dequeue</li>
                      <li>Front and rear pointers for efficient operations</li>
                      <li>Can be implemented using arrays or linked lists</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Types of Queues:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Simple Queue - basic FIFO implementation</li>
                      <li>Circular Queue - efficient use of array space</li>
                      <li>Priority Queue - elements with priority</li>
                      <li>Double-ended Queue (Deque) - insertion/deletion at both ends</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="implementation">
              <Card>
                <CardHeader>
                  <CardTitle>Queue Implementation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Array Implementation:</h3>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      {`struct Queue {
    int front, rear, size;
    unsigned capacity;
    int* array;
};`}
                    </pre>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Basic Operations:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>enqueue() - Add an element at the rear</li>
                      <li>dequeue() - Remove an element from the front</li>
                      <li>front() - Get the front element</li>
                      <li>isEmpty() - Check if queue is empty</li>
                      <li>isFull() - Check if queue is full</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Time Complexity:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>enqueue(): O(1)</li>
                      <li>dequeue(): O(1)</li>
                      <li>front(): O(1)</li>
                      <li>isEmpty(): O(1)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications">
              <Card>
                <CardHeader>
                  <CardTitle>Queue Applications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Common Use Cases:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>CPU scheduling and task management</li>
                      <li>Breadth-First Search (BFS) algorithm</li>
                      <li>Print spooling and job scheduling</li>
                      <li>Message queues in operating systems</li>
                      <li>Call center phone systems</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Real-world Examples:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Ticket booking system</li>
                      <li>Customer service queue</li>
                      <li>Network packet routing</li>
                      <li>Event handling in GUI systems</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <Link href="/topics/queues/lab">
              <Button className="w-full">
                Try the Queue Lab
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Learning Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Queue Basics</span>
                  <span className="text-sm text-green-600">Completed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Implementation</span>
                  <span className="text-sm text-yellow-600">In Progress</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Applications</span>
                  <span className="text-sm text-gray-600">Not Started</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Related Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link href="/topics/stacks" className="block text-green-600 hover:underline">
                  Stacks
                </Link>
                <Link href="/topics/linked-lists" className="block text-green-600 hover:underline">
                  Linked Lists
                </Link>
                <Link href="/topics/trees" className="block text-green-600 hover:underline">
                  Trees
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 