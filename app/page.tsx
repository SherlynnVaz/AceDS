import Link from "next/link"
import { ArrowRight, BookOpen, Code, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Master Data Structures Through Interactive Learning</h1>
            <p className="text-xl mb-8">
              An innovative platform for engineering students to learn, practice, and master data structures with
              hands-on coding exercises and real-time feedback.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/register">Get Started</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/topics">Explore Topics</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Learn With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-gray-600">
                Learn through comprehensive tutorials, visualizations, and step-by-step guides tailored for engineering
                students.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Virtual Lab</h3>
              <p className="text-gray-600">
                Practice what you learn in our virtual coding environment. Write, test, and debug your code in
                real-time.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Connect with peers and instructors, participate in discussions, and collaborate on solving complex
                problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Data Structure Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs"].map((topic, index) => (
              <div
                key={index}
                className="border bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{topic}</h3>
                  <p className="text-gray-600 mb-4">
                    Learn the fundamentals of {topic.toLowerCase()} and implement them in your favorite programming
                    language.
                  </p>
                  <Link
                    href={`/topics/${topic.toLowerCase().replace(" ", "-")}`}
                    className="text-green-600 font-medium inline-flex items-center"
                  >
                    Explore <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Aligned with Sustainable Development Goals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-6 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-red-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Quality Education</h3>
              <p className="text-gray-600 text-center">
                Providing accessible, high-quality education resources for all engineering students.
              </p>
            </div>
            <div className="border p-6 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-orange-600 font-bold text-xl">9</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Industry & Innovation</h3>
              <p className="text-gray-600 text-center">
                Fostering innovation through modern technology and industry-relevant skills.
              </p>
            </div>
            <div className="border p-6 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-blue-600 font-bold text-xl">17</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Partnerships</h3>
              <p className="text-gray-600 text-center">
                Creating a collaborative ecosystem between students, educators, and industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AceDS</h3>
              <p className="text-gray-300">
                An innovative approach to teaching data structures for engineering students.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/topics" className="text-gray-300 hover:text-white">
                    Topics
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-gray-300 hover:text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-gray-300 hover:text-white">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">Have questions? Reach out to us at support@dslearning.edu</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} AceDS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
