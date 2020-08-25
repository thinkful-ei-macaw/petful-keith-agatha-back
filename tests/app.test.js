const store = require('../store');
const app = require('../modules/app/app');

describe('Pets endpoint', () => {
  describe('GET /cats endpoint', () => {
    it('responds with 200 + dog + object', () => {
      return supertest(app)
        .get('/pets')
        .expect(200)
        .expect((res) => {
          expect(res.body).to.eql({
            dog: {
              age: 3,
              breed: 'Golden Retriever',
              description:
                'A smiling golden-brown golden retreiver listening to music.',
              gender: 'Male',
              imageURL:
                'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              name: 'Zim',
              story: 'Owner Passed away',
            },
            cat: {
              age: 2,
              breed: 'Bengal',
              description:
                'Orange bengal cat with black stripes lounging on concrete.',
              gender: 'Female',
              imageURL:
                'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              name: 'Steve French',
              story: 'Thrown on the street',
            },
          });
        });
    });

    it('responds 200 deleted', () => {
      return supertest(app).delete('/pets').send({ type: 'dogs' }).expect(200);
    });
  });
});
describe('People endpoint', () => {
  describe('GET /people endpoint', () => {
    it('responds 200 + people array', () => {
      return supertest(app)
        .get('/people')
        .expect(200)
        .expect((res) => {
          expect(res.body).to.eql({
            people: ['Randy Lahey', 'Trevor Cory', 'Jim Lahey'],
          });
        });
    });

    it('responds 200 created', () => {
      return supertest(app)
        .post('/people')
        .send({ name: 'Bubbles' })
        .expect(200);
    });
  });
});
