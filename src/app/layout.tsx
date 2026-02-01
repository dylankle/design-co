import type { Metadata } from "next";
import "./globals.css";
import { League_Gothic } from 'next/font/google';

const leagueGothic = League_Gothic({
    weight: '400',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: "SONG RECCS BY DYLAN LE",
    description: "My Design CO submission",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={leagueGothic.className}>
        <link rel="icon" href="/vinyl-favicon.png" sizes="any"/>
        <body className="song-1">{children}</body>
        </html>
    );
}
