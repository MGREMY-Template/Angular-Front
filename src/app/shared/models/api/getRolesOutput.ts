import { RoleDto } from './roleDto';

export class GetRolesOutput {
  roles: Array<RoleDto>;

  constructor(roles: RoleDto[]) {
    this.roles = roles;
  }
}
