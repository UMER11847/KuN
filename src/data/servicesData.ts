import { images } from './images';

export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Clinical & Consultative' | 'Experiential & Spatial';
  shortDescription: string;
  editorialLead: string;
  overview: string[];
  scope: string[];
  whatToExpect: string[];
  setting: string;
  image: string;
  imageAlt: string;
  badgeKicker: string;
  quote: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: 'therapy',
    number: '01',
    title: 'Therapy & Psychological Consultations',
    subtitle: 'Confidential psychotherapeutic dialogue for individuals, couples, and adolescents',
    category: 'Clinical & Consultative',
    shortDescription:
      'Grounded, attentive therapeutic dialogue supporting emotional integration, relational patterns, and life transitions.',
    editorialLead:
      'Therapy is not a process of repair; it is the deliberate creation of a calm, confidential space where your internal life is received without judgement.',
    overview: [
      'In therapy at KÜN, the relationship between therapist and client serves as a stable container for inquiry. We approach mental health not as a collection of isolated symptoms to suppress, but as meaningful responses to relational history, stress, and internal conflicts.',
      'Sessions are available in-person in our quiet Karachi consultation spaces or virtually through secure, confidential video channels for clients across Pakistan and overseas.',
    ],
    scope: [
      'Individual psychotherapy for adults navigating anxiety, depression, grief, and identity',
      'Couples and relational counseling focused on communication and mutual understanding',
      'Adolescent support addressing academic pressure, developmental transitions, and self-esteem',
      'Somatic and integrative approaches to nervous system regulation',
    ],
    whatToExpect: [
      'An unhurried initial consultation to discuss your context and mutually assess fit',
      'A collaborative pace where boundaries, goals, and focus are shaped together',
      'Consistent, structured 50-minute sessions in a sensory-calm setting',
      'Strict clinical confidentiality adhering to psychological ethics and data privacy',
    ],
    setting: 'In-person at our Karachi sanctuary or via secure virtual consultation',
    image: images.therapyDialogue,
    imageAlt: 'Quiet, warm architectural psychotherapy consultation room with comfortable armchairs and natural light',
    badgeKicker: 'Individual · Relational · Integrative',
    quote:
      'To speak truthfully and be heard without defense is among the most stabilizing experiences available to human consciousness.',
  },
  {
    slug: 'psychological-assessments',
    number: '02',
    title: 'Psychological Assessments',
    subtitle: 'Rigorous diagnostic, cognitive, and neurodevelopmental evaluations',
    category: 'Clinical & Consultative',
    shortDescription:
      'Structured, evidence-informed psychometric and clinical assessments providing clarity on cognitive profiles, neurodiversity, and emotional landscapes.',
    editorialLead:
      'A psychological assessment is an architectural blueprint of how your mind organizes information, experiences emotion, and interacts with the world.',
    overview: [
      'Assessments provide structured clarity when questions arise around learning differences, attention profiles, cognitive function, or nuanced diagnostic distinctions. Rather than labelling individuals, our assessment framework seeks to provide functional understanding.',
      'Our evaluations combine standardized psychometric testing with comprehensive clinical interviews and observational context, culminating in a thorough, compassionate feedback session and written report.',
    ],
    scope: [
      'Cognitive and intellectual profile evaluations',
      'Adult and adolescent ADHD and neurodivergent processing assessments',
      'Comprehensive socio-emotional and personality diagnostic testing',
      'Educational and workplace functional accommodations guidance',
    ],
    whatToExpect: [
      'Comprehensive developmental and psychosocial intake interview',
      'Standardized test administration across one to two dedicated sessions',
      'Detailed clinical synthesis connecting test findings to lived experiences',
      'Collaborative feedback session accompanied by a comprehensive written report',
    ],
    setting: 'Conducted in-person in Karachi with preliminary diagnostic intake available online',
    image: images.sanctuary,
    imageAlt: 'Quiet study table with notebooks, ceramic bowl, and soft daylight for contemplative assessment',
    badgeKicker: 'Diagnostic · Cognitive · Neurodevelopmental',
    quote:
      'Understanding the architecture of one’s mind brings relief, dismantling years of misplaced self-criticism.',
  },
  {
    slug: 'forensic-mental-health',
    number: '03',
    title: 'Forensic Mental Health Services',
    subtitle: 'Objective medico-legal evaluations and specialized forensic psychological consultation',
    category: 'Clinical & Consultative',
    shortDescription:
      'Independent, ethical forensic psychological evaluations, capacity assessments, and expert reporting for legal, institutional, and judicial contexts.',
    editorialLead:
      'At the intersection of psychology and the law, objective clinical methodology and ethical independence are paramount.',
    overview: [
      'KÜN provides specialized forensic psychological services grounded in scientific rigor, institutional objectivity, and strict adherence to statutory and ethical standards in Pakistan.',
      'Our forensic consultations assist legal practitioners, judicial authorities, and statutory bodies with clear, evidence-based psychological insights in civil, criminal, and family law matters.',
    ],
    scope: [
      'Mental capacity and testamentary capacity assessments',
      'Independent expert psychological evaluation reports for civil and criminal proceedings',
      'Family court evaluations concerning parental capability and child psychological welfare',
      'Institutional psychological consultations and risk assessment frameworks',
    ],
    whatToExpect: [
      'Formal instruction review from legal representatives or requesting bodies',
      'Objective, multi-source evaluation protocol incorporating collateral records',
      'Adherence to forensic evidentiary standards and clear delimitation of clinical limits',
      'Structured formal reporting delivered within established judicial timeframes',
    ],
    setting: 'Specialized in-person appointments in Karachi or institutional on-site evaluation',
    image: images.sanctuary,
    imageAlt: 'Architectural space with structured lines and warm stone textures',
    badgeKicker: 'Medico-Legal · Objective · Institutional',
    quote:
      'Rigorous psychological science serves justice best when guided by impartiality and ethical clarity.',
  },
  {
    slug: 'animal-assisted-therapy',
    number: '04',
    title: 'Animal-Assisted Therapy',
    subtitle: 'Nervous system co-regulation through structured therapeutic animal partnerships',
    category: 'Experiential & Spatial',
    shortDescription:
      'Gentle, intentional therapeutic interactions with certified therapy animals, supporting emotional grounding, trauma recovery, and somatic safety.',
    editorialLead:
      'Animals communicate in a non-verbal dialect of pure presence, offering an invitation to regulate the nervous system without the pressure of words.',
    overview: [
      'Animal-assisted therapy at KÜN integrates specially temperament-tested and trained therapy animals into clinical therapeutic frameworks. For individuals experiencing hypervigilance, sensory overload, relational trauma, or difficulty verbalizing feelings, the presence of an animal provides immediate physiological grounding.',
      'Sessions are carefully facilitated by trained psychological practitioners who guide the interaction to support specific therapeutic aims, including heart-rate variability settling, tactile grounding, and emotional safety.',
    ],
    scope: [
      'Somatic calming and down-regulation for generalized anxiety and panic symptoms',
      'Sensory-safe therapeutic contact for children, adolescents, and neurodivergent individuals',
      'Relational warmth for individuals working through trust and attachment wounding',
      'Experiential grief work where quiet physical companionship provides solace',
    ],
    whatToExpect: [
      'Pre-screening to ensure comfort with animals and screen for allergies or phobias',
      'Gentle, consensual interaction honoring both the client’s comfort and animal welfare',
      'Integration with talk and somatic therapy techniques under calm clinical supervision',
      'A quiet, private garden or room setting in Karachi specifically maintained for hygiene and serenity',
    ],
    setting: 'In-person at our dedicated Karachi animal-assisted sanctuary courtyard',
    image: images.animalAssistedTherapy,
    imageAlt: 'Attentive, gentle therapy dog resting calmly on a woven jute rug beside relaxed hands',
    badgeKicker: 'Somatic · Co-Regulation · Tactile Presence',
    quote:
      'In the presence of an animal, the nervous system remembers safety before the intellect finds the words for it.',
  },
  {
    slug: 'retreats-and-experiences',
    number: '05',
    title: 'Retreats & Immersive Experiences',
    subtitle: 'Curated pauses for collective stillness, somatic enquiry, and reflective dialogue',
    category: 'Experiential & Spatial',
    shortDescription:
      'Carefully designed small-group retreats and mindfulness immersions that remove the friction of urban acceleration and foster deep emotional recalibration.',
    editorialLead:
      'We cannot think our way out of exhaustion created by constant urgency; sometimes we must physically change our environment and our cadence.',
    overview: [
      'KÜN retreats offer deliberate, small-cohort immersions designed around restorative rhythms, contemplative movement, group dialogue, and contact with natural elements.',
      'Held in peaceful settings outside the noise of the city, these experiences allow participants to explore mindfulness, somatic self-inquiry, and creative contemplation without commercial spiritual posturing.',
    ],
    scope: [
      'Weekend contemplative pauses centered on breath, nervous system restoration, and stillness',
      'Thematic workshops on boundaries, creative burnout, and somatic awareness',
      'Facilitated small-group dialogue exploring shared human vulnerability in safe containers',
      'Guided reflective journaling and silent contemplation sessions',
    ],
    whatToExpect: [
      'Intentionally small cohorts (10–14 participants) to preserve intimacy and safety',
      'Wholesome, nourishing food and unhurried schedules with generous unstructured rest',
      'Professional facilitators who hold space with warmth, humility, and clinical awareness',
      'No dogmatic prescriptions — every exercise is voluntary and self-paced',
    ],
    setting: 'Selected serene retreats within the Sindh countryside and coastal retreats near Karachi',
    image: images.retreat,
    imageAlt: 'Serene courtyard garden with olive trees, stone path, and a person meditating in calm daylight',
    badgeKicker: 'Somatic · Cohort Immersions · Restorative',
    quote:
      'Rest is not an indulgence to be earned through exhaustion; it is the fertile ground from which clarity emerges.',
  },
  {
    slug: 'experience-cafe',
    number: '06',
    title: 'The KÜN Experience Café',
    subtitle: 'A sensory-gentle hospitality sanctuary designed for quietude, presence, and calm',
    category: 'Experiential & Spatial',
    shortDescription:
      'A peaceful public space in Karachi featuring gentle acoustics, thoughtful teas, curated literature, and an atmosphere where you are welcome to simply exist.',
    editorialLead:
      'In a kinetic metropolis of tens of millions, an intentional quiet room where nothing is demanded of you is a radical act of community care.',
    overview: [
      'The KÜN Experience Café is our physical bridge between clinical mental health and everyday public life. It was conceived as a sanctuary for those who crave a break from visual noise, aggressive acoustics, and relentless social performance.',
      'Featuring natural lime-washed walls, acoustic dampening, warm ambient lighting, artisanal herbal infusions, single-origin coffees, and a curated library of psychology, art, and philosophy, the café welcomes you to read, reflect, or share an unhurried conversation.',
    ],
    scope: [
      'Sensory-gentle environment: warm indirect lighting, no harsh fluorescent glare or loud music',
      'Artisanal tisanes, calming botanical infusions, and carefully roasted coffee',
      'Open library of mental health, literature, poetry, and contemplative philosophy',
      'Gentle community programming: quiet reading hours, reflective salons, and acoustic evenings',
    ],
    whatToExpect: [
      'A welcoming, unpretentious hospitality team that respects personal space',
      'Communal and private seating options designed for tactile comfort',
      'A space free from pressure to consume quickly or vacate tables',
      'Discreet information available regarding KÜN clinical services should you wish to learn more',
    ],
    setting: 'Sanctuary location in Karachi (Visiting hours and access details provided upon enquiry)',
    image: images.experienceCafe,
    imageAlt: 'Quiet café corner with open book on wabi-sabi philosophy, hot ceramic tea cup, and peaceful daylight',
    badgeKicker: 'Public Sanctuary · Sensory Gentle · Karachi',
    quote:
      'Sometimes the beginning of healing is as simple as finding a quiet chair, a warm cup, and an hour of unbroken silence.',
  },
];
