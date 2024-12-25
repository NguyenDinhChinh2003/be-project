import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findEmail(email);
    if (!user) throw new UnauthorizedException("User not found");
    const isPassword = await compare(password, user.password)
    if (!isPassword) 
      throw new UnauthorizedException("Invalid credentials");

    return { id: user.id };
  }
}
