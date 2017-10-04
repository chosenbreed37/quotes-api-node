import mongoose, { Schema } from 'mongoose';
import connectToDb from '../db/connect';

const QuoteSchema = new Schema({
    Text: String,
    Author: String,
    Source: String
});

const QuoteModel = mongoose.model('Quote', QuoteSchema);

QuoteModel.getAll = () => {
    return QuoteModel.find({});
};

const createDataStore = () => {
    connectToDb();
    return QuoteModel;
};

export default createDataStore;
