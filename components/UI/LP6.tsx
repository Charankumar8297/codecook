"use client";

import Image from "next/image";
import { useRef } from "react";

import PythonProgram from "../../public/landingImg/Programming.png";
import Frontend from "../../public/landingImg/Frontend.png";
import DSA from "../../public/landingImg/DSA.png";
import ReactImg from "../../public/landingImg/React.png";
import Cplus from "../../public/landingImg/C++.png";
import SQL from "../../public/landingImg/SQL.png";
import Java from "../../public/landingImg/Java.png";

const courses = [
  {
    title: "Python with Beginner DSA",
    tag: "PYTHON FOR BEGINNERS",
    rating: "4.6 (103.4k+)",
    desc: "Learn the basics of Python and data structures with hands-on practice modules.",
    courses: "6 courses",
    learners: "451k+ learners",
    banner: PythonProgram,
  },
  {
    title: "Data Structures & Algorithms Mastery",
    tag: "COMPLETE DSA",
    rating: "4.7 (80k+)",
    desc: "Master linked lists, stacks, queues, trees, graphs with real interview problems.",
    courses: "23 courses",
    learners: "210k+ learners",
    banner: DSA,
  },
  {
    title: "React JS for Frontend",
    tag: "REACT DEVELOPMENT",
    rating: "4.8 (94k+)",
    desc: "Learn components, hooks, state management & build real projects.",
    courses: "4 courses",
    learners: "178k+ learners",
    banner: ReactImg,
  },
  {
    title: "Java + Beginner DSA",
    tag: "JAVA DEVELOPMENT",
    rating: "4.6 (78k+)",
    desc: "Master Java fundamentals and beginner-friendly DSA concepts.",
    courses: "6 courses",
    learners: "210k+ learners",
    banner: Java,
  },
  {
    title: "C++ Programming Essentials",
    tag: "C++ MASTERCLASS",
    rating: "4.6 (89k+)",
    desc: "Master C++ fundamentals, OOP concepts, and competitive programming basics.",
    courses: "8 courses",
    learners: "320k+ learners",
    banner: Cplus,
  },
  {
    title: "Frontend Web Development",
    tag: "FRONTEND DEVELOPMENT",
    rating: "4.7 (120k+)",
    desc: "Learn HTML, CSS, JavaScript, React, and modern UI/UX workflows with hands-on projects.",
    courses: "14 courses",
    learners: "540k+ learners",
    banner: Frontend,
  },
  {
    title: "SQL & Database Foundations",
    tag: "SQL DATABASE",
    rating: "4.6 (95k+)",
    desc: "Understand SQL queries, relational databases, joins, indexing, and database design.",
    courses: "9 courses",
    learners: "390k+ learners",
    banner: SQL,
  },
  {
    title: "Java Backend Developer",
    tag: "JAVA BACKEND DEVELOPMENT",
    rating: "4.7 (82k+)",
    desc: "Master Java, Spring Boot, APIs, REST, Microservices, and backend system design.",
    courses: "12 courses",
    learners: "255k+ learners",
    banner: Java,
  },
  {
    title: "Python Backend Developer",
    tag: "PYTHON BACKEND DEVELOPMENT",
    rating: "4.7 (90k+)",
    desc: "Build backend apps using Python, Django, REST Framework, and deployments.",
    courses: "11 courses",
    learners: "280k+ learners",
    banner: PythonProgram,
  },
  {
    title: "Data Analysis with Python",
    tag: "DATA ANALYSIS",
    rating: "4.8 (130k+)",
    desc: "Learn data cleaning, visualization, Pandas, NumPy, dashboards, and real-world analysis.",
    courses: "10 courses",
    learners: "350k+ learners",
    banner: DSA,
  },
];

export default function LP6() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideRight = () => {
    sliderRef.current?.scrollBy({ left: 370, behavior: "smooth" });
  };

  const slideLeft = () => {
    sliderRef.current?.scrollBy({ left: -370, behavior: "smooth" });
  };

  return (
    <section className="py-16 relative">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Our Popular Courses
      </h2>

      <div className="hidden md:block absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-[5]"></div>

      <div className="hidden md:block absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-[5]"></div>

      <button
        onClick={slideLeft}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-xl border border-gray-200 rounded-full p-4 hover:scale-110 transition z-20"
      >
        ◀
      </button>

      <button
        onClick={slideRight}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-xl border border-gray-200 rounded-full p-4 hover:scale-110 transition z-20"
      >
        ▶
      </button>

      <div
        ref={sliderRef}
        className="flex gap-7 overflow-x-scroll px-8 scroll-smooth hide-scrollbar relative z-10"
      >
        {courses.map((item, i) => (
          <div
            key={i}
            className="min-w-[330px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
          >
        
            <div className="w-full h-[180px]">
              <Image
                src={item.banner}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="px-5 mt-3 text-xs font-semibold text-blue-600">
              {item.tag}
            </p>

            <div className="px-5 mt-2 m-2 flex items-center gap-2 rounded-xl bg-blue-100 w-fit py-1">
              <span className="text-yellow-500 text-lg">⭐</span>
              <span className="text-sm text-gray-700">{item.rating}</span>
            </div>

            <h3 className="px-5 mt-2 font-bold text-lg text-gray-900">
              {item.title}
            </h3>

            <p className="px-5 mt-2 text-gray-500 text-sm leading-snug">
              {item.desc}
            </p>

            <div className="mt-auto px-5">
              <div className="flex justify-between mt-4 text-gray-600 text-sm">
                <span>🎓 {item.courses}</span>
                <span>👥 {item.learners}</span>
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-400 text-white py-2.5 rounded-xl font-semibold transition mt-5 mb-5">
                Enrol Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
