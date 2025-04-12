export default function TeamProfiles() {
    const team = [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO",
        bio: "10+ years of leadership experience",
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
        alt: "Sarah Johnson profile"
      },
      
    ];
  
    return (
      <div className="space-y-12">
        {team.map((member) => (
          <div key={member.id} className="relative">
            <div
              className="h-48 bg-fixed bg-center bg-cover"
              style={{ backgroundImage: `url(${member.src})` }}
            />
            <div className="bg-white shadow-lg mx-4 -mt-24 relative rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={member.src}
                  alt={member.alt}
                  className="w-24 h-24 rounded-full border-4 border-white"
                />
                <div>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="text-gray-500 mt-2">{member.bio}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }