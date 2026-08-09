---
title: "일곱 가지 행동 문서화 Skill"
description: "일곱 가지 행동 모델로 문서를 계획하고 개선하는 에이전트 Skill을 설치하세요."
---

Claude Code 또는 지원되는 다른 에이전트에서 이 Skill을 사용해 독자가 달성하려는 일을 중심으로 기술 문서를 계획하고, 작성하고, 감사하고, 재구성할 수 있습니다.

## Claude Code에 설치하기

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

모든 프로젝트에서 사용할 수 있게 하려면 `--global`을 추가하세요. 이 Skill은 문서 기획, 작성, 감사, 정보 아키텍처, 성공 지표 관련 작업에서 자동으로 활성화됩니다. 직접 호출할 수도 있습니다.

```text
$seven-action-documentation을 사용해 온보딩 문서를 감사해 줘.
```

이 Skill은 제품에 관한 사실을 지어내지 않으면서 에이전트가 독자의 주요 행동을 파악하고, 유용한 콘텐츠 유형을 선택하며, 결과와 측정 방법을 정의하도록 돕습니다.
