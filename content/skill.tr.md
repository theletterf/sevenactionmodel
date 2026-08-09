---
title: "Yedi Eylemli Dokümantasyon skill'i"
description: "Yedi Eylem Modeli ile dokümantasyon planlamak ve geliştirmek için bir ajan skill'i yükleyin."
---

Teknik dokümantasyonu okurların gerçekleştirmesi gereken şeyler etrafında planlamak, yazmak, denetlemek ve yeniden yapılandırmak için bu skill'i Claude Code veya desteklenen başka bir ajanla kullanın.

## Claude Code için yükleme

```sh
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

Her projede kullanılabilmesi için `--global` ekleyin. Skill; dokümantasyon planlama, yazma, denetim, bilgi mimarisi ve başarı metrikleri çalışmalarında etkinleşir. Doğrudan da çağırabilirsiniz:

```text
Onboarding dokümanlarımızı denetlemek için $seven-action-documentation kullan.
```

Skill, ürün hakkında bilgi uydurmadan ajanın okurun temel eylemini belirlemesine, yararlı içerik türlerini seçmesine ve bir sonuç ile ölçüm tanımlamasına yardımcı olur.
