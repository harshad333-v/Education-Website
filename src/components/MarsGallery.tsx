import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface MarsPhoto {
  id: number;
  img_src: string;
  camera?: {
    full_name: string;
  };
}

const MarsGallery = () => {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarsPhotos = async () => {
      try {
        const NASA_KEY = 'DEMO_KEY';
        const res = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_KEY}`
        );
        if (res.ok) {
          const data = await res.json();
          setPhotos(data.photos || []);
        }
      } catch (e) {
        console.error('NASA API error', e);
      } finally {
        setLoading(false);
      }
    };

    fetchMarsPhotos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {photos.length === 0 && (
        <div className="col-span-3 text-muted-foreground text-center py-8">
          No photos available at the moment. Try again later!
        </div>
      )}
      {photos.slice(0, 9).map((photo) => (
        <div
          key={photo.id}
          className="relative overflow-hidden rounded-lg group aspect-square"
        >
          <img
            src={photo.img_src}
            alt={photo.camera?.full_name || 'Mars surface'}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
            <p className="text-xs text-white">{photo.camera?.full_name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarsGallery;
