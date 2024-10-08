import { useRouter } from 'next/router';

export const Modal = ({ title, tldr, onClose, articleId }) => {
  const router = useRouter();

  const handleReadArticle = () => {
    router.push(`/viewarticle/${articleId}`);
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="relative w-11/12 md:w-1/2 lg:w-1/3 p-6 bg-black border border-cyan-300 rounded-lg shadow-lg text-white">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-cyan-300 transition ease-in-out duration-200"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{tldr}</p>
        <button
          onClick={handleReadArticle}
          className="px-6 py-2 bg-black border border-cyan-300 rounded-lg hover:bg-cyan-800 transition ease-in-out duration-200"
        >
          Read Article
        </button>
      </div>
    </div>
  );
};
