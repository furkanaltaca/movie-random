# 🎬 Movie Random

**Movie Random**, kullanıcıya rastgele bir film öneren mobil uygulamadır. React Native (Expo) ile geliştirilmiştir. Uygulama, TMDB (The Movie Database) açık erişimli API'sini kullanarak anlık film verilerini çeker ve kullanıcıya anlamlı bir film keşif deneyimi sunar.

---

## 📱 Uygulama Amacı

Bu uygulama, kararsız kalan kullanıcıların "ne izlesem?" sorusuna hızlı bir şekilde yanıt bulmalarını sağlar. Kullanıcıya her seferinde rastgele bir film sunar, dilerse bu filmi favorilerine ekleyebilir ve daha sonra tekrar erişebilir.

---

## 🧭 Sayfa Yapısı

### 1. **Ana Sayfa (Home)**
- Uygulama açıldığında otomatik olarak rastgele bir film gösterilir.
- Kullanıcı "🎬 Rastgele Film Getir" butonuna basarak yeni bir film getirebilir.
- "❤️ Favorilere Ekle / ❌ Favorilerden Çıkar" butonu ile film favorilere eklenebilir/çıkarılabilir.
- Film afişine tıklanınca detay sayfasına geçilir.

### 2. **Favoriler Sayfası (Favorites)**
- Kullanıcının favorilere eklediği tüm filmler listelenir.
- Her film afişine tıklayarak detay sayfasına gidilebilir.
- "❌ Favorilerden Kaldır" butonuyla film favorilerden silinir.

### 3. **Detay Sayfası (Details)**
- Seçilen film hakkında ayrıntılı bilgiler görüntülenir.
- Afiş, açıklama, yayın tarihi ve puanı yer alır.
- Buradan da favori ekleme/çıkarma yapılabilir.

---

## 🌐 Kullanılan API

**TMDB (The Movie Database) API**  
🔗 https://www.themoviedb.org/documentation/api

- `discover/movie` endpoint’i ile rastgele sayfa ve film çekme
- `with_original_language` ile Türkçe ve İngilizce film filtreleme

API Key açık olarak paylaşılmamalıdır, bu yüzden `.env` dosyasına taşınabilir.

---

## ⚙️ Teknik Özellikler

| Özellik                             | Açıklama                                        |
|-------------------------------------|-------------------------------------------------|
| 📱 Platform                         | React Native (Expo)                             |
| 📡 API                              | TMDB (The Movie Database)                       |
| 🔍 Navigation                       | React Navigation (Stack + Bottom Tab)           |
| 📦 State Management                 | Context API                                     |
| 📃 Listeleme                        | FlatList                                        |
| 🎨 Tasarım                          | SafeAreaView + StyleSheet + Icons               |
| 💾 Favori sistemi                   | Global state üzerinden yönetilir                |
| 📁 Atomic Design                    | Atoms / Molecules / Screens ayrımıyla modüler yapı |

---

## 🧪 Projeyi Çalıştırma

### Gerekli Kurulumlar:
- Node.js
- Expo CLI (global):  
  ```bash
  npm install -g expo-cli
- Reponun klonunu almak için:  
  ```bash
  git clone https://github.com/furkanaltaca/movie-random.git
  cd movie-random
- Bağımlılıkları yüklemek için:  
  ```bash
  npm install
- Uygulamayı çalıştırmak için:  
  ```bash
  npx expo start

## 📌 Not
  Bu proje, Yıldız Teknik Üniversitesi Bilgisayar ve Öğretim Teknolojileri Öğretmenliği Bölümü Mobil Programlama dersi kapsamında geliştirilmiştir.


