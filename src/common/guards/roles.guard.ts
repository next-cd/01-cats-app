import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log('RolesGuard');
    console.log(context.getHandler());
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log(roles);
    
    if (!roles) {
      return true;
    }
    
    const request = context.switchToHttp().getRequest();
    console.log(request.body);
    // console.log(!!roles.indexOf(request.body.name));
    return  !!(~(roles.indexOf(request.body.name)));
    return false
    const user = request.user;
    const hasRole = () => user.roles.some((role) => !!roles.find((item) => item === role));
    return user && user.roles && hasRole();
  }
}
