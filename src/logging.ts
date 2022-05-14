import { Command } from "@oclif/command";

export abstract class CommandWithExtraLogging extends Command {
  log(x: any) {
    if (x == undefined) return;
    super.log(x);
  }

  logCollection(collection: any) {
    if (!collection) return;
    this.log(`Collection ${collection.id}: ${collection.name}`);
    if (collection.endUsers) {
      this.log("  Users:");
      this.table(collection.endUsers);
    }
  }

  logDeploymentCollections(deployment: any) {
    if (!deployment) return;
    this.log("");
    this.log(`Deployment ${deployment.id}: ${deployment.name}\n`);
    deployment.collections.forEach((collection: any) => {
      this.log(`  Collection ${collection.id}: ${collection.name}`);
    });
    this.log("");
  }

  logOrganizationCollections(organization: any) {
    if (!organization) return;
    this.log("");
    this.log(`Organization ${organization.id}: ${organization.name}\n`);
    organization.deployments.forEach((deployment: any) => {
      this.log(`  Deployment ${deployment.id}: ${deployment.name}\n`);
      deployment.collections.forEach((collection: any) => {
        this.log(`    Collection ${collection.id}: ${collection.name}`);
      });
    });
    this.log("");
  }

  logOrganizationDeployments(organization: any) {
    if (!organization) return;
    this.log("");
    this.log(`Organization ${organization.id}: ${organization.name}\n`);
    organization.deployments.forEach((deployment: any) => {
      this.log(`  Deployment ${deployment.id}: ${deployment.name}`);
    });
    this.log("");
  }

  logProblem(problem: any) {
    if (!problem) return;
    this.log(`API Problem: ${problem.message}`);
  }

  table(x: any, columns?: string[]) {
    if (x == undefined) return;
    // eslint-disable-next-line no-console
    console.table(x, columns);
  }
}
