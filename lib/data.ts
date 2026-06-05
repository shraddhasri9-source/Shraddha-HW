export const SITE = {
  name: 'Shraddha',
  fullName: 'Shraddha – Good & Neat Handwriting Institute',
  tagline: 'Good & Neat Handwriting Institute',
  phone: '+91 98765 43210',
  email: 'hello@shraddha.edu.in',
  address: 'Hyderabad, Telangana – 500001',
  whatsapp: '919876543210',
  url: 'https://shraddha.edu.in',
}

export const STATS = [
  { num: '5000+', label: 'Students Trained' },
  { num: '30', label: 'Day Transformation' },
  { num: '10+', label: 'Years Experience' },
  { num: '98%', label: 'Visible Improvement' },
]

export type Program = {
  slug: string
  name: string
  short: string
  category: 'handwriting' | 'calligraphy'
  tagline: string
  overview: string
  curriculum: { title: string; topics: string[] }[]
  benefits: string[]
}

export const PROGRAMS: Program[] = [
  {
    slug: 'kids-handwriting',
    name: 'Kids Handwriting',
    short: 'Neat, confident writing for school children ages 5–14.',
    category: 'handwriting',
    tagline: 'Fun, structured improvement that builds a lifelong skill.',
    overview:
      'Help your child develop neat, confident, and beautiful handwriting through our engaging Kids Handwriting Program. Designed for young learners, this course focuses on proper letter formation, spacing, cursive writing, and presentation skills while improving concentration, fine motor skills, and writing speed. Through fun activities and guided practice, children build confidence in their schoolwork and learn lifelong writing habits that make every page look organized, clear, and impressive.',
    curriculum: [
      { title: 'Foundations', topics: ['Correct pencil grip', 'Posture & paper position', 'Basic strokes'] },
      { title: 'Letter Mastery', topics: ['Lowercase formation', 'Uppercase formation', 'Number writing'] },
      { title: 'Words & Spacing', topics: ['Letter spacing', 'Word spacing', 'Line alignment'] },
      { title: 'Confidence', topics: ['Paragraph writing', 'Neatness under speed', 'Self-correction'] },
    ],
    benefits: ['Legible, neat writing', 'Better grades for presentation', 'Improved focus & patience', 'Stronger confidence'],
  },
  {
    slug: 'cursive-writing',
    name: 'Cursive Handwriting',
    short: 'Smooth, joined-up letters with proper slant and rhythm.',
    category: 'handwriting',
    tagline: 'Elegant, flowing handwriting for everyday use.',
    overview:
      'Our Cursive Handwriting Program helps children develop smooth, elegant, and connected writing styles that improve both speed and presentation. Through structured practice and expert guidance, students learn proper letter formation, joining techniques, spacing, and writing flow, enabling them to write neatly, confidently, and efficiently. The course also enhances fine motor skills, concentration, and overall writing confidence, making everyday schoolwork more organized and visually appealing.',
    curriculum: [
      { title: 'Cursive Basics', topics: ['Entry & exit strokes', 'Slant control', 'Rhythm drills'] },
      { title: 'Joining Letters', topics: ['Common joins', 'Tricky combinations', 'Word flow'] },
      { title: 'Style & Polish', topics: ['Consistency', 'Speed building', 'Personal flair'] },
    ],
    benefits: ['Faster writing', 'Elegant everyday hand', 'Better note-taking', 'A distinctive style'],
  },
  {
    slug: 'adult-handwriting',
    name: 'Adult Handwriting & Signature',
    short: 'Professional handwriting and a confident personal signature.',
    category: 'handwriting',
    tagline: 'Refine your hand and design a signature that stands out.',
    overview:
      'Enhance your personal and professional image with our Adult Handwriting & Signature Development Program. Designed for students, professionals, and business owners, this course helps improve handwriting clarity, consistency, speed, and overall presentation while also guiding you in creating a unique, elegant, and confident signature. Through personalized practice and proven techniques, participants develop a writing style that reflects professionalism, boosts confidence, and leaves a lasting impression in both academic and professional settings.',
    curriculum: [
      { title: 'Reset & Refine', topics: ['Diagnosing habits', 'Letter reshaping', 'Consistency'] },
      { title: 'Professional Hand', topics: ['Clean print style', 'Speed & legibility', 'Forms & notes'] },
      { title: 'Signature Design', topics: ['Signature structure', 'Flourishes', 'Final styling'] },
    ],
    benefits: ['Polished professional writing', 'A standout signature', 'Clearer communication', 'More confidence'],
  },
  {
    slug: 'exam-writing',
    name: 'Speed & Exam Writing',
    short: 'Write fast and legibly to win every readability mark.',
    category: 'handwriting',
    tagline: 'Neat answers, written fast, under exam pressure.',
    overview:
      'Improve your writing speed, clarity, and presentation with our Speed & Exam Writing Program. Specially designed for students preparing for school, board, competitive, and entrance examinations, this course focuses on increasing writing speed without compromising neatness and readability. Through practical exercises, time-management techniques, and structured writing practice, students learn to complete exams efficiently, present answers effectively, and perform with greater confidence under time constraints.',
    curriculum: [
      { title: 'Speed Foundations', topics: ['Efficient strokes', 'Hand stamina', 'Pacing'] },
      { title: 'Exam Strategy', topics: ['Answer layout', 'Headings & spacing', 'Time management'] },
      { title: 'Mock Practice', topics: ['Timed drills', 'Feedback rounds', 'Final polish'] },
    ],
    benefits: ['Faster writing speed', 'Higher presentation marks', 'Less hand fatigue', 'Exam confidence'],
  },
  {
    slug: 'modern-calligraphy',
    name: 'Modern Calligraphy',
    short: 'Contemporary brush-pen lettering with flowing style.',
    category: 'calligraphy',
    tagline: 'Expressive, contemporary lettering with brush pens.',
    overview:
      'Discover the art of beautiful lettering with our Modern Calligraphy Program. Designed for beginners and enthusiasts alike, this course teaches elegant letterforms, brush pen techniques, creative layouts, and stylish writing compositions. Whether for personal projects, invitations, journaling, branding, or artistic expression, students learn to create stunning handwritten designs while improving creativity, precision, and confidence in their writing style.',
    curriculum: [
      { title: 'Brush Basics', topics: ['Pressure control', 'Thin & thick strokes', 'Drills'] },
      { title: 'Lowercase & Uppercase', topics: ['Letterforms', 'Connections', 'Bounce lettering'] },
      { title: 'Composition', topics: ['Quotes & layouts', 'Flourishing', 'Colour & blending'] },
    ],
    benefits: ['A relaxing creative skill', 'Beautiful lettering art', 'Gift & card making', 'A potential side income'],
  },
  {
    slug: 'classic-calligraphy',
    name: 'Classic & Nib Lettering',
    short: 'Traditional pointed-pen and broad-nib calligraphy scripts.',
    category: 'calligraphy',
    tagline: 'The timeless craft of pointed-pen and broad-nib scripts.',
    overview:
      'Experience the timeless art of elegant handwriting with our Classic & Nib Lettering Program. This course introduces students to traditional penmanship techniques using dip pens and nibs, focusing on graceful letterforms, stroke control, spacing, and decorative lettering styles. Perfect for hobbyists, artists, and handwriting enthusiasts, the program helps develop patience, precision, and creativity while mastering the beauty of classic calligraphy and handcrafted lettering.',
    curriculum: [
      { title: 'Tools & Setup', topics: ['Nibs & holders', 'Ink & paper', 'Posture'] },
      { title: 'Classic Scripts', topics: ['Copperplate basics', 'Italic hand', 'Capitals'] },
      { title: 'Mastery', topics: ['Flourishing', 'Consistency', 'Finished pieces'] },
    ],
    benefits: ['A classical fine-art skill', 'Mastery of nib control', 'Heritage scripts', 'Showpiece lettering'],
  },
  {
    slug: 'calligraphy-art',
    name: 'Invitations & Lettering Art',
    short: 'Create wedding cards, quotes and framed lettering art.',
    category: 'calligraphy',
    tagline: 'Turn your lettering into beautiful, sellable art.',
    overview:
      'Transform words into beautiful works of art with our Invitations & Lettering Art Program. This creative course teaches the techniques of decorative lettering, artistic layouts, and custom invitation design for weddings, birthdays, events, and special occasions. Students learn to combine elegant lettering styles with creative embellishments, helping them create personalized, visually stunning designs that leave a lasting impression. Perfect for artists, hobbyists, and anyone passionate about handcrafted creativity.',
    curriculum: [
      { title: 'Layout & Design', topics: ['Composition', 'Spacing & hierarchy', 'Colour palettes'] },
      { title: 'Project Work', topics: ['Wedding invitations', 'Quote art', 'Envelope addressing'] },
      { title: 'Finishing', topics: ['Framing & presentation', 'Pricing your work', 'Portfolio'] },
    ],
    benefits: ['Sellable lettering products', 'Wedding & event work', 'A creative portfolio', 'Side-business skills'],
  },
]

export const TESTIMONIALS = [
  { img: '/avatar-1.png', name: "Kavya's Mother", course: 'Kids Handwriting', text: "My daughter's handwriting was unreadable. After 6 weeks, her teachers actually complimented her notebooks. Unbelievable change!" },
  { img: '/avatar-2.png', name: 'Rohan Mehta', course: 'Calligraphy Art', text: 'I joined calligraphy as a hobby and now make wedding invitations as a side business. The trainers are patient and genuinely skilled.' },
  { img: '/avatar-3.png', name: 'Dr. Anjali Sharma', course: 'Adult Handwriting', text: 'As a doctor, my handwriting was a running joke. Now my prescriptions are clear and my signature looks professional. Worth every rupee.' },
]

export const FAQS = [
  { q: 'Who can join this program?', a: 'We have batches for all ages and levels — from young children to working adults. The free demo helps us place you in the right batch.' },
  { q: 'Are online classes available?', a: 'Yes. We offer both online and offline classes with the same curriculum and practice materials.' },
  { q: 'How long until I see improvement?', a: 'Most students see clear, visible improvement within 30 days of regular practice.' },
  { q: 'Do I get a certificate?', a: 'Yes, every student receives a certificate of completion from Shraddha Handwriting Institute.' },
]
