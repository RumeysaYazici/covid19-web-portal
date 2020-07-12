import React from 'react';
import {Link} from 'react-router-dom';

function haber3() {
    return (
      <div className="haber3">
     
     <h5 class="my-4">SARS-CoV-2 Epidemiyolojisi Arayüzü
      </h5><br></br>
    
    

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper"></span>
                <span className="section-heading-lower"></span>
              </h2>
              <br></br>
              <p className="mb-0">
              SARS-CoV-2 epidemiyolojisi arayüzü virüs yayılımının gerçek zamanlı anlık görüntüsünü sunmaktadır. Dizilenen genomların filogenetik analizini takip eden zaman ve konum çözümlemeleri ile olası virüs geçişkenlikleri haritada gösterilir. Nextstrain platformunun kullandığı Auspice ön yüzünü kullanmakla beraber, arka planda Augur kullanılmıştır. Tüm veriler GISAID veritabanından çekilmiştir. 
                   <br></br>    <br></br>
                   Özellikle Türkiye'ye yönelik analizler yapılması açısından, Türkiye şehirlerinin konumları veri setine eklenmiştir. Türkiye'den GISAID veritabanına eklenecek genomlar ile uygulamanın güncel tutulması planlanmıştır. 
<br></br>Virüsün (i) genom dizisi, genomunu elde edildiği (ii) tarih ve (iii) şehir bilgileri algoritmanın girdilerini oluşturmaktadır. Sonuç olarak genomların ülke içi ve dışındaki evrimsel ilişkileri ortaya çıkarılmıştır. Yayılım örüntüleri virüsün takibini kolaylaştıracak ve karar vericilerin gerekli önlemleri almalarını sağlayacaktır.
<br></br>Tüm genom çoklu hizalanmasında MAFFT algoritması kullanılmıştır. Çoklu hiza ile IQTREE kullanılarak filogenetik ağaç oluşturulmuştur. Augur ile filogenetik ağaç zaman-çözümlü olarak yenden oluşturulmuştur. Türkiye GISAID'den edinilen tablodan çekilmiştir. Türkiye şehirlerin harita konumları veri setine eklenmiştir. Görselleştirme için Auspice kullanılmıştır.
<br></br>Türkiye'ye yönelik SARS-CoV-2 takibine buradan erişebilirsiniz. Uygulama 15 bin genom içerdiğinden, tarayıcınızda yüklenmesi 1 dakikayı bulabilmektedir.
                       
                         </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div className="col-lg-6 mx-auto">
    <div className="card border-0 shadow">
      <img src="https://covid19.tubitak.gov.tr/sites/default/files/inline-images/screen-shot-2020-05-06-at-1.48.17-pm.png" width="200" height="450" class="card-img-top" alt="..."/>  </div>
    </div>
<br></br>
<div className="col-lg-6 mx-auto">
    <div className="card border-0 shadow">
      <img src="https://covid19.tubitak.gov.tr/sites/default/files/inline-images/screen-shot-2020-05-12-at-11.47.41-am.png" width="200" height="450" class="card-img-top" alt="..."/>  </div>
    </div>
    <br></br>
    <div className="col-lg-6 mx-auto">
    <div className="card border-0 shadow">
      <img src="https://covid19.tubitak.gov.tr/sites/default/files/inline-images/image.png" width="200" height="450" class="card-img-top" alt="..."/>  </div>
    </div>
    <br></br>


    <footer className="footer text-faded text-center py-5 ">
    <div className="container">
      <p className="m-0 small">Copyright &copy; 2020</p>
    </div>
  </footer>
    
      </div>
    );
  }
  
  export default haber3;
  