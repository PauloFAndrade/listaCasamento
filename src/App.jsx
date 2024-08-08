import React from 'react';
import Header from './components/Header';
import backgroundImageLeft from "../src/assets/img/inicialFlores.png"
import backgroundImageRight from "../src/assets/img/capa02.png"
import backgroundImageUp from "../src/assets/img/plantaCima.png"
import perfilKiko from "../src/assets/img/kiko.jpeg"
import perfilGertrudes from "../src/assets/img/gertrudes.jpeg"
import Countdown from './components/Countdown';
import Carousel from './components/Carousel';
import PhotoGrid from './components/PhotoGrid';
import GiftList from './components/GiftList';
import RSVPForm from './components/RSVPForm';

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Header/>
      <div className='py-14 w-full bg-[#F5FAFF] min-h-[600px] flex flex-col sm:flex-row items-center justify-center gap-14'>
        <div className='w-[100%] sm:w-[600px] h-[400px] sm:h-[600px] bg-red-600' style={{ backgroundImage: `url(${backgroundImageLeft})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className='w-[60%] sm:w-[320px] sm:h-[600px] h-[300px] bg-yellow-400 ' style={{ backgroundImage: `url(${backgroundImageRight})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>
      <div className='py-20 w-full bg-[#9DC4E3] min-h-[338px] items-center justify-center '>
        <h2 className='md:text-2xl text-xl font-semibold text-center text-white mb-8'>CONTAGEM REGRESSIVA</h2>
        <Countdown targetDate="2024-10-19T00:00:00" />
      </div>
      <div className='py-16 w-full bg-white min-h-[338px] flex flex-col items-center justify-center gap-y-10'>
        <div className='w-[102px] h-[136px] ' style={{ backgroundImage: `url(${backgroundImageUp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className='text-[#404951] max-w-4xl text-justify md:text-base px-5 text-sm'>Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento. Estamos muito felizes e contamos com a presença de todos no nosso grande dia. 
          Para isto contamos com sua ajuda clicando no menu “Confirme sua Presença” e preenchendo os dados necessários. Para nos presentear, escolha qualquer item da Lista de Casamento 
          e leia o Qr Code ou chave pix. Fiquem à vontade! Aguardamos vocês no nosso grande dia!</div>
      </div>
      <div className='py-16 w-full bg-[#EBF4FF] h-auto flex flex-col items-center justify-center'>
        <div className='w-[102px] h-[136px] mb-8' style={{ backgroundImage: `url(${backgroundImageUp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <h2 className='text-2xl font-semibold text-center text-[#5D758D] mb-10'>O CASAL</h2>
        <div className='flex justify-center items-center h-auto w-full gap-x-6 mb-20 px-5'>
          <div className='h-auto ' >
            <img className='rounded-full' src={perfilGertrudes}/>
          </div>
          <div className='h-auto' >
            <img className='rounded-full' src={perfilKiko}/>
          </div>
        </div>
        <div className='text-[#404951] max-w-4xl text-justify md:text-base px-5 text-sm'>Histórias de amor existem, e, às vezes, nem nós mesmos acreditamos todo o tempo que já estamos juntos. Porém, o brilho intenso e apaixonado dos nossos olhares nos fazem lembrar o 
          porquê de chegarmos até aqui sem sentir tanto o tempo passar....</div>
        <div className='text-[#404951] max-w-4xl text-justify mb-8 md:text-base px-5 text-sm'>Vamos nos casar! Estamos preparando tudo com muito carinho para curtirmos cada momento com nossos amigos e familiares queridos. Sintam-se especiais por estarem nesse momento único
          em nossas vidas.</div>
        <Carousel />
      </div>
      <div className='py-16 w-full bg-white h-auto flex flex-col items-center justify-center'>
        <div className='w-[102px] h-[136px] mb-8' style={{ backgroundImage: `url(${backgroundImageUp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <h2 className='text-2xl font-semibold text-center text-[#5D758D] mb-12'>PADRINHOS</h2>
        <div className='text-[#404951] max-w-4xl text-justify mb-8 md:text-base px-5 text-sm'>Aos nossos queridos padrinhos: É uma emoção única e indescritível tê-los ao nosso lado e poder partilhar com vocês toda 
        felicidade dessa nova etapa em nossas vidas: nosso casamento! Por isso, desejamos tê-los como testemunhas do nosso sonho e do nosso amor vocês que fazem e fizeram parte da nossa trajetória!</div>
        <PhotoGrid />
      </div>
      <div className='py-16 w-full bg-[#EBF4FF] h-auto flex flex-col items-center justify-center'>
        <div className='w-[102px] h-[136px] mb-8' style={{ backgroundImage: `url(${backgroundImageUp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <h2 className='text-2xl font-semibold text-center text-[#5D758D] mb-12'>CERIMÔNIA</h2>
        <img className='w-[22rem] md:w-[56rem] mb-8' src='./images/igreja.jpeg'/>
        <div className='text-[#404951] max-w-4xl text-justify md:text-base px-5 text-sm'>Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de Deus!</div>
        <div className='text-[#404951] max-w-4xl text-justify mb-8 md:text-base px-5 text-sm'>A cerimônia será rápida e tentaremos ser extremamente pontuais. Contamos com vocês! Dia 19 de outubro de 2024, às 10hrs da manhã. Paróquia Nossa Senhora Da Conceição, Santa Maria/RN, 59464000, Centro.</div>
        <div className='w-[22rem] md:w-[56rem]'>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.8191298494135!2d-35.690685259321505!3d-5.841018844809034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b233d5f63f7c37%3A0x6c8a278d310aafc4!2sIgreja%20Matriz%20Nossa%20Senhora%20da%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1722126980063!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className='py-16 w-full bg-white h-auto flex flex-col items-center justify-center'>
        <div className='w-[102px] h-[136px] mb-8' style={{ backgroundImage: `url(${backgroundImageUp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <h2 className='text-2xl font-semibold text-center text-[#5D758D] mb-12'>RECEPÇÃO</h2>
        <img className='w-[22rem] md:w-[56rem] mb-8' src='./images/recepcao.jpeg'/>
        <div className='text-[#404951] max-w-4xl text-justify mb-8 md:text-base px-5 text-sm'>Os noivos convidam para recepção logo após a cerimônia, no dia 19 de outubro de 2024, no restaurante Xique Xique, localizado em Santa maria/RN, Centro, 59464000.
</div>
        <div className='w-[22rem] md:w-[56rem]'>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.1132536201826!2d-35.69093787918751!3d-5.83965754703319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b233d66982fbc3%3A0x969c69837320e03!2sXique%20Xique!5e0!3m2!1spt-BR!2sbr!4v1722216659959!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className='py-16 w-full bg-white h-auto flex flex-col items-center justify-center'>
        <div className='w-[102px] h-[136px] mb-8' style={{ backgroundImage: `url(${backgroundImageUp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <h2 className='text-2xl font-semibold text-center text-[#5D758D]'>CONFIRME SUA PRESENÇA</h2>
        <RSVPForm />
      </div>
      <div className="h-auto bg-blue-50 flex items-center justify-center w-full">
        <GiftList />
      </div>
    </div>
  );
};

export default App;