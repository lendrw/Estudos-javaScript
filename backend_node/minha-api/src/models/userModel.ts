import { Schema, model, Document } from "mongoose";

// Interface TypeScript
export interface IUser extends Document {
  name: string;
  email: string;
}

// Schema MongoDB
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

export const User = model<IUser>("User", userSchema);
