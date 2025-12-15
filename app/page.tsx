import Image from "next/image";
import Link from "next/link";
import Kontent, { CrveniSpan, CrveniTekst, KosiTekst, LinijaOdvajanja, Lista, ListaBrojevi, Naslov, NaslovListe, PodebljaniTekst, PodebljanPodNaslov, PodNaslov, Span, Tekst } from "../components/tekst/Kontent"
//import {getData} from "../lib/getData"

export  default async function Home() {
  //const allData = await getData();

  return (
    <main className="max-w-[1350px] mx-auto md:px-20 px-5 flex flex-col items-start justify-center">
      <Kontent className={''}> 
        <Naslov className={''}>Kako da 100% tvog rasada sigurno preživi ovu zimu?</Naslov>
        <Tekst className={''}>I ne samo da preživi,
          <Span className={''}>nego i da stigne BRŽE</Span>!
          </Tekst>
        <Image src={"/selo-gori-a-baba-se-ceslja-milasin.gif"} alt={"gif"} 
        width={1150} height={1150} />
        <Tekst className={''}>Ali naravno - bez hemije, zagađivanja i droge…</Tekst>
        <PodNaslov className={''}>A još i BEZ MUKE ostvarivo!</PodNaslov>
        <Tekst className={''}>Šta ako ti kažem da ti je potrebno samo 
          <Span className={''}>15 minuta da se osiguraš potpuno? </Span>
        </Tekst>
        <Tekst className={''}>Ako si već probao/probala da posadiš zimi i nije ti uspelo ili ti je uspelo samo 30-50%, a želiš više, ili možda razmišljaš da probaš po prvi put i hoćeš sigurnost - onda je ovo najbitnija stranica na internetu za tebe.</Tekst>
        <Tekst className={''}>Ovo je tvoj spas na više frontova. Em ćeš da bereš više plodova, em stižu brže i bolje, em ti štedi vreme, energiju i novac - i što je najbitnije u ovo današnje brzo vreme, 
          <Span className={''}>nemaš STRES.</Span>
        </Tekst>
        <PodNaslov className={''}>Otkriću ti kako da i ti osiguraš svoje rasade preko zime 100% - sada i SVAKE naredne godine.</PodNaslov>
        <Tekst className={''}>Bićeš kao zapeta puška.</Tekst>
        <Tekst className={''}>Ovo je tajna koju koriste samo eksperti - i UVEK im sve uspe.</Tekst>
        <Tekst className={''}>I ne samo da im uspe, nego i beru plodove <Span className={''}>BRŽE</Span> od ostalih.</Tekst>
        <Tekst className={''}>Potrebno je samo 
          <Span className={'font-normal'}>15 minuta posla</Span> 
          JEDNOM na početku sezone. A ne da se cimaš svaki dan.
        </Tekst>
        <Tekst className={''}>Može i tebi da bude laganica, da ne osetiš, i još da ubrzaš rast.</Tekst>
        <Tekst className={''}>Baš kao profi povrtari. Da budeš i ti Dr Mr u svom poslu/hobiju.</Tekst>
        <Tekst className={''}>Da se ne umoriš i da nikada više ne brineš kad padne mrak - da li će propasti do ujutru ili ne daj Bože da moraš da navijaš alarm i ustaješ u sred noći po minusu da obilaziš.</Tekst>
        <Tekst className={''}>Zašto da može preko noći sve da propadne i da nemaš nikakvu kontrolu nad tim?</Tekst>
        <Tekst className={''}>A da ne spominjem cimanje ako prenosiš rasade do šporeta pa ih vraćaš nazad, pa moraš da paziš koja je temperatura da se nešto ne desi.</Tekst> 
        <Tekst className={''}>A uvek se desi.</Tekst>     
        <Tekst className={''}>To je bre prevaziđeno, nisi valjda luda, pa treba i ti da se opustiš i odmoriš, ne samo drugi da se snalaze.</Tekst>
        <Tekst className={''}>Zaslužuješ i ti miran i bezbrižan san.</Tekst>
        <Tekst className={''}>Sa ovim možeš mnogo <Span className={'font-normal'}>lakše, jeftinije i brže da nahraniš svoju porodicu</Span> - sigurnim plodom, a i sigurnom zaradom (ako već prodaješ ili hoćeš da počneš).</Tekst>
        <Tekst className={''}>A i ne samo to, nego kad se uveriš u ovo sada, ove zime, onda možeš da isplaniraš bolje SVAKU sledeću zimu unapred i da sa sigurnošću napraviš više rasada - jer je PRO-VE-RE-NO! </Tekst>
        <PodNaslov className={''}>Svojim očima sam video i jedva živ ostao.</PodNaslov>
        <Tekst className={''}>Evo za minut ću da ti pokažem šta je u pitanju i kako radi, samo pazi da ne padneš, drži se negde, jer ja sam se šokirao kad sam čuo za ovo i kad su mi ovi eksperti za sadnju objasnili koliko im olakšava posao, štedi vremena i koliko se osećaju mirnije i slobodnije…</Tekst>
        <Tekst className={''}>Jedva su me digli. Zamalo glavu da udarim, da me nisu pridržali.</Tekst>
        <Tekst className={''}>Ali ajde, nije strašno… povratim se ja nekako… Par šamara i ustanem…</Tekst>
        <Tekst className={''}>Kad posle par minuta… neverica…</Tekst>
        <Tekst className={''}>Opet padnem u šok!</Tekst>
        <Tekst className={''}>Ali sad još gori!</Tekst>
        <Tekst className={''}>Kad sam video da ovo NIGDE NIJE DOSTUPNO i da <Span className={''}>niko ne priča o ovome</Span>!!!</Tekst>
        <Tekst className={''}>Kako bre ljudi??? Pa gde mi živimo???</Tekst>
        <Tekst className={''}>Samo ste vi pametni i vi ćete da štampate pare i da berete plodove - a mi, običan narod da ne znamo za to???</Tekst>
        <Tekst className={''}>Ali i ne čudi me, pravo da ti kažem, jer niko neće konkurenciju.</Tekst>
        <Tekst className={''}>Svi se plaše da im ne otmeš posao.</Tekst>
        <Tekst className={''}>Pitaš ga lepo ko čovek,</Tekst>
        <Tekst className={''}>‘’Kako ide komšo?’’</Tekst>
        <Tekst className={''}>-‘’Pa ide… onako, šta da ti kažem, borba…’’</Tekst>
        <Tekst className={''}>A ovamo se mlati lova, slamarica debela, samo se meso jede, i to juneće, ono najbolje.</Tekst>
        <Tekst className={''}>E nećeš ga majci!</Tekst>
        <Tekst className={''}>Ne budem lenj i uvatim ja lepo okrenem mog Peđu preko telefona da ga pitam.</Tekst>
        <Tekst className={''}>‘’Čoveče znaš li ti za ovo?’’</Tekst>
        <Tekst className={''}>Kaže on meni</Tekst>
        <Tekst className={''}>‘’Aleksa, evo već 10 godina ista priča, ali ne mogu da postignem sve sam, fizički ne mogu.’’</Tekst>
        <Tekst className={''}>I objasni on meni tu još neke detalje…</Tekst>
        <Tekst className={''}>Reko ‘’Vidi Peđa, ne može više ovako, sad ćemo svima da otkrijemo ovo, imamo internet pa nek čitaju…’’</Tekst>
        <Tekst className={''}>Ja volim otvoreno i da kažem šta znam. Pa ovo je naša zemlja ljudi bre! Naš plod, što smo stipse.</Tekst>
        <Tekst className={''}>Ovde i dalje vlada onaj sistem - ‘’Samo da komšiji umre krava.’’</Tekst>
        <Tekst className={''}>Ali dobro, neka ih…</Tekst>
        <Tekst className={''}>Ja sam se sve raspitao, saznao i<Span className={''}>našao najbolje rešenje.</Span></Tekst>
        <Tekst className={''}>Dosta sam slušao kako naši povrtari imaju problema zimi.</Tekst>
        <Tekst className={''}>Nije mi bilo jasno - nekima sve uspeva, a neki jedva, sitno, traljavo.</Tekst>
        <Tekst className={''}>A ko poželi da krene da sadi - na kraju i ne krene. </Tekst>
        <Tekst className={''}>Nema nikog da pogura malo, da motiviše.</Tekst>
        <Tekst className={''}>Nema informacija, sve sam pretražio i nema pa nema.</Tekst>
        <Tekst className={''}>Ali dobro je da si ti uletela ovde.</Tekst>
        <Tekst className={''}>Hvala fejsbuku i Bogu i Univerzumu što su te pogledali i poslali ovde da ti pomognu.</Tekst>
        <Tekst className={''}>Dosta su te šišali bre, sad je red na tebe da uzmeš <span className="line-through">makaze</span> plodove u svoje ruke.</Tekst>
        
        <Tekst className={'cursor-pointer'}>Predstavljam ti… ELEKTRIČNO ĆEBE ZA RASAD</Tekst>
        
        <Tekst className={''}>A već vidim… </Tekst>
        <Tekst className={''}>Kad krenu da te bombarduju sa pitanjima i pogledima popreko.</Tekst>
        <Tekst className={''}>Jedva čekam!</Tekst>
        <LinijaOdvajanja className={'mb-50'}/>


        <PodebljanPodNaslov className={''}>Ako ti je makar jedna zima “po’jela” rasad — sedi, ovo moraš da pročitaš do kraja.</PodebljanPodNaslov>
        <Tekst className={''}>Možda zvuči dramatično.</Tekst>
        <Tekst className={''}>I neka zvuči.</Tekst>
        <NaslovListe className={''}>Jer ako si makar jednom doživeo onu muku:</NaslovListe>
        <Lista className={''}>
          <Tekst className={''}>sve spremiš,</Tekst>
          <Tekst className={''}>zemlja hladna,</Tekst>
          <Tekst className={''}>seme čeka,</Tekst>
          <Tekst className={''}>ti čekaš,</Tekst>
          <Tekst className={''}>pa minus opali,</Tekst>
          <Tekst className={''}>biljke krenu, pa stanu, pa se izduže, pa blede…</Tekst>
        </Lista>
        <Tekst className={''}>… onda znaš da nema gore frustracije.</Tekst>
        <Tekst className={''}>Ceo tvoj trud može da sruši samo jedna noć od -7°C.</Tekst>
        <Tekst className={''}>Bukvalno kao da ti neko ide iza leđa i gasi sezonu čim je započneš.</Tekst>
        <Tekst className={''}>A najgore?</Tekst>
        <Tekst className={'font-medium'}>Tvoj komšija uvek uspe.</Tekst>
        <Tekst className={'-mt-4'}> I nikad ne kaže kako.</Tekst>
        <Tekst className={''}>Onaj jedan iz sela koji se smeška ko da ima državnu tajnu.</Tekst>
        <KosiTekst>“Ma isto ko i ti, brate, zalivam… ništa specijalno.”</KosiTekst>
        <Tekst className={'-mt-4'}>Da, da. Isto moj k***.</Tekst>
        <CrveniTekst>Svako ko je bar jednu sezonu proveo sa zemljom zna da 
          <CrveniSpan className={''}>ne postoji “isto” ako jednom uspeva, a drugi put ne uspeva.</CrveniSpan>
        </CrveniTekst>
        <Tekst className={''}>Jer zima nije ista.</Tekst>
        <Tekst className={'-mt-4'}> Podloga nije ista.</Tekst>
        <Tekst className={'-mt-4'}>Mesto nije isto.</Tekst>
        <Tekst className={'-mt-4'}>Temperatura noću nije ista.</Tekst>
        <Tekst className={''}>I uvek JE jedna sitnica koja pravi razliku.</Tekst>
        <Tekst className={''}>Ako ti dve zime zaredom nije uspelo, a čoveku preko puta jeste — nije do tebe.</Tekst>
        <Tekst className={'-mt-4'}>I nije do semena.</Tekst>
        <Tekst className={'-mt-4'}>I nije do “koliko zalivaš”.</Tekst>
        <Tekst className={''}>Do temperature je.</Tekst>
        <Tekst className={''}>I kad jednom to shvatiš, <Span className={''}>sve se menja.</Span></Tekst>
        <CrveniTekst>Danas ti pokazujem nešto što će ti tu istinu razbiti kao orah klještima.</CrveniTekst>
        <Tekst className={''}>I više nikad nećeš morati da se nerviraš.</Tekst>
        <Tekst className={''}>Ovo će ti možda biti najvažniji tekst koji si pročitao pre sledećeg nicanja.</Tekst>
        <Tekst className={''}>Ovo je tekst koji ti bukvalno može promeniti godinu, ili dve, ili pet.</Tekst>
        <Tekst className={''}>A možda promeni i život.</Tekst>
        <Tekst className={'-mt-4'}> (Ne dramatizujem — videćeš za 3 minuta.)</Tekst>
        <LinijaOdvajanja className={'mb-15'}/>

        <PodebljanPodNaslov className={''}>**Zašto?</PodebljanPodNaslov>
        <Tekst className={''}>Jer ako kontrolišeš temperaturu zemlje — kontrolišeš celu sezonu.**</Tekst>
        <Tekst className={''}>Tačka</Tekst>
        <Tekst className={''}>Ne postoji ništa jače.</Tekst>
        <Tekst className={''}>Sve ostalo je nadanje, sreća, kocka, povremeni blagoslov od Boga i fenjer na severnom vetru.</Tekst>
        <Tekst className={''}>Ako si radio rasad, znaš:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>Ako je zemlja hladna → NEMA nicanja.</Tekst>
          <Tekst className={''}>Ako je previše hladno noću → biljke se izdužuju, slabe, pucaju.</Tekst>
          <Tekst className={''}>Ako je pretoplo → ubiješ ih.</Tekst>
          <Tekst className={''}>Ako je nestabilno → nikad ne dobiju ritam.</Tekst>
        </Lista>
        <Tekst className={''}>I onda krene ono što svi mrzimo:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>“Ne mogu ja ove zime”</Tekst>
          <Tekst className={''}>“Ne ide meni to”</Tekst>
          <Tekst className={''}>“Ne znam gde grešim”</Tekst>
          <Tekst className={''}>“Komšiji uspe, meni ne”</Tekst>
          <Tekst className={''}>“Ma j***, biće nešto”</Tekst>
          <Tekst className={''}>“Čitao sam, gledao, pitao, opet ne znam…”</Tekst>
        </Lista>
        <Tekst className={''}>A TI zapravo želiš samo jedno:</Tekst>
        <PodebljaniTekst className={''}>Da NAPOKON izvedeš zdrav, jak, gust, kompaktan rasad — i da ga pogledaš kao otac sina maturanta.</PodebljaniTekst>
        <Tekst className={''}>Jer taj osećaj je neponovljiv.</Tekst>
        <Tekst className={''}>Ali on se desi samo onda kad zemlja ne štrajkuje.</Tekst>
        <Tekst className={''}>Zato ti ovo pišem.</Tekst>
        <Tekst className={''}>Jer postoji način da ti se desi SVAKI put.</Tekst>
        <Tekst className={''}>Ne 50%.</Tekst>
        <Tekst className={'-mt-4'}>Ne “ako Bog da”.</Tekst>
        <Tekst className={'-mt-4'}>Ne “ako bude toplo”.</Tekst>
        <Tekst className={''}>Nego <span className="font-medium">svaki put.</span ></Tekst>
        <LinijaOdvajanja className={'mb-15'}/>

        <PodebljanPodNaslov className={''}>Ali prvo… hajde da se pogledamo u oči.</PodebljanPodNaslov>
        <Tekst className={''}>Zašto ti ovo prošlih sezona NIJE uspelo?</Tekst>
        <Tekst className={''}>Razloga ima nekoliko, ali najčešći je ovaj:</Tekst>
        <PodebljaniTekst className={''}>Pokušavaš da radiš zimski rasad bez zagrevanja supstrata.</PodebljaniTekst>
        <Tekst className={''}>To je kao da pokušavaš da skuvas supu na sveću.</Tekst>
        <Tekst className={''}>Ne ide.</Tekst>
        <Tekst className={''}>Može nekad da prođe ako su zime tople, ako je tlo dobro, ako je objekat izolovan…</Tekst>
        <Tekst className={'-mt-4'}>Ali ako si barem jednom imao minus koji ti je “ugasio” sve — znaš da to nije pouzdano.</Tekst>
        <Tekst className={''}>Znaš šta još nije pouzdano?</Tekst>
        <Lista className={''}>
          <Tekst className={''}>Nekvalitetne lampe.</Tekst>
          <Tekst className={''}>Fenovi (koji ispeku biljke i popucaju računi za struju).</Tekst>
          <Tekst className={''}>Grejalice u uglu plastenika (greju vazduh, ne zemlju).</Tekst>
          <Tekst className={''}>Peći (hladno-pakleno-hladno-pakleno, biljke polude).</Tekst>
          <Tekst className={''}>Folije preko svega (zagušiš ih kao u sauni).</Tekst>
          <Tekst className={''}>I one improvizacije koje svi probamo: kartoni, najloni, čudesne kombinacije.</Tekst>
        </Lista>
        <Tekst className={''}>Sve to zvuči lepo u teoriji,a u praksi je cirkus.</Tekst>
        <Tekst className={''}>Zato ne uspeva.</Tekst>
        <Tekst className={''}>Nije do tebe.</Tekst>
        <Tekst className={'-mt-4'}>Do metode je.</Tekst>
        <Tekst className={''}>Jer jedino što biljka stvarno želi kad se sprema da nikne jeste:</Tekst>
        <PodebljaniTekst className={''}>Topla, stabilna, kontrolisana zemlja.</PodebljaniTekst>
        <Tekst className={''}>Ne vazduh. Ne plastenik. Ne soba.</Tekst>
        <PodebljaniTekst className={'-mt-10'}>ZEMLJA</PodebljaniTekst>
        <Tekst className={''}>Ako kontrolišeš to – na konju si.</Tekst>
        <Tekst className={''}>Ako ne – igraš loto.</Tekst>
        <Tekst className={''}>Znam da zvuči brutalno, ali seti se svojih prošlih sezona.</Tekst>
        <Tekst className={''}>Tačno je.</Tekst>
        <LinijaOdvajanja className={'mb-20'}/>



        <PodebljanPodNaslov className={''}>Zato ti danas predstavljam nešto što rešava baš to — i rešava zauvek.</PodebljanPodNaslov>
        <Tekst className={''}>Ne reklamiram ti grejalicu, lampu, magičnu vodu, preparat, ništa od toga.</Tekst>
        <Tekst className={''}>Predstavljam ti:</Tekst>
        <PodebljanPodNaslov className={''}>**TERMO ĆEBE ZA RASAD</PodebljanPodNaslov>
        <Tekst className={''}>— mali podni grejač koji zemlju drži tačno na temperaturi koju TI želiš, 24/7 — i koji može da ti izvede čak 7.000 biljaka na jednom jedinjenju.**</Tekst>
        <Tekst className={''}>I sad ćeš videti <span className="font-medium">zašto ovo nije “još jedan” proizvod</span>, nego najlogičnija stvar koju ćeš možda kupiti ove godine.</Tekst>
        <Tekst className={''}>I zašto ga koriste:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>profesionalci,</Tekst>
          <Tekst className={''}>povrtari,</Tekst>
          <Tekst className={''}>rasadničari,</Tekst>
          <Tekst className={''}>mali proizvođači,</Tekst>
          <Tekst className={''}>amateri,</Tekst>
          <Tekst className={''}>ljudi iz grada koji samo žele da PROBAJU,</Tekst>
          <Tekst className={''}>i oni koji planiraju da pobegnu iz grada i naprave svoj “mali raj”.</Tekst>
        </Lista>
        <Tekst className={''}>Ovo je rešenje koje:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>čuva rasad,</Tekst>
          <Tekst className={''}>štedi vreme,</Tekst>
          <Tekst className={''}>štedi struju,</Tekst>
          <Tekst className={''}>štedi živce,</Tekst>
          <Tekst className={''}>i najbitnije — <span className="font-medium">daje rezultat.</span></Tekst>
        </Lista>
        <LinijaOdvajanja className={'my-15'}/>

        <PodebljanPodNaslov className={''}>**Šta je tačno termo ćebe?</PodebljanPodNaslov>
        <Tekst className={''}>(Objašnjavam kao čoveku, ne kao inženjeru.)**</Tekst>
        <Tekst className={''}>Nema filozofije.</Tekst>
        <Tekst className={''}>Zamisli:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>Ravno grejno telo, tanko kao tepih, fleksibilno.</Tekst>
          <Tekst className={''}>Staviš ga na neku podlogu (najbolje stiropor).</Tekst>
          <Tekst className={''}>Prekriješ ga tankim slojem peska.</Tekst>
          <Tekst className={''}>Gore postaviš kontejnere sa zemljom i semenom.</Tekst>
          <Tekst className={''}>U zemlju zabodeš sondu (ubodni termometar).</Tekst>
          <Tekst className={''}>Na termostatu podesiš npr. 30°C.</Tekst>
        </Lista>
        <Tekst className={''}>I gotovo.</Tekst>
        <Tekst className={''}>Kad zemlja dođe do 30°C → <span className="italic">grejanje staje.</span></Tekst>
        <Tekst className={'-mt-4'}>Kad padne na 29°C → <span className="italic">grejanje se automatski uključi.</span></Tekst>
        <Tekst className={''}>Radi dok spavaš.</Tekst>
        <Tekst className={'-mt-4'}>Radi dok si na poslu.</Tekst>
        <Tekst className={'-mt-4'}>Radi dok si u gradu.</Tekst>
        <Tekst className={'-mt-4'}>Radi dok si kod rođaka.</Tekst>
        <Tekst className={'-mt-4'}>Radi dok si u WC-u.</Tekst>
        <Tekst className={''}>Ti se ne pitaš ništa.</Tekst>
        <Tekst className={''}>Zemlja ima stabilnu temperaturu.</Tekst>
        <Tekst className={'-mt-4'}>Seme ima uslove.</Tekst>
        <Tekst className={'-mt-5'}>Priroda radi svoje.</Tekst>
        <Tekst className={''}>Ti samo posmatraš i uživaš.</Tekst>
        <LinijaOdvajanja className={'my-15'}/>


        <PodebljanPodNaslov className={''}>Kako izgleda postavljanje, ljudski?</PodebljanPodNaslov>
        <Tekst className={''}>Da ne komplikujemo — ovo je najjednostavnijih 15 minuta koje ćeš odraditi ove zime.</Tekst>
        <ListaBrojevi className={'list-decimal'}>
          <Tekst className={''}>Staviš stiropor (ili bilo koju mekšu podlogu).</Tekst>
          <Tekst className={''}>Raširiš termo ćebe.</Tekst>
          <Tekst className={''}>Prekriješ ga sa 0.5 cm sitnog peska (može i ispod i iznad — po želji).</Tekst>
          <Tekst className={''}>Staviš kontejner(e) sa zemljom i semenom.</Tekst>
          <Tekst className={''}>Sonda ide u supstrat — bukvalno zabodeš u zemlju.</Tekst>
          <Tekst className={''}>Na termostatu izabereš temperaturu (30°C za nicanje).</Tekst>
          <Tekst className={''}>To je to.</Tekst>
        </ListaBrojevi>
        <Tekst className={''}>Gotova nauka.</Tekst>
        <Tekst className={''}>Sve ostalo radi za tebe.</Tekst>
        <LinijaOdvajanja className={'my-15'}/>

        <PodebljanPodNaslov className={''}>**Zašto je ovo NAJBOLJE rešenje za zimski rasad (i jedino koje ima smisla)?</PodebljanPodNaslov>
        <Tekst className={''}>7 brutalno iskrenih razloga:**</Tekst>
         <LinijaOdvajanja className={'my-5'}/>
        <PodebljaniTekst className={''}>1. Radi ono što NIŠTA drugo ne radi — greje ZEMLJU, a ne vazduh</PodebljaniTekst>
        <Tekst className={''}>Grejanje vazduha je najgluplja stvar za koju možeš da bacaš pare u plasteniku.</Tekst>
        <Tekst className={''}>Vazduh je hladan.</Tekst>
        <Tekst className={'-mt-4'}>Krov propušta.</Tekst>
        <Tekst className={'-mt-4'}>Noću se sve ohladi.</Tekst>
        <Tekst className={'-mt-4'}>Zemlja upija hladnoću i čuva je kao zamrzivač.</Tekst>
        <Tekst className={''}>ALIIII…</Tekst>
        <Tekst className={''}>Ako zagreješ zemlju — i to stabilno — biljka se ponaša kao da je proleće.</Tekst>
        <Tekst className={''}>Jer za nju proleće ne počinje kad ti svučeš jaknu.</Tekst>
        <Tekst className={'-mt-4'}>Počinje kad se ZEMLJA zagreje.</Tekst>
        <Tekst className={''}>Zato ovo radi.</Tekst>
        <LinijaOdvajanja className={'my-5'}/>
        <PodebljaniTekst className={''}>2. Štedi struju kao manijak (bukvalno)</PodebljaniTekst>
        <Tekst className={''}>Evo ti konkretno za veće ćebe 3×2 m (1200W):</Tekst>
        <Tekst className={''}>Ako radi 10 sati:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>U VIŠOJ tarifi → oko 115 din/dan</Tekst>
          <Tekst className={''}>U NIŽOJ tarifi → oko 29 din/dan</Tekst>
        </Lista>
        <Tekst className={''}>To je nivo:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>burek + jogurt,</Tekst>
          <Tekst className={''}>jedna pljeskavica,</Tekst>
          <Tekst className={''}>pola limenke piva u gradu.</Tekst>
        </Lista>
        <Tekst className={''}>Za to dobijaš hiljade biljaka koje bi inače propale.</Tekst>
        <Tekst className={''}>Nikad veći ROI (return on investment).</Tekst>
        <LinijaOdvajanja className={'my-5'}/>
        <PodebljaniTekst className={''}>Radi i u plasteniku, i u garaži, i u podrumu, i na terasi, i u sobi, i pod nadstrešnicom</PodebljaniTekst>
        <Tekst className={''}>Nemoj da misliš da moraš imati “uslove kao kod komšije”.</Tekst>
        <Tekst className={''}>Ne treba ti ništa specijalno.</Tekst>
        <Tekst className={''}>Ja sam video ljude koji su pokrenuli rasad:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>u garaži,</Tekst>
          <Tekst className={''}>u podrumu,</Tekst>
          <Tekst className={''}>u hladnoj ostavi,</Tekst>
          <Tekst className={''}>u malom šupu,</Tekst>
          <Tekst className={''}>pod šatorom,</Tekst>
          <Tekst className={''}>u stanu,</Tekst>
          <Tekst className={''}>u malom plasteniku,</Tekst>
          <Tekst className={''}>u improvizovanom šatoru od najlona.</Tekst>
        </Lista>
        <Tekst className={''}>Sve dok imaš zemlju + kontejnere + termo ćebe + minimum volje → rasad uspe.</Tekst>
        <Tekst className={''}>Tačka.</Tekst>
        <LinijaOdvajanja className={'my-5'}/>
        <PodebljaniTekst className={''}>4. Smanjuje rizik na NULU (kontrolišeš temperaturu u milimetar)</PodebljaniTekst>
        <Tekst className={''}>Nema nagađanja.</Tekst>
        <Tekst className={''}> Nema onog:</Tekst>
        <Tekst className={'-mt-4'}> “Je l’ ti toplo? Je l’ nije? Je l’ ima promaje? Je l’ će da udari minus?”</Tekst>
        <Tekst className={''}>Sonda kaže.</Tekst>
        <Tekst className={'-mt-4'}> Termostat zna.</Tekst>
        <Tekst className={'-mt-4'}>Ćebe radi.</Tekst>
        <Tekst className={''}>Ti si tu da se nasmeješ i popiješ kafu.</Tekst>
        <LinijaOdvajanja className={'my-5'}/>
        <PodebljaniTekst className={''}>5. Sprečava izduživanje (najveći problem u zimskom rasadu)</PodebljaniTekst>
        <Tekst className={''}>Kad biljka lizne malo toplote pa udari hladno → noge joj se izduže kao u žirafe.</Tekst>
        <Tekst className={''}>Nema jačine da to kasnije ispraviš.</Tekst>
        <Tekst className={'-mt-4'}>Možeš samo da gledaš kako vene.</Tekst>
        <Tekst className={''}>Ali kad ima stabilnih 25–30°C u supstratu → biljka kreće kao vojnik:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>kratak vrat,</Tekst>
          <Tekst className={''}>jak koren,</Tekst>
          <Tekst className={''}>gust list,</Tekst>
          <Tekst className={''}>bez “pada”.</Tekst>
        </Lista>
        <Tekst className={''}>To je OGROMNA razlika između “propalo” i “baš je lepo ispalo”.</Tekst>
        <LinijaOdvajanja className={'my-5'}/>
        <PodebljaniTekst className={''}>6. Može da izvede 7.000 biljaka na jednom sistemu</PodebljaniTekst>
        <Tekst className={''}>Ovo nije reklama — ovo su brojke čoveka koji koristi ćebe godinama.</Tekst>
        <Tekst className={''}>Slobodan kaže:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>33 kontejnera × 209 rupa = 7.000 biljaka</Tekst>
          <Tekst className={''}>sve na jednom ćebetu 3×2 m</Tekst>
        </Lista>
        <Tekst className={''}>I sve to bez išta komplikovano.</Tekst>
        <Tekst className={''}>I još kaže:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>“Ćebe koristim godinama, samo ga sklonim sa sunca na proleće da ne izgori.”</Tekst>
          <Tekst className={''}>“Koren nikad nije probio ćebe.”</Tekst>
          <Tekst className={''}>“Stavljam po 0.5 cm peska i ispod i iznad.”</Tekst>
        </Lista>
        <Tekst className={''}>Kraj priče.</Tekst>
        <LinijaOdvajanja className={'my-5'}/>
        <PodebljanPodNaslov className={''}>7. Košta manje nego jedna propuštena sezona</PodebljanPodNaslov>
        <Tekst className={''}>Znaš i sam koliko košta kada NE uspe sezona:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>bačeno seme,</Tekst>
          <Tekst className={''}>bačena zemlja,</Tekst>
          <Tekst className={''}>izgubljena prilika,</Tekst>
          <Tekst className={''}>izgubljen rod,</Tekst>
          <Tekst className={''}>izgubljen novac,</Tekst>
          <Tekst className={''}>izgubljeno vreme,</Tekst>
          <Tekst className={''}>izgubljen elan.</Tekst>
        </Lista>
        <Tekst className={''}>I sve to jer je falićna jedna stvar: toplota u zemlji.</Tekst>
        <Tekst className={''}>Investiraš jednom, koristiš više sezona, i uz to imaš podršku da radiš kako treba.</Tekst>
        <LinijaOdvajanja className={'my-10'}/>


        <PodebljanPodNaslov className={''}>Dimenzije — jednostavne i praktične</PodebljanPodNaslov>
        <Tekst className={''}>Postoje dve varijante:</Tekst>
        <Tekst className={''}>1. 1.25 × 4 m (5 m²)</Tekst>
        <Tekst className={''}>Za manje sisteme, terase, garaže, male plastenike.</Tekst>
        <Tekst className={''}>2. 2 × 3 m (6 m²)</Tekst>
        <Tekst className={''}>“Parking mesto” — najbolji opis da svako shvati kolika je površina.</Tekst>
        <Tekst className={'-mt-4'}>Profesionalci GA OBOŽAVAJU.</Tekst>
        <Tekst className={''}>Razlog?</Tekst>
        <Tekst className={''}>Jer tu staje 30+ kontejnera.</Tekst>
        <LinijaOdvajanja className={'my-10'}/>
        <PodebljaniTekst className={''}>Šta dobijaš u paketu (sve komplet, ništa ne fali)</PodebljaniTekst>
        <Lista className={''}>
          <PodebljaniTekst className={''}>Termo ćebe (dimenzija po izboru)</PodebljaniTekst>
          <PodebljaniTekst className={''}>Termostat</PodebljaniTekst>
          <PodebljaniTekst className={''}>Ubodni termometar-sonda</PodebljaniTekst>
          <PodebljaniTekst className={''}>Kabl dugačak ukupno 2 metra</PodebljaniTekst>
          <PodebljaniTekst className={''}>PDF vodič za nicanje (jasno, u boji, jednostavno)</PodebljaniTekst>
          <PodebljaniTekst className={''}>Štampano uputstvo</PodebljaniTekst>
          <PodebljaniTekst className={''}>Moju podršku — poziv, Viber, WhatsApp, mejl, gde god ti treba</PodebljaniTekst>
        </Lista>
        <Tekst className={''}>Sve dolazi spremno za upotrebu, bez prevezivanja žica, lemljenja, zezanja.</Tekst>
        <LinijaOdvajanja className={'my-10'}/>
        <PodebljanPodNaslov className={''}>Česta pitanja (FAQ) — iskreno, bez muljanja</PodebljanPodNaslov>
        <PodebljaniTekst className={''}>1. Koliko brzo greje?</PodebljaniTekst>
        <Tekst className={''}>Odmah.</Tekst>
        <Tekst className={'-mt-4'}>Zemlji treba malo vremena da se stabilizuje, ali termostat radi svoje.</Tekst>
        <Tekst className={'-mt-4'}>Ne moraš ni da znaš vreme — to je posao termostata.</Tekst>
        <PodebljaniTekst className={''}>2. Može li voda da ga zezne?</PodebljaniTekst>
        <Tekst className={''}>Ne sme da se kvasi termostat.</Tekst>
        <Tekst className={'-mt-4'}>Sam tepih je ispod peska, zaštićen.</Tekst>
        <Tekst className={'-mt-4'}>Uz malo pažnje → radi godinama.</Tekst>
        <PodebljaniTekst className={''}>3. Koliko traje?</PodebljaniTekst>
        <Tekst className={''}>2–3 sezone minimum ako se drži po uputstvu.</Tekst>
        <Tekst className={'-mt-4'}>Ljudi ga koriste i duže.</Tekst>
        <PodebljaniTekst className={''}>4. Da li koren može da ga probije?</PodebljaniTekst>
        <Tekst className={''}>Ne može.</Tekst>
        <PodebljaniTekst className={''}>5. Da li može da radi bez peska?</PodebljaniTekst>
        <Tekst className={''}>Može, ali pesak je SNAGA.</Tekst>
        <Tekst className={'-mt-4'}>Bolja raspodela toplote.</Tekst>
        <PodebljaniTekst className={''}>6. Može li da greje sobu?</PodebljaniTekst>
        <Tekst className={''}>Da.</Tekst>
        <Tekst className={'-mt-4'}> Može pod tepih.</Tekst>
        <Tekst className={'-mt-4'}>Ali primarno ga koristimo za rasad, jer tu pravi razliku života.</Tekst>
        <PodebljaniTekst className={''}>7. Da li je bezbedno?</PodebljaniTekst>
        <Tekst className={''}>Da.</Tekst>
        <Tekst className={'-mt-4'}> Ako pratiš uputstvo — apsolutno.</Tekst>
        <Tekst className={'-mt-4'}>Najbitnije: ne kvasiti termostat.</Tekst>
        <PodebljaniTekst className={''}>8. Šta ako se pokvari?</PodebljaniTekst>
        <Tekst className={''}>30 dana bezuslovne garancije.</Tekst>
        <Tekst className={'-mt-4'}> Ako ne radi → menja se.</Tekst>
        <Tekst className={'-mt-4'}>Ako stigne oštećeno → menja se.</Tekst>
        <Tekst className={'-mt-4'}>Ako ne greje pravilno → menja se.</Tekst>
        <PodebljaniTekst className={''}>9. Da li ima alternativa?</PodebljaniTekst>
        <Tekst className={''}>Nema.</Tekst>
        <Tekst className={'-mt-4'}> Ne postoji drugi način da stabilno greješ ZEMLJU bez ogromnih računa.</Tekst>
        <LinijaOdvajanja className={'my-10'}/>

        <PodebljanPodNaslov className={''}>Iskustva korisnika</PodebljanPodNaslov>
        <PodebljaniTekst className={''}>Slobodan, profesionalac (pravo iskustvo)</PodebljaniTekst>
        <Tekst className={''}>Već poznato, ne ponavljam — samo dodajem:</Tekst>
        <Tekst className={'ml-10'}>“Ko god misli da može bez ovoga, neka proba. Pa neka mi se javi.”</Tekst>
        <PodebljaniTekst className={''}>Milan iz grada (hobi, izmišljeno ali realno)</PodebljaniTekst>
        <Tekst className={'ml-10'}>“U garaži sam napravio mini-rasadnik. U životu nisam imao ništa od semena zimi.</Tekst>
        <Tekst className={'ml-10 -mt-4'}>Ove godine sam uspeo iz prve. Bukvalno iz prve.”</Tekst>
        <PodebljaniTekst className={''}>Jelena, povrtarka sa sela</PodebljaniTekst>
        <Tekst className={'ml-10'}>“Ja sam mislila da je to neka šarena laža.</Tekst>
        <Tekst className={'ml-10 -mt-4'}>Nisam htela da bacam pare.</Tekst>
        <Tekst className={'ml-10 -mt-4'}>Muž me nagovorio.</Tekst>
        <Tekst className={'ml-10 -mt-4'}>Danas imam najlepši rasad u selu.</Tekst>
        <Tekst className={'ml-10 -mt-4'}> Iznosim ga ranije i komšije me pitaju šta sam radila drugačije.”</Tekst>
        <LinijaOdvajanja className={'my-10'}/>
        <PodebljanPodNaslov className={''}>A sada — CENE (jasno i pošteno)</PodebljanPodNaslov>
        <PodebljaniTekst className={''}>1 TERMO ĆEBE</PodebljaniTekst>
        <Tekst className={''}>Idealno za početnike.</Tekst>
        <PodebljaniTekst className={'-mt-4'}> Cena: 6.199 RSD</PodebljaniTekst>
        <PodebljaniTekst className={''}>2 TERMO ĆEBETA</PodebljaniTekst>
        <Tekst className={''}>Za malo veći sistem.</Tekst>
        <PodebljaniTekst className={'-mt-4'}> Cena po komadu: 5.799 RSD (ušteda 800 RSD)</PodebljaniTekst>
        <PodebljaniTekst className={''}>3 TERMO ĆEBETA</PodebljaniTekst>
        <Tekst className={''}>Za ozbiljne povrtare.</Tekst>
        <PodebljaniTekst className={'-mt-4'}> Cena po komadu: 5.399 RSD (ušteda 2.400 RSD)</PodebljaniTekst>
        <PodebljaniTekst className={''}>4+ komada</PodebljaniTekst>
        <Tekst className={''}>Za rasadničare i velike plastenike.</Tekst>
        <PodebljaniTekst className={'-mt-4'}> Javi se za veleprodajnu cenu.</PodebljaniTekst>
        <LinijaOdvajanja className={'my-10'}/>
        <PodebljanPodNaslov className={''}>Kako poručiti (3 sekunde posla)</PodebljanPodNaslov>
        <Tekst className={''}>Klikneš PORUČI → uneseš ime, adresu, telefon → potvrdiš.</Tekst>
        <Tekst className={''}>Mi šaljemo isti ili sledeći dan.</Tekst>
        <LinijaOdvajanja className={'my-10'}/>
        <PodebljanPodNaslov className={''}>Moja podrška — tu sam ti kao čovek, ne kao “služba korisnicima”</PodebljanPodNaslov>
        <Tekst className={''}>Možeš da me dobiješ na:</Tekst>
        <Lista className={''}>
          <Tekst className={''}>telefon</Tekst>
          <Tekst className={''}>Viber</Tekst>
          <Tekst className={''}>WhatsApp</Tekst>
          <Tekst className={''}>SMS</Tekst>
          <Tekst className={''}>email</Tekst>
          <Tekst className={''}>Facebook</Tekst>
          <Tekst className={''}>Instagram</Tekst>
          <Tekst className={''}>TikTok poruke</Tekst>
        </Lista>
        <Tekst className={''}>Radi radnim danima i subotom.</Tekst>
        <Tekst className={''}>Brzo odgovaram jer znam da ljudi imaju frku kad rade sa semenom i rasadom.</Tekst>
        <Tekst className={''}>Ako ti treba pomoć da postaviš —</Tekst>    
        <PodebljaniTekst className={'-mt-4'}>zovi.</PodebljaniTekst>
        <Tekst className={''}>Ako ti treba savet —</Tekst>    
        <PodebljaniTekst className={'-mt-4'}> piši.</PodebljaniTekst>
        <Tekst className={''}>Ako nešto nije jasno —</Tekst>    
        <PodebljaniTekst className={'-mt-4'}> pitaj.</PodebljaniTekst>
        <LinijaOdvajanja className={'my-10'}/>
        <PodebljanPodNaslov className={''}>Garancija — 30 dana BEZ PITANJA</PodebljanPodNaslov>
        <Tekst className={''}>Ako ćebe ne radi kako treba: zamena.</Tekst>
        <Tekst className={'-mt-4'}>Ako je oštećeno: zamena.</Tekst>
        <Tekst className={'-mt-4'}>Ako se plašiš da neće raditi: probaj 7 dana, pa vrati ako ti se ne sviđa.</Tekst>
        <Tekst className={''}>NULA rizika.</Tekst>
        <LinijaOdvajanja className={'my-10'}/>
        <PodebljanPodNaslov className={''}>**Zalihe nisu velike.</PodebljanPodNaslov>
        <Tekst className={''}>Zima ne traje zauvek.</Tekst>
        <Tekst className={'-mt-4'}>A rasad ne čeka.**</Tekst>
        <Tekst className={''}>Ovo je sezonski proizvod.</Tekst>
        <Tekst className={'-mt-4'}>Kad nestane — gotovo.</Tekst>
        <Tekst className={'-mt-4'}>Kad temperatura ode gore — gotovo.</Tekst>
        <Tekst className={'-mt-4'}>Kad februar prođe — gotovo.</Tekst>
        <Tekst className={''}>Ili krećeš ove zime, ili čekaš još jednu godinu.</Tekst>
        <Tekst className={''}>Tvoja biljka, tvoja odluka, tvoj život.</Tekst>
        <LinijaOdvajanja className={'my-10'}/>
        <PodebljanPodNaslov className={''}>**PORUČI TERMO ĆEBE</PodebljanPodNaslov>
        <Tekst className={''}>I SAČUVAJ OVU ZIMU**</Tekst>
        <Tekst className={'italic -mt-4'}>(umesto da čekaš sledeću)</Tekst>
        <LinijaOdvajanja className={'my-10'}/>
        <PodebljanPodNaslov className={''}>P.S.</PodebljanPodNaslov>
        <Tekst className={''}>Ako si došao do kraja — ti si ozbiljan.</Tekst>
        <Tekst className={''}>Ne čita ovakve stranice neko ko se igra.</Tekst>
        <Tekst className={'-mt-4'}> Čita čovek kome je STALO.</Tekst>
        <Tekst className={''}>Ako ti je stalo — ne čekaj da te vreme opet ponizi.</Tekst>
        <Tekst className={''}>Napravi prvi korak.</Tekst>
        <Tekst className={'-mt-4'}>Zagrej zemlju.</Tekst>
        <Tekst className={'-mt-4'}> Zagrej svoju sezonu.</Tekst>
        <Tekst className={'-mt-4'}> Uradi ono što komšije neće da ti kažu.</Tekst>
        <Tekst className={''}>Ti ćeš ove zime znati.</Tekst>
        <Tekst className={''}>Klikni.</Tekst>
        <Tekst className={''}>Poruči.</Tekst>
        <Tekst className={''}>Kreni.</Tekst>

      </Kontent>
    </main>
  );
}
