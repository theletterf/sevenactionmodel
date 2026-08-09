---
title: "Wprowadzenie"
description: "Dlaczego powstał model dokumentacji oparty na siedmiu działaniach."
scope: "introduction"
---

Myślę, że każdy autor dokumentacji technicznej w pewnym momencie odczuwa potrzebę oparcia swojej pracy na czymś bardziej systematycznym niż „tak po prostu dokumentowano od zawsze”. Zestawy narzędzi i modele oferują rodzaje treści, co jest niezwykle cenne, gdy *wiesz*, co chcesz napisać. Jednak *zaczynanie* od nich przypomina kupowanie młotka bez świadomości, że połowa pracy będzie polegała na wkręcaniu śrub.

## Modele, narzędzia i formaty dokumentacji nie wystarczą

Większość istniejących modeli dokumentacji skupia się na działaniach autorów technicznych zamiast na działaniach użytkowników, czyli *odbiorców* dokumentacji. Nakazowy nacisk na to, jaką dokumentację trzeba stworzyć, zamiast opisu potrzeb użytkowników, przypomina sposób myślenia architekta, który buduje ściany, bo *oczywiście dom musi mieć pokoje — co z nas, barbarzyńcy*? Ta pozorna nieelastyczność zniechęca do pisania treści, które są naprawdę potrzebne.

Niektórzy twórcy modeli dokumentacji dostrzegają ten problem i zaznaczają, że ich zasad nie należy stosować dosłownie, a w świecie rzeczywistym można używać ich elastycznie. Autorzy korzystający z tych modeli także stanęli przed tym dylematem i w większości przypadków dostosowali je do własnych zastosowań. Modele stają się więc zestawami narzędzi, z których wybiera się szablony i pomysły. Taki wzorzec omija jednak pytanie o to, co jest potrzebne.

Wobec złożoności dokumentowania szybko zmieniających się produktów przy niewielkich zasobach i wsparciu autorzy biorą wszystko, co mogą, i budują z tego działający proces. Inżynierów, którzy próbują swoich sił w dokumentacji i czują się zagubieni, przyciągają natomiast modele dokumentacji, ponieważ w programowaniu są przyzwyczajeni do pracy z modelami i systemami. Dokumentacja, którą ostatecznie tworzą, staje się kargokultową wersją skutecznej dokumentacji.

## Przeniesienie uwagi z rodzajów treści na potrzeby użytkowników

Rozwiązaniem jest przeniesienie uwagi z tego, co należy napisać, na potrzeby użytkowników, którym należy odpowiedzieć. Wymaga to przejęcia odpowiedzialności za strategiczną stronę dokumentacji — czyli strategię treści — zamiast produkowania materiałów według z góry ustalonych wzorców strukturalnych. Takie podejście jest w pełni zgodne z modelami dokumentacji takimi jak Diataxis, DITA i inne, ponieważ daje twórcom dokumentacji kierunek i cel; następnie mogą oni korzystać z dostępnych rodzajów treści, elementów i narzędzi.

To, jak moim zdaniem łączą się modele, narzędzia i modele potrzeb użytkowników, najlepiej wyjaśnia metafora kanapki — zwłaszcza jeśli nie było jeszcze obiadu. Modele i narzędzia dokumentacji są składnikami niezbędnymi, by kanapka trzymała się razem i dała się wygodnie chwycić. Jednak cały smak i znaczenie nadaje jej nadzienie, czyli model mentalny potrzeb użytkowników, którym się kierujemy. To *nie* jest to samo co zewnętrzne prośby interesariuszy, choć czasem mogą się pokrywać. A skoro już o tym mowa, OKR-y są sosem.

![Kanapka dokumentacji: modele i rodzaje treści na górze, potrzeby użytkowników pośrodku, a formaty i łańcuchy narzędzi na dole.](https://passo.uno/uploads/sandwich-2.jpg)

Innymi słowy, aby tworzyć skuteczną dokumentację, potrzebujemy nie tylko narzędzi i rodzajów treści, lecz także modelu potrzeb, które dokumentacja ma zaspokajać jako produkt, lub działań, które użytkownicy mają dzięki niej wykonywać. Model ten powinien być w dużej mierze niezależny od rodzaju dokumentowanego oprogramowania, podobnie jak modele pojęciowe projektowania produktu i satysfakcji abstrahują od szczegółów. Dążenie do modelu ogólnego jest konieczne, ponieważ pomaga specjalistom wspólnie się uczyć i porozumiewać.

Poniżej przedstawiam własny *opisowy* model potrzeb użytkowników dokumentacji, którym obecnie kieruję się przy tworzeniu i porządkowaniu materiałów.

## Model dokumentacji oparty na siedmiu działaniach

Proponowane tutaj podejście jest modelem *działań użytkownika, które dokumentacja ma wspierać*. Model próbuje połączyć badania UX i modele dokumentacji z warstwą pojęciową i funkcjonalną skupioną na dwóch aspektach: dokumentacji jako produkcie oraz tym, co użytkownicy mają dzięki niej osiągnąć. Jest to próba opisania, co dokumentacja techniczna *powinna robić*. Oznacza traktowanie jej jako produktu, którego ktoś użyje do osiągnięcia rzeczywistych celów.

Jak wspomniałem, sednem modelu są *działania*. Wyróżniłem siedem, które moim zdaniem obejmują znaczną część celów odbiorcy dokumentacji. Reprezentują one typowe sposoby interakcji użytkowników z dokumentacją w różnych produktach i dziedzinach: Ocenić (Rozpoznać), Zrozumieć (Nauczyć się), Eksplorować (Odkrywać), Ćwiczyć (Trenować), Przypomnieć sobie (Przywołać), Rozwijać (Integrować) i Rozwiązywać problemy (Rozwiązać).

Kolejność działań jest celowa, lecz nie sztywna. Ułożyłem je w sekwencję, która mniej więcej odpowiada mojemu wyobrażeniu o tym, jak odbiorcy podchodzą do technicznej dokumentacji oprogramowania. Widzę te działania na różnych etapach lub poziomach. Gdy rozmieścimy je na foremnym siedmiokącie, działania u góry zwykle zachodzą na początkowych etapach interakcji z produktem, a te u dołu — gdy wiedza o produkcie i doświadczenie w korzystaniu z niego są już utrwalone.

## Podsumowanie

Przedstawiony tutaj model pozwala myśleć o dokumentacji przez pryzmat potrzeb użytkownika zamiast rodzajów treści. Nie ma zastępować istniejących modeli, lecz je uzupełniać. Stosowane razem pozwalają autorom technicznym tworzyć dokumentację, która ma zarówno solidną strukturę, jak i rzeczywisty cel, zamiast jedynie wypełniać szablony.

Model może również służyć jako podstawa [metryk dokumentacji i wyznaczania celów](https://passo.uno/docs-observability-do11y/) (do11y). Zamiast skupiać się wyłącznie na liczbie odsłon lub ocenach satysfakcji, zespoły mogą śledzić, jak dobrze dokumentacja wspiera każde działanie. Na przykład konwersja z dokumentacji do wdrożenia produktu może mierzyć skuteczność oceny, a czas do rozwiązania — skuteczność rozwiązywania problemów.

Jak bywa z modelami teoretycznymi, ten nie jest poparty rozległymi badaniami ani analizą czynnikową. Jest rozpowszechniany W STANIE, W JAKIM JEST, i pod żadnym pozorem nie można obarczać mnie odpowiedzialnością za zepsuty obiad. Mam jednak nadzieję, że zaoferuje autorom technicznym użyteczną perspektywę, dzięki której będą tworzyć dokumentację o wyraźniejszym celu.

![Pikselowa scena w bibliotece z Indianą Jonesem i siedmioma działaniami dokumentacji.](https://passo.uno/uploads/indy.jpg)
