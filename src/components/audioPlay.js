import React from "react";

function AudioPlay({ song }) {
  switch (song) {
    case "avicii":
      return (
        <div style={{ borderRadius: "20px", marginTop: "24px" }}>
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            style={{ borderRadius: "20px", marginTop: "" }}
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/775591270&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>

          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/akos-fidrich"
              title="Akos Fidrich"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Akos Fidrich
            </a>
            ·
            <a
              href="https://soundcloud.com/akos-fidrich/avicii-tribute-concert-in-loving-memory-of-tim-bergling"
              title="Avicii Tribute Concert: In Loving Memory of Tim Bergling"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Avicii Tribute Concert: In Loving Memory of Tim Bergling
            </a>
          </div>
        </div>
      );
    case "martin_garrix":
      return (
        <div>
          <>
            <iframe
              style={{ borderRadius: "20px", marginTop: "24px" }}
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/814376299&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                borderRadius: "20px",
                fontFamily:
                  "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: "100",
              }}
            >
              <a
                href="https://soundcloud.com/fridge112"
                title="Ryan112"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                Martin Garrix
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/fridge112/martin-garrix-live-on-dutch-waters"
                title="MARTIN GARRIX LIVE ON DUTCH WATERS"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                Martin Garrix - On Dutch Waters
              </a>
            </div>
          </>
        </div>
      );
    case "two_friends":
      return (
        <div>
          <>
            <iframe
              style={{ borderRadius: "20px", marginTop: "24px" }}
              width="100%"
              height="300"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317238901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div
              style={{
                fontSize: "10px",
                borderRadius: "20px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: "100",
              }}
            >
              <a
                href="https://soundcloud.com/twofriendsmixes6"
                title="Two Friends Big Bootie Mixes"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                Two Friends{" "}
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/twofriendsmixes6/bb11"
                title="2F Big Bootie Mix, Volume 11 - Two Friends"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                Two Friends - Big Bootie Mix, Volume 11
              </a>
            </div>
          </>
        </div>
      );
    case "queen":
      return (
        <div>
          <iframe
            style={{ borderRadius: "20px", marginTop: "24px" }}
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/649641692&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>

          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/sandra-kuperus"
              title="Sandra Kuperus"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Queen
            </a>
            ·
            <a
              href="https://soundcloud.com/sandra-kuperus/queen-live-aid-1985-full-concert"
              title="Queen - Live Aid 1985 (FULL Concert)"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Queen - Live Aid 1985
            </a>
          </div>
        </div>
      );
    case "queen_love":
      return (
        <div>
          <iframe
            style={{ borderRadius: "20px", marginTop: "24px" }}
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252515029&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>

          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/queen-69312"
              title="Queen"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Queen
            </a>
            ·
            <a
              href="https://soundcloud.com/queen-69312/love-of-my-life-remastered"
              title="Love Of My Life (Remastered 2011)"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Love Of My Life (Remastered 2011)
            </a>
          </div>
        </div>
      );
    case "ed":
      return (
        <div>
          <iframe
            style={{ borderRadius: "20px", marginTop: "24px" }}
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/364845041&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>

          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/itspraddy"
              title="praddy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              praddy
            </a>
            ·
            <a
              href="https://soundcloud.com/itspraddy/ed-sheeran-perfect-exclusive-live-session"
              title="Ed Sheeran - Perfect (Live)"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Ed Sheeran - Perfect (Live)
            </a>
          </div>
        </div>
      );
    case "queen_boh":
      return (
        <div>
          <iframe
            style={{ borderRadius: "20px", marginTop: "24px" }}
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/115417954&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>

          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/rizky-rilos"
              title="rizky.rilos"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              rizky.rilos
            </a>
            ·
            <a
              href="https://soundcloud.com/rizky-rilos/queen-bohemian-rhapsody"
              title="Queen - Bohemian Rhapsody"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Queen - Bohemian Rhapsody
            </a>
          </div>
        </div>
      );
    case "logic":
      return (
        <div className="soundcloud-wrapper">
          <iframe
            style={{ borderRadius: "20px", marginTop: "24px" }}
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/406817457&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/logic_official"
              title="Logic"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Logic
            </a>
            ·
            <a
              href="https://soundcloud.com/logic_official/everyday"
              title="Everyday"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Everyday
            </a>
          </div>
        </div>
      );
    case "avicii_fades":
      return (
        <div className="soundcloud-wrapper">
          <iframe
            style={{ borderRadius: "20px", marginTop: "24px" }}
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/631662144&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/aviciiofficial"
              title="AviciiOfficial"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              AviciiOfficial
            </a>
            ·
            <a
              href="https://soundcloud.com/aviciiofficial/fades-away-feat-noonie-bao"
              title="Fades Away (feat. Noonie Bao)"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Fades Away (feat. Noonie Bao)
            </a>
          </div>
        </div>
      );
    case "avicii_garrix":
      return (
        <div className="soundcloud-wrapper">
          <iframe
            style={{ borderRadius: "20px", marginTop: "24px" }}
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/479203566&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/ingberg"
              title="Ingberg"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Ingberg
            </a>
            ·
            <a
              href="https://soundcloud.com/ingberg/thedaysxhighonlife"
              title="The Days / High On Life"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              The Days / High On Life
            </a>
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
}

export default AudioPlay;
