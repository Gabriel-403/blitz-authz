import { newEnforcer } from "casbin"

const getEnforcer = async () => {
  /*
  Casbin is a powerful and efficient open-source access control library. It provides support for enforcing authorization based on various access control models.

  You can use file to provide model and policies like below. You can also use an adapter to provide policies.
  You can get available adapter list at https://casbin.org/docs/en/adapters

  For more info, you can refer to https://casbin.org/docs/en/overview and https://github.com/casbin/node-casbin
   */
  return await newEnforcer('../casbin_model.conf','../casbin_rule.csv')
}
