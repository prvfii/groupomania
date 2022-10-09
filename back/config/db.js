const mongoose = require('mongoose');

//Connection mongoDb avec mongoose 
mongoose.connect(`mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}@${process.env.mongo_cluster}/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
