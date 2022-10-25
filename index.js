const express = require('express');
const courses = require('./data/courses.json');
const categories = require('./data/categories.json')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hotel server API running')
})

app.listen(port, () => {
    console.log(`The learning page server in running on port, ${port}`)
})

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    if (id === '07') {
        res.send(categories);
    }
    else {
        const selected_category = news.filter(n => n.category_id === id);
        res.send(selected_category);
    }
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('looking for courses', id);

    const course = courses.find(rm => rm.id === id) || {};
    res.send(course)
})