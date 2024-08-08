import React from 'react';

const padrinhos = [
  { id: 1, name: "Andressa e Alessandro", imgSrc: "/images/padrinhos01.jpeg" },
  { id: 2, name: "Emmilly e Alan", imgSrc: "/images/padrinhos02.jpeg" },
  { id: 3, name: "Igor", imgSrc: "/images/padrinhos03.jpeg" },
  { id: 4, name: "Junior", imgSrc: "/images/padrinhos04.jpeg" },
  { id: 5, name: "Marcio", imgSrc: "/images/padrinhos05.jpeg" },
  { id: 6, name: "Catiane", imgSrc: "/images/padrinhos06.jpeg" },
  { id: 7, name: "Cristina", imgSrc: "/images/padrinhos07.jpeg" },
  { id: 8, name: "Natalia", imgSrc: "/images/padrinhos08.jpeg" },
  { id: 9, name: "Ana Marcia", imgSrc: "/images/padrinhos09.jpeg" },
  { id: 10, name: "Deassis", imgSrc: "/images/padrinhos10.jpeg" }
];

const PhotoGrid = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {padrinhos.map(padrinho => (
          <div key={padrinho.id} className="flex flex-col items-center">
            <img 
              src={padrinho.imgSrc} 
              alt={padrinho.name} 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-2 shadow-xl"
            />
            <p className="text-center text-blue-900">{padrinho.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;