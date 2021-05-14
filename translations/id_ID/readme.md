# Principles of Writing Consistent, Idiomatic JavaScript


## This is a living document and new ideas for improving the code around us are always welcome. Contribute: fork, clone, branch, commit, push, pull request.

* Rick Waldron [@rwaldron](http://twitter.com/rwaldron), [github](https://github.com/rwaldron)
* Mathias Bynens [@mathias](http://twitter.com/mathias), [github](https://github.com/mathiasbynens)
* Schalk Neethling [@ossreleasefeed](http://twitter.com/ossreleasefeed), [github](https://github.com/ossreleasefeed/)
* Kit Cambridge  [@kitcambridge](http://twitter.com/kitcambridge), [github](https://github.com/kitcambridge)
* Raynos  [github](https://github.com/Raynos)
* Matias Arriola [@MatiasArriola](https://twitter.com/MatiasArriola), [github](https://github.com/MatiasArriola/)
* John Fischer [@jfroffice](https://twitter.com/jfroffice), [github](https://github.com/jfroffice/)
* Idan Gazit [@idangazit](http://twitter.com/idangazit), [github](https://github.com/idan)
* Leo Balter [@leobalter](http://twitter.com/leobalter), [github](https://github.com/leobalter)
* Breno Oliveira [@garu_rj](http://twitter.com/garu_rj), [github](https://github.com/garu)
* Leo Beto Souza [@leobetosouza](http://twitter.com/leobetosouza), [github](https://github.com/leobetosouza)
* Ryuichi Okumura [@okuryu](http://twitter.com/okuryu), [github](https://github.com/okuryu)
* Pascal Precht [@PascalPrecht](http://twitter.com/PascalPrecht), [github](https://github.com/pascalprecht)
* EngForDev [engfordev](http://www.opentutorials.org/course/167/1363) - Hwan Min Hong / MinTaek Kwon [@leoinsight](http://twitter.com/leoinsight) / Tw Shim [@marocchino](http://twitter.com/marocchino), [github](https://github.com/marocchino) / Nassol Kim [@nassol99](http://twitter.com/nassol99), [github](https://github.com/nassol) / Juntai Park [@rkJun](http://twitter.com/rkJun), [github](https://github.com/rkJun) / Minkyu Shim / Gangmin Won / Justin Yoo [@justinchronicle](http://twitter.com/justinchronicle) / Daeyup Lee
* Marco Trulla [@marcotrulla](http://twitter.com/marcotrulla), [github](https://github.com/Ragnarokkr)
* Alex Navasardyan [@alexnavasardyan](http://twitter.com/alexnavasardyan), [github](https://github.com/2k00l)
* Mihai Paun [@mihaipaun](http://twitter.com/mihaipaun), [github](https://github.com/mihaipaun)
* Evgeny Mandrikov [@\_godin\_](http://twitter.com/_godin_), [github](https://github.com/Godin)
* Sofish Lin [@sofish](http://twitter.com/sofish), [github](https://github.com/sofish)
* Дејан Димић [@dejan_dimic](http://twitter.com/dejan_dimic), [github](https://github.com/rubystream)
* Miloš Gavrilović [@gavrisimo](http://twitter.com/gavrisimo), [github](https://github.com/gavrisimo)
* Firede [@firede](https://twitter.com/firede) [github](https://github.com/firede)
* monkadd [github](https://github.com/monkadd)
* Stephan Lindauer [@stephanlindauer](http://twitter.com/stephanlindauer), [github](https://github.com/stephanlindauer)
* Thomas P [@dragon5689](https://twitter.com/dragon5689) [github](https://github.com/dragon5689)
* Yotam Ofek [@yotamofek](https://twitter.com/yotamofek) [github](https://github.com/yotamofek)
* Aleksandr Filatov [@greybax](http://twitter.com/greybax), [github](https://github.com/greybax)
* Duc Nguyen [@ducntq](https://twitter.com/ducntq), [github](https://github.com/ducntq)
* James Young [@jamsyoung](http://twitter.com/jamsyoung), [github](https://github.com/jamsyoung)
* Hao-Wei Jeng [@l0ckys](http://twitter.com/l0ckys), [github](https://github.com/lockys)  
* Richard Gibson [@gibson042](http://twitter.com/gibson042), [github](https://github.com/gibson042)  
* Fesuy [github](https://github.com/fesuydev)  
* Stephane Moreau [github](https://github.com/stmoreau)  
* Boris Nekezov [github](https://github.com/boris-nekezov)  
* Akshat Joshi [@akshat_joshi](http://twitter.com/akshat_joshi), [github](https://https://github.com/akshatjoshii)


## Semua kode dalam kode-base akan terlihat seperti satu orang mengetik itu, tidak peduli berapa banyak orang memberikan kontribusi.

### Daftar berikut menguraikan praktik yang digunakan dalam semua kode milik penulis asli; kontribusi untuk proyek-proyek yang saya buat harus mengikuti panduan ini.

### Saya tidak berniat untuk memaksakan preferensi gaya saya pada kode orang lain atau proyek; jika gaya umum sudah ada, itu harus dihormati.


> ### "Arguments over style are pointless. There should be a style guide, and you should follow it"
>_Rebecca_ _Murphey_

&nbsp;

> ### "Part of being a good steward to a successful project is realizing that writing code for yourself is a Bad Idea™. If thousands of people are using your code, then write your code for maximum clarity, not your personal preference of how to get clever within the spec."
>_Idan_ _Gazit_


## Translations

* [ORIGINAL](https://github.com/rwldrn/idiomatic.js/)
* [Bulgarian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/bg_BG)
* [German](https://github.com/rwldrn/idiomatic.js/tree/master/translations/de_DE)
* [French](https://github.com/rwldrn/idiomatic.js/tree/master/translations/fr_FR)
* [Spanish](https://github.com/rwldrn/idiomatic.js/tree/master/translations/es_ES)
* [Portuguese - Brazil](https://github.com/rwldrn/idiomatic.js/tree/master/translations/pt_BR)
* [Korean](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ko_KR)
* [日本語](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ja_JP)
* [Italian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/it_IT)
* [Russian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ru_RU)
* [Romanian](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ro_RO)
* [简体中文](https://github.com/rwldrn/idiomatic.js/tree/master/translations/zh_CN)
* [Serbian - cyrilic alphabet](https://github.com/rwldrn/idiomatic.js/tree/master/translations/ср_СР)
* [Serbian - latin alphabet](https://github.com/rwldrn/idiomatic.js/tree/master/translations/sr_SR)
* [繁體中文](https://github.com/rwaldron/idiomatic.js/tree/master/translations/zh_TW)  
* [Indonesian](https://github.com/rwaldron/idiomatic.js/tree/master/translations/id_ID)  
* [Greek](https://github.com/rwaldron/idiomatic.js/tree/master/translations/gr_GR)
* [Hindi](https://github.com/rwaldron/idiomatic.js/tree/master/translations/hi_HI)  

## Penting, Non-idiomatic Stuff:

### Code Quality Tools, Resources dan Referensi

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
 * [Plato](https://github.com/es-analysis/plato)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [Codepen](http://codepen.io/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)
 * [eslint](http://eslint.org/)
 * [jscs](https://www.npmjs.org/package/jscs)
 * [jscodesniffer](https://www.npmjs.org/package/jscodesniffer)
 * [Editorconfig](http://editorconfig.org/)
 * [Hound](https://houndci.com/)

## Ayo Pintar

### [Annotated ECMAScript 5.1](http://es5.github.com/)
### [EcmaScript Language Specification, 5.1 Edition](http://ecma-international.org/ecma-262/5.1/)

berikut harus dipertimbangkan 1) tidak lengkap, dan 2) * DIBUTUHKAN MEMBACA *. Saya tidak selalu setuju dengan gaya yang ditulis oleh penulis di bawah ini, tapi satu hal yang pasti: Mereka konsisten. Selanjutnya, ini adalah otoritas pada bahasa.

 * [Baseline For Front End Developers: 2015](http://rmurphey.com/blog/2015/03/23/a-baseline-for-front-end-developers-2015/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)




### Build dan Deployment Proses

Proyek harus selalu berusaha untuk memasukkan beberapa cara generik dimana sumber dapat di lint, diuji dan dikompresi dalam persiapan untuk penggunaan produksi. Untuk tugas ini, [grunt](https://github.com/gruntjs/grunt) oleh Ben Alman terbaik dan telah resmi menggantikan "kit /" direktori dari repo ini.



### Test Fasilitas

Proyek _must_ mencakup beberapa bentuk unit, referensi, implementasi atau uji fungsional. Demo kasus penggunaan tidak memenuhi syarat sebagai "test". Berikut ini adalah daftar test frameworks, yang mendukung lebih dari yang lain.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)
 * [Sinon.js](http://sinonjs.org/)
 * [Tape](https://github.com/substack/tape)

## Daftar Isi

 * [Spasi](#whitespace)
 * [Keindahan Syntax](#spacing)
 * [Pemeriksaan Type (Courtesy jQuery Core Style Guidelines)](#type)
 * [Evaluasi Kondisional](#cond)
 * [Practical Style](#practical)
 * [Naming](#naming)
 * [Misc](#misc)
 * [Native dan Host Objects](#native)
 * [Komentar](#comments)
 * [One Language Code](#language)



------------------------------------------------


## Kata Pengantar

Bagian berikut menguraikan panduan gaya _reasonable_ untuk pengembangan JavaScript modern dan tidak dimaksudkan untuk menjadi preskriptif. Yang paling penting dibawa pulang adalah hukum ** konsistensi kode gaya **. Apa pun yang Anda pilih sebagai gaya untuk proyek Anda harus dipertimbangkan hukum. Link ke dokumen ini sebagai pernyataan komitmen proyek Anda untuk kode gaya konsistensi, pembacaan dan rawatan.





## Manifesto Gaya Idiomatic


1. <a name="whitespace">Spasi</a>
  - Jangan pernah mencampur spasi dan tab.
   - Ketika awal proyek, sebelum Anda menulis kode apapun, memilih antara indentasi lunak (spasi) atau tab nyata, pertimbangkan **hukum ini**.
       - Untuk dibaca, saya selalu merekomendasikan pengaturan ukuran indent editor untuk dua karakter &mdash; ini berarti dua ruang atau dua ruang mewakili tab nyata.
   - Jika editor mendukungnya, selalu bekerja dengan pengaturan "show invisibles" diaktifkan. Manfaat dari latihan ini adalah:
       - Konsistensi
       - Menghilangkan akhir baris spasi
       - Menghilangkan kosong baris spasi
       - Commits dan diffs yang mudah dibaca
  - Gunakan [Editorconfig](http://editorconfig.org/) bila memungkinkan. Mendukung sebagian IDE dan menangani pengaturan penting spasi.


2. <a name="spacing">Keindahan Syntax</a>

    A. Parens, Braces, Linebreaks

    ```javascript

    // if/else/for/while/try selalu memiliki ruang, kurung, dan renggang beberapa baris
    // ini mendorong kemudahan membaca

    // 2.A.1.1
    // Contoh dari syntax yang sukar dibaca

    if(condition) doSomething();

    while(condition) iterating++;

    for(var i=0;i<100;i++) someIterativeFn();


    // 2.A.1.1
    // Gunakan spasi untuk mempermudah pembacaan

    if ( condition ) {
      // statements
    }

    while ( condition ) {
      // statements
    }

    for ( var i = 0; i < 100; i++ ) {
      // statements
    }

    // Bahkan lebih baik:

    var i,
      length = 100;

    for ( i = 0; i < length; i++ ) {
      // statements
    }

    // Atau...

    var i = 0,
      length = 100;

    for ( ; i < length; i++ ) {
      // statements
    }

    var prop;

    for ( prop in object ) {
      // statements
    }


    if ( true ) {
      // statements
    } else {
      // statements
    }
    ```


    B. Assignments, Declarations, Functions ( Named, Expression, Constructor )

    ```javascript

    // 2.B.1.1
    // Variables
    var foo = "bar",
      num = 1,
      undef;

    // Literal notations:
    var array = [],
      object = {};


    // 2.B.1.2
    // Menggunakan hanya satu `var` per lingkup (fungsi) atau satu` var` untuk setiap variabel,
    // Mempermudah pembacaan dan membuat daftar deklarasi Anda bebas dari kekacauan.
    // Menggunakan satu `var` per variabel Anda dapat mengambil kontrol yang lebih dari versi Anda
    // Dan membuatnya lebih mudah untuk menyusun ulang baris.
    // Satu `var` per lingkup membuatnya lebih mudah untuk mendeteksi variabel terdeklarasikan
    // Yang mungkin menjadi akan menjadi globals.
    // Pilih baik untuk proyek Anda dan jangan pernah mencampur mereka.

    // Buruk
    var foo = "",
      bar = "";
    var qux;

    // Baik
    var foo = "";
    var bar = "";
    var qux;

    // atau..
    var foo = "",
      bar = "",
      qux;

    // atau..
    var // Komentar disini
    foo = "",
    bar = "",
    quux;

    // 2.B.1.3
    // var statements harus selalu di awal lingkup masing-masing (fungsi).


    // Buruk
    function foo() {

      // beberapa statement disini

      var bar = "",
        qux;
    }

    // Baik
    function foo() {
      var bar = "",
        qux;

      // semua statement setelah variabel dideklarasikan.
    }

    // 2.B.1.4
    // const dan let, dari ECMAScript 6, juga harus berada di bagian atas ruang lingkup mereka (blok).

    // Buruk
    function foo() {
      let foo,
        bar;
      if ( condition ) {
        bar = "";
        // statements
      }
    }
    // Baik
    function foo() {
      let foo;
      if ( condition ) {
        let bar = "";
        // statements
      }
    }
    ```

    ```javascript

    // 2.B.2.1
    // Deklarasi nama fungsi
    function foo( arg1, argN ) {

    }

    // Penggunaan
    foo( arg1, argN );


    // 2.B.2.2
    // Deklarasi nama fungsi
    function square( number ) {
      return number * number;
    }

    // Penggunaan
    square( 10 );

    // Benar-benar dibuat dengam gaya passing berkelanjutan
    function square( number, callback ) {
      callback( number * number );
    }

    square( 10, function( square ) {
      // callback statements
    });


    // 2.B.2.3
    // Ekspresi fungsi
    var square = function( number ) {
      // Mengembalikan suatu nilai yang valuable dan relevan
      return number * number;
    };

    // Ekspresi fungsi dengan Identifier
    // Bentuk yang disukai ini memiliki nilai tambah yang
    // Mampu menyebut dirinya dan memiliki identitas di stack traces:
    var factorial = function factorial( number ) {
      if ( number < 2 ) {
        return 1;
      }

      return number * factorial( number - 1 );
    };


    // 2.B.2.4
    // Deklarasi Constructor
    function FooBar( options ) {

      this.options = options;
    }

    // Penggunaan
    var fooBar = new FooBar({ a: "alpha" });

    fooBar.options;
    // { a: "alpha" }

    ```


    C. Exceptions, Slight Deviations

    ```javascript

    // 2.C.1.1
    // Fungsi demham callbacks
    foo(function() {
      // Catatan: tidak ada ruang ekstra antara parent pertama
      // Dari pelaksanaan pemanggilan fungsi dan kata "function"
    });

    // Fungsi menerima sebuah array, tidak ada ruang
    foo([ "alpha", "beta" ]);

    // 2.C.1.2
    // Fungsi menerima sebuah objek, tidak ada ruang
    foo({
      a: "alpha",
      b: "beta"
    });

    // Satu argumen string literal, tidak ada ruang
    foo("bar");

    // Ekspresi parents, tidak ada ruang
    if ( !("foo" in obj) ) {
      obj = (obj.bar || defaults).baz;
    }

    ```

    D. Konsistensi Selalu Menang

    Di bagian 2.A-2.C, aturan spasi yang ditetapkan sebagai rekomendasi dengan sederhana, tujuan yang lebih tinggi: konsistensi.
     Sangat penting untuk dicatat bahwa format preferensi, seperti "inner whitespace" harus dipertimbangkan opsional, tetapi hanya satu gaya harus ada di seluruh sumber proyek Anda.

    ```javascript

    // 2.D.1.1

    if (condition) {
      // statements
    }

    while (condition) {
      // statements
    }

    for (var i = 0; i < 100; i++) {
      // statements
    }

    if (true) {
      // statements
    } else {
      // statements
    }

    ```

    E. Tanda Kutip

    Apakah Anda lebih suka tunggal atau ganda seharusnya tidak masalah, tidak ada perbedaan dalam cara JavaScript mem-parsing mereka. Apa **BENAR-BENAR HARUS** harus ditegakkan adalah konsistensi. **Jangan pernah mencampur kutipan dalam proyek yang sama. Pilih satu gaya dan tetap dengan itu.**

    F. Akhir Baris dan Garis Kosong

    Spasi dapat merusak diffs dan membuat changesets mungkin untuk dibaca. Pertimbangkan menggabungkan hook pre-commit yang menghilangkan end-of-line spasi dan ruang kosong di baris kosong secara otomatis.

3. <a name="type">Pemeriksaan type(Courtesy jQuery Core Style Guidelines)</a>

    A. Actual Types

    String:

        typeof variable === "string"

    Number:

        typeof variable === "number"

    Boolean:

        typeof variable === "boolean"

    Object:

        typeof variable === "object"

    Array:

        Array.isArray( arrayLikeObject )
        (wherever possible)

    Node:

        elem.nodeType === 1

    null:

        variable === null

    null or undefined:

        variable == null

    undefined:

      Global Variables:

        typeof variable === "undefined"

      Local Variables:

        variable === undefined

      Properties:

        object.prop === undefined
        object.hasOwnProperty( prop )
        "prop" in object

    B. Coerced Types

    Mempertimbangkan implikasi dari berikut ...

    Mengingat HTML ini:

    ```html

    <input type="text" id="foo-input" value="1">

    ```


    ```javascript

    // 3.B.1.1

    // `Foo` telah dinyatakan dengan nilai `0` dan jenisnya adalah `number`
    var foo = 0;

    // typeof foo;
    // "number"
    ...

    // Di suatu tempat dalam kode anda kemudian, Anda perlu memperbarui `foo`
    // Dengan nilai baru yang berasal dari unsur masukan

    foo = document.getElementById("foo-input").value;

    // Jika Anda menguji `typeof foo` sekarang, hasilnya akan `string`
    // Ini berarti bahwa jika Anda memiliki logika yang diuji `foo` seperti:

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` tidak akan pernah dievaluasi, meskipun `foo` memiliki nilai "1"


    // 3.B.1.2

    // Anda dapat mendahului masalah dengan menggunakan smart coercion dengan unary + atau - operators:

    foo = +document.getElementById("foo-input").value;
    //    ^ unary + operator akan mengkonversi sisi operan haknya untuk nomor

    // typeof foo;
    // "number"

    if ( foo === 1 ) {

      importantTask();

    }

    // `importantTask()` akan terpanggil
    ```

    Berikut adalah beberapa kasus yang umum bersama dengan coercions:


    ```javascript

    // 3.B.2.1

    var number = 1,
      string = "1",
      bool = false;

    number;
    // 1

    number + "";
    // "1"

    string;
    // "1"

    +string;
    // 1

    +string++;
    // 1

    string;
    // 2

    bool;
    // false

    +bool;
    // 0

    bool + "";
    // "false"
    ```


    ```javascript
    // 3.B.2.2

    var number = 1,
      string = "1",
      bool = true;

    string === number;
    // false

    string === number + "";
    // true

    +string === number;
    // true

    bool === number;
    // false

    +bool === number;
    // true

    bool === string;
    // false

    bool === !!string;
    // true
    ```

    ```javascript
    // 3.B.2.3

    var array = [ "a", "b", "c" ];

    !!~array.indexOf("a");
    // true

    !!~array.indexOf("b");
    // true

    !!~array.indexOf("c");
    // true

    !!~array.indexOf("d");
    // false

    // Perhatikan: bahwa di atas harus dipertimbangkan "unnecessarily clever"
    // Memilih pendekatan yang jelas dari membandingkan nilai kembali dari
    // IndexOf, seperti:

    if ( array.indexOf( "a" ) >= 0 ) {
      // ...
    }
    ```

    ```javascript
    // 3.B.2.4


    var num = 2.5;

    parseInt( num, 10 );

    // sama seperti...

    ~~num;

    num >> 0;

    num >>> 0;

    // All result in 2


    // Namun diingat, bahwa angka negatif akan diperlakukan berbeda...

    var neg = -2.5;

    parseInt( neg, 10 );

    // sama seperti...

    ~~neg;

    neg >> 0;

    // Semua hasil di -2
    // Namun ...

    neg >>> 0;

    // Akan menghasilkan 4294967294




    ```



4. <a name="cond">Evaluasi Kondisional</a>

    ```javascript

    // 4.1.1
    // Ketika hanya mengevaluasi bahwa array memiliki panjang,
    // maka seperti dibawah ini:
    if ( array.length > 0 ) ...

    // ...mengevaluasi truthiness, seperti ini:
    if ( array.length ) ...


    // 4.1.2
    // Ketika hanya mengevaluasi bahwa array itu kosong,
    // maka seperti dibawah ini:
    if ( array.length === 0 ) ...

    // ...mengevaluasi truthiness, seperti ini:
    if ( !array.length ) ...


    // 4.1.3
    // Ketika hanya mengevaluasi bahwa string tidak kosong,
    // maka seperti dibawah ini:
    if ( string !== "" ) ...

    // ...mengevaluasi truthiness, seperti ini:
    if ( string ) ...


    // 4.1.4
    // Ketika hanya mengevaluasi bahwa string itu kosong,
    // maka seperti dibawah ini:
    if ( string === "" ) ...

    // ...mengevaluasi falsy-ness, seperti ini:
    if ( !string ) ...


    // 4.1.5
    // Ketika hanya mengevaluasi bahwa referensi benar,
    // maka seperti dibawah ini:
    if ( foo === true ) ...

    // ...mengevaluasi seperti yang Anda maksud itu, mengambil keuntungan dari dibangun pada kemampuan:
    if ( foo ) ...


    // 4.1.6
    // Ketika mengevaluasi bahwa referensi adalah salah,
    // maka seperti dibawah ini:
    if ( foo === false ) ...

    // ...menggunakan negasi untuk memaksa evaluasi yang benar
    if ( !foo ) ...

    // ...Hati-hati, ini juga akan cocok: 0, "", null, undefined, NaN
    // Jika Anda _HARUS_ test untuk false boolean, maka gunakan
    if ( foo === false ) ...


    // 4.1.7
    // Ketika hanya mengevaluasi ref yang mungkin nol atau undefined, tapi tidak false, "" atau 0,
    // maka seperti dibawah ini:
    if ( foo === null || foo === undefined ) ...

    // ...mengambil keuntungan dari == type coercion, seperti ini:
    if ( foo == null ) ...

    // Ingat, menggunakan == akan cocok dengan `null` untuk KEDUA` null` dan `undefined`
    // tetapi tidak `false`," "atau 0
    null == undefined

    ```
    SELALU mengevaluasi untuk yang terbaik, hasil yang paling akurat - di atas merupakan pedoman, bukan dogma.

    ```javascript

    // 4.2.1
    // Type coercion dan catatan evaluasi

    // Prefer `===` over `==` (kecuali kasus memerlukan evaluasi jenis longgar)

    // === menyamakan type, yang berarti bahwa:

    "1" === 1;
    // false

    // == tidak menyamakan type, yang berarti bahwa::

    "1" == 1;
    // true


    // 4.2.2
    // Booleans, Truthies & Falsies

    // Booleans:
    true, false

    // Truthy:
    "foo", 1

    // Falsy:
    "", 0, null, undefined, NaN, void 0

    ```


5. <a name="practical">Practical Style</a>

    ```javascript

    // 5.1.1
    // Sebuah Modul Praktis

    (function( global ) {
      var Module = (function() {

        var data = "secret";

        return {
          // Ini adalah beberapa properti boolean
          bool: true,
          // Beberapa nilai string
          string: "a string",
          // Properti Array
          array: [ 1, 2, 3, 4 ],
          // Properti objek
          object: {
            lang: "en-Us"
          },
          getData: function() {
            // mendapatkan nilai saat ini dari `data`
            return data;
          },
          setData: function( value ) {
            // menetapkan nilai `data` dan mengembalikannya
            return ( data = value );
          }
        };
      })();

      // Hal-hal lain yang mungkin terjadi di sini

      // mengekspos modul ke obyek global
      global.Module = Module;

    })( this );

    ```

    ```javascript

    // 5.2.1
    // Sebuah Constructor Praktis

    (function( global ) {

      function Ctor( foo ) {

        this.foo = foo;

        return this;
      }

      Ctor.prototype.getFoo = function() {
        return this.foo;
      };

      Ctor.prototype.setFoo = function( val ) {
        return ( this.foo = val );
      };


      // Untuk memanggil konstruktor tanpa `new`, Anda mungkin melakukan hal ini:
      var ctor = function( foo ) {
        return new Ctor( foo );
      };


      // mengekspos konstruktor untuk obyek global
      global.ctor = ctor;

    })( this );

    ```



6. <a name="naming">Naming</a>



    A. Anda bukan manusia kode compiler/kompresor, jadi jangan mencoba untuk menjadi salah satu.

    Kode berikut adalah contoh mengerikan penamaan:

    ```javascript

    // 6.A.1.1
    // Contoh kode dengan nama yang buruk

    function q(s) {
      return document.querySelectorAll(s);
    }
    var i,a=[],els=q("#foo");
    for(i=0;i<els.length;i++){a.push(els[i]);}
    ```
    Tanpa ragu, Anda sudah menulis kode seperti ini - mudah-mudahan yang berakhir hari ini.

    Berikut bagian logika yang sama, tetapi dengan ramah, penamaan yang lebih bijaksana(dan struktur yang mudah dibaca):

    ```javascript

    // 6.A.2.1
    // Contoh kode dengan nama ditingkatkan

    function query( selector ) {
      return document.querySelectorAll( selector );
    }

    var idx = 0,
      elements = [],
      matches = query("#foo"),
      length = matches.length;

    for ( ; idx < length; idx++ ) {
      elements.push( matches[ idx ] );
    }

    ```

    Beberapa pointer penamaan tambahan:

    ```javascript

    // 6.A.3.1
    // Penamaan string

    `dogs` adalah string


    // 6.A.3.2
    // Penamaan array

    `dogs` adalah array dari` string dog`


    // 6.A.3.3
    // Penamaan fungsi, objek, contoh, dll

    CamelCase; Fungsi dan var deklarasi


    // 6.A.3.4
    // Penamaan konstruktor, prototipe, dll

    PascalCase; fungsi konstruktor


    // 6.A.3.5
    // Penamaan ekspresi reguler

    rDesc = //;


    // 6.A.3.6
    // Dari Google Closure Library Style Guide

    functionNamesLikeThis;
    variableNamesLikeThis;
    ConstructorNamesLikeThis;
    EnumNamesLikeThis;
    methodNamesLikeThis;
    SYMBOLIC_CONSTANTS_LIKE_THIS;

    ```

    B. Faces of `this`

    Di luar kasus penggunaan umum dikenal dengan `call` dan` apply`, lebih disarankan `.bind (this)` atau setara fungsional, untuk menciptakan definisi `BoundFunction` untuk invocation nanti. Hanya resor untuk aliasing ketika tidak ada pilihan yang lebih tersedia.

    ```javascript

    // 6.B.1
    function Device( opts ) {

      this.value = null;

      // Membuka aliran async,
      // Ini akan disebut terus
      stream.read( opts.path, function( data ) {

        // Perbarui nilai ini misalnya saat
        // Dengan nilai terbaru dari
        // aliran data
        this.value = data;

      }.bind(this) );

      // Throttle frekuensi dari event yang dipancarkan dari
      // Contoh Device ini
      setInterval(function() {

        // Memancarkan sebuah event throttled
        this.emit("event");

      }.bind(this), opts.freq || 100 );
    }

    // Hanya berpura-pura kita telah mewarisi EventEmitter;)

    ```

    Ketika tidak tersedia, setara fungsional untuk `.bind` ada di banyak perpustakaan JavaScript modern.


    ```javascript
    // 6.B.2

    // contoh: lodash/underscore, _.bind()
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, _.bind(function( data ) {

        this.value = data;

      }, this) );

      setInterval(_.bind(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // contoh: jQuery.proxy
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, jQuery.proxy(function( data ) {

        this.value = data;

      }, this) );

      setInterval( jQuery.proxy(function() {

        this.emit("event");

      }, this), opts.freq || 100 );
    }

    // contoh: dojo.hitch
    function Device( opts ) {

      this.value = null;

      stream.read( opts.path, dojo.hitch( this, function( data ) {

        this.value = data;

      }) );

      setInterval( dojo.hitch( this, function() {

        this.emit("event");

      }), opts.freq || 100 );
    }

    ```

    Sebagai usaha terakhir, membuat alias untuk `this` menggunakan` self` sebagai Identifier. Hal ini sangat rawan bug dan harus dihindari sebisa mungkin.

    ```javascript

    // 6.B.3

    function Device( opts ) {
      var self = this;

      this.value = null;

      stream.read( opts.path, function( data ) {

        self.value = data;

      });

      setInterval(function() {

        self.emit("event");

      }, opts.freq || 100 );
    }

    ```


    C. Menggunakan `thisArg`

    Beberapa metode prototipe built-in ES 5.1 datang dengan signature khusus `thisArg`, yang harus digunakan bila memungkinkan

    ```javascript

    // 6.C.1

    var obj;

    obj = { f: "foo", b: "bar", q: "qux" };

    Object.keys( obj ).forEach(function( key ) {

      // |this| sekarang mengacu pada `obj`

      console.log( this[ key ] );

    }, obj ); // <-- arg terakhir adalah `thisArg`

    // Cetak...

    // "foo"
    // "bar"
    // "qux"

    ```

    `thisArg` dapat digunakan dengan `Array.prototype.every`, `Array.prototype.forEach`, `Array.prototype.some`, `Array.prototype.map`, `Array.prototype.filter`

7. <a name="misc">Misc</a>

    Bagian ini akan berfungsi untuk menggambarkan ide-ide dan konsep-konsep yang tidak boleh dianggap dogma, melainkan ada untuk mendorong praktik mempertanyakan dalam upaya untuk menemukan cara yang lebih baik untuk melakukan tugas-tugas pemrograman umum JavaScript.

    A. Menggunakan `switch` harus dihindari, cara modern tracing akan blacklist fungsi dengan switch statements

    Tampaknya ada peningkatan drastis untuk pelaksanaan `switch` dalam rilis terbaru dari Firefox dan Chrome.
      http://jsperf.com/switch-vs-object-literal-vs-module

    Perbaikan penting dapat dilihat di sini juga:
    https://github.com/rwldrn/idiomatic.js/issues/13

    ```javascript

    // 7.A.1.1
    // Contoh switch statement

    switch( foo ) {
      case "alpha":
        alpha();
        break;
      case "beta":
        beta();
        break;
      default:
        // sesuatu untuk default
        break;
    }

    // 7.A.1.2
    // Pendekatan alternatif yang mendukung composability dan usabilitas adalah untuk
    // menggunakan objek untuk menyimpan "cases" dan fungsi untuk mendelegasikan:

    var cases, delegator;

    // Contoh return hanya untuk ilustrasi.
    cases = {
      alpha: function() {
        // statements
        // sebuah return
        return [ "Alpha", arguments.length ];
      },
      beta: function() {
        // statements
        // sebuah return
        return [ "Beta", arguments.length ];
      },
      _default: function() {
        // statements
        // sebuah return
        return [ "Default", arguments.length ];
      }
    };

    delegator = function() {
      var args, key, delegate;

      // Transform daftar argumen ke dalam array
      args = [].slice.call( arguments );

      // menggeser key cases dari argumen
      key = args.shift();

      // Menetapkan default case handler
      delegate = cases._default;

      // Mengambil metode untuk mendelegasikan operasi
      if ( cases.hasOwnProperty( key ) ) {
        delegate = cases[ key ];
      }

      // Ruang lingkup arg bisa diatur untuk sesuatu yang spesifik,
      // dalam hal ini, | null | akan cukup
      return delegate.apply( null, args );
    };

    // 7.A.1.3
    // Menempatkan API dalam 7.A.1.2 untuk bekerja:

    delegator( "alpha", 1, 2, 3, 4, 5 );
    // [ "Alpha", 5 ]

    // Tentu saja, `case` argumen key bisa dengan mudah didasarkan
    // pada beberapa kondisi yang sewenang-wenang lainnya.

    var caseKey, someUserInput;

    // Mungkin semacam masukan form?
    someUserInput = 9;

    if ( someUserInput > 10 ) {
      caseKey = "alpha";
    } else {
      caseKey = "beta";
    }

    // atau...

    caseKey = someUserInput > 10 ? "alpha" : "beta";

    // Dan Kemudian...

    delegator( caseKey, someUserInput );
    // [ "Beta", 1 ]

    // Dan Tentu saja...

    delegator();
    // [ "Default", 0 ]


    ```

    B. Awal kembali mempromosikan pembacaan kode dengan perbedaan kinerja diabaikan

    ```javascript

    // 7.B.1.1
    // Buruk:
    function returnLate( foo ) {
      var ret;

      if ( foo ) {
        ret = "foo";
      } else {
        ret = "quux";
      }
      return ret;
    }

    // Baik:

    function returnEarly( foo ) {

      if ( foo ) {
        return "foo";
      }
      return "quux";
    }

    ```


8. <a name="native">Native dan Host Objects</a>

    Prinsip dasar:

    ### Jangan melakukan omong kosong bodoh dan semuanya akan ok.

    Untuk memperkuat konsep ini, silahkan menonton presentasi berikut:

    #### “Semuanya yang Diizinkan: Memperluas Built-in” by Andrew Dupont (JSConf2011, Portland, Oregon)

    https://www.youtube.com/watch?v=xL3xCO7CLNM


9. <a name="comments">Komentar</a>

    #### Satu baris dibawah kode itu adalah subjek
    #### Multiline itu baik
    #### Akhir dari line komentar terlarang!
    #### Gaya JSDoc baik, tetapi membutuhkan waktu investasi yang signifikan


10. <a name="language">One Language Code</a>

    Program harus ditulis dalam satu bahasa, apa pun bahasa yang mungkin, seperti yang ditentukan oleh pengelola atau pengelola.

## Lampiran

### Koma Pertama.

Setiap proyek yang mengutip dokumen ini sebagai panduan dasar gaya yang tidak akan menerima format koma kode pertama, kecuali secara eksplisit ditentukan lain oleh penulis proyek ini.



----------


<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Principles of Writing Consistent, Idiomatic JavaScript</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/rwldrn/idiomatic.js" property="cc:attributionName" rel="cc:attributionURL">Rick Waldron and Contributors</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/rwldrn/idiomatic.js" rel="dct:source">github.com/rwldrn/idiomatic.js</a>.
