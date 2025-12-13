import React from 'react'

const TechStack = () => {
   const skillList = [
      {
        id:1,
        Sname:"React",
        category:"Frontend",
        Icon:"fa-brands fa-react",
        hoverColor:"text-green-500"
      },
            {
        id:2,
        Sname:"Express.js",
        category:"Backend",
        Icon:"fa-brands fa-node",
        hoverColor:"text-green-500"
      },
      {
        id:3,
        Sname:"Next.js",
        category:"Framework",
        Icon:"fa-brands fa-next",
        hoverColor:"text-black"
      },
                  {
        id:4,
        Sname:"Tailwind",
        category:"Css Framework",
        Icon:"fa-brands fa-css3-alt",
        hoverColor:"text-cyan-400"
      },
    ]


  return (
    <>
<section className="py-32 border-t border-white/5">
  <div className="text-center mb-20">
    <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">My Arsenal</h4>
    <h2 className="text-4xl md:text-5xl font-black font-heading uppercase text-white">
      Technologies <span className="text-accent">&amp;</span> Tools.
    </h2>
  </div>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
   
 

    <div className="bg-bg-card border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:border-accent/50 transition-colors group">
      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl group-hover:text-cyan-400 transition-colors">
        <i className="fa-brands fa-css3-alt" />
      </div>
      <div>
        <h4 className="font-bold text-white">Tailwind</h4>
        <p className="text-[10px] text-text-gray uppercase tracking-wider font-bold">Styling</p>
      </div>
    </div>
    <div className="bg-bg-card border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:border-accent/50 transition-colors group">
      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl group-hover:text-green-400 transition-colors">
        <i className="fa-solid fa-database" />
      </div>
      <div>
        <h4 className="font-bold text-white">MongoDB</h4>
        <p className="text-[10px] text-text-gray uppercase tracking-wider font-bold">Database</p>
      </div>
    </div>
    <div className="bg-bg-card border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:border-accent/50 transition-colors group">
      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl group-hover:text-yellow-400 transition-colors">
        <i className="fa-brands fa-js" />
      </div>
      <div>
        <h4 className="font-bold text-white">JavaScript</h4>
        <p className="text-[10px] text-text-gray uppercase tracking-wider font-bold">Language</p>
      </div>
    </div>
    <div className="bg-bg-card border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:border-accent/50 transition-colors group">
      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl group-hover:text-orange-500 transition-colors">
        <i className="fa-brands fa-git-alt" />
      </div>
      <div>
        <h4 className="font-bold text-white">Git</h4>
        <p className="text-[10px] text-text-gray uppercase tracking-wider font-bold">Version Control</p>
      </div>
    </div>
    <div className="bg-bg-card border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:border-accent/50 transition-colors group">
      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl group-hover:text-blue-500 transition-colors">
        <i className="fa-brands fa-figma" />
      </div>
      <div>
        <h4 className="font-bold text-white">Figma</h4>
        <p className="text-[10px] text-text-gray uppercase tracking-wider font-bold">Design</p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default TechStack
