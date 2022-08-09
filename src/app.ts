import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use('/products', router.productRoute);
app.use('/users', router.userRoute);
app.use('/orders', router.orderRoute);

export default app;
