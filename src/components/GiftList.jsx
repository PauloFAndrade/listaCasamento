import React, { useState }from 'react';
import backgroundImageUp from "../assets/img/plantaCima.png"

const gifts = [
  {
    image: './images/presente01.gif',
    description: '1 ano de assinatura Netflix para os noivos',
    price: 'R$ 500,00',
    qrcode: './images/qrcode/qrcode20.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406500.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***6304A364',
  },
  {
    image: './images/presente02.jpg',
    description: 'Ajuda para comprar material dos móveis planejados!',
    price: 'R$ 1.000,00',
    qrcode: './images/qrcode/qrcode23.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c9152040000530398654071000.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***6304DBF4',
  },
  {
    image: './images/presente03.png',
    description: 'Ingressos das Cataratas do Iguaçu',
    price: 'R$ 420,00',
    qrcode: './images/qrcode/qrcode19.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406420.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***6304B503',
  },
  {
    image: './images/presente04N.jpg',
    description: 'Cesta de Café da Manhã do Dia Seguinte',
    price: 'R$ 165,00',
    qrcode: './images/qrcode/qrcode01.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406165.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***630453CA',
  },
  {
    image: './images/presente05.jpg',
    description: 'Aluguel de um bebê para treinamento',
    price: 'R$ 310,00',
    qrcode: './images/qrcode/qrcode13.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406310.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***63042B1E',
  },
  {
    image: './images/presente210.jpg',
    description: 'Curso de culinária para os noivos',
    price: 'R$ 210,00',
    qrcode: './images/qrcode/qrcode06.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406210.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***630411E9',
  },
  {
    image: './images/presente07.jpg',
    description: 'Brinde da noite de núpcia',
    price: 'R$ 400,00',
    qrcode: './images/qrcode/qrcode18.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406400.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***63049993',
  },
  {
    image: './images/presente08.jpg',
    description: 'Capacete contra rolo de macarrão para o noivo',
    price: 'R$ 160,00',
    qrcode: './images/qrcode/qrcode01.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406160.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***63043D08',
  },
  {
    image: './images/presente09.jpg',
    description: 'Conjunto de controle remotos para não ter briga',
    price: 'R$ 185,00',
    qrcode: './images/qrcode/qrcode03.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406185.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***6304943A',
  },
  {
    image: './images/presente10.jpg',
    description: 'Coral pra cantar "Aleluia" na entrada do noivo',
    price: 'R$ 550,00',
    qrcode: './images/qrcode/qrcode21.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406550.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***6304EC0C',
  },
  {
    image: './images/presente11.jpg',
    description: 'Cota "amigos para sempre"',
    price: 'R$ 330,00',
    qrcode: './images/qrcode/qrcode16.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406330.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***6304078E',
  },
  {
    image: './images/presente12.jpg',
    description: 'Cueca sexy para a noite de núpcia',
    price: 'R$ 200,00',
    qrcode: './images/qrcode/qrcode05.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406200.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***630407A1',
  },
  {
    image: './images/presente13.jpg',
    description: 'Espirro em Foz do Iguaçu',
    price: 'R$ 190,00',
    qrcode: './images/qrcode/qrcode04.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406190.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***6304ECB0',
  },
  {
    image: './images/presenteParaguai.jpg',
    description: 'Ajuda para comprinhas no Paraguai',
    price: 'R$ 600,00',
    qrcode: './images/qrcode/qrcode20.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406600.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***6304EC7D',
  },
  {
    image: './images/presenteRoteiro.png',
    description: 'Roteiro personalizado da Lua de Mel',
    price: 'R$ 230,00',
    qrcode: './images/qrcode/qrcode08.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406230.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***63043D79',
  },
  {
    image: './images/presente16.jpg',
    description: 'Kit ressaca para os noivos',
    price: 'R$ 220,00',
    qrcode: './images/qrcode/qrcode07.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406220.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***63042B31',
  },
  {
    image: './images/presenteCobertor.png',
    description: 'Cobertor para a noiva que está coberta de razão',
    price: 'R$ 180,00',
    rcode: './images/qrcode/qrcode03.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406180.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***6304FAF8',
  },
  {
    image: './images/presenteTickets.jpg',
    description: 'Voucher: Primeiro da fila no buffet do casamento',
    price: 'R$ 150,00',
    qrcode: './images/qrcode/qrcode26.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406150.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***630407D0',
  },
  {
    image: './images/presente19.png',
    description: 'Open de engov para a festa',
    price: 'R$ 320,00',
    qrcode: './images/qrcode/qrcode15.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406320.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***630411C6',
  },
  {
    image: './images/presente20.jpg',
    description: 'Patrocine a despedida da noiva',
    price: 'R$ 280,00',
    qrcode: './images/qrcode/qrcode11.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406280.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***6304B5E1',
  },
  {
    image: './images/presente21.jpg',
    description: 'Patrocine a despedida do noivo',
    price: 'R$ 270,00',
    qrcode: './images/qrcode/qrcode10.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406270.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***63046459',
  },
  {
    image: './images/presente22.jpg',
    description: 'Prioridade no quarto de visita na casa dos noivos',
    price: 'R$ 380,00',
    qrcode: './images/qrcode/qrcode17.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406380.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***63048F16',
  },
  {
    image: './images/presente23.jpg',
    description: 'Rolo de macarrão caso o noivo não se comporte',
    price: 'R$ 300,00',
    qrcode: './images/qrcode/qrcode14.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406300.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***63043D56',
  },
  {
    image: './images/presente24.jpg',
    description: 'Roupa sexy para a noiva usar na noite de núpcia',
    price: 'R$ 170,00',
    qrcode: './images/qrcode/qrcode02.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406170.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***63042B40',
  },
  {
    image: './images/presenteJulius.jpg',
    description: 'Só para não dizer que não dei nada',
    price: 'R$ 140,00',
    qrcode: './images/qrcode/qrcode25.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406140.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***63041198',
  },
  {
    image: './images/presente26.jpg',
    description: 'Taxa pra noiva não jogar o buquê pra sua namorada',
    price: 'R$ 250,00',
    qrcode: './images/qrcode/qrcode09.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406250.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***630448C9',
  },
  {
    image: './images/presenteRestaurante.jpg',
    description: 'Patrocine um jantar em Puerto Iguazu na lua de mel',
    price: 'R$ 290,00',
    qrcode: './images/qrcode/qrcode12.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406290.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***6304A3A9',
  },
  {
    image: './images/presente1000.gif',
    description: 'Seja nosso parente preferido! Grande Oportunidade!',
    price: 'R$ 1.500,00',
    qrcode: './images/qrcode/qrcode24.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c9152040000530398654071500.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***63040ADF',
  },
  {
    image: './images/presenteLimousine.jpg',
    description: 'Aluguel de carro para lua de mel',
    price: 'R$ 800,00',
    qrcode: './images/qrcode/qrcode22.jpeg',
    copiaecola: '00020126580014br.gov.bcb.pix0136fc1d14fd-705d-4ac8-8315-e4e87f232c915204000053039865406800.005802BR5924Gertrudes Souza Patricio6009Sao Paulo62070503***6304B5D6',
  }
];

function GiftList() {
    const [sortOption, setSortOption] = useState('A-Z');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openGift, setOpenGift] = useState(null)

    const handleGiftClick = (gift) => {
      console.log(gift)
      setOpenGift(gift);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const handleCopyClick = (pixCode) => {
      navigator.clipboard.writeText(pixCode).then(() => {
        alert('Código Pix copiado para a área de transferência!');
      }, (err) => {
        console.error('Erro ao copiar: ', err);
      });
    };

    const sortedGifts = [...gifts].sort((a, b) => {
      const parsePrice = (price) => {
        // Remove 'R$ ' e qualquer ponto separador de milhar
        return parseFloat(price.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
      };
    
      if (sortOption === 'A-Z') {
        return a.description.localeCompare(b.description);
      } else if (sortOption === 'Menor Preço') {
        return parsePrice(a.price) - parsePrice(b.price);
      } else if (sortOption === 'Maior Preço') {
        return parsePrice(b.price) - parsePrice(a.price);
      }
      return 0;
    });
  return (
    <div className="container mx-auto p-4 flex flex-col items-center w-[25rem] sm:w-1/2">
      <div className='w-[102px] h-[136px] mb-8' style={{ backgroundImage: `url(${backgroundImageUp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <h2 className='text-2xl font-semibold text-center text-[#5D758D] mb-12'>LISTA DE PRESENTES</h2>
      <div className="flex mb-4">
        <select className="ml-4 px-4 py-2 bg-[#5D758D] text-white rounded" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="A-Z">Ordenar lista por: A-Z</option>
          <option value="Menor Preço">Menor Preço</option>
          <option value="Maior Preço">Maior Preço</option>
        </select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {sortedGifts.map((gift, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center "
          >
            <img
              src={gift.image}
              alt={gift.description}
              className="w-full object-fit rounded-2xl mb-4 max-w-[10rem] h-[8rem] sm:max-w-[15rem] sm:h-[12rem]"
            />
            <h2 className="h-[50px] text-sm text-black mb-2 text-center justify-center align-middle">{gift.description}</h2>
            <p className="text-black text-xl font-bold mb-4">{gift.price}</p>
            <button className="py-2 bg-[#6C9ACD] text-white rounded-3xl hover:bg-[#9dc4e3] transition-colors duration-300" onClick={() => handleGiftClick(gift)}>
              Presentear
            </button>
            {isModalOpen && (
            <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex items-center justify-center w-full">
              <div className="bg-white rounded-lg shadow-md w-auto p-6 relative">
                <h2 className="text-2xl font-bold mb-4">Obrigado pelo presente!</h2>
                <p className="mb-4 text-black text-center font-bold">Agradecemos muito pelo seu presente. Aqui estão as informações para o pagamento:</p>
                <div className="mb-4 w-full flex justify-center flex-col items-center">
                  <img
                    src={openGift.qrcode}
                    alt={openGift.copiaecola}
                    className="w-full object-fit rounded-2xl mb-4 max-w-[20rem]"
                  />
                  <label className="block text-gray-700 font-bold">Pix (copia e cola):</label>
                  <div className='w-full flex'>
                    <input
                      type="text"
                      readOnly
                      value={openGift.copiaecola}
                      className="border border-gray-300 bg-green-500 p-2 rounded w-full"
                    />
                      <button
                      onClick={() => {handleCopyClick(openGift.copiaecola)}}
                      className="ml-2 bg-gray-200 p-2 rounded"
                      title="Copiar"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7a3 3 0 013-3h7a3 3 0 013 3v10a3 3 0 01-3 3H11a3 3 0 01-3-3V7z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 7a3 3 0 013-3h1"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 8v10a3 3 0 003 3h7"
                        />
                      </svg>
                    </button>
                  </div>
                  
                </div>
                <div className='flex justify-center'>
                  <button
                    onClick={handleCloseModal}
                    className="bg-red-500 text-white py-2 px-4 rounded mr-2"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default GiftList;