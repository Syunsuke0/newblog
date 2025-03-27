import Image from "next/image";

const ProfilePage = () => {
  return (
    <div>
      <h1 className="text-6xl font-extrabold font-mono italic flex justify-center">
        Profile
      </h1>

      <Image
        src="/user.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className="rounded-full m-auto"
      />

      <h2 className="flex justify-center underline">sh-ke - プロフィール</h2>
      <p className="px-60">
        ガジェット、音楽、アニメが好き。
        <br />
        趣味はライブ参加とベースを弾くこと。
        弾いてみた動画をあげることが今の目標。
        <br />
        好きなアーティストはAooo。
      </p>
    </div>
  );
};

export default ProfilePage;
