import React, { useState } from 'react';

function Movies() {
  const images = [
    "https://lumiere-a.akamaihd.net/v1/images/simpsons_s33_social_16x9_1920x1080_en_v1_xxxxxx_395a8f3b.png?region=0,0,1920,1080&width=960",
    "https://c4.wallpaperflare.com/wallpaper/468/710/357/the-incredibles-2-2018-movies-movies-hd-wallpaper-preview.jpg",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4EEC6706842D16BB29896B6867602522A5D297BF7672D77F2C84C292EDF69BD7/scale?width=1200&aspectRatio=1.78&format=webp",
    "https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002989?referenceScheme=HeadOffice&allowPlaceHolder=true",
    "https://lumiere-a.akamaihd.net/v1/images/pp_rayaandthelastdragon_herobanner_mobile_21294_0d63eb55.jpeg?region=0,0,640,480",
    "https://images.squarespace-cdn.com/content/v1/5e387eca8235c42f2e4dbe6c/7a5e57da-bd8b-4cd4-bd01-b6d5bfacd751/phineas+and+ferb+collage+by+angelina.png",
    "https://ichef.bbci.co.uk/images/ic/640x360/p0gy73c4.jpg",
    "https://www.hdwallpapers.in/download/mickey_with_minnie_mouse_and_donald_with_daisy_duck_couple_hd_cartoon-HD.jpg",
    "https://www.awn.com/sites/default/files/styles/original/public/image/attached/1025990-stsflfb2560x19201r1rc.jpg?itok=oZPMI6nr",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AC930E6F89267A3A3654CD6D7C9F2B5347D844F8906FDCB063014D459250DE14/scale?width=600&aspectRatio=1.78&format=webp",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A546B855C2A59B8BFB5BD69B1A8FCA0AD898E3A17AF8286930B33F1E343508DE/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
    "https://helios-i.mashable.com/imagery/articles/033kBmLCuB3k8dcc8kpMftI/hero-image.fill.size_1248x702.v1623370357.jpg",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/213EA03F2F1EBD7974EF259CF3398E7C018E6D84E4E6A524A7C7A374322139B7/scale?width=1200&aspectRatio=1.78&format=webp",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/715A9235849E816D4C8A43E462FC3277ADB2EC3F709B5FBDEB509589E0FFD142/scale?width=1200&aspectRatio=1.78&format=webp",
    "https://media.licdn.com/dms/image/D4D12AQFA0NeUflPHZA/article-cover_image-shrink_720_1280/0/1653425672921?e=2147483647&v=beta&t=oqEEIKdMV6uHAHb6XReOOQdUHgl1RK_lTlaNewcnc2Y",
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1429px', margin: '0 auto' }}>
      <h4 style={{ color: 'white', fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>
        Recommended For You
      </h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '80px', marginLeft: '-4%' }}>
        {images.slice(0, 16).map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            style={{
              borderRadius: '12px',
              height: '101%',
              width: '119%',
              overflow: 'hidden',
              border: '2px solid rgba(249, 249, 249, 0.3)',
              transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
              cursor: 'pointer',
            }}
          >
            <img
              src={image}
              alt={`Movie ${index}`}
              style={{ width: '100%', height: '110%' }}
            />
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
        >
          <button
            onClick={goToPreviousImage}
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              fontSize: '36px',
              fontWeight: 'bold',
              cursor: 'pointer',
              padding: '15px',
              transition: 'background-color 0.3s',
              zIndex: 1003,
              left: '20px',
            }}
          >
            ‹
          </button>
          <img
            src={images[currentImageIndex]}
            alt="Selected"
            style={{
              maxWidth: '80%',
              maxHeight: '70%',
              margin: '0 60px',
              border: '2px solid white',
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
              borderRadius: '10px',
              zIndex: 1002,
            }}
          />
          <button
            onClick={goToNextImage}
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              fontSize: '36px',
              fontWeight: 'bold',
              cursor: 'pointer',
              padding: '15px',
              transition: 'background-color 0.3s',
              zIndex: 1003,
              right: '20px',
            }}
          >
            ›
          </button>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              position: 'absolute',
              bottom: '50px',
              zIndex: 1003,
            }}
          >
            <button
              onClick={() => alert('Watch Now clicked!')}
              style={{
                padding: '10px 20px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '18px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                zIndex: 1003,
              }}
            >
              Watch Now
            </button>
          </div>
          <button
            onClick={closeLightbox}
            style={{
              padding: '10px 20px',
              backgroundColor: 'gray',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              zIndex: 1003,
              position: 'absolute',
              top: '20px',
              right: '20px',
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Movies;
