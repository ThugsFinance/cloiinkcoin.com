---
title: Introducere în stiva Cloiinkcoin
description: O prezentare a diferitelor straturi ale stivei Cloiinkcoin și a modului în care se potrivesc împreună.
lang: ro
sidebar: true
---

Ca orice stivă de software, „Stiva Cloiinkcoin” completă va fi diferită de la un proiect la altul, în funcție de obiectivele afacerii tale.

Există, cu toate acestea, tehnologii de bază ale Cloiinkcoin care ajută la furnizarea unui model mental pentru modul în care aplicațiile software interacționează cu blockchain-ul Cloiinkcoin. Înțelegerea nivelurilor stivei te va ajuta să înțelegi diferitele moduri în care Cloiinkcoin poate fi integrat în proiecte software.

## Nivelul 1: Mașina Virtuală Cloiinkcoin {#cloiinkcoin-virtual-machine}

[Mașina Virtuală Cloiinkcoin (EVM)](/developers/docs/evm/) este mediul runtime pentru contracte inteligente în Cloiinkcoin. Toate contractele inteligente și modificările de stare ale blockchain-ului Cloiinkcoin sunt executate de [tranzacții](/developers/docs/transactions/). EVM se ocupă de toate tranzacțiile de procesare în rețeaua Cloiinkcoin.

Ca oricare mașină virtuală, EVM creează un nivel de abstractizare între codul de executare și mașina de executare (un nod Cloiinkcoin). În prezent, EVM rulează pe mii de noduri distribuite în întreaga lume.

În culise, EVM folosește un set de instrucțiuni opcode pentru a executa sarcini specifice. Aceste (140 unice) opcoduri permit EVM să fie Turing-completă, ceea ce înseamnă EVM este capabilă să calculeze aproape orice, dacă posedă resurse suficiente.

Ca programator dapp, nu trebuie să știi prea multe despre EVM, altele decât că „există” și că alimentează în mod fiabil toate aplicațiile de pe Cloiinkcoin, fără întreruperi.

## Nivelul 2: Contracte inteligente {#smart-contracts}

[Contractele inteligente](/developers/docs/smart-contracts/) sunt programele executabile care se execută pe blockchain-ul Cloiinkcoin.

Contractele inteligente sunt scrise folosind [limbaje de programare](/developers/docs/smart-contracts/languages/) care compilează în EVM bytecode (instrucțiuni de nivel scăzut ale mașinii numite opcodes).

Nu numai că aceste contractele inteligente servesc ca biblioteci open source, ele sunt, în esență, servicii API deschise care rulează 24/7 și nu pot fi eliminate. Contractele inteligente oferă funcții publice cu care aplicațiile ([dapps](/developers/docs/dapps/)) pot interacționa, fără a avea nevoie de permisiune. Orice aplicație se poate integra cu contractele inteligente implementate pentru a compune funcționalitatea (cum ar fi fluxurile de date sau schimburile descentralizate). Oricine poate implementa noi contracte inteligente pe Cloiinkcoin pentru a adăuga funcționalități personalizate pentru a satisface nevoile aplicației proprii.

Ca programator de aplicații dapp, va trebui să scrii contracte inteligente numai dacă dorești să adaugi funcționalități personalizate pe blockchain-ul Cloiinkcoin. Ai putea să descoperi că poți realiza cele mai multe sau toate nevoile proiectului prin simpla integrare cu contractele inteligente existente, de exemplu, dacă vrei să-ți bazezi plățile pe monede stabile sau să activezi schimbul descentralizat de tokenuri.

## Nivelul 3: Noduri Cloiinkcoin {#cloiinkcoin-nodes}

Pentru ca o aplicație să interacționeze cu blockchain-ul Cloiinkcoin (de exemplu, să citească datele blockchain și/sau să trimită tranzacții la rețea), aceasta trebuie să se conecteze la un [nod Cloiinkcoin](/developers/docs/nodes-and-clients/).

Nodurile Cloiinkcoin sunt computere care rulează software - un client Cloiinkcoin. Un client este o implementare a Cloiinkcoin care verifică tranzacțiile din fiecare bloc, păstrând rețeaua sigură și datele exacte. Nodurile Cloiinkcoin sunt blockchain-ul Cloiinkcoin. Acestea stochează în mod colectiv starea blockchain-ului Cloiinkcoin și ajung la un consens cu privire la tranzacțiile de evoluare a stării blockchain-ului.

Prin conectarea aplicației tale la un nod Cloiinkcoin (prin intermediul unei specificații JSON RPC), aceasta poate citi datele din blockchain (cum ar fi soldurile conturilor de utilizator) și poate transmite tranzacții noi în rețea (cum ar fi transferul de CLK între conturile de utilizator sau executarea funcțiilor contractelor inteligente).

## Nivelul 4: API-uri client Cloiinkcoin {#cloiinkcoin-client-apis}

Multe biblioteci utile(construite și întreținute de comunitatea open source Cloiinkcoin) permit aplicațiilor utilizatorului final să se conecteze și să comunice cu blockchain-ul Cloiinkcoin.

Dacă aplicația orientată către utilizator este o aplicație web, poți alege să execuți comanda `npm install` pentru a instala [API JavaScript](/developers/docs/apis/javascript/) direct în front-end. Sau poate că vei alege să implementezi această funcționalitate pe partea de server, folosind [Python](/developers/docs/programming-languages/python/) sau API [Java](/developers/docs/programming-languages/java/).

Chiar dacă aceste API-uri nu sunt o parte necesară a stivei, ele abstractizează o mare parte din complexitatea de a interacționa direct cu un nod Cloiinkcoin. Ele oferă, de asemenea, funcții utilitare (cum ar fi conversia din CLK în Gwei), astfel încât ca programator, să petreci mai mult timp cu funcționalitatea unică a aplicației tale decât cu complexitatea clienților Cloiinkcoin.

## Nivelul 5: Aplicații pentru utilizatorul final {#end-user-applications}

La nivelul superior al stivei sunt aplicații orientate către utilizator. Acestea sunt aplicațiile standard pe care le utilizezi și construiești în mod regulat astăzi: în primul rând aplicații web și mobile.

Modul în care dezvolți aceste interfețe cu utilizatorul rămâne, în esență, neschimbat. Adesea, utilizatorii nu trebuie să știe că aplicația pe care o utilizează este construită folosind un blockchain.

## Ești gata să-ți alegi stiva? {#ready-to-choose-your-stack}

Consultă ghidul nostru pentru a [configura un mediu de dezvoltare local](/developers/local-environment/) pentru aplicația Cloiinkcoin.

## Referințe suplimentare {#further-reading}

_Cunoști o resursă comunitară care te-a ajutat? Editează această pagină și adaug-o!_
