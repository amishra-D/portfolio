const ProjectCard = ({ Project, idx }) => {
  return (
    <div className='bg-black rounded-xl w-[90vw] sm:w-[320px] relative h-[500px] text-white font-brut p-4 sm:p-6 flex flex-col gap-4 shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-[#CDEA68]/30'>

      <div className='absolute -top-4 -left-2 font-bold text-2xl sm:text-4xl text-[#CDEA68]'>
        #{idx + 1}
      </div>

      <div className='w-full overflow-hidden rounded-lg group'>
        <img
          className='object-cover w-full h-[160px] sm:h-48 group-hover:scale-105 transition-transform duration-500'
          src={Project.image}
          alt={Project.title}
        />
      </div>

      <div className='flex flex-col gap-3 flex-grow'>
        <h1 className='text-base sm:text-xl font-bold text-[#CDEA68]'>
          {Project.title}
        </h1>

        <div className='flex flex-wrap gap-2'>
          {Project.tags.map((tag, index) => (
            <span
              key={index}
              className='bg-[#CDEA68] rounded-full px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-black hover:bg-[#CDEA68]/90 transition-colors'
            >
              {tag}
            </span>
          ))}
        </div>

        <p className='text-sm font-light text-gray-300 truncate-3-lines'>
          {Project.description}
        </p>

        <div className='mt-auto pt-2 border-t border-gray-800'>
          <button
            onClick={() => window.open(Project.url, '_blank')}
            className='text-[#CDEA68] hover:text-[#CDEA68]/80 text-sm font-medium transition-colors flex items-center gap-1'
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
