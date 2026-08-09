---
title: "Giriş"
description: "Yedi Eylemli Dokümantasyon Modeli'nin var olma nedeni."
scope: "introduction"
---

Bence her teknik yazar bir noktada çalışmasını “insanlar ezelden beri böyle dokümante ediyor” düşüncesinden daha sistematik bir şeye dayandırma isteği duyar. Araç setleri ve çerçeveler içerik türleri sunar; *ne* yazmak istediğinizi bildiğinizde bu son derece değerlidir. Ancak işe *buradan başlamak*, yapacağınız işin yarısının vida çevirmek olduğunu bilmeden çekiç almaya benzer.

## Dokümantasyon çerçeveleri, araçları ve biçimleri yeterli değildir

Mevcut dokümantasyon çerçevelerinin çoğu, dokümanların *tüketicileri* olan kullanıcıların eylemleri yerine teknik yazarların eylemlerine odaklanır. Hangi kullanıcı ihtiyaçlarının karşılanması gerektiğini açıklamak yerine hangi dokümanların üretilmesi gerektiğine yönelik buyurgan vurgu, *elbette bir evin odaları olmalı, barbar mıyız biz* diye duvarlar ören bir mimari anlayışı andırır. Bu görünür esneklik eksikliği, ihtiyaç duyulan içeriği yazma isteğini azaltır.

Dokümantasyon çerçevelerini tasarlayanlardan bazıları bu sorunun farkındadır; kurallarının kelimesi kelimesine uygulanmaması ve gerçek dünyaya uyarlanırken esnekliğe yer bırakılması gerektiğini belirtmişlerdir. Bu çerçeveleri kullanan yazarlar da aynı ikilemle karşılaşmış ve çoğu zaman modelleri kendi kullanım durumlarına göre değiştirmiştir. Böylece çerçeveler, içinden şablonların ve fikirlerin seçildiği araç setlerine dönüşür. Ne var ki bu yaklaşım, neye ihtiyaç duyulduğu sorusunu cevapsız bırakır.

Az kaynak ve destekle hızla değişen ürünleri belgelemenin karmaşıklığıyla karşılaşan yazarlar, bulabildikleri her şeyi alıp işleyen bir süreç kurar. Dokümantasyona el atıp bu alana yaklaşırken kendini kaybolmuş hisseden mühendisleri ise dokümantasyon çerçeveleri çeker; çünkü programlama söz konusu olduğunda çalışmaya alışkın oldukları şey çerçevelerdir. Sonunda geliştirdikleri dokümanlar, etkili dokümantasyonun kargo kültü sürümüne dönüşür.

## Odağı içerik türlerinden kullanıcı ihtiyaçlarına kaydırmak

Bu durumun çözümü, odağı ne yazılması gerektiğinden hangi kullanıcı ihtiyaçlarının karşılanması gerektiğine kaydırmaktır. Bunun için önceden tanımlanmış yapısal kalıplara göre içerik üretmek yerine dokümantasyonun stratejik yönünü, yani içerik stratejisini sahiplenmek gerekir. Bu yaklaşım Diátaxis, DITA ve diğer dokümantasyon çerçeveleriyle tamamen uyumludur; doküman üreticilerine yön ve amaç sağlar, onlar da ellerindeki içerik türlerini, öğeleri ve araçları kullanır.

Çerçevelerin, araçların ve kullanıcı ihtiyacı modellerinin nasıl bir araya geldiğine dair düşüncemi bir sandviç benzetmesiyle daha iyi anlayabilirsiniz; özellikle de henüz öğle yemeği yemediyseniz. Dokümantasyon çerçeveleri ve araçları, sandviçi bir arada tutmak ve elde taşımak için gereken malzemelerdir. Fakat sandviçe bütün tadını ve anlamını veren iç malzemedir; yani izlediğiniz kullanıcı ihtiyaçları zihinsel modeli. Bu, örtüşebilseler de paydaşlardan gelen dış taleplerle *aynı şey değildir*. OKR'lar da olsa olsa sostur.

![Dokümantasyon sandviçi: üstte çerçeveler ve içerik türleri, ortada kullanıcı ihtiyaçları, altta biçimler ve araç zincirleri.](https://passo.uno/uploads/sandwich-2.jpg)

Başka bir deyişle, etkili dokümanlar oluşturmak için yalnızca araçlara ve içerik türlerine değil, dokümantasyonun bir ürün olarak karşılaması gereken ihtiyaçların ya da kullanıcıların dokümanlar aracılığıyla gerçekleştirmesi gereken eylemlerin modeline de ihtiyacınız vardır. Bu model, ürün tasarımı ve memnuniyete ilişkin kavramsal modellerin ayrıntılardan soyutlanması gibi, belgelediğiniz yazılım ürününün türünden büyük ölçüde bağımsız olmalıdır. Genel bir model hedeflemek gereklidir; çünkü uzmanların birlikte öğrenmesine ve iletişim kurmasına yardımcı olur.

Aşağıda, bugün dokümantasyon oluşturup düzenlerken izlediğim, kullanıcıların dokümantasyon ihtiyaçlarına ilişkin kendi *açıklayıcı* modelimi sunuyorum.

## Yedi Eylemli Dokümantasyon Modeli

Burada önerdiğim yaklaşım, *dokümanların karşılaması gereken kullanıcı eylemlerinin* modelidir. Model, UX araştırmasını ve dokümantasyon çerçevelerini iki noktaya odaklanan kavramsal ve işlevsel bir katmanla birleştirmeyi amaçlar: ürün olarak dokümantasyon ve kullanıcıların onun aracılığıyla gerçekleştirmesi gerekenler. Teknik dokümantasyonun *ne yapması gerektiğini* açıklama girişimidir. Dokümanları, birinin gerçek hedeflere ulaşmak için kullanacağı bir ürün olarak ele alır.

Söylediğim gibi, modelin merkezinde *eylemler* vardır. Dokümantasyon tüketicisinin dokümanları kullanırken ulaşmak isteyebileceği hedeflerin önemli bir bölümünü kapsadığını düşündüğüm yedi eylem belirledim. Bunlar, kullanıcıların farklı ürün ve alanlardaki dokümantasyonla etkileşiminde görülen yaygın kalıpları temsil eder: Değerlendir (Ayırt Et), Anla (Öğren), Keşfet (Bul), Pratik Yap (Alıştırma Yap), Hatırla (Anımsa), Geliştir (Entegre Et) ve Sorun Gider (Çöz).

Eylemlerin sıralaması bilinçlidir, ancak katı değildir. Eylemleri, tüketicilerin yazılım teknik dokümantasyonuna yaklaşımına dair düşüncemi aşağı yukarı yansıtan bir sıraya yerleştirdim. Bu eylemlerin farklı aşamalarda veya düzeylerde gerçekleştiğini düşünüyorum. Düzgün bir yedigen üzerine yerleştirildiklerinde üstteki eylemler ürünle etkileşimin ilk aşamalarında, alttakiler ise ürün bilgisi ve kullanım deneyimi yerleştiğinde gerçekleşme eğilimindedir.

## Sonuç

Burada sunduğum model, dokümantasyonu içerik türleri yerine kullanıcı ihtiyaçları merceğinden düşünmenin bir yolunu sunar. Mevcut çerçevelerin yerini almak için değil, onları tamamlamak için tasarlanmıştır. Birlikte kullanıldıklarında teknik yazarların yalnızca şablon doldurmak yerine hem yapısal açıdan sağlam hem de gerçek amaçlara hizmet eden dokümanlar oluşturmasını sağlarlar.

Model aynı zamanda [dokümantasyon metrikleri ve hedef belirleme](https://passo.uno/docs-observability-do11y/) (do11y) için temel olabilir. Ekipler yalnızca sayfa görüntüleme veya memnuniyet puanlarına odaklanmak yerine dokümantasyonun her eyleme ne kadar iyi hizmet ettiğini izleyebilir. Örneğin dokümanlardan ürünün benimsenmesine geçiş oranı değerlendirme etkinliğini, çözüme ulaşma süresi ise sorun giderme başarısını ölçebilir.

Teorik modellerde olduğu gibi bu model de kapsamlı araştırma veya faktör analiziyle desteklenmemektedir. Model OLDUĞU GİBİ dağıtılır ve öğle yemeğinizi mahvettiğim gerekçesiyle hiçbir koşulda beni sorumlu tutamazsınız. Yine de daha amaçlı dokümantasyon oluşturmak isteyen teknik yazarlara yararlı bir bakış açısı sunmasını umuyorum.

![Indiana Jones ile yedi dokümantasyon eyleminin yer aldığı piksel sanat tarzında bir kütüphane sahnesi.](https://passo.uno/uploads/indy.jpg)
