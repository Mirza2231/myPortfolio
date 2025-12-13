import React from 'react'

const Services = () => {

const servicesData = [
        {
            id: 1,
            icon: "fa-layer-group",
            title: "Web Design",
            description: "Crafting captivating, user-friendly websites that align perfectly with your brand essence."
        },
        {
            id: 2,
            icon: "fa-code",
            title: "Web Development",
            description: "Transforming ideas into powerful, unified solutions with expert coding and robust architecture."
        },
        {
            id: 3,
            icon: "fa-database",
            title: "MERN Stack",
            description: "Full-stack development creating dynamic, high-performance web applications."
        },
        
    ];

    return (
        <>
            <section id="services" className="pb-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black mb-2 font-heading uppercase">My <span className="text-accent">Services</span></h2>
                    <p className="text-text-gray text-lg">High-end solutions for your business needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{servicesData.map((service)=>(
      <div key={service.id} className="bg-bg-card border border-neutral-800 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] group">
                        <i className={`fas ${service.icon} text-3xl text-white mb-5 transition-colors group-hover:text-accent`} />
                        <h3 className="text-2xl font-bold mb-4 font-heading uppercase">{service.title}</h3>
                        <p className="text-text-gray leading-relaxed text-sm">{service.description}</p>
                    </div>

))}

              
                   
                </div>
            </section>

        </>
    )
}

export default Services
