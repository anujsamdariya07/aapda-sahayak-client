export const agencies = [
  {
    agencyId: 1,
    agencyName: 'Alpha Construction',
    headName: 'John Doe',
    headContactNumber: '123-456-7890',
    expertise: 'Construction',
    address: '123 Alpha St, Cityville, ST 12345',
    equipmentRequirements: [
      { name: 'Excavator', quantity: 2 },
      { name: 'Bulldozer', quantity: 1 },
    ],
    workforce: [
      {
        skillCategory: 'Construction',
        specificSkill: 'Carpenter',
        numberOfWorkers: 5,
      },
      {
        skillCategory: 'Construction',
        specificSkill: 'Electrician',
        numberOfWorkers: 3,
      },
    ],
    about: 'We specialize in residential and commercial construction.',
    emailAddress: 'contact@alphaconstruction.com',
    password: '123456',
  },
  {
    agencyId: 2,
    agencyName: 'Beta Landscaping',
    headName: 'Jane Smith',
    headContactNumber: '234-567-8901',
    expertise: 'Landscaping',
    address: '456 Beta Ave, Townsville, ST 23456',
    equipmentRequirements: [
      { name: 'Lawn Mower', quantity: 4 },
      { name: 'Trimmer', quantity: 3 },
    ],
    workforce: [
      {
        skillCategory: 'Landscaping',
        specificSkill: 'Gardener',
        numberOfWorkers: 6,
      },
      {
        skillCategory: 'Landscaping',
        specificSkill: 'Designer',
        numberOfWorkers: 2,
      },
    ],
    about: 'We provide top-notch landscaping services.',
    emailAddress: 'info@betalandscaping.com',
    password: '123456',
  },
  {
    agencyId: 3,
    agencyName: 'Gamma Electricals',
    headName: 'Alice Johnson',
    headContactNumber: '345-678-9012',
    expertise: 'Electrical Services',
    address: '789 Gamma Blvd, Villagetown, ST 34567',
    equipmentRequirements: [
      { name: 'Wire Stripper', quantity: 10 },
      { name: 'Voltage Tester', quantity: 5 },
    ],
    workforce: [
      {
        skillCategory: 'Electrical',
        specificSkill: 'Electrician',
        numberOfWorkers: 8,
      },
      {
        skillCategory: 'Electrical',
        specificSkill: 'Technician',
        numberOfWorkers: 4,
      },
    ],
    about: 'Experts in residential and commercial electrical work.',
    emailAddress: 'support@gammaelectricals.com',
    password: '123456',
  },
  {
    agencyId: 4,
    agencyName: 'Delta Plumbing',
    headName: 'Bob Brown',
    headContactNumber: '456-789-0123',
    expertise: 'Plumbing',
    address: '321 Delta Rd, Cityplace, ST 45678',
    equipmentRequirements: [
      { name: 'Pipe Wrench', quantity: 5 },
      { name: 'Drain Snake', quantity: 2 },
    ],
    workforce: [
      {
        skillCategory: 'Plumbing',
        specificSkill: 'Plumber',
        numberOfWorkers: 7,
      },
      {
        skillCategory: 'Plumbing',
        specificSkill: 'Helper',
        numberOfWorkers: 3,
      },
    ],
    about: 'Reliable plumbing services for all your needs.',
    emailAddress: 'contact@deltaplumbing.com',
    password: '123456',
  },
  {
    agencyId: 5,
    agencyName: 'Epsilon Roofing',
    headName: 'Charlie White',
    headContactNumber: '567-890-1234',
    expertise: 'Roofing',
    address: '654 Epsilon St, Roofville, ST 56789',
    equipmentRequirements: [
      { name: 'Ladder', quantity: 3 },
      { name: 'Roofing Nail Gun', quantity: 2 },
    ],
    workforce: [
      { skillCategory: 'Roofing', specificSkill: 'Roofer', numberOfWorkers: 5 },
      {
        skillCategory: 'Roofing',
        specificSkill: 'Laborer',
        numberOfWorkers: 2,
      },
    ],
    about: 'Specializing in residential and commercial roofing.',
    emailAddress: 'info@epsilonroofing.com',
    password: '123456',
  },
  {
    agencyId: 6,
    agencyName: 'Zeta Painting',
    headName: 'Diana Green',
    headContactNumber: '678-901-2345',
    expertise: 'Painting',
    address: '987 Zeta Ave, Paintsville, ST 67890',
    equipmentRequirements: [
      { name: 'Paint Sprayer', quantity: 3 },
      { name: 'Brush Set', quantity: 10 },
    ],
    workforce: [
      {
        skillCategory: 'Painting',
        specificSkill: 'Painter',
        numberOfWorkers: 5,
      },
      {
        skillCategory: 'Painting',
        specificSkill: 'Assistant',
        numberOfWorkers: 2,
      },
    ],
    about: 'Professional painting services for homes and businesses.',
    emailAddress: 'info@zetapainting.com',
    password: '123456',
  },
  {
    agencyId: 7,
    agencyName: 'Eta Cleaning Services',
    headName: 'Frank Black',
    headContactNumber: '789-012-3456',
    expertise: 'Cleaning',
    address: '654 Eta St, Clean City, ST 78901',
    equipmentRequirements: [
      { name: 'Vacuum Cleaner', quantity: 5 },
      { name: 'Mop', quantity: 10 },
    ],
    workforce: [
      {
        skillCategory: 'Cleaning',
        specificSkill: 'Cleaner',
        numberOfWorkers: 8,
      },
      {
        skillCategory: 'Cleaning',
        specificSkill: 'Supervisor',
        numberOfWorkers: 2,
      },
    ],
    about: 'We provide comprehensive cleaning services for all spaces.',
    emailAddress: 'contact@etacleaning.com',
    password: '123456',
  },
  {
    agencyId: 8,
    agencyName: 'Theta Security',
    headName: 'Grace Blue',
    headContactNumber: '890-123-4567',
    expertise: 'Security Services',
    address: '321 Theta Blvd, Safe Town, ST 89012',
    equipmentRequirements: [
      { name: 'Surveillance Cameras', quantity: 10 },
      { name: 'Alarm Systems', quantity: 5 },
    ],
    workforce: [
      {
        skillCategory: 'Security',
        specificSkill: 'Security Guard',
        numberOfWorkers: 12,
      },
      {
        skillCategory: 'Security',
        specificSkill: 'Technician',
        numberOfWorkers: 3,
      },
    ],
    about: 'Providing top-notch security solutions for your safety.',
    emailAddress: 'info@thetasecurity.com',
    password: '123456',
  },
  {
    agencyId: 9,
    agencyName: 'Iota Catering',
    headName: 'Henry Silver',
    headContactNumber: '901-234-5678',
    expertise: 'Catering Services',
    address: '987 Iota St, Food City, ST 90123',
    equipmentRequirements: [
      { name: 'Cooking Equipment', quantity: 5 },
      { name: 'Serving Dishes', quantity: 20 },
    ],
    workforce: [
      { skillCategory: 'Catering', specificSkill: 'Chef', numberOfWorkers: 4 },
      {
        skillCategory: 'Catering',
        specificSkill: 'Server',
        numberOfWorkers: 6,
      },
    ],
    about: 'Delicious catering services for all occasions.',
    emailAddress: 'contact@iotacatering.com',
    password: '123456',
  },
  {
    agencyId: 10,
    agencyName: 'Kappa Event Planning',
    headName: 'Ivy Gold',
    headContactNumber: '012-345-6789',
    expertise: 'Event Planning',
    address: '654 Kappa Ave, Event City, ST 01234',
    equipmentRequirements: [
      { name: 'Decorations', quantity: 50 },
      { name: 'Sound System', quantity: 2 },
    ],
    workforce: [
      {
        skillCategory: 'Event Planning',
        specificSkill: 'Event Coordinator',
        numberOfWorkers: 3,
      },
      {
        skillCategory: 'Event Planning',
        specificSkill: 'Decorator',
        numberOfWorkers: 5,
      },
    ],
    about: 'Creating unforgettable events tailored to your needs.',
    emailAddress: 'info@kappaeventplanning.com',
    password: '123456',
  },
  {
    agencyId: 11,
    agencyName: 'Lambda IT Solutions',
    headName: 'Oliver Gray',
    headContactNumber: '123-456-7891',
    expertise: 'IT Services',
    address: '321 Lambda St, Tech City, ST 12346',
    equipmentRequirements: [
      { name: 'Laptops', quantity: 10 },
      { name: 'Servers', quantity: 5 },
    ],
    workforce: [
      {
        skillCategory: 'IT',
        specificSkill: 'Software Developer',
        numberOfWorkers: 4,
      },
      {
        skillCategory: 'IT',
        specificSkill: 'Network Engineer',
        numberOfWorkers: 2,
      },
    ],
    about: 'Providing innovative IT solutions for businesses.',
    emailAddress: 'info@lambdaitsolutions.com',
    password: '123456',
  },
  {
    agencyId: 12,
    agencyName: 'Mu Marketing',
    headName: 'Sophia Black',
    headContactNumber: '234-567-8902',
    expertise: 'Marketing',
    address: '654 Mu Ave, Market Town, ST 23457',
    equipmentRequirements: [
      { name: 'Marketing Software', quantity: 3 },
      { name: 'Analytics Tools', quantity: 2 },
    ],
    workforce: [
      {
        skillCategory: 'Marketing',
        specificSkill: 'SEO Specialist',
        numberOfWorkers: 3,
      },
      {
        skillCategory: 'Marketing',
        specificSkill: 'Content Writer',
        numberOfWorkers: 5,
      },
    ],
    about: 'Helping businesses grow through effective marketing strategies.',
    emailAddress: 'contact@mumarketing.com',
    password: '123456',
  },
  {
    agencyId: 13,
    agencyName: 'Nu Graphic Design',
    headName: 'Liam White',
    headContactNumber: '345-678-9013',
    expertise: 'Graphic Design',
    address: '987 Nu Blvd, Design City, ST 34568',
    equipmentRequirements: [
      { name: 'Design Software', quantity: 5 },
      { name: 'Graphic Tablets', quantity: 3 },
    ],
    workforce: [
      {
        skillCategory: 'Design',
        specificSkill: 'Graphic Designer',
        numberOfWorkers: 4,
      },
      {
        skillCategory: 'Design',
        specificSkill: 'Illustrator',
        numberOfWorkers: 2,
      },
    ],
    about: 'Creating stunning visuals for brands and businesses.',
    emailAddress: 'info@nugraphicdesign.com',
    password: '123456',
  },
  {
    agencyId: 14,
    agencyName: 'Xi Construction Management',
    headName: 'Mia Green',
    headContactNumber: '456-789-0124',
    expertise: 'Construction Management',
    address: '654 Xi St, Build City, ST 45679',
    equipmentRequirements: [
      { name: 'Project Management Software', quantity: 2 },
      { name: 'Construction Tools', quantity: 10 },
    ],
    workforce: [
      {
        skillCategory: 'Management',
        specificSkill: 'Project Manager',
        numberOfWorkers: 3,
      },
      {
        skillCategory: 'Management',
        specificSkill: 'Site Supervisor',
        numberOfWorkers: 5,
      },
    ],
    about: 'Expert management for construction projects of all sizes.',
    emailAddress: 'contact@xiconstruction.com',
    password: '123456',
  },
  {
    agencyId: 15,
    agencyName: 'Omicron Logistics',
    headName: 'Noah Blue',
    headContactNumber: '567-890-1235',
    expertise: 'Logistics',
    address: '321 Omicron Rd, Ship City, ST 56780',
    equipmentRequirements: [
      { name: 'Delivery Trucks', quantity: 5 },
      { name: 'Warehouse Equipment', quantity: 10 },
    ],
    workforce: [
      {
        skillCategory: 'Logistics',
        specificSkill: 'Logistics Coordinator',
        numberOfWorkers: 4,
      },
      {
        skillCategory: 'Logistics',
        specificSkill: 'Warehouse Worker',
        numberOfWorkers: 6,
      },
    ],
    about: 'Efficient logistics solutions for your business needs.',
    emailAddress: 'info@omicronlogistics.com',
    password: '123456',
  },
  {
    agencyId: 16,
    agencyName: 'Pi Photography',
    headName: 'Emma Brown',
    headContactNumber: '678-901-2346',
    expertise: 'Photography',
    address: '456 Pi St, Photo City, ST 67891',
    equipmentRequirements: [
      { name: 'Cameras', quantity: 5 },
      { name: 'Lighting Equipment', quantity: 3 },
    ],
    workforce: [
      {
        skillCategory: 'Photography',
        specificSkill: 'Photographer',
        numberOfWorkers: 4,
      },
      {
        skillCategory: 'Photography',
        specificSkill: 'Photo Editor',
        numberOfWorkers: 2,
      },
    ],
    about: 'Capturing moments that last a lifetime.',
    emailAddress: 'info@piphotography.com',
    password: '123456',
  },
  {
    agencyId: 17,
    agencyName: 'Rho Web Development',
    headName: 'James Smith',
    headContactNumber: '789-012-3457',
    expertise: 'Web Development',
    address: '321 Rho Blvd, Web City, ST 78902',
    equipmentRequirements: [
      { name: 'Development Software', quantity: 5 },
      { name: 'Testing Tools', quantity: 3 },
    ],
    workforce: [
      {
        skillCategory: 'Development',
        specificSkill: 'Frontend Developer',
        numberOfWorkers: 3,
      },
      {
        skillCategory: 'Development',
        specificSkill: 'Backend Developer',
        numberOfWorkers: 3,
      },
    ],
    about: 'Building responsive and user-friendly websites.',
    emailAddress: 'contact@rhowebdevelopment.com',
    password: '123456',
  },
  {
    agencyId: 18,
    agencyName: 'Sigma Fitness',
    headName: 'Olivia Green',
    headContactNumber: '890-123-4568',
    expertise: 'Fitness Training',
    address: '654 Sigma St, Fit City, ST 89013',
    equipmentRequirements: [
      { name: 'Weights', quantity: 20 },
      { name: 'Yoga Mats', quantity: 15 },
    ],
    workforce: [
      {
        skillCategory: 'Fitness',
        specificSkill: 'Personal Trainer',
        numberOfWorkers: 5,
      },
      {
        skillCategory: 'Fitness',
        specificSkill: 'Yoga Instructor',
        numberOfWorkers: 3,
      },
    ],
    about: 'Helping you achieve your fitness goals.',
    emailAddress: 'info@sigmafitness.com',
    password: '123456',
  },
  {
    agencyId: 19,
    agencyName: 'Tau Travel Agency',
    headName: 'Lucas Black',
    headContactNumber: '901-234-5679',
    expertise: 'Travel Services',
    address: '987 Tau Ave, Travel City, ST 90124',
    equipmentRequirements: [
      { name: 'Booking Software', quantity: 2 },
      { name: 'Travel Guides', quantity: 50 },
    ],
    workforce: [
      {
        skillCategory: 'Travel',
        specificSkill: 'Travel Agent',
        numberOfWorkers: 4,
      },
      {
        skillCategory: 'Travel',
        specificSkill: 'Tour Guide',
        numberOfWorkers: 6,
      },
    ],
    about: 'Your partner in unforgettable travel experiences.',
    emailAddress: 'contact@tautravelagency.com',
    password: '123456',
  },
  {
    agencyId: 20,
    agencyName: 'Upsilon Home Services',
    headName: 'Ava White',
    headContactNumber: '012-345-6780',
    expertise: 'Home Services',
    address: '321 Upsilon Rd, Home City, ST 01235',
    equipmentRequirements: [
      { name: 'Cleaning Supplies', quantity: 30 },
      { name: 'Repair Tools', quantity: 15 },
    ],
    workforce: [
      {
        skillCategory: 'Home Services',
        specificSkill: 'Handyman',
        numberOfWorkers: 5,
      },
      {
        skillCategory: 'Home Services',
        specificSkill: 'Cleaner',
        numberOfWorkers: 4,
      },
    ],
    about: 'Providing reliable home services for your comfort.',
    emailAddress: 'info@upsilonhomeservices.com',
    password: '123456',
  },
];
