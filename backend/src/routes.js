const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_Username, techs, latitude, longitude } = request.body;

    const apiResponse = await axios.get(`http://api.github.com/users/${github_Username}`);

    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Points',
        coordinates: [longitude, latitude]
    };

    const dev = await Dev.create({
        name,
        github_Username,
        bio,
        avatar_url,
        techs: techsArray,
        location
    });

    return response.json(dev);
});

module.exports = routes;