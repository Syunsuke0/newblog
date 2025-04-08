"use client";

import { useState } from "react";
import { Tabs, Select } from "@mantine/core";
import Image from "next/image";
import SpotifyPlayer from "../components/SpotifyPlayer";

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
      TopSongs: "79cRtF4KUEkqhjG2ZtTRWI",
    },
    february: {
      TopSongs: "2U2r2wpoxGCU8LCipJMfZX",
    },
    march: {
      TopSongs: "0eIuZdFPrFnElgjOojqSq8",
    },
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
          <Tabs.Tab value="Artists" disabled>
            Artists
          </Tabs.Tab>
          <Tabs.Tab value="Albums" disabled>
            Albums
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Songs">
          <SpotifyPlayer PlaylistId={data[month].TopSongs} />
        </Tabs.Panel>
        {/* <Tabs.Panel value="Artists">
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
          /> */}
        {/* </Tabs.Panel> */}
      </Tabs>
    </div>
  );
};

export default FavMusic;
