// API to access Mcdonalds old toys.

const app = require('express')();
const PORT = 3000;

app.listen(
    PORT,
    () => console.log('it is located at http://localhost:${PORT}')
)

app.get('/retired', (req, res) => {
    res.status(200).send({
        name: {'peanuts': 'the adorable elephant'}
    })
});
