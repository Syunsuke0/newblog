"use client";

import { useState } from "react";
import { Tabs, Select } from "@mantine/core";
import Image from "next/image";

const FavMusic = () => {
  const [month, setMonth] = useState("march");

  const months = [
    { value: "january", label: "January" },
    { value: "february", label: "February" },
    { value: "march", label: "March" },
    // { value: "april", label: "April" },
  ];
  const data = {
    january: {
      Songs: "/January/topsong.jpg",
      Artists: "/January/topartist.jpg",
      Albums: "/January/topalbum.jpg",
    },
    february: {
      Songs: "/February/topsong.jpg",
      Artists: "/February/topartist.jpg",
      Albums: "/February/topalbum.jpg",
    },
    march: {
      Songs: "/March/topsong.jpg",
      Artists: "/March/topartist.jpg",
      Albums: "/March/topalbum.jpg",
    },
    // april: {
    //   Songs: "/april/song.jpg",
    //   Artists: "/april/artist.jpg",
    //   Albums: "/april/album.jpg",
    // },
  };

  return (
    <div>
      <h1 className="text-6xl font-extrabold font-mono italic flex justify-center">
        FavMusic
      </h1>
      <Select
        data={months}
        className="w-82"
        value={month}
        onChange={(val) => setMonth(val || "march")}
        label="月を選択"
      />

      <Tabs defaultValue="Songs">
        <Tabs.List>
          <Tabs.Tab value="Songs">Songs</Tabs.Tab>
          <Tabs.Tab value="Artists">Artists</Tabs.Tab>
          <Tabs.Tab value="Albums">Albums</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Songs">
          <Image
            src={data[month].Songs}
            width={300}
            height={300}
            alt="Top Song"
            className="rounded-4xl mt-4"
          />
        </Tabs.Panel>
        <Tabs.Panel value="Artists">
          <Image
            src={data[month].Artists}
            width={300}
            height={300}
            alt="Top Artist"
            className="rounded-4xl mt-4"
          />
        </Tabs.Panel>
        <Tabs.Panel value="Albums">
          <Image
            src={data[month].Albums}
            width={300}
            height={300}
            alt="Top Album"
            className="rounded-4xl mt-4"
          />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default FavMusic;
