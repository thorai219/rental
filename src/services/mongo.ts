/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import mongoose from 'mongoose';

export const mongoConnect = async () => {
  await mongoose.connect(
    `mongodb+srv://Terry:RWLXi6iZgFCG3Gqw@cluster0.lsffb.mongodb.net/sample_airbnb?retryWrites=true&w=majority`,
  );
};
mongoose.connection.once('open', () => console.log('mongo connected'));
mongoose.connection.on('error', (err) => console.error(err));

export const mongoDisconnect = async () => {
  await mongoose.disconnect();
};
