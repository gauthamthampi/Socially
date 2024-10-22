import { User } from '../model/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

export class AuthService {
  static async loginUser({ email, password }: { email: string, password: string }) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user._id, }, "mysecretjwt", { expiresIn: '1h' });
    return token;
  }
}
