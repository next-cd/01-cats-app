import { ReflectMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => {
  console.log('rolesrolesroles');
  console.log(roles);
  return ReflectMetadata('roles', roles);
} 
