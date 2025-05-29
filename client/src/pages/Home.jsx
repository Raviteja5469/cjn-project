import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QRCard from '../components/QRCard';
// import mutedVideo from 'https://youtu.be/wL-gzYgunkY'; 

const Home = () => {
    const qrCardsData = [
        {
            title: 'Software Development Intern Interview',
            qrCodeSrc: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://meet.google.com/software-dev-interview-12345',
            preparationItems: [
                'Have your IDE ready (e.g., VS Code).',
                'Be prepared to discuss data structures.',
                'Ensure stable internet connection.',
            ],
        },
        {
            title: 'Marketing Intern Interview',
            qrCodeSrc: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://meet.google.com/marketing-interview-67890',
            preparationItems: [
                'Portfolio/case studies ready.',
                'Knowledge of social media trends.',
                'Prepare questions for our team.',
            ],
        },
        {
            title: 'Data Science Intern Interview',
            qrCodeSrc: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://meet.google.com/data-science-interview-abcde',
            preparationItems: [
                'Python environment setup.',
                'Familiarity with ML concepts.',
                'Questions about our projects.',
            ],
        },
        {
            title: 'UI/UX Design Intern Interview',
            qrCodeSrc: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://meet.google.com/ui-ux-interview-fghij',
            preparationItems: [
                'Design portfolio link.',
                'Knowledge of design principles.',
                'Be ready for a whiteboard challenge.',
            ],
        },
        {
            title: 'Flutter Developer Intern Interview',
            qrCodeSrc: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://meet.google.com/flutter-interview-fltr1',
            preparationItems: [
                'Flutter SDK installed.',
                'Familiarity with Dart basics.',
                'Prepare a small demo app.',
            ],
        },
        {
            title: 'Java Developer Intern Interview',
            qrCodeSrc: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://meet.google.com/java-interview-java1',
            preparationItems: [
                'Java environment setup.',
                'Knowledge of OOP concepts.',
                'Be ready for coding questions.',
            ],
        },
        {
            title: 'Embedded Systems Intern Interview',
            qrCodeSrc: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://meet.google.com/embedded-interview-embd1',
            preparationItems: [
                'Familiarity with microcontrollers.',
                'Basic knowledge of C/C++.',
                'Prepare hardware questions.',
            ],
        },
        {
            title: 'React Developer Intern Interview',
            qrCodeSrc: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://meet.google.com/react-interview-rct1',
            preparationItems: [
                'React project ready.',
                'Understanding of hooks.',
                'Be ready for UI challenges.',
            ],
        },
        {
            title: 'Data Analyst Intern Interview',
            qrCodeSrc: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://meet.google.com/data-analyst-interview-data1',
            preparationItems: [
                'Excel/SQL knowledge.',
                'Familiarity with visualization tools.',
                'Prepare analytical questions.',
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col">
            {/* <Header /> */}

            <main className="flex-grow flex flex-col items-center py-12 px-4">
                {/* Welcome Section with Video */}
                <section className="w-full max-w-6xl text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-cjn-primary mb-6 animate-fade-in">
                        Welcome to CJN Intern Program!
                    </h1>
                    <p className="text-lg text-cjn-text-main mb-10 max-w-2xl mx-auto">
                        Join us to kickstart your career! Watch the video below to learn more, then scan the QR code for your interview track.
                    </p>

                    {/* TV Screen Styled Video Player */}
                    <div className="relative w-full max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-2xl p-6 transform rotate-1">
                        <div className="absolute inset-0 border-8 border-gray-800 rounded-lg shadow-inner"></div>
                        <div className="relative w-full h-0 pb-[56.25%]">
                            {/* <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-md"
                                src="https://youtu.be/wL-gzYgunkY"
                                title="CJN Intern Program Intro"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe> */}

                            <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/LMPvtCrOvZY?autoplay=1&mute=1"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>




                            {/* <video autoPlay muted loop>
        <source src={mutedVideo} />
      </video> */}
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-cjn-text-light text-xs font-bold shadow-lg">
                            CJN
                        </div>
                    </div>
                </section>

                {/* QR Cards Section */}
                <section className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {qrCardsData.map((card, index) => (
                        <QRCard
                            key={index}
                            title={card.title}
                            qrCodeSrc={card.qrCodeSrc}
                            preparationItems={card.preparationItems}
                        />
                    ))}
                </section>

                {/* Important Information Section */}
                <aside className="w-full max-w-md bg-cjn-card-bg rounded-2xl shadow-xl p-8 text-center mb-12 transform hover:scale-[1.01] transition-transform duration-300">
                    <h2 className="text-2xl font-bold text-cjn-primary mb-6">Important Information</h2>
                    <div className="text-cjn-text-main mb-6 space-y-4">
                        <p className="flex items-center justify-center gap-2 text-base">
                            <i className="fas fa-building text-cjn-primary"></i>
                            <span className="font-semibold">Employer:</span> SCIPL
                        </p>
                        <p className="flex items-center justify-center gap-2 text-base">
                            <i className="fas fa-envelope text-cjn-primary"></i>
                            <span className="font-semibold">Email:</span>
                            <a href="mailto:hr@scipl.com" className="text-cjn-primary hover:underline">hr@scipl.com</a>
                        </p>
                        <p className="flex items-center justify-center gap-2 text-base">
                            <i className="fas fa-phone-alt text-cjn-primary"></i>
                            <span className="font-semibold">Phone:</span> +91-9921995815
                        </p>
                    </div>
                    <a
                        href="https://calendly.com/scipl-hr/intern-slot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-cjn-success text-cjn-text-light py-3 px-8 rounded-full text-lg font-bold hover:bg-cjn-success-dark transition-all duration-300 shadow-md"
                    >
                        <i className="fas fa-calendar-alt"></i> Book Your Slot
                    </a>
                    <p className="mt-6 text-xl font-bold text-gray-700 bg-cjn-secondary py-3 px-6 rounded-lg inline-block shadow-sm">
                        Job Code: SCR130
                    </p>
                </aside>
            </main>

            <Footer />
        </div>
    );
};

export default Home;