import React, { useState } from "react";
import emailjs from "emailjs-com";

const RSVPForm = () => {
  const [names, setNames] = useState([""]);
  
  const handleNameChange = (index, event) => {
    const newNames = names.slice();
    newNames[index] = event.target.value;
    setNames(newNames);
  };

  const handleAddName = () => {
    setNames([...names, ""]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const emailParams = {
      to_email: "casamentokikogege@gmail.com",
      subject: "Confirmação de Presença",
      message: `Lista de pessoas:\n${names.join("\n")}`
    };

    emailjs.send(
      "service_ablzo3k", // Substitua por seu Service ID
      "template_lmqr4ec", // Substitua por seu Template ID
      emailParams,
      "Msm5L3-5HUKlcAyHV" // Substitua por seu User ID
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email enviado com sucesso!");
    })
    .catch((err) => {
      console.log("FAILED...", err);
      alert("Falha ao enviar o email.");
    });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {names.map((name, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-[#5D758D]">Nome da Pessoa</label>
            <input
              type="text"
              value={name}
              onChange={(event) => handleNameChange(index, event)}
              className="border border-gray-300 bg-gray-400 rounded p-2 w-full"
              placeholder="Nome da pessoa"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddName}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          + Adicionar mais pessoas
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;