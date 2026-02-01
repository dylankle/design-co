"use client";

import { useEffect, useMemo, useState } from "react";

type ThemeKey = "song-1" | "song-2" | "song-3";

type SongPreset = {
    key: ThemeKey;
    title: string;
    artist: string;
    description: string;
};

export default function Page() {
    const presets: SongPreset[] = useMemo(
        () => [
            {
                key: "song-1",
                title: "LANE BOY",
                artist: "TWENTY ONE PILOTS X MUTEMATH",
                description:
                    "HOLY SHMOLY THEY GO CRAZY IN THIS REMIX. GRAB YOURSELF A PAIR OF NICE HEADPHONES AND TURN OFF ALL THE HARDLIGHTS. 5 MINUTES OF BLURRYFACE ERA ON CORTIZOL.",
            },
            {
                key: "song-2",
                title: "BLEED",
                artist: "MALCOLM TODD AND OMAR APOLLO",
                description:
                    "LATE NIGHT DRIVES. HEAD BUMPING. UHHHHH OMAR APOLLO OUT IN THE WILD WITH AN THIS COLLAB. RIFF IS TOO CATCHY.",
            },
            {
                key: "song-3",
                title: "BUTTERFLY BOY",
                artist: "BALU BRIGADA",
                description:
                    "NEW ZEALAND IS REAL. THEY HAVE GREAT ARTISTS. THIS SONG IS THE ONE OF THE BEST END TRACKS ON A RECORD, AND ITS JUST THEIR DEBUT.",
            },
        ],
        []
    );

    const [activeIndex, setActiveIndex] = useState(0);
    const activePreset = presets[activeIndex];

    useEffect(() => {
        const body = document.body;
        body.classList.remove("song-1", "song-2", "song-3");
        body.classList.add(activePreset.key);
    }, [activePreset.key]);

    function applyPreset(index: number) {
        setActiveIndex(index);
    }

    return (
        <main className="page">
            <div className="frame">
                <header className="card card--header">
                    <h1 className="textDisplay textDisplay--title">{activePreset.title}</h1>
                </header>

                <section className="tracks">
                    <div className="tracksStack">
                        <div className="trackRow trackRow--label">TRACKS</div>

                        {presets.map((p, idx) => (
                            <button
                                key={p.key}
                                className={`trackRow ${idx === activeIndex ? "isActive" : ""}`}
                                onClick={() => applyPreset(idx)}
                                type="button"
                            >
                                {p.title}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="card card--content">
                    <div className="textDisplay textDisplay--artist">{activePreset.artist}</div>
                    <p className="textDisplay textDisplay--body">{activePreset.description}</p>
                </section>

                <footer className="card card--footer">
                    <div className="textDisplay textDisplay--footer">
                        FOR DESIGN CO SOFTWARE DEVELOPER CHALLENGE
                    </div>
                </footer>
            </div>
        </main>
    );
}
