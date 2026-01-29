import React from "react";
import "./Stories.css";

const images = [
  { id: 1, src: "https://images.stockcake.com/public/2/e/0/2e0449fb-b990-4362-a314-8f515a18b2c3_large/snowy-mountain-reflection-stockcake.jpg", alt: "Artisan 1", desc: "I love cricket - Snowy Mountain Reflection" },
  { id: 2, src: "https://photopxl.com/pxl-content/uploads/2019/06/1.-Title-Image-22Western-Mountain-Landscape-Photography22.jpg", alt: "Artisan 2", desc: "I love cricket - Western Mountain Landscape" },
  { id: 3, src: "https://photopxl.com/pxl-content/uploads/2019/06/9.-Waterfowl-Lakes-Icefield-Parkway-AB.jpg", alt: "Artisan 3", desc: "I love cricket - Waterfowl Lake, Icefield" },
  { id: 4, src: "https://cdn.create.vista.com/api/media/small/321077274/stock-photo-pristine-moraine-lake-overlooks-icy-rocky-mountains-pine-forest-light", alt: "Artisan 4", desc: "I love cricket - Moraine Lake Beauty" },
  { id: 5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuNCZm6HBxWM41uFSyA56VgQ4BEDRFE8KEQ&s", alt: "Artisan 5", desc: "I love cricket - Sunset Over Mountains" },
  { id: 6, src: "https://www.celebritycruises.com/blog/content/uploads/2022/01/most-beautiful-mountains-in-the-world-kirkjufell-iceland-1024x580.jpg", alt: "Artisan 6", desc: "I love cricket - Majestic Valley View" }
];

const Stories = () => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((image, index) => (
          <div key={image.id} className="gallery-item" style={{ "--i": index }}>
            <div className="flip-card">
              <div className="flip-card-inner">
                
                {/* Front Side (Image) */}
                <div className="flip-card-front">
                  <img src={image.src} alt={image.alt} />
                </div>
                
                {/* Back Side (Description) */}
                <div className="flip-card-back">
                  <p>{image.desc}</p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
