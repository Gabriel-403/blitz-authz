import { Enforcer, newEnforcer } from "casbin"
import { Middleware ,Ctx } from "blitz"
const BasicAuthorizer = require('./BasicAuthorizer')

export default async function Authorizer(options, ctx: Ctx) {
  // Properly typed
    try {
      const {newEnforcer, authorizer} = options
      const enforcer = await newEnforcer()
      if (!(enforcer instanceof Enforcer)) {
        throw new Error('Invalid enforcer')
      }
      const authzorizer = authorizer ? authorizer(ctx, enforcer) : new BasicAuthorizer(ctx, enforcer)
      if (!(authzorizer instanceof BasicAuthorizer)) {
        throw new Error('Please extends BasicAuthorizer class')
      }
      if (!await authzorizer.checkPermission()) {
        return 403;
      }
    } catch (e) {
      throw e
  }
}