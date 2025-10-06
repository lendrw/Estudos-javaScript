import { User, IUser } from "../models/userModel";

export const getAllUsers = async (): Promise<IUser[]> => {
  return await User.find();
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

export const createUser = async (data: { name: string; email: string }): Promise<IUser> => {
  const user = new User(data);
  return await user.save();
};
