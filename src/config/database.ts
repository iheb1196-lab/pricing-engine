import mongoose from 'mongoose';

export class Database {
  private static instance: Database;

  private constructor() {
    mongoose.connect(process.env.DB as string )
    .then(() => console.log('database connected'))
    .catch(err => console.error('MongoDB connection error:', err));
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}