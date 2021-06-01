const axios = require('axios')

const seedLocation = require('./seeddemo.json')

const dbSeeder = async (seedLocation, apiUrl) => {
    try {
        for (let item of seedLocation) {
            const postreq = await axios.post(apiUrl, item)

            console.log(postreq, 'succesfully sent')
        }
    } catch (error) {
        console.error(error.message)
        postreq.status(500).send('Server Error')
    }
}

dbSeeder(seedLocation, 'http://localhost:5000/api/snakes/add_one')
