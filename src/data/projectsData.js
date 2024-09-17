const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description:
      "This portfolio showcases a collection of diverse projects that demonstrate engineering precision, creativity, and real-world impact. Built using React for the frontend, Flask for the backend, and hosted on AWS for seamless live deployment, it serves as a comprehensive display of my work and technical skills. The portfolio highlights projects across various domains, each pushing the boundaries of innovation. Explore the code and projects on GitHub to see how these solutions come to life.",
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
      "This auto-trading bot is designed to execute trades on Coinbase and Binance automatically. The backend services and APIs are developed using Python, leveraging AWS services such as Lambda, DynamoDB, API Gateway, and EC2 for robust performance and scalability. The frontend is built using React, providing an intuitive interface for monitoring and managing trades. This bot automates complex trading strategies, freeing users from manual interventions. Explore the project on GitHub to see how the bot optimizes trading on major exchanges.",
    github: "https://github.com/RoknuzzamanRokon/trading-bot",
    techStack: "AWS (Lambda, DynamoDB, API Gateway, EC2), React",
    image: require("../assets/images/tradingBotPhoto.jpg"),
    gallery: [
      require("../assets/images/tradingBotPhoto/01.png"),
      require("../assets/images/tradingBotPhoto/02.png"),
      require("../assets/images/tradingBotPhoto/03.png"),
    ],
  },
  {
    id: 3,
    title: "Telegram Bot",
    description:
      "This Telegram Bot is designed for auto trading, handling trades automatically without user intervention. Developed with the use of VPS (Contabo) for robust hosting and integrated with Telegram Bot Father for bot creation and management, it provides a seamless and reliable platform for automated trading activities. The bot offers users the convenience of executing trades efficiently, freeing them from manual oversight. You can explore the bot’s functionality and code on GitHub..",
    github: "https://github.com/RoknuzzamanRokon/telegram-bot",
    techStack: "VPS (Contabo), Telegram Bot Father",
    image: require("../assets/images/telegramTradingBotPhoto.jpg"),
    gallery: [
      require("../assets/images/telegramTradingBotPhoto/01.png"),
      require("../assets/images/telegramTradingBotPhoto/02.png"),
      require("../assets/images/telegramTradingBotPhoto/03.png"),
      require("../assets/images/telegramTradingBotPhoto/04.png"),
    ],
  },
  {
    id: 4,
    title: "StoryTeller Bot",
    description:
      "The StoryTeller Bot is an innovative online tool that generates personalized stories based on user input. Developed using Django, MySQL, and React, this project allows users to create unique stories by providing key details or themes. The backend, powered by Django and MySQL, handles story generation logic and user data storage, while React ensures a smooth, interactive interface. It's an exciting project that combines creativity with technology. Check out the source code on GitHub and explore how the bot brings stories to life.",
    github: "https://github.com/RoknuzzamanRokon/Story_teller_with_django",
    techStack: "Django, MySQL, React",
    image: require("../assets/images/storyGenarator.jpg"),
    gallery: [
      require("../assets/images/storyGenarator/01.png"),
      require("../assets/images/storyGenarator/02.png"),
      require("../assets/images/storyGenarator/03.png"),
    ],
  },
  {
    id: 5,
    title: "E-Shop",
    description:
      "E-Shop is a fully functional online e-commerce platform designed to offer a variety of products for users to browse and purchase with ease. Built using a powerful tech stack of Django, MySQL, and React, the platform provides a seamless user experience with secure transactions and efficient product management. The backend is handled by Django and MySQL, ensuring robust data handling, while React powers a dynamic, user-friendly interface. Explore the source code on GitHub to learn more about this project.",
    github: "https://github.com/RoknuzzamanRokon/E-commerce_site",
    techStack: "Django, MySQL, React",
    image: require("../assets/images/ecomarcePhoto.jpg"),
    gallery: [],
  },
  {
    id: 6,
    title: "User Login System",
    description:
      "This project demonstrates a customer login system built with a seamless combination of front-end technologies (HTML, CSS, JavaScript) and AWS DynamoDB for secure and efficient data management. It provides users with a robust authentication process to ensure a smooth and safe login experience. The use of DynamoDB allows for scalable storage and quick access to user information. You can explore the project's source code on GitHub.",
    github:
      "https://github.com/RoknuzzamanRokon/portfolio_short_project_for_AsthaIT",
    techStack: "HTML, CSS, JavaScript, DynamoDB",
    image: require("../assets/images/userLogin.jpg"),
    gallery: [
      require("../assets/images/userLogin/01.png"),
      require("../assets/images/userLogin/02.png"),
      require("../assets/images/userLogin/03.png"),
      require("../assets/images/userLogin/04.png"),
    ],
  },
  {
    id: 7,
    title: "Snake Game",
    description:
      "This Snake Game is a fun, offline project created for small-scale gaming enthusiasts. Developed using Python and the Tkinter library, it provides a simple and nostalgic gaming experience. The project showcases the use of Python for game development, with intuitive controls and responsive gameplay. It's a great demonstration of how even simple technologies can be used to build enjoyable applications. Check out the source code on GitHub to explore how the game was built.",
    github: "https://github.com/RoknuzzamanRokon/Snake_Game",
    techStack: "Python, Tkinter",
    image: require("../assets/images/snakeGamePhoto.jpg"),
    gallery: [
      require("../assets/images/snakeGamePhoto/01.png"),
      require("../assets/images/snakeGamePhoto/02.png"),
      require("../assets/images/snakeGamePhoto/03.png"),
    ],
  },
];

export default projects;
