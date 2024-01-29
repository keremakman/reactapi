import React from 'react';
import './About.css'; 

function About() {
        const phoneNumber = '905436155147';

        const handleCallButtonClick = () => {
         
            window.open(`tel:${905436155147}`);
            console.log(`Arama butonuna tıklandı. Numara: ${phoneNumber}`);
          };
  return (
    <div className="about-container">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h1>Hikayemiz</h1>
              </div>
              <div className="card-body">
                <p>
                  Merhaba! Ben Kerem Akman, Osmaniye Korkut Ata Üniversite'sinde okuyan tutkulu bir grafik tasarımcı ve yazılımcıyım.
                  Görsel olarak çarpıcı tasarımlar oluşturmak konusunda uzmanlaştım.
                  Tasarım felsefem ve beni diğerlerinden ayıran özellikler hakkında sizi biraz bilgilendireyim.
                </p>
                <p>
                  <strong>Tasarım Felsefesi:</strong> Tasarım anlayışım dengeli, basit ve işlevsel olmaya odaklanmıştır.
                  İyi tasarlanmış bir tasarımın sadece iyi görünmekle kalmayıp aynı zamanda amacına etkili bir şekilde hizmet etmesi gerektiğine inanıyorum.
                </p>
                <p>
                  <strong>Yaratıcılık Tutkusu:</strong> Yaratıcılık konusundaki derin tutkumla, fikirleri görsel başyapıtlara dönüştürmeyi seviyorum.
                  Marka kimliği, web sitesi veya baskı malzemesi olsun, her projeye benzersiz ve yenilikçi bir dokunuş katma konusunda çaba sarf ediyorum.
                </p>
                <p>
                  <strong>Müşteri Odaklı Yaklaşım:</strong> Memnuniyetiniz benim önceliğimdir. Müşterilerle yakın işbirliği yaparım, hedeflerini ve tercihlerini anlamak için çaba sarf ederim,
                  böylece projelerinizi en iyi şekilde gerçekleştirebilirim.
                </p>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-primary"
                    onClick={handleCallButtonClick}
                  >
                    Beni Ara
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
