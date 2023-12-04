### QuickTaps

## Základný rincíp

Princíp KKK spočita v tom, že na rozdieľ od iných klávesníc, kde sú diakritické
znamienka pevne dané, táto klávesnica kombinuje bývalé písanie SMS v dobe 90.
rokov a súčasných moderných klávesníc. V princípe ide o to, že stlačenie
klávesy "l" napíše skutočne literu "l". Akvšak dvojité stlačenie tejto klávesy
napíše literu "ĺ". Teda Slovo "tĺk" by sa mohlo napísať nasledovne:  
'"t", "l", "l", "k".'. Áno, sú to 4 klávesy, avšak bez mačkania špeciálneho
tlačidla "Shift" + "+" na klasických klávesniciach, prípadne mať mačkania alebo
dlhého držania klásevy "l", pre vyvolanie alternatívnych znakov.

## Výhoda takejto klávesnice

Za hlavnú výhodu tejto klávesnice považujem najmä to, že pri takejto klávesnici
zostane zachovaná číslesná rada. Teda, bude stačiť päť riadkov (ak rátame
špeciálny riadok pre medzerník, ALT, CTRL, WIN či prípadne Option a CMD
tlačídlo) alebo 4 rady, ak by sa tieto "špeciálne" klávesy dali umiesniť na iné
miesto. Toto však nie je ešte určené.

## Problém medzi dĺžňom a mäkčneňom

Samozrejme, problémom by mohol byť dĺžek a mäkčeň. Čo ak nechcem napísať zrovna
slovo 'tĺk' ale napríklad 'ľalia'. Stlačním kláves '"1", "l", "a", "l", "i",
"a"' by mohlo dôjsť k napísaniu slovu **ĺalia**. Tento problém by mohlo riešiť
trojité stlačenie klávesi alebo uživateľský či všeobecný slovník.

## Implementácia všeobecného slovníka vs užívateľský slovník

### Všeobecný slovník

Implementácia užívateľského slovníka by nemusel byť v dnešnej dobe problém.
Samozrejme, pokiaľ ide hlavne o základný tvar slova. Takýchto slovíčok určite
existuje viacero. Problém by v tomto prípade bolo iba skloňovanie, kde sa mení
základný tvar slova. Napr. nebol by problém so slovom "Dievča" a "Od dievčaťa",
čo je na tejto klávesnici práve jednoducho dosiahnuteľné. Problémom by mohlo
byť napr. slovíčko "širší" a "širšie". Pri dvojitom stlačení a slovom, ktoré
by vzniklo, t.j. "śirśí", by nebol problém urobiť automatický predklad na
"širší". Lenže v takomto prípade to muselo rozpoznať aj slovo "śirśie" a
preložiť ho správne na "širšie".

#### Riešenie: Implenetácia trojitéto sltačenia

Riešením by mohlo byť sltačenie trojitého stlačenia klávesy čo samozrejme nie
tak konkfortné ako iba dvojité. Znamenalo by to však už užívateľsky náročnejšie
použivanie tejto klávesnice. A to hlavne pri špeciálnych klávesách ako sú napr.
znaky "ô" _alebo "ř", v prípade, že by prišlo aj k implemntácií českého jazkya_,
ktoré sa síce vyskytujú síce poemenej, hlavne "ô" v Slovenskom jazyku ale treba
myslieť aj na jeho implmentáciu. Toto by práve mohol riešiť všeobečný slovník,
prípadne užívateľský slovník, ktorý si rozpíšeme neskôr

## Changelog

[2023-04-12] Rename project
