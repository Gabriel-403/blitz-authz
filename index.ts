import { RecipeBuilder } from "@blitzjs/installer"
import { join } from "path"

const receipt = RecipeBuilder()
  .setName("blitz-authz")
  .setDescription("A RBAC & ABAC hybrid authorization middleware for Blitz.js")
  .setOwner("Zxilly <zhouxinyu1001@gmail.com>")
  .setRepoLink("https://github.com/node-casbin/blitz-authz")
  .addAddDependenciesStep({
    stepId: "addDeps",
    stepName: "Add dependencies",
    explanation: `Add casbin as a dependency.`,
    packages: [{ name: "casbin", version: "latest" }],
  })
  .addNewFilesStep({
    stepId: "addEnforcer",
    stepName: "Add Enforcer ",
    explanation: `We'll add a query API endpoint for enforcer.`,
    targetDirectory: "app/queries/getEnforcer.ts",
    templatePath: join(__dirname, "templates", "getEnforcer.ts"),
    templateValues: {},
  })
  .addNewFilesStep({
    stepId: "addCasbinModelandPolicies",
    stepName: "Add casbin model and policies files.",
    explanation: `Next, we will add an example casbin model and files. It shows the basic usage of casbin ACL model.`,
    targetDirectory: "app/casbin/",
    templatePath: join(__dirname, "templates", "casbin_files"),
    templateValues: {},
  })

  .build()

export default receipt
