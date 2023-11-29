const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
  ];
  
  const thoughtsMessages = [
    'Nodejs is awesome',
    'Express is something to learn',
    'javascript,i simply like it',
    'mongo lets go',
    'mongoose , i like it',
    'heruko with compass and atlass, learn it',
    'I like web developement',
    'Back-end is fun',
    'This apps is awesome',
    'This apps is very simple yet applicable',
    'just need practise ,and more practise',
    'Mongo is better than sql',
  ];
  const reactions = [
    '😀',
    '😂',
    '😎',
    '🤓',
    '🥳',
    '🤩',
    '🤯',
    'i am confuse',
    '🤔',
    'I dont like this.',
    'I need to work hard.',
    'I think i get it now',
    'I bet i knew it',
    'No comment',
  ];
  // Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// function to genearate ramdomn name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

  // function to generate ramdom thought
const getRandomThought = () => ({
    message: getRandomArrItem(thoughtsMessages),
    createdAt: new Date(),
});

  // function to generate ramdom reaction
  const getRandomReaction = () => ({
    message: getRandomArrItem(reactions),
    createdAt: new Date(),
});

//export funcation and data

module.exports ={getRandomName,getRandomArrItem,getRandomThought,getRandomReaction};
