import { Enforcer, newEnforcer } from "casbin"

type CasbinIsAuthorizedArgs = {
  ctx: any
  args: [roleOrRoles?: string | string[]]
}

export async function casbinIsAuthorized({ ctx, args }: CasbinIsAuthorizedArgs) {
  const enforcer = await newEnforcer('examples/authz_model.conf', 'examples/authz_policy.csv')
  const user = ctx.session.user
  const path = ctx.session.path
  const method = ctx.session.method
  return  await enforcer.enforce(user, path, method)
}