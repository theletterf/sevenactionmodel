---
title: "七アクション・ドキュメント Skill"
description: "七アクションモデルでドキュメントを計画・改善するエージェント Skill をインストールします。"
---

Claude Code などの対応エージェントでこの Skill を使うと、読者が達成したいことを中心に技術ドキュメントの計画、執筆、監査、再構成を行えます。

## Claude Code へのインストール

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

すべてのプロジェクトで利用できるようにするには `--global` を追加します。この Skill は、ドキュメントの計画、執筆、監査、情報アーキテクチャ、成功指標を扱うときに有効になります。明示的に呼び出すこともできます。

```text
$seven-action-documentation を使って、オンボーディングドキュメントを監査してください。
```

この Skill は、読者の主要なアクションを特定し、有用なコンテンツタイプを選び、製品について事実を捏造することなく成果と指標を定義できるようエージェントを支援します。
