import { LibraryFacade } from "../facade/LibraryFacade";
import { configurationInterface } from "../interfaces/configurationInterface";

export class configurationManager {
  // this class assures that the global configuration are managed in a single place in all of the application
  private static instance: configurationManager;
  private configuration: any;
  private constructor() {
    this.configuration = {};
  }
  public static getInstance(): configurationManager {
    if (!configurationManager.instance) {
      configurationManager.instance = new configurationManager();
    }
    return configurationManager.instance;
  }
  public setConfiguration(configuration: configurationInterface) {
    this.configuration = configuration;
  }
  public getConfiguration() {
    return this.configuration;
  }
}

