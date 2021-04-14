import {RecipeBuilder} from "@blitzjs/installer"

const receipt = RecipeBuilder()
  .setName("blitz-authz")
  .setDescription(
    "A RBAC & ABAC hybrid authorization middleware for Blitz.js",
  )
  .setOwner("Zxilly <zhouxinyu1001@gmail.com>")
  .setRepoLink("https://github.com/node-casbin/blitz-authz")
  .addAddDependenciesStep({
    stepId: "addDeps",
    stepName: "Add dependencies",
    explanation: `Add casbin as a dependency.`,
    packages: [
      {name: "casbin", version: "latest"},
    ],
  })
  .build()

export default receipt
