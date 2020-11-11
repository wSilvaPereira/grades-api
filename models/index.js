import dotenv from 'dotenv';

import mongoose from 'mongoose';

import studentModel from './studentModel.js';

dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.student = studentModel(mongoose);

export { db };
