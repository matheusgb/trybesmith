import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use('/products', router.productRoute);

export default app;
