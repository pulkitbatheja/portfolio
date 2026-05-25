require('dotenv').config();
const { ApifyClient } = require('apify-client');

const client = new ApifyClient({
    token: process.env.APIFY_API_TOKEN,
});

async function getAccountInfo() {
    const user = await client.user().get();
    console.log('Connected to Apify account:', user.username);
    return user;
}

async function listActors() {
    const actors = await client.actors().list();
    console.log('Your actors:', actors.items.map(a => a.name));
    return actors;
}

module.exports = { client, getAccountInfo, listActors };

if (require.main === module) {
    getAccountInfo().catch(console.error);
}
