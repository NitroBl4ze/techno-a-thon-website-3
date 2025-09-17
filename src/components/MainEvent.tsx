import CountdownTimer from '@/components/CountdownTimer';
import logoImage from '../assets/engg-header.png';
import bgImage from '../assets/attachment_2.jpg'; // Make sure to move your uploaded image to src/assets and rename as needed

declare module '*.png' {
  const value: string;
}
declare module '*.jpg' {
  const value: string;
}

const MainEvent = () => {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-hidden relative">
      {/* Background image with 50% opacity */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      />
      {/* Foreground content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Logo Header */}
        <div className="flex flex-col items-center py-3 sm:py-4 lg:py-6 bg-gradient-to-b from-black/60 via-black/30 to-transparent">
          <div className="relative flex items-center justify-center">
            <img 
              src={logoImage} 
              alt="St. Joseph's College of Engineering" 
              className="h-12 sm:h-16 lg:h-20 object-contain relative z-10 drop-shadow-[0_0_16px_white] shadow-white"
            />
            {/* White glow effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="w-full h-full rounded-full blur-2xl opacity-60 bg-white"></div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="text-white text-sm sm:text-base lg:text-lg font-semibold">Department of Electronics and Instrumentation Engineering</h2>
            <p className="text-white/80 text-xs sm:text-sm">presents</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row px-3 sm:px-4 lg:px-6 pb-4 min-h-0">
          {/* Left Side - Video and Timer (both large and filling space) */}
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:pr-6 flex flex-col items-center justify-center h-full">
            <video
              className="w-full max-w-2xl aspect-video object-cover rounded-2xl shadow-2xl mb-8"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="src/assets/hackathon-video.mp4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="w-full flex justify-center">
              <CountdownTimer />
            </div>
          </div>

          {/* Right Side - Schedule */}
          <div className="w-full lg:w-1/2 lg:pl-4">
            <div className="bg-black/30 border border-white/20 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row">
              {/* Day 01 Column */}
              <div className="flex-1 p-2 border-r border-white/20 pr-4">
                <div className="text-center text-arcade-purple font-bold text-base sm:text-lg mb-3 bg-white/90 rounded py-1">DAY 01</div>
                <div className="space-y-2 text-white text-xs sm:text-sm leading-relaxed">
                  <div>Registration<br/>08:00 AM - 09:00 AM</div>
                  <div>Hackathon Begins<br/>09:00 AM Onwards</div>
                  <div>Snacks Time<br/>10:00 AM - 10:30 AM</div>
                  <div>Lunch Time<br/>01:30 PM - 02:00 PM</div>
                  <div>Event Continues<br/>02:00 PM - 05:30 PM</div>
                  <div>Snacks Time<br/>04:30 PM - 05:00 PM</div>
                  <div>First Round of Evaluation<br/>06:00 PM - 10:00 PM</div>
                  <div>Dinner Time<br/>08:30 PM - 09:00 PM</div>
                  <div>Event Continues<br/>09:00 PM - 12:00 AM</div>
                </div>
              </div>

              {/* Day 02 Column */}
              <div className="flex-1 p-2 pl-4">
                <div className="text-center text-arcade-purple font-bold text-base sm:text-lg mb-3 bg-white/90 rounded py-1">DAY 02</div>
                <div className="space-y-2 text-white text-xs sm:text-sm leading-relaxed">
                  <div>Event Continues<br/>12:00 AM - 01:00 AM</div>
                  <div>Snacks Time<br/>01:00 AM - 01:30 AM</div>
                  <div>Networking Activities<br/>02:00 AM - 04:00 AM</div>
                  <div>Snacks Time<br/>04:00 AM - 04:30 AM</div>
                  <div>Breakfast Time<br/>07:00 AM - 08:00 AM</div>
                  <div>Final Evaluation<br/>09:00 AM - 10:30 AM</div>
                  <div>Tea Time<br/>10:00 AM - 10:30 AM</div>
                  <div>Valedictory Ceremony<br/>01:00 PM - 02:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainEvent;
