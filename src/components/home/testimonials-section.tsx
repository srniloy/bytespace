import { testimonialsData } from '../../data/testimonials';

const { heading, description, testimonials } = testimonialsData;

const SECTION_BACKGROUND = [
    'radial-gradient(circle at 50% 20%, rgba(217, 255, 59, 0.4) 0%, rgba(217, 255, 59, 0) 30%)',
    'radial-gradient(circle at 100% 40%, rgba(217, 255, 59, 0.4) 0%, rgba(217, 255, 59, 0) 30%)',
    'radial-gradient(circle at 0% 90%, rgba(185, 199, 255, 0.65) 0%, rgba(185, 199, 255, 0) 30%)',
    '#ffffff',
].join(', ');

export default function TestimonialsSection() {
    return (
        <section className="relative overflow-hidden py-16 md:py-24 font-sans" style={{ background: SECTION_BACKGROUND }}>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">

                <div className="grid items-start gap-8 md:grid-cols-2 md:gap-16 mb-12 md:mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-[44px] heading-m text-gray-900 max-w-lg mx-auto md:mx-0">
                        {heading}
                    </h2>
                    <p className="text-gray-600 body-m md:body-l max-w-xl mx-auto text-center md:text-justify">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.id}
                            className="bg-white rounded-3xl p-6 md:p-7 shadow-sm flex flex-col items-center text-center md:items-start md:text-left"
                        >
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-14 h-14 rounded-full object-cover mb-5"
                            />

                            <h3 className="heading-xs text-gray-900">{testimonial.name}</h3>
                            <p className="label-s text-persian-blue mb-4">{testimonial.role}</p>

                            <p className="body-m md:body-l text-gray-500 leading-relaxed">{testimonial.quote}</p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
