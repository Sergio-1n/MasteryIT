'use client';

import Link from 'next/link';
import { chapters } from '../../chapters';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

export default function BookHomePage() {
  return (
    <main className='sm:py-16 md:py-16 px-4 py-4 pb-18 flex flex-col items-center transition-all'>
      <div className='max-w-4xl w-full space-y-4'>
        <div className='bg-white text-left md:text-xl dark:bg-black/60 backdrop-blur shadow-xl rounded-2xl p-6'>
          <h1>
            &quot;The Future of IT: Transforming Knowledge into Career
            Success&quot;
          </h1>
          <h1>
            Dive into the World of IT: Discover Key Roles, Skills, and
            Essentials Shaping the Tech Industry Today.
          </h1>
          <h1>Your Guide to Mastering IT</h1>

          <p>
            The IT industry is a rapidly evolving domain that influences every
            facet of modern life and fuels global innovation. Whether you’re an
            aspiring professional stepping into the tech world or a seasoned
            practitioner, this book is your comprehensive guide to navigating
            and mastering the diverse landscape of information technology.
          </p>

          <p>
            This guide aims to illuminate the foundational principles, essential
            roles, and advanced methodologies of IT, offering practical
            knowledge that bridges the gap between understanding and
            application. By leveraging detailed explanations, real-world
            examples, and a comprehensive glossary of over 400+ key terms, this
            book equips you to thrive in the IT world, regardless of your
            experience level.
          </p>

          <h2>Why This Book Is Essential for Your IT Journey</h2>

          <p>
            Mastering the knowledge and skills outlined in this guide can
            significantly enhance your performance during job interviews.
            Understanding the IT industry and its key functions equips you to
            confidently discuss your role within a larger organizational
            context. Proficiency in technical skills, such as programming, web
            design, or testing methodologies, enables you to demonstrate
            expertise and provide concrete examples of your capabilities.
          </p>

          <p>
            Additionally, insights into project management methodologies and
            analytics showcase your ability to contribute to strategic
            initiatives. Soft skills like effective communication, client
            management, and giving and receiving feedback reflect a professional
            attitude that resonates well with interviewers. By combining these
            competencies, you can present yourself as a well-rounded candidate
            ready to excel in dynamic IT environments, leaving a lasting
            impression on potential employers.
          </p>

          <h2>Empowering Your Communication</h2>

          <p>
            One of the standout features of this book is its focus on IT
            terminology. Fluency in the technical language of IT is not just a
            skill—it’s an essential tool for professional success. With clear,
            thorough explanations of over 400+ essential terms, this book
            ensures you can confidently navigate the jargon-filled world of IT.
          </p>

          <p className='card mt-4'>
            To make your learning experience even more effective, each term
            comes with a pronunciation guide from a native speaker, accessible
            on our dedicated YouTube channel:&nbsp;
            <a
              href='https://www.youtube.com/channel/UC2LaYmQzafDXo4ZTPeILfYg'
              className='underline'
              target='_blank'
            >
              https://www.youtube.com
            </a>
          </p>

          <p>
            Beyond definitions, we bring these terms to life with real-world
            dialogue examples. Whether in team discussions, client interactions,
            or professional emails, you’ll learn not only what these terms mean
            but also how and when to use them effectively.
          </p>

          <h2>Motivation: A Rewarding Journey Ahead</h2>

          <p>
            Learning IT and mastering its terminology is no small task, but the
            rewards are immeasurable. This book recognizes the challenges and
            offers structured guidance to ensure your efforts pay off. Whether
            you’re coding, designing interfaces, testing software, or leading
            projects, the knowledge you gain here will be your compass for
            success.
          </p>

          <p>
            By committing to this journey, you’re investing in a skill set that
            unlocks doors to innovation, collaboration, and growth. The IT
            industry rewards those who embrace its intricacies, and this guide
            will ensure you’re equipped to meet its demands with confidence and
            clarity.
          </p>

          <h2>Who Is This Book For?</h2>

          <ul className='list-disc'>
            <li>A beginner eager to explore the opportunities in IT,</li>
            <li>
              A programmer, web designer, tester, or analyst deepening your
              expertise,
            </li>
            <li>A recruiter identifying top talent, or</li>
            <li>A project manager mastering workflows and deadlines,</li>
          </ul>

          <p>
            This book offers tailored insights for everyone. It serves as a
            bridge between theory and practice, helping you understand not just
            the what but the how of IT’s multifaceted ecosystem.
          </p>

          <h2>What You’ll Discover</h2>

          <p className='mb-4'>
            This book is organized into ten chapters, each dedicated to a
            specific domain of IT. Here’s what you can expect to learn:
          </p>

          <div className='space-y-6 text-lg'>
            {chapters.map((ch, index) => (
              <p key={ch.id} className='card dark:text-gray-100 break-words'>
                <SignedIn>
                  <Link href={`/book/${ch.id}`} className='w-5 h-5'>
                    {index + 1}. {ch.title}
                  </Link>
                </SignedIn>

                <SignedOut>
                  <SignInButton forceRedirectUrl={`/book/${ch.id}`}>
                    <button className='.cta-button'>
                      {index + 1}. {ch.title} (Sign in to read)
                    </button>
                  </SignInButton>
                </SignedOut>
              </p>
            ))}
          </div>

          <h2>A Unique Resource for IT Professionals</h2>

          <p>
            This book doesn’t just teach—it transforms your understanding of IT.
            By the end, you’ll have mastered not only technical concepts but
            also the art of collaboration, communication, and execution in the
            fast-paced IT world.
          </p>

          <p>
            From understanding team dynamics in stand-up meetings to navigating
            client relationships with finesse, every chapter is crafted to
            ensure you’re equipped for real-world challenges.
          </p>

          <h2>Embark on Your IT Journey</h2>

          <p>
            As you progress through this guide, you’ll gain not just knowledge
            but the confidence to apply it. Whether you aim to code, design,
            test, or manage, this book provides a roadmap for growth and
            excellence.
          </p>

          <p className='mb-4'>
            Are you ready to embrace the opportunities of IT? Let’s begin this
            exciting journey together!
          </p>
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
