import React, { useState } from 'react';

const SpinTheWheel = () => {
    const wheelOptions = [
        'Prishtine!', 'Prizren!', 'Ferizaj!',
        'Gjakove!','Peje!', 'Gjilan!', 'Mitrovice!'
    ];

    const [selectedOption, setSelectedOption] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);

    const spinWheel = () => {
        setIsSpinning(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * wheelOptions.length);
            setSelectedOption(wheelOptions[randomIndex]);
            setIsSpinning(false);
        }, 800);
    };

    return (
        <div className="container text-center mt-4 p-4">
            <h2 className="mb-4">Spin the Wheel</h2>
            <div className="wheel border border-danger rounded-circle d-flex align-items-center justify-content-center p-3 mb-3">
                {isSpinning ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <div className="selected-option">{selectedOption}</div>
                )}
            </div>
            <button className="btn btn-secondary" onClick={spinWheel} disabled={isSpinning}>
                {isSpinning ? 'Spinning...' : 'Spin'}
            </button>
        </div>
    );
};

export default SpinTheWheel;