// Verse data structure for The Carpenter

export interface Verse {
  reference: string;
  text: string;
  category: 'work' | 'gospel' | 'faith' | 'integrity' | 'service';
}

export const verses: Verse[] = [
  // Work as Worship
  {
    reference: 'Colossians 3:23-24',
    text: 'Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.',
    category: 'work'
  },
  {
    reference: 'Hebrews 6:10',
    text: 'For God is not unjust so as to overlook your work and the love that you have shown for his name in serving the saints, as you still do.',
    category: 'work'
  },
  {
    reference: '1 Corinthians 15:58',
    text: 'Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.',
    category: 'work'
  },
  {
    reference: '1 Corinthians 10:31',
    text: 'So, whether you eat or drink, or whatever you do, do all to the glory of God.',
    category: 'work'
  },
  
  // Gospel & Redemption
  {
    reference: 'Ephesians 2:8-10',
    text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast. For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.',
    category: 'gospel'
  },
  {
    reference: 'Romans 10:9-10',
    text: 'If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved. For with the heart one believes and is justified, and with the mouth one confesses and is saved.',
    category: 'gospel'
  },
  {
    reference: '2 Corinthians 8:9',
    text: 'For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you by his poverty might become rich.',
    category: 'gospel'
  },
  
  // Witness & Light
  {
    reference: 'Matthew 5:16',
    text: 'In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.',
    category: 'service'
  },
  {
    reference: '1 Thessalonians 4:11-12',
    text: 'Aspire to live quietly, and to mind your own affairs, and to work with your hands, as we instructed you, so that you may walk properly before outsiders and be dependent on no one.',
    category: 'work'
  },
  
  // Integrity
  {
    reference: 'Proverbs 11:3',
    text: 'The integrity of the upright guides them, but the crookedness of the treacherous destroys them.',
    category: 'integrity'
  },
  
  // Faith
  {
    reference: 'Romans 10:17',
    text: 'So faith comes from hearing, and hearing through the word of Christ.',
    category: 'faith'
  },
  {
    reference: 'John 3:5-8',
    text: 'Jesus answered, "Truly, truly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God. That which is born of the flesh is flesh, and that which is born of the Spirit is spirit. Do not marvel that I said to you, 'You must be born again.' The wind blows where it wishes, and you hear its sound, but you do not know where it comes from or where it goes. So it is with everyone who is born of the Spirit."',
    category: 'faith'
  }
];

export function getVerseByReference(reference: string): Verse | undefined {
  return verses.find(v => v.reference === reference);
}

export function getVersesByCategory(category: Verse['category']): Verse[] {
  return verses.filter(v => v.category === category);
}

