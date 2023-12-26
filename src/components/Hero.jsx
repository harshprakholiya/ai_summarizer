import { logo } from '../assets';

const Hero = () => (
  <header className="w-full flex justify-center items-center flex-col">
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <img
        src={logo}
        className="w-28 object-contain"
        alt="logo"
      />
      <button
        type="button"
        onClick={() => { window.open('https://github.com/harshprakholiya/ai_summarizer'); }}
        className="black_btn"
      >GitUb
      </button>
    </nav>
    <h1 className="head_text">
      Summarize your text with <br className="max-md:hidden" />
      <span className="orange_gradient">OpenAI GPT-4</span>
    </h1>
    <h2 className="desc">web application utilizes AI technology to provide powerful text summarization capabilities.</h2>
  </header>
);

export default Hero;
