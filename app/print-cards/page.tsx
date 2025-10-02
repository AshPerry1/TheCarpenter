import React from 'react';

const cards = [
  {
    title: 'Work as Worship',
    verse: 'Whatever you do, work heartily, as for the Lord and not for men. — Colossians 3:23',
    reminder: 'This shift belongs to Jesus. Work as if He's your manager—because He is.'
  },
  {
    title: 'God Sees Your Work',
    verse: 'God is not unjust so as to overlook your work and the love that you have shown for his name. — Hebrews 6:10',
    reminder: 'Every email, every spreadsheet, every customer—He sees it all and it matters.'
  },
  {
    title: 'Not in Vain',
    verse: 'Be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain. — 1 Corinthians 15:58',
    reminder: 'Your faithful work has eternal significance. It will not be wasted.'
  },
  {
    title: 'Integrity Check',
    verse: 'The integrity of the upright guides them. — Proverbs 11:3',
    reminder: 'Tell the truth in emails. Report hours honestly. Do what you say you'll do.'
  }
];

export default function PrintCardsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy text-linen py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-cinzel text-4xl md:text-5xl mb-6">
            Printable Work Cards
          </h1>
          <p className="text-xl text-linen/80 leading-relaxed max-w-3xl mx-auto mb-8">
            Pocket-sized reminders that your work is worship. Print these cards and carry them with you—in your wallet, on your desk, or in your toolbox.
          </p>
          <button 
            onClick={() => window.print()}
            className="bg-gold text-navy px-8 py-4 rounded-xl font-semibold hover:bg-gold/90 transition-colors"
          >
            Print All Cards
          </button>
        </div>
      </section>

      {/* Cards - Printable Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-4">
            {cards.map((card, index) => (
              <div 
                key={index}
                className="bg-linen border-2 border-navy rounded-lg p-6 print:break-inside-avoid print:page-break-inside-avoid"
                style={{
                  width: '100%',
                  aspectRatio: '3.5 / 2',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 className="font-cinzel text-lg text-navy mb-3 border-b border-gold pb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-graphite italic leading-relaxed mb-4">
                    "{card.verse}"
                  </p>
                </div>
                <p className="text-xs text-graphite/70 leading-snug">
                  {card.reminder}
                </p>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-12 bg-gold/10 p-6 rounded-lg print:hidden">
            <h3 className="font-cinzel text-xl text-navy mb-4">How to Use These Cards</h3>
            <ol className="list-decimal list-inside space-y-2 text-graphite">
              <li>Click "Print All Cards" above or use your browser's print function (Cmd/Ctrl + P)</li>
              <li>Print on cardstock for durability (67lb or heavier recommended)</li>
              <li>Cut along the edges of each card</li>
              <li>Keep one in your wallet, desk, or toolbox as a daily reminder</li>
              <li>Share extras with coworkers who might be encouraged</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          nav, footer, button {
            display: none !important;
          }
          
          body {
            background: white !important;
          }
          
          section {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}

