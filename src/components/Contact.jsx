import { useNavigate } from "react-router-dom"



export const Contact = () => {
  
  const navigate = useNavigate()



  return (
      <section id="contact" class="section-padding wow fadeInUp delay-05s">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center white">
            <h2 class="service-title pad-bt15">CONTACTANOS</h2>
            <p class="sub-title pad-bt15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua.</p>
            <hr class="bottom-line white-bg"/>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="loction-info white">
              <p><i class="fa fa-map-marker fa-fw pull-left fa-2x"></i>Calle 30 #260 entre 21 y 23<br/>Izamal</p>
              <p><i class="fa fa-envelope-o fa-fw pull-left fa-2x"></i>losarcosizamal02@hotmail.com</p>
              <p><i class="fa fa-phone fa-fw pull-left fa-2x"></i>+9881077886</p>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="contact-form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" class="contactForm">
                <div class="col-md-6 padding-right-zero">
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Nombre completo" data-rule="minlen:4" data-msg="Por favor, introduzca al menos 4 caracteres." />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Por favor ingrese un correo electronico valido" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Por favor, introduzca al menos 8 caracteres de asunto." />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea class="form-control" name="mensage" rows="5" data-rule="required" data-msg="Por favor escribe algo para nosotros" placeholder="Message"></textarea>
                    <div class="validation"></div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-submit" >Enviar</button>
                  
                </div>
              </form>
            <button onClick={() => navigate('admin')}>Admin</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




