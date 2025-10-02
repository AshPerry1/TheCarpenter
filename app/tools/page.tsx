import React from 'react';
import Link from 'next/link';

const tools = [
  {
    title: 'Printable Work Cards',
    description: 'Pocket-sized cards with Scripture and reminders to see your work as worship. Print and carry with you.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    link: '/print-cards'
  },
  {
    title: 'Monday Morning Prayers',
    description: 'Start your workweek with prayers specifically written for your workplace and calling.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    link: '#prayers'
  },
  {
    title: 'Workplace Integrity Checklist',
    description: 'A practical guide for managers and employees to cultivate honesty and excellence at work.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    link: '#checklist'
  },
  {
    title: 'Conversation Starters',
    description: 'Thoughtful questions to discuss faith and work with coworkers, friends, and small groups.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    link: '#conversations'
  }
];

const prayers = [
  {
    title: 'Before the Workday',
    prayer: 'Lord Jesus, as I begin this day of work, I acknowledge that it belongs to You. Help me to work with excellence, integrity, and love. Let my labor be an act of worship. Give me wisdom in decisions, patience in difficulties, and grace toward those I work with. May my life point others to You. Amen.'
  },
  {
    title: 'During a Difficult Moment',
    prayer: 'Father, this situation feels overwhelming. Remind me that You see my work and You care. Give me the strength to persevere, the wisdom to respond well, and the grace to trust You with outcomes beyond my control. Help me to honor You even when it's hard. Amen.'
  },
  {
    title: 'At the End of the Day',
    prayer: 'Gracious God, thank You for this day's work. I release it into Your hands—both successes and failures. Remind me that my labor in You is not in vain. Help me to rest well, trusting that You are sovereign over all. Amen.'
  }
];

export default function ToolsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy text-linen py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-cinzel text-4xl md:text-5xl mb-6">
            Tools & Resources
          </h1>
          <p className="text-xl text-linen/80 leading-relaxed max-w-3xl mx-auto">
            Practical resources to help you live out the truth that your everyday work is worship.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <Link 
                key={index}
                href={tool.link}
                className="bg-linen p-8 rounded-lg hover:shadow-lg transition-shadow block"
              >
                <div className="text-gold mb-4">
                  {tool.icon}
                </div>
                <h3 className="font-cinzel text-xl text-navy mb-3">{tool.title}</h3>
                <p className="text-graphite leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prayers Section */}
      <section id="prayers" className="py-16 bg-linen">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cinzel text-3xl text-navy text-center mb-12">
            Monday Morning Prayers
          </h2>
          <div className="space-y-8">
            {prayers.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg border-l-4 border-gold"
              >
                <h3 className="font-cinzel text-xl text-navy mb-4">{item.title}</h3>
                <p className="text-graphite leading-relaxed italic">
                  {item.prayer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrity Checklist */}
      <section id="checklist" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cinzel text-3xl text-navy text-center mb-4">
            Workplace Integrity Checklist
          </h2>
          <p className="text-center text-graphite/70 mb-12 max-w-2xl mx-auto">
            Practical questions for cultivating honesty and excellence at work
          </p>
          
          <div className="bg-linen p-8 rounded-lg">
            <div className="space-y-4">
              {[
                'Do I accurately report my hours and expenses?',
                'Am I honest in my communications, even when it's difficult?',
                'Do I give my employer my best effort during work hours?',
                'Am I truthful about my abilities and limitations?',
                'Do I respect confidentiality and intellectual property?',
                'Am I fair and kind to coworkers and customers?',
                'Do I take credit only for my own work?',
                'Am I pursuing excellence in the tasks given to me?',
                'Do I use company resources responsibly?',
                'Am I ready to speak truth even when it costs me?'
              ].map((question, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-navy mt-1"></div>
                  <p className="text-graphite">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conversation Starters */}
      <section id="conversations" className="py-16 bg-linen">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cinzel text-3xl text-navy text-center mb-4">
            Conversation Starters
          </h2>
          <p className="text-center text-graphite/70 mb-12 max-w-2xl mx-auto">
            Questions to discuss faith and work with others
          </p>
          
          <div className="space-y-6">
            {[
              'What does your work mean to you beyond just earning a paycheck?',
              'Have you ever thought about how your job might connect to your faith?',
              'What gives you the most satisfaction in your work?',
              'When do you feel most fulfilled at work?',
              'How do you handle ethical dilemmas when they arise?',
              'Do you see your work as serving others? In what ways?',
              'What would it look like to pursue excellence in your role?',
              'How do you think God views your everyday work?'
            ].map((question, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <p className="text-graphite font-medium">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

