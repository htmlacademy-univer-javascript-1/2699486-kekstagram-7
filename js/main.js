function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(array) {
  return array[getRandomInteger(0, array.length - 1)];
}

const NAMES = [
  'Артём', 'Иван', 'Мария', 'Ольга', 'Дмитрий',
  'Анна', 'Сергей', 'Екатерина', 'Максим', 'Елена'
];

const DESCRIPTIONS = [
  'Красивый закат на море',
  'Мой любимый кот',
  'Прогулка в парке',
  'Вкусный завтрак',
  'Отпуск мечты',
  'Встреча с друзьями',
  'Горный пейзаж',
  'Уютный вечер',
  'Спортивные достижения',
  'Новый день'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

let commentIdCounter = 1;

function createComment() {
  const sentencesCount = getRandomInteger(1, 2);
  let message = '';

  if (sentencesCount === 1) {
    message = getRandomItem(MESSAGES);
  } else {
    const firstSentence = getRandomItem(MESSAGES);
    let secondSentence = getRandomItem(MESSAGES);

    while (firstSentence === secondSentence) {
      secondSentence = getRandomItem(MESSAGES);
    }

    message = `${firstSentence} ${secondSentence}`;
  }

  return {
    id: commentIdCounter++,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message, // Сокращенная запись (вместо message: message)
    name: getRandomItem(NAMES)
  };
}

function createComments() {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }

  return comments;
}

function createPhoto(id) {
  return {
    id, // Сокращенная запись (вместо id: id)
    url: `photos/${id}.jpg`,
    description: getRandomItem(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: createComments()
  };
}

function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    photos.push(createPhoto(i));
  }

  return photos;
}

const myPhotos = generatePhotos();
console.log(myPhotos);
