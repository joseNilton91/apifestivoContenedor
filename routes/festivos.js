
module.exports = (app) => {
    const DATESCONTROLLER = require('../controllers/festivoController');
    app.get('/festivos/:year', DATESCONTROLLER.list);
    app.get('/festivos/verificar/:year/:month/:day', DATESCONTROLLER.verify);
};
