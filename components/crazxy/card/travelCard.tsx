export default function TravelDestinations() {
    const destinations = [
      {
        id: 1,
        name: "Paris",
        country: "France",
        rating: 4.8,
        src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        alt: "Paris cityscape"
      },
      
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {destinations.map((destination) => (
          <div key={destination.id} className="rounded-xl overflow-hidden shadow-lg h-96">
            <div
              className="h-full bg-fixed bg-center bg-cover relative"
              style={{ backgroundImage: `url(${destination.src})` }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                <p className="text-white mb-2">{destination.country}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="text-white ml-1">{destination.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }