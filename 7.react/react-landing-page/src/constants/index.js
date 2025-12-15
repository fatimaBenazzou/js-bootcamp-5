// ====================================
// APP CONSTANTS
// ====================================

export const NAVIGATION_ITEMS = [
    {
        title: "Features",
        url: "#features",
    },
    {
        title: "Pricing",
        url: "#pricing",
    },
    {
        title: "How to use",
        url: "#how-to-use",
    },
    {
        title: "Roadmap",
        url: "#roadmap",
    },
    {
        title: "New account",
        url: "#signup",
        onlyMobile: true,
    },
    {
        title: "Sign in",
        url: "#login",
        onlyMobile: true,
    },
];

export const BENEFITS = [
    {
        id: "ask-anything",
        title: "Ask Anything",
        text: "Get instant answers to your questions with our advanced AI-powered search and response system.",
        iconUrl: "/benefits/icon-1.svg",
        imageUrl: "/benefits/image-2.png",
    },
    {
        id: "continuous-improvement",
        title: "Continuous Learning",
        text: "Our AI learns from every interaction, providing increasingly accurate and personalized responses.",
        iconUrl: "/benefits/icon-2.svg",
        imageUrl: "/benefits/image-2.png",
        light: true,
    },
    {
        id: "universal-access",
        title: "Universal Access",
        text: "Connect from anywhere, on any device, with seamless synchronization across all platforms.",
        iconUrl: "/benefits/icon-3.svg",
        imageUrl: "/benefits/image-2.png",
    },
    {
        id: "lightning-fast",
        title: "Lightning Fast",
        text: "Experience near-instantaneous responses with our optimized AI infrastructure and edge computing.",
        backgroundUrl: "/benefits/card-4.svg",
        iconUrl: "/benefits/icon-4.svg",
        imageUrl: "/benefits/image-2.png",
        light: true,
    },
    {
        id: "intelligent-suggestions",
        title: "Smart Suggestions",
        text: "Receive proactive recommendations and insights based on your usage patterns and preferences.",
        iconUrl: "/benefits/icon-1.svg",
        imageUrl: "/benefits/image-2.png",
    },
    {
        id: "collaborative-ai",
        title: "Collaborative AI",
        text: "Work seamlessly with our AI assistant that adapts to your team's workflow and communication style.",
        iconUrl: "/benefits/icon-2.svg",
        imageUrl: "/benefits/image-2.png",
    },
];

export const PRICING_PLANS = [
    {
        id: "basic",
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        price: "0",
        features: [
            "AI chatbot with natural language understanding",
            "Personalized recommendations based on your preferences",
            "Access to core features with no cost",
        ],
    },
    {
        id: "premium",
        title: "Premium",
        description: "Advanced AI chatbot, priority support, analytics dashboard",
        price: "9.99",
        features: [
            "Advanced AI chatbot with complex query handling",
            "Comprehensive analytics dashboard",
            "Priority customer support",
        ],
    },
    {
        id: "enterprise",
        title: "Enterprise",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        price: null,
        features: [
            "Custom AI chatbot tailored to your business",
            "Advanced analytics and reporting suite",
            "Dedicated account manager and support",
        ],
    },
];

export const ROADMAP_ITEMS = [
    {
        id: "voice-recognition",
        title: "Voice Recognition",
        text: "Enable hands-free interaction with advanced voice command recognition and natural speech processing.",
        date: "Q2 2024",
        status: "done",
        imageUrl: "/roadmap/image-1.png",
    },
    {
        id: "gamification",
        title: "Gamification",
        text: "Introduce engaging game elements like achievement badges and leaderboards to boost user engagement.",
        date: "Q3 2024",
        status: "progress",
        imageUrl: "/roadmap/image-2.png",
    },
    {
        id: "chatbot-customization",
        title: "Chatbot Customization",
        text: "Allow deep customization of chatbot personality, appearance, and behavior to match your brand.",
        date: "Q4 2024",
        status: "done",
        imageUrl: "/roadmap/image-3.png",
    },
    {
        id: "api-integration",
        title: "API Ecosystem",
        text: "Connect with external services like weather, news, and business tools for enhanced functionality.",
        date: "Q1 2025",
        status: "progress",
        imageUrl: "/roadmap/image-4.png",
    },
];

export const SOCIAL_LINKS = [
    {
        id: "discord",
        title: "Discord",
        iconUrl: "/socials/discord.svg",
        url: "https://discord.gg/brainwave",
    },
    {
        id: "twitter",
        title: "Twitter",
        iconUrl: "/socials/twitter.svg",
        url: "https://twitter.com/brainwave",
    },
    {
        id: "instagram",
        title: "Instagram",
        iconUrl: "/socials/instagram.svg",
        url: "https://instagram.com/brainwave",
    },
    {
        id: "telegram",
        title: "Telegram",
        iconUrl: "/socials/telegram.svg",
        url: "https://t.me/brainwave",
    },
    {
        id: "facebook",
        title: "Facebook",
        iconUrl: "/socials/facebook.svg",
        url: "https://facebook.com/brainwave",
    },
];

export const COLLABORATION_APPS = [
    {
        title: "Figma",
        icon: "/collaboration/figma.png",
        width: 26,
        height: 36,
    },
    {
        title: "Notion",
        icon: "/collaboration/notion.png",
        width: 34,
        height: 36,
    },
    {
        title: "Discord",
        icon: "/collaboration/discord.png",
        width: 36,
        height: 28,
    },
    {
        title: "Slack",
        icon: "/collaboration/slack.png",
        width: 34,
        height: 35,
    },
    {
        title: "Photoshop",
        icon: "/collaboration/photoshop.png",
        width: 34,
        height: 34,
    },
    {
        title: "Protopie",
        icon: "/collaboration/protopie.png",
        width: 34,
        height: 34,
    },
    {
        title: "Framer",
        icon: "/collaboration/framer.png",
        width: 26,
        height: 34,
    },
    {
        title: "Raindrop",
        icon: "/collaboration/raindrop.png",
        width: 38,
        height: 32,
    },
];

export const BRAINWAVE_SERVICES = [
    "Advanced Photo Generation",
    "Intelligent Photo Enhancement",
    "Seamless Platform Integration",
];

export const BRAINWAVE_SERVICE_ICONS = [
    "/recording-03.svg",
    "/recording-03.svg",
    "/disc-02.svg",
    "/chrome-cast.svg",
    "/sliders-04.svg",
];

export const HERO_ICONS = ["/home-smile.svg", "/file-02.svg", "/search-md.svg", "/plus-square.svg"];

export const NOTIFICATION_IMAGES = [
    "/notification/image-4.png",
    "/notification/image-3.png",
    "/notification/image-2.png",
];

export const COMPANY_LOGOS = [
    "/yourlogo.svg",
    "/yourlogo.svg",
    "/yourlogo.svg",
    "/yourlogo.svg",
    "/yourlogo.svg",
];

export const COLLABORATION_CONTENT = [
    {
        title: "Seamless Integration",
        text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
    },
    {
        title: "Smart Automation",
    },
    {
        title: "Top-notch Security",
    },
];
