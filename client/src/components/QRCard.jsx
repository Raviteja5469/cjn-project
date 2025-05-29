import React from 'react';

const QRCard = ({ title, qrCodeSrc, preparationItems }) => {
    return (
        <div className="bg-cjn-card-bg border border-cjn-accent-light rounded-xl shadow-md p-6 w-full max-w-xs text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
            <h3 className="text-cjn-primary text-xl font-semibold mb-4">{title}</h3>
            <div className="mb-5">
                <img src={qrCodeSrc} alt={`QR Code for ${title}`} className="w-40 h-40 object-contain border border-cjn-accent-light p-1" />
            </div>
            <ul className="list-none text-left w-full mt-4 space-y-2">
                {preparationItems.map((item, index) => (
                    <li key={index} className="text-sm text-cjn-text-main flex items-start gap-2">
                        <i className="fas fa-check-circle text-cjn-success text-base mt-0.5"></i> {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QRCard;