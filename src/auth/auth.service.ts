import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthJwtPayload } from './types/auth-jwtPayload';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService, private jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findEmail(email);
    if (!user) throw new UnauthorizedException("User not found");
    const isPassword = await compare(password, user.password)
    if (!isPassword)
      throw new UnauthorizedException("Invalid credentials");

    return { id: user.id };
  }

  async login(userId: number) {
    const payload: AuthJwtPayload = { sub: userId }
    return this.jwtService.sign(payload);
  }
}
