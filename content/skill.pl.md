---
title: "Skill modelu dokumentacji opartego na siedmiu działaniach"
description: "Zainstaluj skill agenta do planowania i ulepszania dokumentacji za pomocą modelu siedmiu działań."
---

Używaj tego skilla z Claude Code lub innym obsługiwanym agentem, aby planować, pisać, audytować i przebudowywać dokumentację techniczną wokół tego, co czytelnicy mają dzięki niej osiągnąć.

## Instalacja w Claude Code

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

Dodaj `--global`, aby skill był dostępny w każdym projekcie. Uruchamia się przy planowaniu i pisaniu dokumentacji, audytach, projektowaniu architektury informacji oraz definiowaniu metryk sukcesu. Można go również wywołać bezpośrednio:

```text
Użyj $seven-action-documentation, aby przeprowadzić audyt naszej dokumentacji wdrożeniowej.
```

Skill pomaga agentowi określić główne działanie czytelnika, wybrać przydatne rodzaje treści oraz zdefiniować rezultat i sposób jego pomiaru bez wymyślania faktów o produkcie.
