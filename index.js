// API to access old Mcdonalds toys

const app = require('express')();
const PORT = 3000;

app.listen(
    PORT,
    () => console.log('it is located at http://localhost:${PORT}')
)

app.get('/retired', (req, res) => {
    res.status(200).send(retired = {
            Mario = {'descr': 'One of the most popular video game characters of all time. There are 8 different Mario figurines.', 'date': null, 'pic': null, 'price': '250.00 a set'},
            TeenieBeanieBoos = {'descr': 'Similar to Beanie Baby cousins. There are 4 of these in a set.', 'date': null, 'pic': null, 'price': '450.00 each'},
            Furby = {'descr': 'Children across the United States were fascinated with these tiny stuffed toys. There are 4 Furbies. ', 'date': null, 'pic': null, 'price': '120.00 each'}
    })
});
