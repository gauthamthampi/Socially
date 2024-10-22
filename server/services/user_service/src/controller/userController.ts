import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { AuthService } from '../services/authService';

export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const user = await UserService.registerUser({ username, email, password });
      return res.status(201).json(user);
    } catch (error:any) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await AuthService.loginUser({ email, password });
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  }

  // Other methods for fetching/updating profile
}
