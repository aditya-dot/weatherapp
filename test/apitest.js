import chai from 'chai';
import chaiHttp from 'chai-http';
import { should, expect } from 'chai';
chai.use(chaiHttp);


describe('weather', () => {
    describe('/GET', () => {
        it('it should return data if Date is Prime', (done) => {
            chai.request('http://localhost:8080')
                .get('/getWeatherData')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.a('object');
                    done();
                });
        });

        it('it should return no data if date is not Prime', (done) => {
            chai.request('http://localhost:8080')
                .get('/getWeatherData')
                .end((err, res) => {
                    expect(res.status).to.equal(400);
                    expect(res.body).to.have.a.length(0);
                    done();
                });
        });
    });
});