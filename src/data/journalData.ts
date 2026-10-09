export interface JournalArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  pullQuote: string;
  contentParagraphs: string[];
  keyTakeaways: string[];
  image: string;
  imageAlt: string;
}

export const journalArticles: JournalArticle[] = [
  {
    slug: 'navigating-difficult-emotions',
    title: 'On Holding Complexity: Beyond the Binary of Feeling Good or Bad',
    subtitle: 'Why our cultural obsession with relentless positivity often deepens emotional distress',
    category: 'Emotional Landscapes',
    readTime: '6 min read',
    date: 'Autumn 2026',
    author: 'KÜN Editorial & Clinical Team',
    excerpt:
      'We often treat uncomfortable feelings as system errors requiring immediate elimination. Yet sorrow, frustration, and doubt carry vital data about what we value and where our boundaries have been crossed.',
    pullQuote:
      'The goal of emotional maturity is not the perpetual absence of pain, but the capacity to remain in relationship with ourselves when things are hard.',
    contentParagraphs: [
      'In contemporary culture, emotional equilibrium is frequently confused with perpetual cheerfulness. We are subtly taught that sadness is a malfunction, anxiety a moral failing of resilience, and anger an unsophisticated loss of composure. When distress arises, our reflexive instinct is to fix, numb, or quickly reframe it into an uplifting takeaway.',
      'Yet psychotherapeutic tradition and somatic science reveal something quite different: emotions are dynamic physiological messengers. Sorrow signals that something of value has been lost or needs mourning. Anxiety signals that uncertainty requires preparation or safety. Anger signals that an emotional or physical perimeter has been violated.',
      'When we suppress these signals in service of appearing functional, the body retains the unfinished energy. The heart rate stays elevated, the breath turns shallow, and our relationships become superficial because we can only present the sanitized version of our reality.',
      'Holistic mental health begins with expanding our capacity to sit with ambiguity. You can feel profound grief for a lost opportunity while simultaneously feeling immense gratitude for the people beside you today. Both realities coexist. When we give up the demand that every day must feel triumphant, a surprising lightness returns: the relief of finally being honest with what is.',
    ],
    keyTakeaways: [
      'Emotions are physiological signals containing information, not personality flaws',
      'Cognitive bypass and toxic positivity often amplify internal distress over time',
      'Cultivating nervous system tolerance for mixed emotions builds genuine psychological resilience',
      'Confidential dialogue provides a safe container to examine difficult feelings without judgment',
    ],
    image: '/src/assets/images/hero_editorial_sanctuary_1791583747451.jpg',
    imageAlt: 'Sunlit quiet room with notebook and open journal on a wooden table',
  },
  {
    slug: 'understanding-psychological-assessments',
    title: 'The Architecture of Understanding: What a Psychological Assessment Actually Reveals',
    subtitle: 'Demystifying psychometric evaluations and separating functional clarity from clinical stigmatization',
    category: 'Clinical Insights',
    readTime: '5 min read',
    date: 'Late Summer 2026',
    author: 'KÜN Clinical Psychometry',
    excerpt:
      'Many individuals approach psychological testing with apprehension, fearing they will be reduced to a diagnosis code. In reality, a well-conducted assessment is an act of deep illumination and self-compassion.',
    pullQuote:
      'A diagnosis should never be a cage; at its best, it is a map that explains why you have been exhausted by terrain that seemed effortless to others.',
    contentParagraphs: [
      'There is a persistent cultural anxiety surrounding psychological testing. Many adults and parents arrive at our consultation rooms with quiet dread: "Will this prove that something is broken inside me or my child?" This apprehension is understandable, particularly in environments where mental health historically carried punitive social stigma.',
      'However, modern psychometry operates on an entirely different philosophy. We do not test to label defects; we test to uncover cognitive architecture. Every human brain develops unique patterns of working memory, processing speed, perceptual reasoning, and emotional regulation.',
      'When an adult who has spent three decades being criticized as "lazy" or "careless" discovers through an assessment that their executive functioning profile aligns with ADHD, the emotion is rarely despair. It is almost universally a wave of profound relief. Decades of shame give way to understanding: they were not lazy; they were navigating an unaccommodated neurodivergent brain using sheer willpower.',
      'A thorough assessment combines standardized psychometric measures, developmental timelines, observational nuances, and personal narrative. The outcome is not a static score, but actionable clarity: how you learn, what conditions nourish your focus, and what environmental supports allow you to flourish.',
    ],
    keyTakeaways: [
      'Assessments evaluate cognitive strengths, processing styles, and socio-emotional profiles',
      'Psychometric testing replaces chronic self-criticism with objective neurological insight',
      'Useful for neurodivergent discovery, educational adjustments, and targeted therapeutic planning',
      'Always conducted through compassionate, ethical, and collaborative feedback sessions',
    ],
    image: '/src/assets/images/therapy_dialogue_space_1791583808785.jpg',
    imageAlt: 'Quiet library corner with psychology texts and comfortable seating',
  },
  {
    slug: 'animal-human-bond-in-care',
    title: 'Presence Without Demand: How Animals Regulate the Human Nervous System',
    subtitle: 'The physiological and relational science behind animal-assisted therapeutic work',
    category: 'Animal-Assisted Care',
    readTime: '7 min read',
    date: 'Mid-Year 2026',
    author: 'KÜN Somatic & Animal Care Practice',
    excerpt:
      'Long before the cognitive mind constructs words to describe trauma or stress, our autonomic nervous system reads physiological cues. Animals offer a unique conduit to somatic safety.',
    pullQuote:
      'An animal does not evaluate your social status, your eloquence, or your accomplishments. It responds solely to the truth of your physiological state.',
    contentParagraphs: [
      'Human dialogue is inherently complex. Even in the safest clinical environment, speaking requires cognitive sequencing, social risk assessment, and the vulnerability of being interpreted. For individuals recovering from trauma, chronic social anxiety, or severe burnout, the simple act of looking someone in the eye and explaining oneself can trigger defensive autonomic responses.',
      'This is where animal-assisted therapy provides an extraordinary clinical bridge. A certified therapy animal introduces a non-verbal, non-judgmental presence into the therapeutic room. When a person sits beside a calm, rhythmic animal and places a hand on its fur, immediate neurochemical shifts occur: cortisol and blood pressure descend, while oxytocin and vagal tone increase.',
      'In animal-assisted sessions, the animal acts as an intuitive biofeedback partner. If a client’s breathing becomes constricted or hyperventilated, the animal notices the energetic tension. When the client is guided through grounding breathwork and down-regulates their nervous system, the animal visibly settles in response.',
      'This phenomenon—somatic co-regulation—teaches the human nervous system that safety is accessible in the present moment. It creates a stable, embodied foundation upon which deeper psychological exploration can subsequently take place.',
    ],
    keyTakeaways: [
      'Tactile contact with calm animals stimulates parasympathetic nervous system activation',
      'Non-verbal companionship lowers interpersonal defense mechanisms in trauma recovery',
      'Animal partnerships act as gentle anchors for mindfulness and sensory grounding',
      'Facilitated ethically with trained practitioners ensuring both human and animal welfare',
    ],
    image: '/src/assets/images/animal_assisted_therapy_1791583759590.jpg',
    imageAlt: 'Gentle golden therapy dog resting peacefully beside client in a warm room',
  },
  {
    slug: 'grounding-in-karachi',
    title: 'Creating Quietude: The Role of Intentional Spaces in a Restless City',
    subtitle: 'Reflections on sensory overload, urban kineticism, and the necessity of intentional sanctuaries',
    category: 'Spatial Reflection',
    readTime: '4 min read',
    date: 'Spring 2026',
    author: 'KÜN Experiential Team',
    excerpt:
      'Karachi is a city of magnificent vitality, yet its unrelenting pace and acoustic density exact a quiet toll on our internal equilibrium. How do we reclaim spaces for pause?',
    pullQuote:
      'We cannot separate internal mental health from the sensory ecology of the environments in which we dwell.',
    contentParagraphs: [
      'To live in Karachi is to live inside an electric current of motion, commerce, family obligations, and sonic density. From the horns of traffic along Sharea Faisal to the perpetual demands of digital connectivity, our nervous systems rarely experience a true acoustic or visual zero.',
      'Urban neuroscience confirms that continuous ambient noise and cognitive bombardment keep the human amygdala in a state of low-grade chronic vigilance. Over months and years, this manifests not as dramatic crisis, but as subtle irritability, shallow sleep, emotional numbness, and difficulty concentrating.',
      'When designing KÜN—from our private consultation suites to the Experience Café—we treated spatial architecture as an active therapeutic instrument. We asked: What happens when you step off the street into a room where lighting is soft and indirect? Where walls absorb acoustic bounce? Where there is no television screen, no aggressive music, and no imperative to speak quickly?',
      'The response from our visitors has been unanimous: their shoulders drop, their breathing deepens, and their thoughts untangle. Stillness is not an exotic luxury; it is the fundamental baseline our bodies need to remain humane, creative, and emotionally intact.',
    ],
    keyTakeaways: [
      'Ambient urban noise and sensory overload sustain chronic autonomic vigilance',
      'Intentional spaces with low sensory friction allow involuntary nervous system recovery',
      'Hospitality and psychological care intersect when spaces are designed with emotional intelligence',
      'Micro-moments of silence during the week protect against cumulative burnout',
    ],
    image: '/src/assets/images/kun_experience_cafe_1791583774534.jpg',
    imageAlt: 'Warm textured café table with herbal tea and open literature in peaceful sunlight',
  },
];
