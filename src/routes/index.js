const team = require('../team.json');
const projects = require('../projects.json');
const express = require('express');
const router = express.Router();

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about-us', (req, res) => {
    res.render('about-the-company');
});

router.get('/team', (req, res) => {
    res.render('team', { team });
});

router.get('/team/:name', (req, res) => {
    const { name } = req.params;
    const teamMember = team.find(member => member.name === name);
    res.render('team-member', { name, teamMember });
});

router.get('/about-me', (req, res) => {
    res.render('about-me');
});

router.get('/projects', (req, res) => {
    res.render('projects', { projects });
});

router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    const project = projects.find(project => project.id === +id);
    res.render('project-detail', { id, project })
});

module.exports = router;
