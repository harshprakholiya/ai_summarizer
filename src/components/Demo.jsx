import { useState, useEffect } from 'react';
import { linkIcon } from '../assets';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  const handleSubmit = async (e) => {
    
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* search  */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img src={linkIcon} alt="link icon" className="absolute left-0 ml-3 w-5" />
          <input
            type="url"
            placeholder="Enter URL"
            className="url_input peer"
            value={article.url}
            onChange={(e) => { setArticle({ ...article, url: e.target.value }); }}
            required
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-text:border-gray-700"
          >
            ↵
          </button>
        </form>
        {/* Browser URL history  */}

      </div>
      {/* Display the summary here  */}

    </section>
  );
};

export default Demo;
