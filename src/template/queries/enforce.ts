import { join } from "path"
import { Ctx } from "blitz"
import { Enforcer, newEnforcer } from "casbin"

export default function enforce(
  rvals: string[],
  ctx: Ctx,
): (rvals: string[], ctx: Ctx) => Promise<boolean> {
  let enforcer: Enforcer | undefined = undefined
  return async function (rvals: string[], ctx: Ctx): Promise<boolean> {
    if (!enforcer) {
      enforcer = await newEnforcer(
        join(__dirname, "..", "cfg", "model.conf"),
        join(__dirname, "..", "cfg", "model.csv"),
      )
    }
    return await enforcer.enforce(...rvals)
  }
}
