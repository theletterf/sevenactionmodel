---
title: "七行动文档 Skill"
description: "安装一个使用七行动模型规划和改进文档的智能体 Skill。"
---

将此 Skill 用于 Claude Code 或其他受支持的智能体，以围绕读者需要完成的任务来规划、撰写、审查和重构技术文档。

## 为 Claude Code 安装

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

添加 `--global` 可让它在所有项目中使用。此 Skill 会在文档规划、写作、审查、信息架构和成功指标等任务中激活。你也可以直接调用它：

```text
使用 $seven-action-documentation 审查我们的用户引导文档。
```

此 Skill 可以帮助智能体确定读者的主要行动、选择有用的内容类型，并在不虚构产品事实的前提下定义成果和衡量指标。
