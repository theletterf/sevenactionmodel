---
title: "七アクション・ドキュメントスキル"
description: "七アクションモデルでドキュメントを計画・改善するエージェントスキルをインストールします。"
---

Claude Code などの対応エージェントでこのスキルを使うと、読者が達成したいことを中心に技術ドキュメントの計画、執筆、監査、再構成を行えます。

## Claude Code へのインストール

```sh
npx skills add theletterf/sevenactionmodel --skill seven-action-documentation --agent claude-code
```

すべてのプロジェクトで利用するには `--global` を追加します。ドキュメントの計画、執筆、監査、情報アーキテクチャ、成功指標の検討で自動的に使われます。`$seven-action-documentation` として明示的に呼び出すこともできます。
