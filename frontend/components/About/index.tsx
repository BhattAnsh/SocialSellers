"use client"
import { Users, Target, Globe, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            About Social Sellers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering creators and businesses to monetize their social media presence 
            through innovative marketplace solutions.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Socials Seller revolutionizes how content creators and businesses 
              connect, collaborate, and capitalize on their social media influence. 
              We provide a seamless, secure platform that transforms your online 
              presence into a powerful revenue stream.
            </p>
            <div className="flex space-x-4">
            <Link href={"/analyze"}>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
              </Link>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <Users className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="font-bold text-xl mb-2">10,000+</h3>
              <p className="text-gray-600">Active Creators</p>
            </Card>

            <Card className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <Target className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="font-bold text-xl mb-2">$5M+</h3>
              <p className="text-gray-600">Platform Earnings</p>
            </Card>

            <Card className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <Globe className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="font-bold text-xl mb-2">50+</h3>
              <p className="text-gray-600">Countries Served</p>
            </Card>

            <Card className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <Award className="mx-auto mb-4 text-yellow-600" size={48} />
              <h3 className="font-bold text-xl mb-2">98%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </Card>
          </div>
        </section>

        <section className="mt-24 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Choose Socials Seller?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Seamless Marketplace
              </h3>
              <p className="text-gray-600">
                Intuitive platform connecting creators with brands effortlessly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                Secure Transactions
              </h3>
              <p className="text-gray-600">
                End-to-end encryption and transparent payment systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600">
                Comprehensive insights to maximize your earning potential.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}