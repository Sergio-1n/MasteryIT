'use client';

import Link from 'next/link';
// import { useTheme } from 'next-themes';
// import { useEffect, useState } from 'react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

export default function TableOfContentsPage() {
  // const { theme } = useTheme();
  // const [bgImage, setBgImage] = useState('/bg.jpg');

  // useEffect(() => {
  //   // Заменить путь на нужный тебе
  //   if (theme === 'dark') {
  //     setBgImage('/bg-dark.jpg');
  //   } else {
  //     setBgImage('/bg.jpg');
  //   }
  // }, [theme]);

  return (
    <main
      className='min-h-screen bg-cyan-100 dark:bg-cyan-800 px-4 pt-4 pb-8 sm:py-16 sm:pb-20 flex flex-col items-center transition-all'
      // style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div
        className='dark:bg-black/60 dark:text-gray-200 max-w-4xl mx-auto text-gray-700 bg-white rounded-2xl p-8 shadow-md'
        // style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <h1 className='text-xl font-bold mb-6 text-center'>
          📖 What You’ll Discover
        </h1>
        <p className='text-lg mb-6 leading-relaxed'>
          This book is organized into ten chapters, each dedicated to a specific
          domain of IT. Here’s what you can expect to learn:
        </p>

        <div className='space-y-6 text-md leading-relaxed'>
          <div>
            <h2 className='font-bold text-xl mb-1'>
              Chapter 1: Introduction to IT
            </h2>
            <p className='text-lg mb-6 leading-relaxed'>
              Explore the industry’s landscape, understand key IT department
              functions, and discover the essential soft and hard skills for
              success.
            </p>
            <ul className='list-disc pl-5'>
              <li>1.1 Understanding the IT Industry</li>
              <li>1.2 Key Functions in IT Departments</li>
              <li>1.3 Essential Soft Skills in IT</li>
              <li>1.4 Building IT Experience: Hard Skills Overview</li>
            </ul>
          </div>

          <div>
            <h2 className='font-bold text-xl mb-1'>Chapter 2: Programmers</h2>
            <p className='text-lg mb-6 leading-relaxed'>
              Gain a solid foundation in programming basics, explore major
              computer languages, and dive into the world of frontend and
              backend development.
            </p>
            <ul className='list-disc pl-5'>
              <li>2.1 Programming Basics</li>
              <li>2.2 Computer Programming Languages</li>
              <li>2.3 Frontend Developers</li>
              <li>2.4 Backend Developers</li>
            </ul>
          </div>

          <div>
            <h2 className='font-bold text-xl mb-1'>Chapter 3: Web Designers</h2>
            <p className='text-lg mb-6 leading-relaxed'>
              Learn the principles of UI/UX design, modern tools and techniques,
              and the importance of responsive, accessible, and user-tested
              designs.
            </p>
            <ul className='list-disc pl-5'>
              <li>3.1 Principles of UI & UX Design</li>
              <li>3.2 Tools and Techniques in Web Design</li>
              <li>3.3 Responsive and Accessible Design</li>
              <li>3.4 Trends and Innovations in Web Design</li>
              <li>3.5 User Research and Testing</li>
            </ul>
          </div>

          <div>
            <h2 className='font-bold text-xl mb-1'>Chapter 4: Testers</h2>
            <p className='text-lg mb-6 leading-relaxed'>
              Understand various types of testing, from manual to automated, and
              learn how to ensure quality assurance through effective bug
              tracking and communication with developers.
            </p>
            <ul className='list-disc pl-5'>
              <li>4.1 Types of Testing</li>
              <li>4.2 Bug Tracking and QA</li>
              <li>4.3 Test Case Development</li>
              <li>4.4 Communication with Developers</li>
              <li>4.5 Black Box vs. White Box Testing</li>
            </ul>
          </div>

          <div>
            <h2 className='font-bold text-xl mb-1'>
              Chapter 5: Data Analytics & Digital Marketing
            </h2>
            <p className='text-lg mb-6 leading-relaxed'>
              Discover the strategic value of business analysis, explore various
              types of analytics and their applications, and learn how to
              integrate data-driven insights into product development.
              Additionally, delve into digital marketing fundamentals, creating
              effective strategies, and leveraging SEO and SEM to drive success
              in IT.
            </p>
            <ul className='list-disc pl-5'>
              <li>5.1 Business Analysis Essentials</li>
              <li>5.2 Types of Analytics and Tools</li>
              <li>5.3 Integrating Analytics into Product Development</li>
              <li>5.4 Strategic Suggestions</li>
              <li>5.5 Digital Marketing Fundamentals</li>
              <li>5.6 Marketing Strategy</li>
              <li>5.7 Content & Social Media</li>
              <li>5.8 SEO & SEM</li>
            </ul>
          </div>

          <div>
            <h2 className='font-bold text-xl mb-1'>
              Chapter 6: Project Management
            </h2>
            <p className='text-lg mb-6 leading-relaxed'>
              Master methodologies like Scrum, Kanban, and Waterfall while
              learning to manage project lifecycles, MVPs, and Agile sprints
              effectively.
            </p>
            <ul className='list-disc pl-5'>
              <li>6.1 Product Development Fundamentals</li>
              <li>6.2 Methodologies: Scrum, Kanban, Waterfall</li>
              <li>6.3 MVP & Metrics</li>
              <li>6.4 Project Life Cycle</li>
              <li>6.5 Agile Sprints</li>
              <li>6.6 Agile Sprints: The Engine of Agile Project Management</li>
              <li>6.7 Understanding Kanban in Agile Methodology</li>
              <li>6.8 Waterfall Methodology</li>
            </ul>
          </div>

          <div>
            <h2 className='font-bold text-xl mb-1'>
              Chapter 7: IT Recruitment
            </h2>
            <p className='text-lg mb-6 leading-relaxed'>
              Discover strategies for excelling in IT recruitment, build a
              strong recruiting vocabulary, and learn quick tips for identifying
              and aligning top talent.
            </p>
            <ul className='list-disc pl-5'>
              <li>7.1 Understanding Tech Recruitment</li>
              <li>7.2 The Role of the IT Recruiter</li>
              <li>7.3 Recruiting Vocabulary</li>
              <li>7.4 Quick Tips Cheat Sheet</li>
            </ul>
          </div>

          <div>
            <h2 className='font-bold text-xl mb-1'>
              Chapter 8: Deadlines & Software Updates
            </h2>
            <p className='text-lg mb-6 leading-relaxed'>
              Understand the art of managing deadlines, structuring updates, and
              presenting software changes professionally to stakeholders.
            </p>
            <ul className='list-disc pl-5'>
              <li>8.1 Understanding Deadlines</li>
              <li>8.2 Negotiating</li>
              <li>8.3 Structuring Updates</li>
              <li>8.4 Presenting Updates</li>
            </ul>
          </div>

          <div>
            <h2 className='font-bold text-xl mb-1'>
              Chapter 9: Stand-up Meetings
            </h2>
            <p className='text-lg mb-6 leading-relaxed'>
              Get practical advice on organizing, running, and reporting
              stand-up meetings, a cornerstone of collaborative IT workflows.
            </p>
            <ul className='list-disc pl-5'>
              <li>9.1 Types of Meetings</li>
              <li>9.2 Arranging and Running</li>
              <li>9.3 Weekly Stand-ups</li>
              <li>9.4 Meeting Reports</li>
            </ul>
          </div>

          <div>
            <h2 className='font-bold text-xl mb-1'>
              Chapter 10: Interaction & Communication
            </h2>
            <p className='text-lg mb-6 leading-relaxed'>
              Learn how to provide constructive feedback, handle client requests
              with professionalism, and turn challenging interactions into
              positive relationships.
            </p>
            <ul className='list-disc pl-5'>
              <li>10.1 Constructive Feedback</li>
              <li>10.2 Responding to Feedback</li>
              <li>10.3 Managing Client Requests</li>
              <li>10.4 Turning Negatives into Positives</li>
            </ul>
          </div>
          <SignedIn>
            <Link className='cta-button' href='/book/introduction'>
              Start Reading
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                />
              </svg>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton mode='redirect' forceRedirectUrl='/book/introduction'>
              <button className='cta-button'>
                Start Reading
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                  />
                </svg>
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </main>
  );
}
