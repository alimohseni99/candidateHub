const quotes = [
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Your dream job does not exist. You must create it.",
    author: "Unknown",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "Fall seven times, stand up eight.",
    author: "Japanese Proverb",
  },
  {
    quote: "The harder you work, the luckier you get.",
    author: "Gary Player",
  },
  {
    quote: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    quote: "Only those who dare to fail greatly can ever achieve greatly.",
    author: "Robert F. Kennedy",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "If opportunity doesn’t knock, build a door.",
    author: "Milton Berle",
  },
  {
    quote:
      "Go as far as you can see; when you get there, you'll be able to see further.",
    author: "Thomas Carlyle",
  },
  {
    quote:
      "Perseverance is not a long race; it is many short races one after the other.",
    author: "Walter Elliot",
  },
  {
    quote:
      "Keep going. Everything you need will come to you at the perfect time.",
    author: "Unknown",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    quote: "Success is how high you bounce when you hit bottom.",
    author: "George S. Patton",
  },
  {
    quote:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    quote: "Be so good they can’t ignore you.",
    author: "Steve Martin",
  },
  {
    quote: "Hard work beats talent when talent doesn't work hard.",
    author: "Tim Notke",
  },
  {
    quote: "A year from now you may wish you had started today.",
    author: "Karen Lamb",
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Sometimes not getting what you want is a wonderful stroke of luck.",
    author: "Dalai Lama",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Work hard in silence, let your success be your noise.",
    author: "Frank Ocean",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Don’t be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "There are no shortcuts to any place worth going.",
    author: "Beverly Sills",
  },
  {
    quote: "Go the extra mile. It's never crowded.",
    author: "Wayne Dyer",
  },
  {
    quote: "Don’t limit your challenges. Challenge your limits.",
    author: "Jerry Dunn",
  },
  {
    quote: "The comeback is always stronger than the setback.",
    author: "Unknown",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    quote:
      "You don’t have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    quote: "Small deeds done are better than great deeds planned.",
    author: "Peter Marshall",
  },
  {
    quote: "You are far too smart to be the only thing standing in your way.",
    author: "Jennifer Freeman",
  },
  {
    quote: "Your life does not get better by chance, it gets better by change.",
    author: "Jim Rohn",
  },
  {
    quote:
      "Don’t quit. Suffer now and live the rest of your life as a champion.",
    author: "Muhammad Ali",
  },
  {
    quote: "A journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    quote: "Be willing to be a beginner every single morning.",
    author: "Meister Eckhart",
  },
  {
    quote: "Job searching is a full-time job — show up to it every day.",
    author: "Unknown",
  },
  {
    quote: "You haven’t come this far to only come this far.",
    author: "Unknown",
  },
  {
    quote: "Rejection is redirection.",
    author: "Unknown",
  },
  {
    quote: "Sometimes you have to create your own sunshine.",
    author: "Sam Sundquist",
  },
  {
    quote: "When nothing goes right, go left.",
    author: "Unknown",
  },
  {
    quote: "Your job is out there — it’s just waiting for you to find it.",
    author: "Unknown",
  },
  {
    quote: "Keep applying. The one that says yes makes all the no’s worth it.",
    author: "Unknown",
  },
  {
    quote:
      "The struggle you're in today is developing the strength you need for tomorrow.",
    author: "Robert Tew",
  },
  {
    quote:
      "Sometimes life hits you in the head with a brick. Don’t lose faith.",
    author: "Steve Jobs",
  },
  {
    quote: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery",
  },
  {
    quote: "Stay hungry. Stay foolish.",
    author: "Steve Jobs",
  },
  {
    quote: "Failure is not the opposite of success; it’s part of success.",
    author: "Arianna Huffington",
  },
  {
    quote: "Luck is what happens when preparation meets opportunity.",
    author: "Seneca",
  },
  {
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    quote:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
];

export const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
