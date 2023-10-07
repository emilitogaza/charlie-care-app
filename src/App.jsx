import React from "react";
import Button from "../components/Button";
import "../styles/App.scss";

const App = () => {
  return (
    <div className="content">
      <h1>Hej där! Jag är Rubrik 1, den stora bossen här.</h1>
      <h2>Jag är Rubrik 2, flyger högt men ser upp till Rubrik 1.</h2>
      <h3>Plask! Det är Rubrik 3. Jag håller saker vågiga.</h3>
      <h4>Kurragömma! Jag är Rubrik 4. Jag har öga för detaljer.</h4>
      <h5>Rubrik 5 stämmer in. Jag är rytmen som håller saker flytande.</h5>
      <h6>Hej! Jag är Rubrik 6, festens början. Använd mig till det roliga!</h6>

      <p className="subtitle">
        Här är en häftig undertext som ger dig en titt på vad som komma skall.
      </p>

      <p>
        Här är ett glittrigt stycke som ger dig en titt in i typografins värld.
        Bara en aning om vad som kommer.
      </p>

      <p>
        Dyk in i detta exempel! "Lorem ipsum, den tidlösa klassikern. Det är som
        en bekant melodi du inte kan få ur ditt huvud. Dansar genom litteratur
        och grafik, har vi varit partners i design. Så, luta dig tillbaka,
        slappna av, och låt orden ta dig med på en resa.
      </p>

      <p className="body-bold">
        Flexar musklerna. Det här är ett fett stycke. Står högt och starkt. När
        du har något stort att säga, har jag din rygg!
      </p>

      <ul>
        <li>Oordnad och fri som en ballong, det är punkt 1.</li>
        <li>Punkt 2, bara hänger runt, väntar på sin tur.</li>
        <li>Och den bubbliga punkt 3, avslutar trion.</li>
      </ul>

      <ol>
        <li>Nummer ett! Ordnad lista punkt 1 leder paraden.</li>
        <li>Silvermedaljören här, det är ordnad lista punkt 2.</li>
        <li>Fullbordar pallen, det är den alltid pålitliga punkt 3.</li>
      </ol>

      <a href="#!">
        Det här är en magisk länk, klicka för att avslöja dess hemligheter.
      </a>

      <span className="caption">
        Viskande vindar här, jag är din finstämda bildtext. Jag kanske är liten,
        men jag har stora berättelser att berätta under bilderna!
      </span>

      <div className="btn-container">
        <div className="btn-group">
          <Button variant="btn-cta">Call to action</Button>
          <Button variant="btn-cta" icon="ArrowLeft" iconPosition="left">
            Call to action
          </Button>
          <Button variant="btn-cta" icon="ArrowRight" iconPosition="right">
            Call to action
          </Button>
        </div>
        <div className="btn-group">
          <Button variant="btn-primary">Primary button</Button>
          <Button variant="btn-primary" icon="ArrowLeft" iconPosition="left">
            Primary button
          </Button>
          <Button variant="btn-primary" icon="ArrowRight" iconPosition="right">
            Primary button
          </Button>
        </div>
        <div className="btn-group">
          <Button variant="btn-secondary">Secondary button</Button>
          <Button variant="btn-secondary" icon="ArrowLeft" iconPosition="left">
            Secondary button
          </Button>
          <Button
            variant="btn-secondary"
            icon="ArrowRight"
            iconPosition="right"
          >
            Secondary button
          </Button>
        </div>
        <div className="btn-group">
          <Button variant="btn-tertiary">Tertiary button</Button>
          <Button variant="btn-tertiary" icon="ArrowLeft" iconPosition="left">
            Tertiary button
          </Button>
          <Button variant="btn-tertiary" icon="ArrowRight" iconPosition="right">
            Tertiary button
          </Button>
        </div>{" "}
      </div>
      <div className="article">
        <h1>Norrsken: Vad de är &amp; hur man ser dem</h1>
        <p>
          Av <strong>Emil Gaza</strong>, med bidrag från{" "}
          <strong>Emil Gaza</strong>. Senast uppdaterad{" "}
          <strong>7 okt, 2023</strong>.
        </p>

        <p>
          Norrsken är ett atmosfäriskt fenomen som ses som det yttersta inom
          himmelsskådning. Dessa ljus, också kända som{" "}
          <a href="#what-are-nl">aurora borealis</a>, lyser upp himlen över
          områden som Finska viken.
        </p>

        <h2>Avsnitt som täcks:</h2>
        <ul>
          <li>
            <a href="#history-nl">Norrskenets historia</a>
          </li>
          <li>
            <a href="#what-are-nl">Vad är norrsken?</a>
          </li>
          <li>
            <a href="#auroras-other-worlds">Auroror på andra världar</a>
          </li>
          <li>
            <a href="#where-see-nl">Var och när man kan se norrsken</a>
          </li>
          <li>Frågor och svar om norrsken</li>
          <li>Ytterligare resurser</li>
        </ul>

        <h3>Den fängslande dragningskraften av norrsken</h3>
        <p>
          Norrsken har fängslat mänskligheten i årtusenden. Dessa ljusvågor är
          en produkt av en våldsam händelse. Energifyllda partiklar från solen
          kolliderar med jordens övre atmosfär i enorma hastigheter. Jordens
          magnetfält skyddar oss och omdirigerar dessa partiklar till polerna.
          Detta resulterar i det andlösa atmosfäriska fenomenet som ses i både
          norra och södra polerna.
        </p>

        <h4 id="history-nl">Norrskenets historia</h4>
        <p>
          Galileo Galilei namngav det "aurora borealis" 1619. Dock kan en
          grottmålning i Frankrike som är 30,000 år gammal föreställa
          norrskenet. Civilisationer har skapat otaliga ursprungsmyter för dessa
          ljus. Tidiga astronomer dokumenterade dem också. Den vetenskapliga
          förståelsen bakom norrsken började på 1900-talet med den norske
          vetenskapsmannen Kristian Birkelands teori.
        </p>

        <h4 id="what-are-nl">Vad är norrsken?</h4>
        <p>
          Solen stöter ut laddade partiklar som skapar solvinden. När detta
          kolliderar med jordens jonosfär, föds auran. Billy Teets, en astronom,
          förklarar att dessa partiklar interagerar med vår atmosfär.
          Norrskenets färger kommer från atmosfärens kemiska sammansättning.
          Solens utsläpp har en 11-års cykel, som bestämmer norrskenets
          intensitet och frekvens.
        </p>
        <p>
          Forskare fortsätter att studera norrsken. 2018 skickade NASA{" "}
          <strong>
            <a href="https://www.nasa.gov/content/goddard/parker-solar-probe">
              Parker Solar Probe
            </a>
          </strong>{" "}
          för att lära sig mer.
        </p>

        <h5>Norrsken, sydligt ljus och EMIL</h5>
        <p>
          Sydliga ljuset är den södra motsvarigheten till norrsken. Emil Gaza,
          en fysiker, diskuterar utmaningarna med att jämföra de två. Det finns
          också EMIL, ett auroraliknande fenomen med unika egenskaper.
        </p>

        <h4 id="auroras-other-worlds">Auroror på andra världar</h4>
        <p>
          Jeff Regester, en instruktör, förklarar att auroror inte är unika för
          jorden. De förekommer på planeter med en atmosfär och ett magnetfält.
          Auroror har observerats på gasjätteplaneter, samt på Venus och Mars.
          Jupiters auroror är exceptionellt ljusa på grund av dess starka
          magnetfält och den vulkaniska aktiviteten hos dess måne, Io. Forskare
          studerar också möjligheten av auroror i andra solsystem.
        </p>

        <h4 id="where-see-nl">Var och när man kan se norrsken</h4>
        <ol>
          <li>Chad Blakely, en fotograf, nämner att norrsken alltid händer.</li>
          <li>
            Men de bästa platserna att se dem är i den aurorala zonen nära
            Nordpolen. Idealiska platser inkluderar Fairbanks, Yellowknife,
            Svalbard, Abisko nationalpark, Rovaniemi och Island.
          </li>
          <li>
            De bästa månaderna för att se ljusen är mellan september och april.
          </li>
          <li>
            Geofysiska institutet vid University of Alaska Fairbanks föreslår
            att den bästa tiden är mellan 21:00 och 03:00.
          </li>
        </ol>

        <h6>Ytterligare anmärkningar</h6>
        <p>
          Fler resurser och forskning om norrskenets ämne kan ge mer djupgående
          information och klarhet till dem som är intresserade.
        </p>
      </div>
    </div>
  );
};

export default App;
