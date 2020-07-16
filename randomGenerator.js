const faker = require('faker');

module.exports = () => {
  faker.locale = 'fr';
  const data = {
    marques: [
      {
        "id": 1,
        "nom": "Renault"
      },
      {
        "id": 2,
        "nom": "Peugeot"
      },
      {
        "id": 3,
        "nom": "Citroën"
      },
      {
        "id": 4,
        "nom": "Audi"
      },
      {
        "id": 5,
        "nom": "Volkswagen"
      },
      {
        "id": 6,
        "nom": "Opel"
      }
    ],
    modeles: [
      {
        "id": 1,
        "marque": {
          "id": 1,
          "nom": "Renault"
        },
        "nom": "Twingo"
      },
      {
        "id": 2,
        "marque": {
          "id": 1,
          "nom": "Renault"
        },
        "nom": "Scenic"
      },
      {
        "id": 3,
        "marque": {
          "id": 1,
          "nom": "Renault"
        },
        "nom": "Clio"
      },
      {
        "id": 4,
        "marque": {
          "id": 2,
          "nom": "Peugeot"
        },
        "nom": "308"
      },
      {
        "id": 5,
        "marque": {
          "id": 2,
          "nom": "Peugeot"
        },
        "nom": "508"
      },
      {
        "id": 6,
        "marque": {
          "id": 2,
          "nom": "Peugeot"
        },
        "nom": "3008"
      },
      {
        "id": 7,
        "marque": {
          "id": 3,
          "nom": "Citroën"
        },
        "nom": "C3"
      },
      {
        "id": 8,
        "marque": {
          "id": 3,
          "nom": "Citroën"
        },
        "nom": "C4"
      },
      {
        "id": 9,
        "marque": {
          "id": 3,
          "nom": "Citroën"
        },
        "nom": "C5"
      },
      {
        "id": 10,
        "marque": {
          "id": 4,
          "nom": "Audi"
        },
        "nom": "A4"
      },
      {
        "id": 11,
        "marque": {
          "id": 4,
          "nom": "Audi"
        },
        "nom": "Q7"
      },
      {
        "id": 12,
        "marque": {
          "id": 4,
          "nom": "Audi"
        },
        "nom": "TT"
      },
      {
        "id": 13,
        "marque": {
          "id": 5,
          "nom": "Volkswagen"
        },
        "nom": "Polo"
      },
      {
        "id": 14,
        "marque": {
          "id": 5,
          "nom": "Volkswagen"
        },
        "nom": "Golf"
      },
      {
        "id": 15,
        "marque": {
          "id": 5,
          "nom": "Volkswagen"
        },
        "nom": "Touran"
      },
      {
        "id": 16,
        "marque": {
          "id": 6,
          "nom": "Opel"
        },
        "nom": "Corsa"
      },
      {
        "id": 17,
        "marque": {
          "id": 6,
          "nom": "Opel"
        },
        "nom": "Astra"
      },
      {
        "id": 18,
        "marque": {
          "id": 6,
          "nom": "Opel"
        },
        "nom": "Crossland"
      }
    ],
    typeCarburant: [
      {
        "id": 1,
        "nom": "Essence"
      },
      {
        "id": 2,
        "nom": "Diesel"
      },
      {
        "id": 3,
        "non": "Électrique"
      }
    ],
    garages: [],
    annonces: [],
    photos: [],

  }
  for (let i = 0; i < 10; i++) {
    data.garages.push({id: i, name: faker.company.companyName(), numeroTel: faker.phone.phoneNumber()})
  }
  for (let i = 0; i < Math.round(300 + Math.random() * 100); i++) {
    data.annonces.push({
      id: i,
      reference: Math.random().toString(36).substr(2, 12).toUpperCase(),
      modele: data.modeles[Math.floor(Math.random() * data.modeles.length)],
      titre: faker.commerce.productName(),
      description: faker.lorem.paragraphs(),
      descriptionCourte: faker.company.catchPhrase() + ' ' + faker.company.catchPhrase(),
      anneeMiseCirculation: Math.round(1980 + Math.random() * 40),
      kilometrage: Math.round(2000 + Math.random() * 198000),
      prix: Math.round(500 + Math.random() * 19500),
      datePublication: faker.date.between('2019-08-01', new Date()),
      garage: data.garages[Math.floor(Math.random() * data.modeles.length)]
    })
  }
  data.annonces.forEach(annonce => {
    for (let i = 0; i < 5; i++) {
      data.photos.push({
        id: i,
        annonce: annonce,
        source: faker.image.transport(),
        label: annonce.titre
      });
    }
  });


  return data;
}
