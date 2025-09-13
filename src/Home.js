import React from 'react';
import { Globe, Heart, Briefcase, Leaf, Target, Calendar, Clock, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const RotaractWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/api/placeholder/120/40" alt="Rotary Logo" className="h-8 w-auto" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">PEOPLE</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">PROJECTS</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">GET INVOLVED</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">CLUB STORIES</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">WE CONNECT</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">ABOUT US</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-900 h-96">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">ROTARACT 3150</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Rotaract is Rotary's service club for young men and women ages 18 to 30. Rotaract clubs bring together people who are ready to take action in their communities and around the world. We have over 170,000 members in more than 170 countries, territories, and geographical areas actively making communities better through volunteering and service.
            </p>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">OUR IMPACT</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">YEARS</div>
              <div className="text-xs text-gray-500 mt-2">Established and working on youth development</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">2000+</div>
              <div className="text-sm text-gray-600">VOLUNTEERS</div>
              <div className="text-xs text-gray-500 mt-2">More than 2K volunteers actively working with us</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">400+</div>
              <div className="text-sm text-gray-600">PROJECTS</div>
              <div className="text-xs text-gray-500 mt-2">More than 400 projects under our different service areas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">EVENTS</div>
              <div className="text-xs text-gray-500 mt-2">More than 25 events throughout 2023-24</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">OUR PROGRAMMES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">INTERNATIONAL SERVICE</h3>
              <p className="text-sm text-gray-600">One of our topmost areas where we work on global service projects and include international relations</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">COMMUNITY SERVICE</h3>
              <p className="text-sm text-gray-600">We approach local service every service concern and engage in numerous community service projects</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">PROFESSIONAL DEVELOPMENT</h3>
              <p className="text-sm text-gray-600">Connecting members to professional development that enhance their professional skills and careers</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">SUSTAINABILITY VES</h3>
              <p className="text-sm text-gray-600">We initiative environment to sustainability and climate change actions and we try to improve people's lives</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ROTARY 7 AREAS OF FOCUS</h3>
              <p className="text-sm text-gray-600">Supporting Rotary's key areas including peace building, prevention, clean health, education, economic and community development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recent Projects & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/200" alt="Clean Water Initiative" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Clean Water Initiative</h3>
                <p className="text-gray-600 text-sm mb-4">Providing clean water solutions in remote villages in Karnataka through innovative water management systems.</p>
                <button className="text-blue-600 text-sm font-medium hover:underline">Learn more</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/200" alt="Medical Camp in Rural Areas" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Medical Camp in Rural Areas</h3>
                <p className="text-gray-600 text-sm mb-4">Free medical checkups and medicine distribution in underserved communities across remote areas.</p>
                <button className="text-blue-600 text-sm font-medium hover:underline">Learn more</button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <button className="w-2 h-2 bg-blue-600 rounded-full"></button>
            <button className="w-2 h-2 bg-gray-300 rounded-full"></button>
            <button className="w-2 h-2 bg-gray-300 rounded-full"></button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Annual Blood Donation Drive</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                July 5, 2024
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Clock className="h-4 w-4 mr-2" />
                9:00 AM - 4:00 PM
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                City Social, Hyderabad
              </div>
              <p className="text-sm text-gray-700 mb-4">Join us for our annual blood drive campaign to help save lives and create awareness about the importance of blood donation.</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Register Now
              </button>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Youth Leadership Workshop</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                July 7, 2024
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Clock className="h-4 w-4 mr-2" />
                9:00 AM - 5:00 PM
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                Oul Internet Cafe, Tech Park
              </div>
              <p className="text-sm text-gray-700 mb-4">A workshop focused on developing leadership skills and building young leaders for community service and development.</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Register Now
              </button>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Environmental Clean-up Drive</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                July 28, 2024
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Clock className="h-4 w-4 mr-2" />
                8:00 AM - 12:00 PM
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                Hussain Sagar Lake
              </div>
              <p className="text-sm text-gray-700 mb-4">Help us clean our local lake and environment around the lakeside area. Together we can create a cleaner community.</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Register Now
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="text-blue-600 font-medium hover:underline">View all events</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">
              Established in 2002, Smile Foundation is an Indian development organisation impacting the lives of over 1.5 million children and their families every year, through 400+ welfare projects on education, healthcare, livelihood and women empowerment, in over 2,000 remote villages and urban slums across 25 states of India.
            </p>
            <p className="text-gray-700 mb-8">
              *Team members working together*
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition-colors">
              Learn More About Us →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">History</a></li>
                <li><a href="#" className="hover:text-gray-300">Board & Leadership</a></li>
                <li><a href="#" className="hover:text-gray-300">Policies & Statements</a></li>
                <li><a href="#" className="hover:text-gray-300">Awards & Recognition</a></li>
                <li><a href="#" className="hover:text-gray-300">Where We Work</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">OUR WORK</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">Healthcare</a></li>
                <li><a href="#" className="hover:text-gray-300">Healthcare</a></li>
                <li><a href="#" className="hover:text-gray-300">Women Empowerment</a></li>
                <li><a href="#" className="hover:text-gray-300">Youth Development</a></li>
                <li><a href="#" className="hover:text-gray-300">Livelihoods</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">GET INVOLVED</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">Donate Online</a></li>
                <li><a href="#" className="hover:text-gray-300">Volunteer</a></li>
                <li><a href="#" className="hover:text-gray-300">Fundraise For Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Corporate Partnership</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">RESOURCE CENTER</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">Annual Reports</a></li>
                <li><a href="#" className="hover:text-gray-300">Press Releases</a></li>
                <li><a href="#" className="hover:text-gray-300">Media Coverage</a></li>
                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="bg-blue-600 text-white px-3 py-1 text-sm font-bold inline-block mb-2">
                  DISTRICT 3150
                </div>
                <div className="text-sm text-gray-400">Our Location:</div>
                <div className="text-sm">Hyderabad</div>
              </div>
              
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
                <Twitter className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
                <Instagram className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
                <Youtube className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
                <Linkedin className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
              </div>
            </div>
            
            <div className="text-center mt-6 text-sm text-gray-400">
              © 2024 Rotaract District 3150. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RotaractWebsite;