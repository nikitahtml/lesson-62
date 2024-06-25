import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="page-content">
            <h1>Welcome to Megaline</h1>
            <div className="card">
                <h2 className="card-title">Wired Internet</h2>
                <p className="card-content">
                    Megaline offers high-speed wired internet with reliable and stable connections. Our wired internet plans are designed to meet the needs of both residential and business customers, ensuring fast download and upload speeds for all your online activities.
                </p>
                <ul>
                    <li>Speeds up to 1 Gbps</li>
                    <li>Unlimited data</li>
                    <li>24/7 customer support</li>
                </ul>
            </div>
            <div className="card">
                <h2 className="card-title">Wi-Fi Solutions</h2>
                <p className="card-content">
                    With Megaline's Wi-Fi solutions, you can enjoy seamless wireless connectivity throughout your home or office. Our Wi-Fi services include state-of-the-art routers and extenders to ensure maximum coverage and performance.
                </p>
                <ul>
                    <li>High-speed wireless internet</li>
                    <li>Wide coverage area</li>
                    <li>Easy setup and management</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
