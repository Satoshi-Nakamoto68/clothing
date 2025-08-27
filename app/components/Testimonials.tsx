import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonialData = [
  {
    name: "Ethan Carter",
    location: "Los Angeles, USA",
    rating: 5,
    avatarInitials: "EC",
    avatarSrc: "/avatars/ethan-carter.jpg",
    quote: "As a collector, finding this specific limited-run hoodie was a mission. Anteres Unlimited had it, authenticated it, and shipped it to me flawlessly. Incredible service and truly global reach. Highly impressed."
  },
  {
    name: "Sophia Dubois",
    location: "Paris, France",
    rating: 5,
    avatarInitials: "SD",
    avatarSrc: "/avatars/sophia-dubois.jpg",
    quote: "The curation of brands is what sets this store apart. It's not just the hype, it's the quality and the story behind each piece. My order arrived in Paris faster than some local shops deliver. Magnifique!"
  },
  {
    name: "Kenji Tanaka",
    location: "Singapore",
    rating: 5,
    avatarInitials: "KT",
    avatarSrc: "/avatars/kenji-tanaka.jpg",
    quote: "Finally, a legit source for US streetwear here in SG. The hoodie I got is 100% authentic, and shipping was way faster than I expected. My go-to store from now on."
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "text-amber-500 fill-amber-500"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            From Our Customers to You
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real feedback from streetwear lovers around the world.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-700 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author Section */}
                <div className="flex items-center gap-3 mt-auto">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatarSrc} alt={`${testimonial.name} avatar`} />
                    <AvatarFallback className="bg-slate-100 text-slate-700 font-semibold">
                      {testimonial.avatarInitials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
