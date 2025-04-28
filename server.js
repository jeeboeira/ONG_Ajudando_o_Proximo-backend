import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import volunteersRoutes from './src/routes/volunteers.js';

dotenv.config();                    // Carrega variáveis de ambiente

// Inicializa o app
const app = express();

// Middleware que permite acesso cruzado (CORS) e leitura de JSON
app.use(cors());
app.use(express.json());

app.use('/api/volunteers', volunteersRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('API ONG - Online e conectada ao MongoDB!');
  });

// Conexão com o MongoDB utilizando Mongoose
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conectado ao MongoDB');
        app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`));
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err);
        process.exit(1);
    });