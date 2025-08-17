import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HardwareAnnouncement = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    const upcomingDevice = {
        name: "A.U.R.A.", // "Affective Understanding & Response Assistant"
        subName: "Affective Understanding & Response Assistant",
        description: "A dedicated hardware device that provides proactive and private stress management by analyzing your real-time physiological signals with an on-device AI.",
        features: [
            "Real-time stress prediction using an on-device AI model",
            // "Tracks heart rate, HRV, skin temperature, and motion",
            "High-contrast OLED display for instant, screen-free feedback",
            "Haptic and auditory alerts for high-stress events",
            "Ensures 100% privacy with all data processed on the device (Edge AI)",
            "Seamlessly syncs prediction data to the MindSmile app via Bluetooth",
            "Rechargeable battery with USB-C charging"
        ],
        releaseDate: "Soon", // "Q1 2026"
        benefit: "The A.U.R.A. Wellness Companion moves beyond reactive apps to become an intelligent, tangible tool that proactively helps you understand and manage your well-being in the moment."
    };

    if (!isOpen) {
        navigate('/')
        return null
    } // test

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative ">
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-light p-1 transition-colors"
                    aria-label="Close announcement"
                >
                    &times;
                </button>

                {/* Content */}
                <div className="p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">New Hardware Device Coming Soon!</h2>
                        <p className="text-lg text-gray-600">Extending our software solutions with dedicated hardware</p>
                    </div>

                    {/* Device Info */}
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold text-blue-600 text-center mb-2">{upcomingDevice.name}</h3>
                        <h3 className="text-xl font-medium text-blue-600 text-center mb-2">{upcomingDevice.subName}</h3>

                        {/* Release Badge */}
                        <div className="bg-y-400 text-black font-bold px-6 py-1 rounded-full inline-block mx-auto mb-6 text-center">
                            Launching {upcomingDevice.releaseDate}
                        </div>

                        {/* Image Placeholder */}
                        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 mb-8 overflow-hidden">
                            <img
                                src="/prototype.jpg"
                                alt={`${upcomingDevice.name} prototype`}
                                className="object-contain w-full h-full p-4"
                            />
                            <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                                Coming Soon!
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                            {upcomingDevice.description}
                        </p>

                        {/* Benefit Box */}
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
                            <p className="text-gray-800 italic">{upcomingDevice.benefit}</p>
                        </div>

                        {/* Features */}
                        <div className="mb-10">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Key Features:</h4>
                            <ul className="grid md:grid-cols-2 gap-3">
                                {upcomingDevice.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                        {/* <button
                            onClick={() => window.open('/hardware', '_blank')}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                        >
                            Learn More
                        </button> */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                        >
                            Close Announcement
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HardwareAnnouncement;