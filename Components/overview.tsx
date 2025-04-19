import { FaPaperPlane } from 'react-icons/fa';

export const Overview = () => {
  return (
    <div>
      <p className="pb-1 text-4xl font-bold inline border-b-4 border-white rounded-2xl text-blue-500  mb-12">
        Overview. &nbsp;
      </p>
      <p className="text-white m-5 p-2 text-center text-lg ">
        I am a Full Stack Developer with expertise in Next.js, TypeScript,
        Tailwindcss and MERN Stack, dedicated to building high-performance,
        dynamic web applications. With a strong foundation in modern web
        technologies, I excel at creating efficient, scalable, and maintainable
        solutions that prioritize both functionality and user experience.
      </p>

      <div className="flex justify-center">
  <a href="https://drive.google.com/file/d/1ehi6o5QI1frpFlE3sUu6eQEcEsr_E9u6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
    <div className="inline-block p-[1px] rounded-md bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
      <div className="flex items-center gap-2 px-4 py-2 bg-[#0B0D18] text-white rounded-md font-medium">
        Download CV <FaPaperPlane />
      </div>
    </div>
  </a>
</div>



    </div>
  );
};
