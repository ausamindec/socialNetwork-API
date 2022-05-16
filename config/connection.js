const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('socialAPI connected'))
    .catch(err => console.log(err));

module.exports = connection;

