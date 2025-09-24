const About = () => {
  return (
    <div className="w-4xl mx-auto">
      <h1 className="text-center text-5xl pt-20 pb-10 font-extrabold">About</h1>
      <h2 className="text-2xl ">このページについて</h2>
      <p>
        プログラミングを学習するにあたり、アウトプットの場としてブログを始めてみました。
        <br />
        継続は苦手ですが、小さな気づきや学びでも少しづつ残していこうと思います。
        <br />
      </p>
      <h2 className="text-2xl mt-6">使用技術</h2>
      <p>
        ・React <br />
        ・Next.js <br /> ・Tailwind CSS <br />
        ・microCMS <br />
      </p>

      {/* <h2 className="text-2xl mt-6">最後に</h2>
      <p>
        何度かの挫折を経て、もう一度チャレンジしてみようと思います。
        <br />
        よろしくお願いします。
      </p> */}
    </div>
  );
};

export default About;
