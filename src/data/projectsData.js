const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description:
      "Showcasing a portfolio of diverse projects that push the boundaries of engineering and deliver real-world impact with precision and creativity.",
    github: "https://github.com/RoknuzzamanRokon/portfolio",
    techStack: "React, Flask, AWS for Live hosting.",
    image: require("../assets/images/myProjectPhoto.jpg"),
    gallery: [
      require("../assets/images/portfolioPicture/01.png"),
      require("../assets/images/portfolioPicture/02.png"),
      require("../assets/images/portfolioPicture/03.png"),
    ],
  },
  {
    id: 2,
    title: "Trading Bot",
    description:
      "An online auto-trading bot for Coinbase and Binance. Developed backend services and APIs using Python.",
    github: "https://github.com/RoknuzzamanRokon/trading-bot",
    techStack: "AWS (Lambda, DynamoDB, API Gateway, EC2), React",
    image: require("../assets/images/tradingBotPhoto.jpg"),
    gallery: [
    ],
  },
  {
    id: 3,
    title: "Telegram Bot",
    description:
      "A Telegram bot for auto trading that handles trades automatically.",
    github: "https://github.com/RoknuzzamanRokon/telegram-bot",
    techStack: "VPS (Contabo), Telegram Bot Father",
    image: require("../assets/images/telegramTradingBotPhoto.jpg"),
    gallery: [
    ],
  },
  {
    id: 4,
    title: "StoryTeller Bot",
    description: "An online bot that generates stories based on user input.",
    github: "https://github.com/RoknuzzamanRokon/Story_teller_with_django",
    techStack: "Django, MySQL, React",
    image: require("../assets/images/storyGenarator.jpg"),
    gallery: [
    ],
  },
  {
    id: 5,
    title: "E-Shop",
    description:
      "An online e-commerce site offering various products for easy purchase.",
    github: "https://github.com/RoknuzzamanRokon/E-commerce_site",
    techStack: "Django, MySQL, React",
    image: require("../assets/images/ecomarcePhoto.jpg"),
    gallery: [
    ],
  },
  {
    id: 6,
    title: "User Login System",
    description: "It a customer login system using dynamodb.",
    github:
      "https://github.com/RoknuzzamanRokon/portfolio_short_project_for_AsthaIT",
    techStack: "HTML, CSS, JavaScript, DynamoDB",
    image: require("../assets/images/userLogin.jpg"),
    gallery: [
    ],
  },
  {
    id: 7,
    title: "Snake Game",
    description: "It's an offline fun project for small-scale gaming.",
    github: "https://github.com/RoknuzzamanRokon/Snake_Game",
    techStack: "Python, Tkinter",
    image: require("../assets/images/snakeGamePhoto.jpg"),
    gallery: [
    ],
  },
];

export default projects;
