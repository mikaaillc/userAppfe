# Proje Özeti: Kullanıcı Yönetimi Uygulaması

Bu proje, Angular'ın en son özelliklerini kullanarak modern, reaktif ve görsel olarak çekici bir kullanıcı yönetimi uygulaması oluşturmayı amaçlamaktadır. Uygulama, kullanıcıları listelemek, eklemek, düzenlemek ve silmek için temel CRUD işlevlerini içerir.

## Uygulanan Özellikler (Aşama 1 & 2)

- **Standalone Mimarisi:** Tüm bileşenler, modül ihtiyacını ortadan kaldıran `standalone` olarak oluşturulmuştur.
- **Sinyal Tabanlı Durum Yönetimi:** Bileşen durumu, Angular'ın modern sinyalleri (`signal`) kullanılarak yönetilmektedir.
- **OnPush Değişiklik Algılama:** Performansı optimize etmek için tüm bileşenlerde `ChangeDetectionStrategy.OnPush` kullanılmaktadır.
- **Modern Kontrol Akışı:** Şablonlarda `@if` ve `@for` gibi yerleşik kontrol akışı sözdizimi kullanılmaktadır.
- **Angular Material Entegrasyonu:** Kullanıcı arayüzü, `MatTable`, `MatButton`, `MatFormField` gibi Angular Material bileşenleriyle oluşturulmuştur.
- **Kullanıcı Listesi:** `UserListComponent`, mevcut tüm kullanıcıları bir tabloda görüntüler.
- **Kullanıcı Formu:** `UserFormComponent`, reaktif formlar kullanarak yeni kullanıcılar oluşturmak ve mevcut olanları düzenlemek için bir arayüz sağlar.
- **Servis Katmanı:** `UserService`, kullanıcı verilerini yönetmek ve sahte bir API ile etkileşim kurmak için kullanılır.
- **Yönlendirme:** `app.routes.ts` içinde kullanıcı listesi ve form sayfaları için rotalar yapılandırılmıştır.

## Mevcut Aşama Planı (Aşama 3): UI/UX İyileştirmesi

1.  **Global Stil İyileştirmeleri:** Uygulama genelinde modern bir koyu tema ve tipografi tanımlanacaktır.
2.  **Ana Başlık (Header) Bileşeni Oluşturma:** Uygulama için yeniden kullanılabilir bir başlık bileşeni eklenecektir.
3.  **Bileşen Stillerini İyileştirme:** Mevcut bileşenlerin stilleri, yeni tasarımla uyumlu olacak şekilde güncellenecektir.
4.  **Animasyonlar Ekleme:** Kullanıcı deneyimini zenginleştirmek için sayfa geçişlerine ve öğe girişlerine animasyonlar eklenecektir.
