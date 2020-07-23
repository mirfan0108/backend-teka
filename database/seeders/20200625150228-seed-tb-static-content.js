'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_static_contents', [
      {
        tnc: `
        <div>
          <p>
          Halaman ini memberi Anda pemahaman penuh tentang syarat dan ketentuan, yang kami terapkan saat menjual semua produk yang terdaftar di www.tekaparquet.com. Baca syarat dan ketentuan ini dengan cermat, pastikan Anda memiliki pemahaman yang baik.
          </p>
          <h3> Umum: </h3>
          <ol>
            <li>Tidak ada anak di bawah umur di bawah 18 tahun yang dapat memesan melalui situs kami tanpa persetujuan dari orang tua atau wali.</li>
          </ol>
          <h3> Kebijakan pengiriman: </h3>
          <ol>
            <li>Kami menawarkan tiga opsi pengiriman; Hari Kerja Berikutnya, Standar dan Internasional</li>
          </ol>
        </div>
        `,
        installation_warranty: `Teka Parquet menjamin pengerjaan instalasi Lantai Parket Anda selama satu tahun setelah pekerjaan selesai. Semua pengerjaan dijamin menjadi kualitas pertama. Jika ada cacat akibat pengerjaan yang salah menjadi jelas, Teka Parquet akan memperbaiki masalah secara gratis. Cacat produk dicakup oleh garansi pabrik. Garansi ini hanya mencakup pemasangan yang disediakan oleh Teka Parquet. Garansi ini tidak mencakup kerusakan yang disebabkan oleh penyalahgunaan, kelalaian, penggunaan yang tidak benar, agen pembersih atau oleh pemasangan yang longgar.`,
        privacy_policy: `
        <div>
          <h2>1. INFORMASI PENTING</h2>
          <h4>Tujuan</h4>
          <p>
          Pemberitahuan privasi ini bertujuan untuk memberi Anda informasi tentang bagaimana tekaparquet.com mengumpulkan dan memproses data pribadi Anda ketika Anda membeli produk dari kami secara langsung (pelanggan dagang) atau melalui penggunaan situs web Anda, termasuk data apa pun yang dapat Anda berikan melalui situs web ketika Anda mendaftar ke buletin kami, membeli produk atau ikut serta dalam kompetisi.
          </p>
        </div>
        `,
        id_lang: 1,
        prefered_title: 'Elegan & Harmoni',
        prefered_content: `
        <p>
          Kami menyediakan lantai kayu atau dikenal parket, dengan 2 pilihan, yaitu solid dan engineer, dengan jenis kayu local seperti : Jati, Sonokeling, Merbau, Kempas, Akasia, Mahoni, dsb dan juga kayu impor seperti: Oak, Walnut, Iroko, Doussie, dsb. 
        </p>
        <p>
          Teknologi finishing yang kami gunakan adalah UV Coating Anti-Scratch Lacquer yang lebih tahan gores dan tidak cepat pudar jika dibandingkan teknologi lama.
        </p>
        `,
        video_title: `Video`,
        video_subtitle: `Kami memberikan yang terbaik`,
        video_summary: `Salinan dummy bagus, tapi ada apa dengan semua bahasa Latin? Ternyata, Lorem Ipsum asli berasal dari potongan-potongan De Finibus bonorum et Malorum dari Cicero (Di Ujung Barang dan Kejahatan). Kami bekerja untuk kebaikan, kami berkata pada diri kami sendiri, jadi mengapa tidak membuat teks pengisi yang hanya kebaikan dan bukan kejahatan? Dan mungkin dalam bahasa yang lebih mudah dipahami?`,
        video_link: `https://www.youtube.com/watch?v=Fvae8nxzVz4`,
        promo_section_title: 'VISUALIZER',
        promo_section_subtitle: `Ayo`,
        promo_section_caption: `Visualisasikan Ruanganmu`,
        promo_section_link: '#',
        promo_section_image: 'resource/mobile-app.png',
        footer: 'dalam isi teks dummy tidak masuk akal. jenis teks dummy adalah penampilan yang berbeda umum isi teks dummy tidak masuk akal',
      },


      {
        tnc: `
        <div>
          <p>
          This page gives you a full understanding of the terms and conditions, which we apply when selling all products listed on www.tekaparquet.com. Read these terms and conditions carefully, making sure you have a good understanding.
          </p>
          <h3> General: </h3>
          <ol>
            <li> No children under the age of 18 can order through our site without the consent of their parents or guardians. </li>
          </ol>
          <h3> Shipping policy: </h3>
          <ol>
            <li> We offer three shipping options; Next Business Day, Standard and International </li>
          </ol>
        </div>`,
        installation_warranty: `Teka Parquet guarantees your parquet floor installation work for one year after the work is completed. All workmanship is guaranteed to be of first quality. If there are defects due to incorrect workmanship it becomes clear, Teka Parquet will fix the problem for free. Product defects are covered by the manufacturer's warranty. This guarantee only covers the installation provided by Teka Parquet. This warranty does not cover damage caused by misuse, neglect, improper use, cleaning agents or loose installation.`,
        privacy_policy: `
        <div>
          <h2> 1. IMPORTANT INFORMATION </h2>
          <h4> Purpose </h4>
          <p>
          This privacy notice aims to provide you with information about how tekaparquet.com collects and processes your personal data when you purchase products from us directly (trade customers) or through the use of your website, including any data that you can provide through the website when You register for our newsletter, buy products or take part in competitions.
          </p>
        </div>`,
        id_lang: 2,
        prefered_title: 'Elegant & Harmony',
        prefered_content: `
        <p>
          We provide wood flooring or parquet, with 2 choices, namely solid and engineer, with local wood types such as: Teak, Sonokeling, Merbau, Kempas, Acacia, Mahogany, etc. and also imported wood such as: Oak, Walnut, Iroko, Doussie, etc.
        </p>
        <p>
          The finishing technology that we use is UV Coating Anti-Scratch Lacquer which is more scratch resistant and does not fade quickly when compared to old technology.
        </p>
        `,
        video_title: `Video`,
        video_subtitle: `We Give You The Best`,
        video_summary: `Dummy copy is great, but what’s with all the Latin? Turns out, the original Lorem Ipsum comes from bits and pieces of Cicero’s De Finibus bonorum et Malorum (On the Ends of Goods and Evils). We work for good, we said to ourselves, so why not create filler text that’s just the good and not the evil? And maybe in a more comprehensible language?`,
        video_link: `https://www.youtube.com/watch?v=Fvae8nxzVz4`,
        promo_section_title: 'VISUALIZER',
        promo_section_subtitle: `Let's`,
        promo_section_caption: `Visualize Your Room`,
        promo_section_link: '#',
        promo_section_image: 'resource/mobile-app.png',
        footer: ` in content of dummy text is nonsensical.typefaces of dummy text is appearance of different general the content of dummy text is nonsensical`,
        
      },
      {
        tnc: `
        <div>
          <p>
          Auf dieser Seite erhalten Sie ein umfassendes Verständnis der Allgemeinen Geschäftsbedingungen, die wir beim Verkauf aller auf www.tekaparquet.com aufgeführten Produkte anwenden. Lesen Sie diese Allgemeinen Geschäftsbedingungen sorgfältig durch und stellen Sie sicher, dass Sie ein gutes Verständnis haben.
          </ p>
          <h3> Allgemein: </ h3>
          <ol>
            <li> Keine Kinder unter 18 Jahren können ohne Zustimmung ihrer Eltern oder Erziehungsberechtigten über unsere Website bestellen. </ Li>
          </ ol>
          <h3> Versandrichtlinien: </ h3>
          <ol>
            <li> Wir bieten drei Versandoptionen an. Nächster Geschäftstag, Standard und International </ li> </ ul>
          </ ol>
        </ div>`,
        installation_warranty: `Teka Parkett garantiert Ihre Parkettverlegung ein Jahr nach Abschluss der Arbeiten. Die gesamte Verarbeitung ist garantiert von höchster Qualität. Wenn es Mängel aufgrund falscher Verarbeitung gibt, wird klar, dass Teka Parkett das Problem kostenlos behebt. Produktfehler sind durch die Herstellergarantie abgedeckt. Diese Garantie gilt nur für die Installation von Teka Parquet. Diese Garantie deckt keine Schäden ab, die durch Missbrauch, Vernachlässigung, unsachgemäße Verwendung, Reinigungsmittel oder lose Installation verursacht wurden.`,
        privacy_policy: `
        <div>
          <h2> 1. WICHTIGE INFORMATIONEN </ h2>
          <h4> Zweck </ h4>
          <p>
          Diese Datenschutzerklärung soll Ihnen Informationen darüber geben, wie tekaparquet.com Ihre persönlichen Daten sammelt und verarbeitet, wenn Sie Produkte direkt bei uns (Handelskunden) oder über die Nutzung Ihrer Website kaufen, einschließlich aller Daten, die Sie über die Website bereitstellen können, wenn Sie registrieren sich für unseren Newsletter, kaufen Produkte oder nehmen an Wettbewerben teil.
          </ p>
        </ div>`,
        id_lang: 3,
        prefered_title: 'Elegant & Harmonie',
        prefered_content: `
        <p>
        Wir bieten Hartholzböden oder Parkett mit zwei Auswahlmöglichkeiten, nämlich Massivholz und Ingenieur, mit lokalen Holzarten wie Teak, Sonokeling, Merbau, Kempas, Akazie, Mahagoni usw. sowie importiertem Holz wie Weißeiche, Walnuss, Iroko, Doussie , etc.
        </p>
        <p>
        Die von uns verwendete Veredelungstechnologie ist der UV-beschichtete Anti-Kratz-Lack, der kratzfester ist und im Vergleich zur alten Technologie nicht schnell verblasst.
        </p>
        `,
        video_title: `Video`,
        video_subtitle: `Wir geben Ihnen das Beste`,
        video_summary: `Dummy-Kopie ist großartig, aber was ist mit all dem Latein? Es stellt sich heraus, dass das Original von Lorem Ipsum aus Teilen von Ciceros De Finibus bonorum et Malorum (Am Ende der Güter und des Bösen) stammt. Wir arbeiten für das Gute, sagten wir uns. Warum also nicht Fülltext erstellen, der nur das Gute und nicht das Böse ist? Und vielleicht in einer verständlicheren Sprache?`,
        video_link: `https://www.youtube.com/watch?v=Fvae8nxzVz4`,
        promo_section_title: 'VISUALIZER',
        promo_section_subtitle: `Lasst uns`,
        promo_section_caption: `Visualisieren Sie Ihr Zimmer`,
        promo_section_link: '#',
        promo_section_image: 'resource/mobile-app.png',
        footer: `Der Inhalt von Dummy-Text ist unsinnig. Die Gesichter von Dummy-Text sind unterschiedlich. Der Inhalt von Dummy-Text ist unsinnig`,
      }
    ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_static_contents', null, {});
  }
};
