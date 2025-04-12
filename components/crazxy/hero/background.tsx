function Background() {
    const categories = [
      {
        id: 1,
        name: "Electronics",
        description: "Latest gadgets and devices",
        src: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
        alt: "Electronics category background"
      },
      {
        id: 2,
        name: "Fashion",
        description: "Trending clothing and accessories",
        src: "https://images.unsplash.com/photo-1445205170230-053b83016050",
        alt: "Fashion category background"
      },
      {
        id: 3,
        name: "Home Decor",
        description: "Interior design essentials",
        src: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e",
        alt: "Home decor category background"
      },
      {
        id: 4,
        name: "Sports",
        description: "Athletic gear and equipment",
        src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
        alt: "Sports category background"
      },
      {
        id: 5,
        name: "Books",
        description: "Literature and educational materials",
        src: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
        alt: "Books category background"
      },
      {
        id: 6,
        name: "Beauty",
        description: "Cosmetics and personal care",
        src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
        alt: "Beauty category background"
      }
    ];
  
    return (
      <div className="min-h-screen">
        {categories.map((category) => (
          <div
            key={category.id}
            className="h-[50vh] bg-fixed bg-center bg-no-repeat bg-cover relative"
            style={{ backgroundImage: `url(${category.src})` }}
          >
            <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-2">{category.name}</h2>
                <p className="text-xl">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }


  export default Background