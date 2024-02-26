import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");


  /**
   * Permet d'enregistrer les modifications de l'utilisateur
   * @param e React.ChangeEvent<HTMLInputElement>: évènement détecter dès un changement sur l'input
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };


  /**
   * Permet de générer le qr code en fonction de la saisie de l'utilisateur dans l'input
   * @param e React.MouseEvent<HTMLButtonElement>: évènement détecter dès le click de l'utilisateur
   */
  const handleGenerate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQrCode(input as string);
    setInput("");
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={handleChange}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
