const express = require('express');

const app = express();
const fs = require('fs');


const countries = [{
  id: 1,
  name: 'Angola'
},
{
  id: 2,
  name: 'Belarus'
},
{
  id: 3,
  name: 'Australia'
},
{
  id: 4,
  name: 'Negola'
},
{
  id: 5,
  name: "Antarctica"
},
{
  id: 6,
  name: "Antigua and Barbuda"
},
{
  id: 7,
  name: "Argentina"
},
{
  id: 8,
  name: "Armenia"
},
{
  id: 9,
  name: "Aruba"
},
{
  id: 10,
  name: "Germany"
},
{
  id: 11,
  name: "Austria"
},
{
  id: 12,
  name: "Bahamas",
},
];

const transports = [{
  id: 1,
  name: 'Самолётом'
},
{
  id: 2,
  name: 'На авто'
},
{
  id: 3,
  name: 'Водным путём'
},
{
  id: 4,
  name: 'Пешком'
},
]

const baggage = [{
  id: 1,
  forCountry: [],
  forTransport: [],
  shortDesc: 'Стандартный набор',
  items: [{
    id: 1,
    title: 'Паспорт',
    editing: false,
  },
  {
    id: 2,
    title: 'Виза',
    editing: false,
  },
  {
    id: 3,
    title: 'Вода',
    editing: false,
  },
  {
    id: 4,
    title: 'Еда',
    editing: false,
  },
  {
    id: 5,
    title: 'Одежда',
    editing: false,
  },
  {
    id: 6,
    title: 'Предметы гигиены',
    editing: false,
  },
  ],
  fullDescription: 'Стандартный набор в любое путешествие'
},
{
  id: 2,
  forCountry: [1, 5],
  forTransport: [1],
  shortDesc: 'Плавательный набор',
  items: [{
    id: 1,
    title: 'Тапочки для пляжа',
    editing: false,
  },
  {
    id: 2,
    title: 'Очки для подводного плавания',
    editing: false,
  },
  {
    id: 3,
    title: 'Плавки / купальники',
    editing: false,
  },
  {
    id: 4,
    title: 'Солнечные очки',
    editing: false,
  },
  {
    id: 5,
    title: 'Крем от загара',
    editing: false,
  },

  ],
  fullDescription: 'Набор для плавания'
},
{
  id: 3,
  forCountry: [1, 5],
  forTransport: [1],
  shortDesc: 'Походный набор',
  items: [{
    id: 1,
    title: 'Зонт или полиэтиленовые плащи',
    editing: false,
  },
  {
    id: 2,
    title: 'Кружка',
    editing: false,
  },
  {
    id: 3,
    title: 'Рюкзак',
    editing: false,
  },
  {
    id: 4,
    title: 'Сумочку на пояс и/или руку',
    editing: false,
  },
  {
    id: 5,
    title: 'Швейцарский складной ножик',
    editing: false,
  },
  ],
  fullDescription: 'Набор для прогулок по местности / природе'
},
{
  id: 4,
  forCountry: [2],
  forTransport: [2],
  shortDesc: 'Походный набор',
  items: [{
    id: 1,
    title: 'Зонт или полиэтиленовые плащи',
    editing: false,
  },
  {
    id: 2,
    title: 'Кружка',
    editing: false,
  },
  {
    id: 3,
    title: 'Рюкзак',
    editing: false,
  },
  {
    id: 4,
    title: 'Сумочку на пояс и/или руку',
    editing: false,
  },
  {
    id: 5,
    title: 'Швейцарский складной ножик',
    editing: false,
  },
  ],
  fullDescription: 'Набор для прогулок по местности / природе'
},
{
  id: 5,
  forCountry: [2],
  forTransport: [2],
  shortDesc: 'Плавательный набор',
  items: [{
    id: 1,
    title: 'Тапочки для пляжа',
    editing: false,
  },
  {
    id: 2,
    title: 'Очки для подводного плавания',
    editing: false,
  },
  {
    id: 3,
    title: 'Плавки / купальники',
    editing: false,
  },
  {
    id: 4,
    title: 'Солнечные очки',
    editing: false,
  },
  {
    id: 5,
    title: 'Крем от загара',
    editing: false,
  },
  ],
  fullDescription: 'Набор для плавания'
}, {
  id: 6,
  forCountry: [3],
  forTransport: [3],
  shortDesc: 'Плавательный набор',
  items: [{
    id: 1,
    title: 'Тапочки для пляжа',
    editing: false,
  },
  {
    id: 2,
    title: 'Очки для подводного плавания',
    editing: false,
  },
  {
    id: 3,
    title: 'Плавки / купальники',
    editing: false,
  },
  {
    id: 4,
    title: 'Солнечные очки',
    editing: false,
  },
  {
    id: 5,
    title: 'Крем от загара',
    editing: false,
  },
  ],
  fullDescription: 'Набор для плавания'
}, {
  id: 7,
  forCountry: [3],
  forTransport: [3],
  shortDesc: 'Походный набор',
  items: [{
    id: 1,
    title: 'Зонт или полиэтиленовые плащи',
    editing: false,
  },
  {
    id: 2,
    title: 'Кружка',
    editing: false,
  },
  {
    id: 3,
    title: 'Рюкзак',
    editing: false,
  },
  {
    id: 4,
    title: 'Сумочку на пояс и/или руку',
    editing: false,
  },
  {
    id: 5,
    title: 'Швейцарский складной ножик',
    editing: false,
  },
  ],
  fullDescription: 'Набор для прогулок по местности / природе'
}, {
  id: 8,
  forCountry: [4],
  forTransport: [4],
  shortDesc: 'Походный набор',
  items: [{
    id: 1,
    title: 'Зонт или полиэтиленовые плащи',
    editing: false,
  },
  {
    id: 2,
    title: 'Кружк',
    editing: false,
  },
  {
    id: 3,
    title: 'Рюкзак',
    editing: false,
  },
  {
    id: 4,
    title: 'Сумочку на пояс и/или руку',
    editing: false,
  },
  {
    id: 5,
    title: 'Швейцарский складной ножик',
    editing: false,
  },
  ],
  fullDescription: 'Набор для прогулок по местности / природе'
}, {
  id: 9,
  forCountry: [4],
  forTransport: [4],
  shortDesc: 'Плавательный набор',
  items: [{
    id: 1,
    title: 'Тапочки для пляжа',
    editing: false,
  },
  {
    id: 2,
    title: 'Очки для подводного плавания',
    editing: false,
  },
  {
    id: 3,
    title: 'Плавки / купальники',
    editing: false,
  },
  {
    id: 4,
    title: 'Солнечные очки',
    editing: false,
  },
  {
    id: 5,
    title: 'Крем от загара',
    editing: false,
  },
  ],
  fullDescription: 'Набор для плавания'
},
]

app.get('/diplom/transports', (req, res) => {
  res.json(transports);
});

app.get('/diplom/countries', (req, res) => {
  res.json(countries);
});

app.get('/diplom/baggage/:id', (req, res) => {
  const baggageId = parseInt(req.params.id);

  if (!Number.isNaN(baggageId)) {
    const findedBaggage = baggage.find((el) => el.id === baggageId);

    if (findedBaggage) {
      res.json(findedBaggage)
    }
  }

  res.status(512);
})

app.get('/diplom/baggage', (req, res) => {
  const countryId = parseInt(req.query.countryId);
  const transportId = parseInt(req.query.transportId);

  const defaultBaggage = baggage[0];

  const filteredBaggage = baggage.filter((baggageItem) => {
    return baggageItem.forCountry.includes(countryId) &&
      baggageItem.forTransport.includes(transportId)
  });

  const avaliableBaggage = [
    defaultBaggage,
    ...filteredBaggage
  ]

  res.json(avaliableBaggage);
})

app.post('/diplom/baggageFile', (req, res) => {
  const fileContent = JSON.stringify(req.body);
  // console.log(req)

  const filepath = "./baggage.txt";

  fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;

    res.download('./baggage.txt');
  });
})




app.listen(3000);