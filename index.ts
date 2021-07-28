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
    stepId: "addQueryEndpoint",
    stepName: "Add query endpoint for Casbin Enforcer",
    explanation: `We'll setup a query API endpoint to work with enforcer.`,
    targetDirectory: "app/casbin/queries/enforce.ts",
    templatePath: join(__dirname, "templates", "queries", "enforce.ts"),
    templateValues: {},
  })
  .addNewFilesStep({
    stepId: "addCasbinConfigurationFiles",
    stepName: "Add configure files of Casbin",
    explanation: `We'll add configuration files for Casbin, which describe the permission model and policies.`,
    targetDirectory: "app/casbin/cfg/",
    templatePath: join(__dirname, "templates", "files"),
    templateValues: {},
  })
  .build()

export default receipt
