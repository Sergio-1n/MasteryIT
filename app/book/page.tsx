'use client';
// app/book/page.tsx
import Link from 'next/link';
import { chapters } from '../../chapters';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function BookHomePage() {
  const { theme } = useTheme();
  const [bgImage, setBgImage] = useState('/bg.jpg');

  useEffect(() => {
    // Заменить путь на нужный тебе
    if (theme === 'dark') {
      setBgImage('/bg-dark.jpg');
    } else {
      setBgImage('/bg.jpg');
    }
  }, [theme]);

  const cardStyle =
    'bg-white/80 backdrop-blur shadow-xl rounded-2xl p-6 transition hover:shadow-cyan-200 hover:scale-[1.02] duration-200';
  return (
    <div
      className='min-h-screen bg-cover bg-center'
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <main
        className='max-w-3xl mt-4 mx-auto px-6 py-12 space-y-8 text-gray-800'
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <h1 className='text-4xl font-bold text-center'>
          &quot;The Future of IT: Transforming Knowledge into Career
          Success&quot;
        </h1>
        <h1 className='text-4xl font-bold text-center'>
          Dive into the World of IT: Discover Key Roles, Skills, and Essentials
          Shaping the Tech Industry Today.
        </h1>
        <h1 className='text-4xl font-bold text-center'>
          Your Guide to Mastering IT
        </h1>

        <p className='text-lg leading-relaxed'>
          The IT industry is a rapidly evolving domain that influences every
          facet of modern life and fuels global innovation. Whether you’re an
          aspiring professional stepping into the tech world or a seasoned
          practitioner, this book is your comprehensive guide to navigating and
          mastering the diverse landscape of information technology.
        </p>

        <p className='text-lg leading-relaxed'>
          This guide aims to illuminate the foundational principles, essential
          roles, and advanced methodologies of IT, offering practical knowledge
          that bridges the gap between understanding and application. By
          leveraging detailed explanations, real-world examples, and a
          comprehensive glossary of over 400+ key terms, this book equips you to
          thrive in the IT world, regardless of your experience level.
        </p>

        <h2 className='text-2xl font-semibold mt-10'>
          Why This Book Is Essential for Your IT Journey
        </h2>

        <p className='text-lg leading-relaxed'>
          Mastering the knowledge and skills outlined in this guide can
          significantly enhance your performance during job interviews.
          Understanding the IT industry and its key functions equips you to
          confidently discuss your role within a larger organizational context.
          Proficiency in technical skills, such as programming, web design, or
          testing methodologies, enables you to demonstrate expertise and
          provide concrete examples of your capabilities.
        </p>

        <p className='text-lg leading-relaxed'>
          Additionally, insights into project management methodologies and
          analytics showcase your ability to contribute to strategic
          initiatives. Soft skills like effective communication, client
          management, and giving and receiving feedback reflect a professional
          attitude that resonates well with interviewers. By combining these
          competencies, you can present yourself as a well-rounded candidate
          ready to excel in dynamic IT environments, leaving a lasting
          impression on potential employers.
        </p>

        <h2 className='text-2xl font-semibold mt-10'>
          Empowering Your Communication
        </h2>

        <p className='text-lg leading-relaxed'>
          One of the standout features of this book is its focus on IT
          terminology. Fluency in the technical language of IT is not just a
          skill—it’s an essential tool for professional success. With clear,
          thorough explanations of over 400+ essential terms, this book ensures
          you can confidently navigate the jargon-filled world of IT.
        </p>

        <p
          className={`${cardStyle} text-center dark:bg-gray-300 text-lg leading-relaxed`}
        >
          To make your learning experience even more effective, each term comes
          with a pronunciation guide from a native speaker, accessible on our
          dedicated YouTube channel:
          <br />
          <a
            href='https://www.youtube.com/channel/UC2LaYmQzafDXo4ZTPeILfYg'
            className='text-blue-600 underline'
            target='_blank'
          >
            https://www.youtube.com
          </a>
        </p>

        <p className='text-lg leading-relaxed'>
          Beyond definitions, we bring these terms to life with real-world
          dialogue examples. Whether in team discussions, client interactions,
          or professional emails, you’ll learn not only what these terms mean
          but also how and when to use them effectively.
        </p>

        <h2 className='text-2xl font-semibold mt-10'>
          Motivation: A Rewarding Journey Ahead
        </h2>

        <p className='text-lg leading-relaxed'>
          Learning IT and mastering its terminology is no small task, but the
          rewards are immeasurable. This book recognizes the challenges and
          offers structured guidance to ensure your efforts pay off. Whether
          you’re coding, designing interfaces, testing software, or leading
          projects, the knowledge you gain here will be your compass for
          success.
        </p>

        <p className='text-lg leading-relaxed'>
          By committing to this journey, you’re investing in a skill set that
          unlocks doors to innovation, collaboration, and growth. The IT
          industry rewards those who embrace its intricacies, and this guide
          will ensure you’re equipped to meet its demands with confidence and
          clarity.
        </p>

        <h2 className='text-2xl font-semibold mt-10'>Who Is This Book For?</h2>

        <ul className='list-disc list-inside text-lg leading-relaxed space-y-1'>
          <li>A beginner eager to explore the opportunities in IT,</li>
          <li>
            A programmer, web designer, tester, or analyst deepening your
            expertise,
          </li>
          <li>A recruiter identifying top talent, or</li>
          <li>A project manager mastering workflows and deadlines,</li>
        </ul>

        <p className='text-lg leading-relaxed'>
          This book offers tailored insights for everyone. It serves as a bridge
          between theory and practice, helping you understand not just the what
          but the how of IT’s multifaceted ecosystem.
        </p>

        <h2 className='text-2xl font-semibold mt-10'>What You’ll Discover</h2>

        <p className='text-lg leading-relaxed'>
          This book is organized into ten chapters, each dedicated to a specific
          domain of IT. Here’s what you can expect to learn:
        </p>

        <div className='space-y-12 text-lg'>
          {chapters.map((ch, index) => (
            <p key={ch.id}>
              <Link
                href={`/book/${ch.id}`}
                className={`${cardStyle} text-blue-600 dark:bg-gray-300 hover:underline font-medium`}
              >
                {index + 1}. {ch.title}
              </Link>
            </p>
          ))}
        </div>

        <h2 className='text-2xl font-semibold mt-10'>
          A Unique Resource for IT Professionals
        </h2>

        <p className='text-lg leading-relaxed'>
          This book doesn’t just teach—it transforms your understanding of IT.
          By the end, you’ll have mastered not only technical concepts but also
          the art of collaboration, communication, and execution in the
          fast-paced IT world.
        </p>

        <p className='text-lg leading-relaxed'>
          From understanding team dynamics in stand-up meetings to navigating
          client relationships with finesse, every chapter is crafted to ensure
          you’re equipped for real-world challenges.
        </p>

        <h2 className='text-2xl font-semibold mt-10'>
          Embark on Your IT Journey
        </h2>

        <p className='text-lg leading-relaxed'>
          As you progress through this guide, you’ll gain not just knowledge but
          the confidence to apply it. Whether you aim to code, design, test, or
          manage, this book provides a roadmap for growth and excellence.
        </p>

        <p className='text-lg leading-relaxed font-semibold'>
          Are you ready to embrace the opportunities of IT? Let’s begin this
          exciting journey together!
        </p>
        <Link
          className='inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition'
          href='/book/introduction'
        >
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
      </main>
    </div>
  );
}
