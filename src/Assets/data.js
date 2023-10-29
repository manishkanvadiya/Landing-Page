const menuItems = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Contact",
    href: "contact",
  },
  {
    name: "Pricing",
    href: "pricing",
  },
  {
    name: "Blogs",
    href: "blogs",
  },
];

const plans = [
  {
    name: "Basic plan",
    price: "$10/mth",
    features: [
      "Access to all basic features ",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
  },
  {
    name: "Business plan",
    price: "$20/mth",
    features: [
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual users",
      "40GB individual data each user",
      "Priority chat and email support",
    ],
  },
  {
    name: "Enterprise plan",
    price: "$40/mth",
    features: [
      "Advanced custom fields",
      "Audit log and data history",
      "Unlimited individual users",
      "Unlimited individual data",
      "Personalized+priority service",
    ],
  },
];

const faqs = [
  [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
    },
  ],
  [
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change the email address associated with your account by going to account from a laptop or desktop.",
    },
  ],
];

const locations = [
  {
    title: "Bengaluru office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN",
  },
  {
    title: "Head office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN",
  },
  {
    title: "Karnataka office",
    timings: "Mon-Sat 9am to 5pm.",
    address:
      "42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN",
  },
];

const users = [
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    position: "Marketing Lead",
  },
  {
    name: "Victória Silva",
    image:
      "https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg",
    position: "Back-end developer",
  },
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Sales",
  },
  {
    name: "Sadie Lewis",
    image:
      "https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Sales",
  },
  {
    name: "Thilde Olaisen",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600",
    position: "Marketing Lead",
  },
  {
    name: "Deepika Ramesh",
    image:
      "https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg",
    position: "Front-end developer",
  },
  {
    name: "Jordi Santiago",
    image:
      "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: "Front-end developer",
  },
  {
    name: "Kerim Fahri",
    image:
      "https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
    position: "Back-end developer",
  },
];

const posts = [
  {
    category: "Design",
    title: "10 Tips for Crafting the Perfect UX Portfolio",
    description:
      "Learn how to showcase your design skills and stand out in a crowded job market.",
    author: "Emily Lee",
    date: "3 April 2023",
    avatar:
      "https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg",
    poster:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
  },
  {
    category: "Technology",
    title: "The Future of Mobile App Development",
    description:
      "Discover the latest trends and techniques that will shape the future of mobile app development.",
    author: "John Smith",
    date: "1 April 2023",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    poster:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
  {
    category: "Business",
    title: "How to Launch a Successful Startup",
    description:
      "Learn the essential steps to launch a successful startup and make your dreams a reality.",
    author: "Sarah Brown",
    date: "28 March 2023",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    poster:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Health",
    title: "The Benefits of Mindfulness Meditation",
    description:
      "Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.",
    author: "David Kim",
    date: "25 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    poster:
      "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Education",
    title: "Why Learning a Second Language is Important",
    description:
      "Explore the benefits of learning a second language and how it can improve your cognitive abilities.",
    author: "Maria Rodriguez",
    date: "22 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/97.jpg",
    poster:
      "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Travel",
    title: "The Best Places to Visit in Europe",
    description:
      "Discover the top destinations in Europe and plan your dream vacation.",
    author: "Alex Johnson",
    date: "19 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/99.jpg",
    poster:
      "https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Food",
    title: "How to Make the Perfect Cup of Coffee",
    description:
      "Learn the secrets to making the perfect cup of coffee and impress your friends and family.",
    author: "Thomas Lee",
    date: "16 March 2023",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    poster:
      "https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
  },
  {
    category: "Fashion",
    title: "The Latest Fashion Trends for Spring 2023",
    description:
      "Discover the hottest fashion trends for the upcoming spring season and stay ahead of the curve.",
    author: "Jessica Kim",
    date: "13 March 2023",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    poster:
      "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Sports",
    title: "The Benefits of Yoga for Athletes",
    description:
      "Learn how practicing yoga can improve your athletic performance and prevent injuries.",
    author: "Michael Johnson",
    date: "10 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    poster:
      "https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];
export { menuItems, plans, faqs, locations, users, posts };
