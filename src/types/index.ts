import { Network } from '@openzeppelin/defender-base-client';
import { Contract } from '@openzeppelin/defender-admin-client';
import { RelayerGetResponse, RelayerApiKey } from '@openzeppelin/defender-relay-client';
import { JsonFragment } from '@ethersproject/abi';
import { DefenderApiResponseError } from '@openzeppelin/defender-base-client/lib/api/api-error';
import {
  SaveNotificationRequest,
  NotificationSummary,
  DatadogConfig,
  SlackConfig,
  TelegramBotConfig,
  EmailConfig,
  DiscordConfig,
  NotificationType,
} from '@openzeppelin/defender-sentinel-client/lib/models/notification';

import { NotificationCategory } from '@openzeppelin/defender-sentinel-client/lib/models/category';
import { CreateSentinelResponse, BlockWatcher } from '@openzeppelin/defender-sentinel-client';

import {
  CreateBlockSubscriberResponse,
  CreateFortaSubscriberResponse,
  ExternalCreateBlockSubscriberRequest,
  ExternalCreateFortaSubscriberRequest,
  NotificationReference,
  SubscriberRiskCategory,
} from '@openzeppelin/defender-sentinel-client/lib/models/subscriber';
import {
  Autotask,
  SecretsMap,
  ScheduleTrigger,
  WebhookTrigger,
  SentinelTrigger,
  MonitorFilterTrigger,
  ScenarioTrigger,
} from '@openzeppelin/defender-autotask-client/lib/models/autotask';
import { BlockExplorerApiKeyResponse, DeploymentConfigResponse } from '@openzeppelin/platform-deploy-client';
import { OpsgenieConfig } from '@openzeppelin/defender-sentinel-client/lib/models/opsgenie';
import { PagerDutyConfig } from '@openzeppelin/defender-sentinel-client/lib/models/pager-duty';

export type DefenderAPIError = DefenderApiResponseError;
export type DefenderRelayerApiKey = RelayerApiKey;
export type DefenderSecretsMap = SecretsMap;
export type DefenderContract = Contract;
export type DefenderRelayer = RelayerGetResponse;
export type DefenderAutotask = Autotask;
export type DefenderBlockWatcher = BlockWatcher;
export type DefenderNotification = NotificationSummary;
export type DefenderCategory = NotificationCategory;
export type DefenderNotificationReference = NotificationReference;
export type DefenderSentinel = CreateSentinelResponse;
export type DefenderBlockSentinelResponse = CreateBlockSubscriberResponse;
export type DefenderFortaSentinelResponse = CreateFortaSubscriberResponse;
export type DefenderBlockSentinel = ExternalCreateBlockSubscriberRequest;
export type DefenderFortaSentinel = ExternalCreateFortaSubscriberRequest;
export type DefenderSlackConfig = SlackConfig;
export type DefenderDatadogConfig = DatadogConfig;
export type DefenderDiscordConfig = DiscordConfig;
export type DefenderTelegramConfig = TelegramBotConfig;
export type DefenderEmailConfig = EmailConfig;
export type DefenderNetwork = Network;
export type DefenderScenarioTrigger = ScenarioTrigger;
export type DefenderWebhookTrigger = WebhookTrigger;
export type DefenderScheduleTrigger = ScheduleTrigger;
export type DefenderDeploymentConfig = DeploymentConfigResponse;
export type DefenderBlockExplorerApiKey = BlockExplorerApiKeyResponse;
export type DefenderSentinelTrigger = SentinelTrigger;
export type DefenderMonitorFilterTrigger = MonitorFilterTrigger;
export type DefenderSubscriberRiskCategory = SubscriberRiskCategory;

export type ResourceType =
  | 'Sentinels'
  | 'Relayers'
  | 'Notifications'
  | 'Categories'
  | 'Autotasks'
  | 'Contracts'
  | 'Secrets'
  | 'Deployment Configs'
  | 'Block Explorer Api Keys';

export type YPolicy = {
  'gas-price-cap'?: number;
  'whitelist-receivers'?: string[];
  'eip1559-pricing'?: boolean;
  'private-transactions'?: boolean;
};

export type YRelayer = {
  name: string;
  network: Network;
  'min-balance': number;
  policy?: YPolicy;
  'api-keys': any[];
  'address-from-relayer'?: YRelayer;
};

export type YAutotask = {
  name: string;
  path: string;
  relayer?: YRelayer;
  trigger: {
    type: 'schedule' | 'webhook' | 'sentinel' | 'monitor-filter';
    frequency?: number;
    cron?: string;
  };
  paused: boolean;
};

export type YSlackConfig = {
  url: string;
};

export type YTelegramConfig = {
  'bot-token': string;
  'chat-id': string;
};

export type YDiscordConfig = {
  url: string;
};

export type YEmailConfig = {
  emails: string[];
};

export type YDatadogConfig = {
  'api-key': string;
  'metric-prefix': string;
};

export type YOpsgenieConfig = OpsgenieConfig;
export type YPagerdutyConfig = PagerDutyConfig;

export type YNotification = SaveNotificationRequest & {
  type: NotificationType;
  name: string;
  paused: boolean;
  config:
    | YSlackConfig
    | YTelegramConfig
    | YDatadogConfig
    | YDiscordConfig
    | YEmailConfig
    | YOpsgenieConfig
    | YPagerdutyConfig;
};

export type YCategory = {
  name: string;
  description: string;
  'notification-ids': YNotification[];
};

export type YBlockSentinel = {
  name: string;
  type: 'BLOCK';
  network: Network;
  addresses: string[];
  abi?: string | string[] | JsonFragment[];
  'alert-threshold'?: { amount: number; 'window-seconds': number };
  paused?: boolean;
  'autotask-condition'?: YAutotask;
  'autotask-trigger'?: YAutotask;
  'confirm-level'?: number | 'safe' | 'finalized';
  'notify-config': {
    timeout?: number;
    message?: string;
    'message-subject'?: string;
    category?: YCategory;
    channels: YNotification[];
  };
  conditions?: {
    event: { signature: string; expression?: string }[];
    function: { signature: string; expression?: string }[];
    transaction?: string;
  };
  'risk-category': DefenderSubscriberRiskCategory;
};

export type YFortaSentinel = {
  name: string;
  type: 'FORTA';
  network?: Network;
  addresses?: string[];
  abi?: string | string[] | JsonFragment[];
  'alert-threshold'?: { amount: number; 'window-seconds': number };
  paused?: boolean;
  'autotask-condition'?: YAutotask;
  'autotask-trigger'?: YAutotask;
  'notify-config': {
    timeout?: number;
    message?: string;
    'message-subject'?: string;
    category?: YCategory;
    channels: YNotification[];
  };
  conditions?: {
    'min-scanner-count': number;
    severity?: 0 | 1 | 2 | 3 | 4 | 5;
    'alert-ids'?: string[];
  };
  'forta-node-id'?: string;
  'agent-ids'?: string[];
  'forta-last-processed-time'?: string;
  'risk-category': DefenderSubscriberRiskCategory;
};

export type YSentinel = YBlockSentinel | YFortaSentinel;

export type YContract = {
  name: string;
  address: string;
  network: Network;
  abi?: string | string[] | JsonFragment[];
  'nat-spec'?: string;
};

export type YSecret = {
  [k: string]: string;
};

export type TeamKey = {
  apiKey: string;
  apiSecret: string;
};

export type DeployResponse = {
  name: string;
  id: string;
  success: boolean;
  notice?: string;
  error?: string;
  [k: string]: any;
};

export type DeployOutput<T> = { removed: T[]; created: T[]; updated: T[] };

export type ListDefenderResources = {
  sentinels: DefenderSentinel[];
  autotasks: DefenderAutotask[];
  notifications: DefenderNotification[];
  categories: DefenderCategory[];
  contracts: DefenderContract[];
  relayerApiKeys: DefenderRelayerApiKey[];
  secrets: string[];
  deploymentConfigs: DefenderDeploymentConfig[];
  blockExplorerApiKeys: DefenderBlockExplorerApiKey[];
};

export type YDeploymentConfig = {
  relayer: YRelayer;
};

export type YBlockExplorerApiKey = {
  key: string;
  network: Network;
};
