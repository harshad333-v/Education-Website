import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';

// Import space images
import nebula from '@/assets/space-carousel-1.jpg';
import galaxy from '@/assets/space-carousel-2.jpg';
import earth from '@/assets/space-carousel-3.jpg';
import saturn from '@/assets/space-carousel-4.jpg';
import supernova from '@/assets/space-carousel-5.jpg';

const spaceImages = [
  {
    src: nebula,
    title: 'Cosmic Nebula',
    description: 'A stunning nebula showcasing the birthplace of stars',
  },
  {
    src: galaxy,
    title: 'Spiral Galaxy',
    description: 'Billions of stars forming a majestic spiral galaxy',
  },
  {
    src: earth,
    title: 'Earth from Space',
    description: 'Our beautiful blue planet as seen from the cosmos',
  },
  {
    src: saturn,
    title: 'Saturn',
    description: 'The magnificent ringed planet of our solar system',
  },
  {
    src: supernova,
    title: 'Supernova Remnant',
    description: 'The explosive death of a massive star',
  },
];

const SpaceCarousel = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {spaceImages.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-0 overflow-hidden bg-transparent">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                    {image.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 drop-shadow-md">
                    {image.description}
                  </p>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-background/80 backdrop-blur border-primary/50" />
      <CarouselNext className="right-4 bg-background/80 backdrop-blur border-primary/50" />
    </Carousel>
  );
};

export default SpaceCarousel;
