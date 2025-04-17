import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Certifications = () => {
    return(
        <div>
            <p className='pb-1 text-4xl font-bold inline border-b-4 border-white rounded-2xl text-blue-500 '>
                    Certifications & Courses <FontAwesomeIcon icon={faGraduationCap} className='text-4xl inline text-white h-8 ms-3' /> &nbsp;
                  </p>
            <p className='text-indigo-100 m-10 p-3 text-center text-lg '>
        I am a Full Stack Developer with expertise in Next.js, TypeScript, Tailwindcss and MERN Stack, dedicated to building high-performance, dynamic web applications. With a strong foundation in modern web technologies, I excel at creating efficient, scalable, and maintainable solutions that prioritize both functionality and user experience.

        </p>
        </div>
    );

}