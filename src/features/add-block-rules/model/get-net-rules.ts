import {
  BlockItemDto,
  BlockItemDtoType,
  blockListControllerGetList,
} from "@/shared/api/generated";
import { NetRule, NetRuleResourceType } from "@/shared/lib/browser";
import { NetRuleActionType } from "../../../shared/lib/browser";

export const getNetRules = async () => {
  const blockList = await blockListControllerGetList();

  const getRuleCondition = (item: BlockItemDto) => {
    if (item.data.startsWith("regexp:")) {
      return {
        regexFilter: item.data.replace("regexp:", ""),
        resourceTypes: [NetRuleResourceType.MAIN_FRAME],
      };
    }

    return {
      urlFilter: item.data,
      resourceTypes: [NetRuleResourceType.MAIN_FRAME],
    };
  };

  return blockList.items
    .filter((item) => item.type === BlockItemDtoType.Website)
    .map(
      (item): NetRule => ({
        id: item.id,
        action: { type: NetRuleActionType.BLOCK },
        condition: getRuleCondition(item),
      }),
    );
};
