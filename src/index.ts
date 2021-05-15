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
    stepId: "addApiRoute",
    stepName: "Add Api Route ",
    explanation: `We'll setup a query API endpoint to for you to check your rules with useQuery`,
    targetDirectory: "app/guard/queries/getAbility.ts",
    templatePath: join(__dirname, "templates", "queries", "getAbility.ts"),
    templateValues: {},
  })
  .build()

export default receipt
