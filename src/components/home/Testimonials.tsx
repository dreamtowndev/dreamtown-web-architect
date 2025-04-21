
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Aarav Sharma',
    position: 'Homeowner',
    quote: 'Dream Town Developers transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. Our new home is exactly what we dreamed of.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Priya Thapa',
    position: 'Business Owner',
    quote: 'Working with Dream Town for our office complex was a seamless experience. They delivered on time, within budget, and maintained excellent communication throughout the project.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Rajesh Gurung',
    position: 'Real Estate Developer',
    quote: 'As a developer who has worked with many construction companies, I can confidently say Dream Town stands out for their professionalism, technical expertise, and quality craftsmanship.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 4,
    name: 'Sita Bhattarai',
    position: 'Hotel Owner',
    quote: 'The renovation of our heritage hotel was a complex project requiring special care. Dream Town not only preserved its historic charm but enhanced it with modern amenities.',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from those who've experienced our commitment to excellence
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <svg className="h-5 w-5 text-construction-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-medium text-construction-dark">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
