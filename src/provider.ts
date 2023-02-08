import Serverless from 'serverless';

import { DefenderSchema, DefinitionsSchema, ResourcesSchema, FunctionSchema, ProviderSchema } from './types/schemas';

export default class DefenderProvider {
  constructor(serverless: Serverless) {
    serverless.configSchemaHandler.defineTopLevelProperty('defender', DefenderSchema);
    serverless.configSchemaHandler.defineProvider('defender', {
      definitions: DefinitionsSchema.definitions,
      provider: ProviderSchema,
      resources: ResourcesSchema,
      function: FunctionSchema,
    });
  }
}
