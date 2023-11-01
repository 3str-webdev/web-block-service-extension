export const createTab = (url: string) => {
  chrome.tabs.create({ url });
};

export type NetRule = chrome.declarativeNetRequest.Rule;
export const NetRuleActionType = chrome.declarativeNetRequest.RuleActionType;
export const NetRuleResourceType = chrome.declarativeNetRequest.ResourceType;

export const setNetRules = async (newRules: NetRule[]) => {
  const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
  const oldRuleIds = oldRules.map((rule) => rule.id);

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: oldRuleIds,
    addRules: newRules,
  });
};

export const setBrowserInterval = async (
  name: string,
  cb: () => void,
  timeout: number,
) => {
  await chrome.alarms.create(name, {
    delayInMinutes: timeout / 60 / 1000,
    periodInMinutes: timeout / 60 / 1000,
  });

  chrome.alarms.onAlarm.addListener((alarm) => {
    if (name === alarm.name) {
      cb();
    }
  });
};

export const addInstallListener = (cb: () => Awaited<void>) => {
  chrome.runtime.onInstalled.addListener(async ({ reason }) => {
    if (reason !== "install") {
      return;
    }

    cb();
  });
};
