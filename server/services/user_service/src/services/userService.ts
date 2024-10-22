import { User } from '../model/userModel';
import bcrypt from 'bcrypt';

export class UserService {
  static async registerUser({ username, email, password }: { username: string, email: string, password: string }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return newUser;
  }

  static async getUserProfile(userId: string) {
    return User.findById(userId);
  }

  // Other methods for updating user profile, etc.
}
