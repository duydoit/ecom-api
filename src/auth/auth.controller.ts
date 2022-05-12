import { Controller, Get, Res } from '@nestjs/common'
import { Response } from 'express'

@Controller('auth')
export class AuthController {
  @Get()
  getUser(@Res() res: Response): any {
    const user = new Object()
    user['user'] = 'duy'
    return res.status(200).json(user)
  }
}
