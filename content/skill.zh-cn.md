---
title: "七行动文档技能"
description: "安装一个使用七行动模型规划和改进文档的智能体技能。"
---

将此技能用于 Claude Code 或其他受支持的智能体，以围绕读者需要完成的任务来规划、撰写、审查和重构技术文档。

## 为 Claude Code 安装

```sh
npx skills add theletterf/sevenactionmodel --skill seven-action-documentation --agent claude-code
```

添加 `--global` 可在所有项目中使用。它会在文档规划、写作、审查、信息架构和成功指标任务中自动触发；也可使用 `$seven-action-documentation` 显式调用。
