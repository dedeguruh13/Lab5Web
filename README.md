# Lab5Web — Praktikum 5: JavaScript Dasar dan Manipulasi HTML

**Nama:** Guruh Khaerullah Kusvhi  
**NIM:** 312310630  
**Kelas:** I231C — Teknik Informatika  
**Mata Kuliah:** Pemrograman Web (Pertemuan 6)

---

## Cara Menjalankan

1. Clone repository ini, lalu buka folder `lab5_javascript`.
2. Buka `index.html` di browser (atau gunakan ekstensi Live Server di VS Code).
3. Buka Console melalui klik kanan → **Inspect/Periksa** → tab **Console**.
4. Tekan tombol pada setiap bagian latihan untuk menjalankannya.

---

## C. Dasar Teori (Penerapan)

Kerangka HTML dari bagian C digunakan sebagai dasar `index.html`. JavaScript dipisahkan ke berkas eksternal `script.js` dan dihubungkan dengan `<script src="script.js"></script>` yang diletakkan menjelang akhir `<body>`, sehingga seluruh elemen HTML sudah tersedia ketika script dijalankan. Contoh output (`console.log`, `alert`, `prompt`, `textContent`), variabel, operator, function, percabangan, perulangan, dan DOM dari bagian C diterapkan langsung pada latihan di bagian E.

## D. Persiapan Praktikum

1. Membuat folder kerja `lab5_javascript`.
2. Membuat file `index.html` dan `script.js` di dalam folder tersebut.
3. Menyalin kerangka HTML dari bagian C dan menghubungkan `script.js`.
4. Menjalankan `index.html` di browser dan membuka Console.
5. Mengerjakan latihan secara berurutan dan menyimpan screenshot di folder `screenshots/`.

Latihan yang memakai `prompt()` dan `alert()` (Latihan 2, 4, 5, dan Eksperimen 1) dibungkus dalam function dan dijalankan melalui tombol, agar dialog tidak muncul beruntun saat halaman pertama kali dibuka.

---

## E. Langkah Kerja Praktikum

### Latihan 1 — Menampilkan output

```js
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");
```

![Latihan 1](lab5_javascript/screenshots/01_latihan1_output.png)

**Perbedaan output:** `textContent` mengubah isi paragraf `#pesan` sehingga "Hello World" terlihat langsung oleh pengguna di halaman. `console.log()` hanya menulis ke Console browser dan tidak terlihat di halaman; biasanya dipakai untuk debugging.

### Latihan 2 — Alert dan prompt

| Pengujian | Perilaku program |
|---|---|
| Nama diisi ("Guruh") | Muncul alert "Halo, Guruh!" dan paragraf berubah menjadi "Selamat datang, Guruh." |
| Menekan Cancel | `prompt()` mengembalikan `null`, muncul alert "Nama belum diisi." |
| Input dikosongkan | Nilai berupa string kosong, muncul alert "Nama belum diisi." |

![Latihan 2 - nama diisi](lab5_javascript/screenshots/02a_latihan2_nama_diisi.png)
![Latihan 2 - cancel](lab5_javascript/screenshots/02b_latihan2_cancel.png)
![Latihan 2 - kosong](lab5_javascript/screenshots/02c_latihan2_kosong.png)

### Latihan 3 — Function dan operasi aritmetika

`operasiDasar(9, 4)` menghasilkan: Penjumlahan 13, Pengurangan 5, Perkalian 36, Pembagian 2.25, Modulus 1.

![Latihan 3](lab5_javascript/screenshots/03_latihan3_operasi_dasar.png)

### Latihan 4 — Seleksi kondisi if–else

Input dari `prompt()` berupa string, sehingga dikonversi dengan `Number()` sebelum dibandingkan.

| Input | Hasil |
|---|---|
| 76 | Lulus |
| 45 | Belum lulus |
| abc | Input nilai tidak valid. |

![Latihan 4 - lulus](lab5_javascript/screenshots/04a_lulus_latihan4.png)
![Latihan 4 - belum lulus](lab5_javascript/screenshots/04b_belum_lulus_latihan4.png)
![Latihan 4 - tidak valid](lab5_javascript/screenshots/04c_tidak_valid_latihan4.png)

### Latihan 5 — Seleksi kondisi switch

| Input | Hasil |
|---|---|
| 3 | Bilangan tiga |
| 9 | Pilihan tidak tersedia (masuk `default`) |

![Latihan 5 - angka 3](lab5_javascript/screenshots/05a_angka3_latihan5.png)
![Latihan 5 - angka 9](lab5_javascript/screenshots/05b_angka9_latihan5.png)

### Latihan 6 — Form bilangan genap atau ganjil

| Input | Hasil |
|---|---|
| 8 (positif) | Bilangan genap |
| -7 (negatif) | Bilangan ganjil |
| 0 (nol) | Bilangan genap |
| 2.5 (desimal) | Masukkan bilangan bulat yang valid. |
| (kosong) | Masukkan bilangan bulat yang valid. |

![Latihan 6 - positif](lab5_javascript/screenshots/06a_positif_latihan6.png)
![Latihan 6 - negatif](lab5_javascript/screenshots/06b_negatif_latihan6.png)
![Latihan 6 - nol](lab5_javascript/screenshots/06c_nol_latihan6.png)
![Latihan 6 - desimal](lab5_javascript/screenshots/06d_desimal_latihan6.png)
![Latihan 6 - kosong](lab5_javascript/screenshots/06e_kosong_latihan6.png)

### Latihan 7 — Mengubah warna halaman

Satu function `ubahWarnaLatar(warna)` dipakai oleh tiga tombol dengan parameter berbeda.

![Latihan 7 - hijau](lab5_javascript/screenshots/07a_hijau_latihan7.png)
![Latihan 7 - kuning](lab5_javascript/screenshots/07b_kuning_latihan7.png)
![Latihan 7 - putih](lab5_javascript/screenshots/07c_putih_latihan7.png)

### Latihan 8 — DOM dan checkbox menu makanan

Memilih Ayam Goreng (Rp5.000) dan Telur Dadar (Rp2.500) menghasilkan total Rp7.500. Total diperbarui otomatis melalui event listener `change`.

![Latihan 8](lab5_javascript/screenshots/08_latihan8_menu.png)

---

## F. Mini Project — Kalkulator Nilai Mahasiswa

Rumus: Nilai akhir = Tugas × 30% + UTS × 30% + UAS × 40%. Proses perhitungan (`hitungNilaiAkhir`, `tentukanPredikat`) dipisahkan dari tampilan hasil (`tampilkanHasilNilai`, `tampilkanErrorNilai`). Setiap komponen divalidasi tidak boleh kosong dan harus berada pada rentang 0–100.

| Skenario | Tugas | UTS | UAS | Nilai Akhir | Predikat | Status |
|---|---|---|---|---|---|---|
| 1 | 85 | 78 | 88 | 84.10 | B | Lulus |
| 2 | 60 | 55 | 58 | 57.70 | D | Belum lulus |
| 3 | 90 | 92 | 95 | 92.60 | A | Lulus |
| 4 | 120 | 78 | -5 | — | — | Pesan error rentang 0–100 |

![Mini project - skenario 1](lab5_javascript/screenshots/09a_skenario1_miniproject.png)
![Mini project - skenario 2](lab5_javascript/screenshots/09b_skenario2_miniproject.png)
![Mini project - skenario 3](lab5_javascript/screenshots/09c_skenario3_miniproject.png)
![Mini project - tidak valid](lab5_javascript/screenshots/09d_tidak_valid_miniproject.png)

---

## G. Eksperimen Mandiri

**1. Latihan 3 dengan input dari prompt.** Dua nilai diminta lewat `prompt()`, dikonversi dengan `Number()`, lalu diproses `operasiDasar()`. Input 15 dan 6 menghasilkan 21, 9, 90, 2.5, dan 3.

![Eksperimen 1](lab5_javascript/screenshots/10a_eksperimen1_prompt.png)

**2. Tabel perkalian 7 (1–10)** menggunakan perulangan `for`, ditampilkan di halaman dan Console.

![Eksperimen 2](lab5_javascript/screenshots/10b_eksperimen2_tabel7.png)

**3. Function `cekGenap(angka)`** mengembalikan `true` jika `angka % 2 === 0`. Hasil uji: 4 → true, 7 → false, 0 → true, -10 → true.

![Eksperimen 3](lab5_javascript/screenshots/10c_eksperimen3_cekgenap.png)

**4. Validasi form tidak boleh kosong** diterapkan pada form Mini Project. Jika hanya nilai tugas yang diisi, muncul pesan bahwa nilai UTS dan UAS tidak boleh kosong.

![Eksperimen 4](lab5_javascript/screenshots/10d_eksperimen4_kolom_kosong.png)

**5. Latihan 8 dengan tambahan menu** Es Teh Manis (Rp3.000) dan Nasi Putih (Rp4.000). Memilih Ayam Goreng, Es Teh Manis, dan Nasi Putih menghasilkan total Rp12.000.

![Eksperimen 5](lab5_javascript/screenshots/10e_eksperimen5_menu_tambahan.png)

**6. Tombol menyembunyikan/menampilkan elemen** dengan mengubah `style.display` antara `none` dan `block`.

![Eksperimen 6 - sebelum](lab5_javascript/screenshots/10f_eksperimen6_sebelum.png)
![Eksperimen 6 - disembunyikan](lab5_javascript/screenshots/10g_eksperimen6_disembunyikan.png)

---

## H. Pertanyaan dan Tugas

**1. Perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`**

- `console.log()` menampilkan data di Console browser, tidak terlihat oleh pengguna di halaman; dipakai untuk debugging.
- `alert()` menampilkan kotak dialog berisi pesan dan tombol OK, serta menghentikan eksekusi sampai ditutup.
- `prompt()` menampilkan dialog dengan kolom input dan mengembalikan teks yang diketik (string), atau `null` jika pengguna menekan Cancel.
- `textContent` dan `innerHTML` mengubah isi elemen di halaman. `textContent` memperlakukan isi sebagai teks biasa, sedangkan `innerHTML` membaca isi sebagai HTML sehingga tag seperti `<b>` akan dirender.

**2. Perbedaan `let` dan `const`**

`let` digunakan untuk variabel yang nilainya dapat ditetapkan ulang, sedangkan `const` untuk variabel yang tidak dapat ditetapkan ulang setelah dideklarasikan. Keduanya bersifat block scope.

```js
let umur = 20;
umur = 21;            // boleh

const nama = "Rani";
nama = "Budi";        // error: Assignment to constant variable
```

**3. Perbedaan `==` dan `===`**

`==` membandingkan nilai setelah melakukan konversi tipe otomatis, sedangkan `===` membandingkan nilai dan tipe data tanpa konversi.

```js
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

**4. Fungsi `if–else` dan `switch`**

`if–else` menjalankan blok kode berdasarkan kondisi logis, cocok untuk pengujian rentang atau kondisi kompleks (contoh: nilai ≥ 60 dinyatakan lulus). `switch` memilih satu tindakan dari sejumlah nilai pasti yang mungkin, cocok untuk pilihan menu atau angka 1–5. `break` mencegah eksekusi berlanjut ke `case` berikutnya, dan `default` dijalankan jika tidak ada `case` yang cocok.

**5. Fungsi parameter dan `return` dalam function**

Parameter adalah variabel penerima data masukan saat function dipanggil, sehingga function dapat dipakai untuk data yang berbeda. `return` mengembalikan hasil proses ke pemanggil sekaligus menghentikan eksekusi function.

```js
function hitungLuas(panjang, lebar) {   // panjang, lebar = parameter
  return panjang * lebar;               // hasil dikembalikan
}
const luas = hitungLuas(8, 4);          // luas = 32
```

**6. Cara `document.getElementById()` memilih elemen HTML**

Method ini mencari elemen pada DOM yang memiliki atribut `id` sesuai argumen, lalu mengembalikan elemen tersebut sebagai objek (atau `null` jika tidak ditemukan). Objek itu kemudian dapat dibaca atau diubah konten, atribut, dan gayanya.

```js
// <p id="pesan">Konten awal.</p>
const el = document.getElementById("pesan");
el.textContent = "Halo, JavaScript!";
el.style.color = "blue";
```

**7. Script validasi form (nama tidak kosong, nilai 0–100)**

```html
<label for="namaMhs">Nama:</label>
<input type="text" id="namaMhs">
<label for="nilaiMhs">Nilai (0–100):</label>
<input type="number" id="nilaiMhs">
<button type="button" onclick="validasiForm()">Kirim</button>
<p id="hasilValidasi"></p>
```

```js
function validasiForm() {
  const nama = document.getElementById("namaMhs").value;
  const teksNilai = document.getElementById("nilaiMhs").value;
  const nilai = Number(teksNilai);
  const hasil = document.getElementById("hasilValidasi");

  if (nama.trim() === "") {
    hasil.textContent = "Nama tidak boleh kosong.";
  } else if (teksNilai.trim() === "" || Number.isNaN(nilai) || nilai < 0 || nilai > 100) {
    hasil.textContent = "Nilai harus berada pada rentang 0–100.";
  } else {
    hasil.textContent = "Data valid: " + nama + " dengan nilai " + nilai + ".";
  }
}
```

![Tugas 7 - nama kosong](lab5_javascript/screenshots/11a_tugas7_nama_kosong.png)
![Tugas 7 - nilai di luar rentang](lab5_javascript/screenshots/11b_tugas7_nilai_salah.png)
![Tugas 7 - valid](lab5_javascript/screenshots/11c_tugas7_valid.png)

---

## I. Laporan Praktikum dan Pengumpulan

1. Membuat repository baru bernama **Lab5Web**.
2. Mengerjakan latihan sesuai urutan dan menyimpan `index.html` serta `script.js`.
3. Mengambil screenshot setiap latihan di folder `screenshots/`.
4. Membuat README.md ini.
5. Commit dan push ke repository:

```bash
git init
git add .
git commit -m "Praktikum 5: JavaScript dasar dan manipulasi HTML"
git branch -M main
git remote add origin https://github.com/<username>/Lab5Web.git
git push -u origin main
```

6. Mengirim URL repository melalui e-learning/ecampus.

## Referensi

1. Flanagan, D. (2020). *JavaScript: The Definitive Guide* (7th ed.). O'Reilly Media.
2. MDN Web Docs. JavaScript Guide. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
3. RPS Mata Kuliah Pemrograman Web, Pertemuan 6.
