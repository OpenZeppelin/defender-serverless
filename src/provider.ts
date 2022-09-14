import Serverless from 'serverless';

export default class DefenderProvider {
  constructor(serverless: Serverless) {
    const tstring = { type: 'string' };
    const tboolean = { type: 'boolean' };
    const tnumber = { type: 'integer' };
    const taddress = { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' };

    serverless.configSchemaHandler.defineTopLevelProperty('defender', {
      type: 'object',
      properties: {
        key: tstring,
        secret: tstring,
      },
      required: ['key', 'secret'],
    });

    serverless.configSchemaHandler.defineProvider('defender', {
      definitions: {
        policy: {
          type: 'object',
          properties: {
            'gas-price-cap': tnumber,
            'whitelist-receivers': { type: 'array', items: tstring },
            'eip1559-pricing': tboolean,
          },
        },
        relayer: {
          type: 'object',
          properties: {
            name: tstring,
            network: tstring,
            'min-balance': tnumber,
            // 'address-from-relayer': { $ref: '#/definitions/relayer' }, // causes a deep-sort loop
            policy: { $ref: '#/definitions/policy' },
            'api-keys': { type: 'array', items: tstring },
          },
          required: ['name', 'network', 'min-balance'],
        },
        contract: {
          type: 'object',
          properties: {
            name: tstring,
            address: taddress,
            network: tstring,
            abi: tstring,
            'nat-spec': tstring,
          },
          required: ['name', 'address', 'network'],
        },
        // notification types
        notificationType: {
          type: 'string',
          enum: ['slack', 'email', 'discord', 'telegram', 'datadog', 'webhook'],
        },
        datadogConfig: {
          properties: {
            'api-key': { type: 'string' },
            'metric-prefix': {
              type: 'string',
              maxLength: 100,
              pattern: '^[A-Za-z]+[A-Za-z0-9_\\.]*\\.$',
            },
          },
          required: ['api-key', 'metric-prefix'],
        },
        urlConfig: {
          properties: {
            url: { type: 'string', format: 'uri' },
          },
          required: ['url'],
        },
        telegramBotConfig: {
          properties: {
            'bot-token': { type: 'string' },
            'chat-id': { type: 'string' },
          },
          required: ['bot-token', 'chat-id'],
        },
        emailConfig: {
          properties: {
            emails: {
              type: 'array',
              items: { type: 'string', format: 'email' },
              default: [],
            },
          },
          required: ['emails'],
        },
        notification: {
          type: 'object',
          properties: {
            type: { $ref: '#/definitions/notificationType' },
            name: tstring,
            paused: tboolean,
            config: {
              type: 'object',
              oneOf: [
                { $ref: '#/definitions/emailConfig' },
                { $ref: '#/definitions/telegramBotConfig' },
                { $ref: '#/definitions/datadogConfig' },
                { $ref: '#/definitions/urlConfig' },
              ],
            },
          },
          required: ['name', 'paused'],
        },
        // sentinel types
        blockSentinel: {
          type: 'object',
          properties: {
            name: tstring,
            type: { type: 'string', enum: ['BLOCK'] },
            network: tstring,
            addresses: { type: 'array', items: taddress },
            abi: tstring,
            'alert-threshold': {
              type: 'object',
              properties: { amount: tnumber, 'window-seconds': tnumber },
            },
            paused: tboolean,
            'autotask-condition': { $ref: '#/definitions/autotask' },
            'autotask-trigger': { $ref: '#/definitions/autotask' },
            'confirm-level': {
              oneOf: [{ type: 'string', enum: ['safe', 'finalized'] }, { type: 'integer' }],
            },
            'notify-config': {
              type: 'object',
              properties: {
                timeout: tnumber,
                message: tstring,
                channels: {
                  type: 'array',
                  items: { $ref: '#/definitions/notification' },
                },
              },
              required: ['channels'],
            },
            conditions: {
              type: 'object',
              properties: {
                event: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: { signature: tstring, expression: tstring },
                    required: ['signature'],
                  },
                },
                function: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: { signature: tstring, expression: tstring },
                    required: ['signature'],
                  },
                },
                transaction: tstring,
              },
            },
          },
          required: ['name', 'type', 'network', 'addresses', 'notify-config'],
        },
        fortaSentinel: {
          type: 'object',
          properties: {
            name: tstring,
            type: { type: 'string', enum: ['FORTA'] },
            network: tstring,
            addresses: { type: 'array', items: taddress },
            abi: tstring,
            'alert-threshold': {
              type: 'object',
              properties: { amount: tnumber, 'window-seconds': tnumber },
            },
            paused: tboolean,
            'autotask-condition': { $ref: '#/definitions/autotask' },
            'autotask-trigger': { $ref: '#/definitions/autotask' },
            'notify-config': {
              type: 'object',
              properties: {
                timeout: tnumber,
                message: tstring,
                channels: {
                  type: 'array',
                  items: { $ref: '#/definitions/notification' },
                },
              },
              required: ['channels'],
            },
            conditions: {
              type: 'object',
              properties: {
                'min-scanner-count': tnumber,
                severity: { type: 'integer', enum: [0, 1, 2, 3, 4, 5] },
                'alert-ids': { type: 'array', items: tstring },
              },
              required: ['min-scanner-count'],
            },
            'forta-node-id': tstring,
            'agent-ids': { type: 'array', items: tstring },
          },
          anyOf: [
            {
              required: ['agent-ids'],
            },
            {
              required: ['addresses'],
            },
          ],
          required: ['name', 'type', 'network', 'notify-config'],
        },
        sentinel: {
          oneOf: [{ $ref: '#/definitions/blockSentinel' }, { $ref: '#/definitions/fortaSentinel' }],
        },
        autotask: {
          type: 'object',
          properties: {
            name: tstring,
            path: tstring,
            relayer: { $ref: '#/definitions/relayer' },
            trigger: {
              type: 'object',
              properties: {
                type: tstring,
                cron: tstring,
                frequency: tnumber,
              },
              oneOf: [
                {
                  required: ['cron'],
                },
                {
                  required: ['frequency'],
                },
              ],
              required: ['type'],
            },
            paused: tboolean,
          },
          required: ['name', 'path', 'trigger', 'paused'],
        },
      },
      provider: {
        properties: {
          stage: tstring,
          stackName: tstring,
          ssot: tboolean,
        },
        required: ['stage', 'stackName'],
      },
      resources: {
        type: 'object',
        additionalProperties: false,
        properties: {
          Resources: {
            type: 'object',
            properties: {
              notifications: {
                type: 'object',
                additionalProperties: { $ref: '#/definitions/notification' },
              },
              relayers: {
                type: 'object',
                additionalProperties: { $ref: '#/definitions/relayer' },
              },
              policies: {
                type: 'object',
                additionalProperties: { $ref: '#/definitions/policy' },
              },
              contracts: {
                type: 'object',
                additionalProperties: { $ref: '#/definitions/contract' },
              },
              secrets: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  global: { type: 'object', additionalProperties: tstring },
                  stack: { type: 'object', additionalProperties: tstring },
                },
              },
              sentinels: {
                type: 'object',
                additionalProperties: { $ref: '#/definitions/sentinel' },
              },
            },
          },
        },
      },
      function: {
        type: 'object',
        properties: {
          path: tstring,
          relayer: { $ref: '#/definitions/relayer' },
          trigger: {
            type: 'object',
            properties: {
              type: tstring,
              cron: tstring,
              frequency: tnumber,
            },
            oneOf: [
              {
                required: ['cron'],
              },
              {
                required: ['frequency'],
              },
            ],
            required: ['type'],
          },
          paused: tboolean,
        },
        required: ['name', 'path', 'trigger', 'paused'],
      },
    });
  }
}
