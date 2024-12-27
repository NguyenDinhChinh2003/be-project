import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthJwtPayload } from './types/auth-jwtPayload';
import refreshJwtConfig from './config/refresh-jwt.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService, 
    private jwtService: JwtService,
    @Inject(refreshJwtConfig.KEY) private refreshTokenConfig: ConfigType<typeof refreshJwtConfig>
  ) { }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findEmail(email);
    if (!user) throw new UnauthorizedException("User not found");
    const isPassword = await compare(password, user.password)
    if (!isPassword)
      throw new UnauthorizedException("Invalid credentials");

    return { id: user.id };
  }

  login(userId: number) {
    const payload: AuthJwtPayload = { sub: userId }
    const token = this.jwtService.sign(payload)
    const refeshToken = this.jwtService.sign(payload, this.refreshTokenConfig);
    return {
      id: userId,
      token,
      refeshToken
    }
  }

  refeshToken(userId: number){
    const payload: AuthJwtPayload = { sub: userId }
    const token = this.jwtService.sign(payload)
    return {
      id: userId,
      token,
    }
  }
}
