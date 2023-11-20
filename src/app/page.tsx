import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();

  return (
    <main className="w-full">
      <h1>Witaj w Domu Rodziny Quintin!</h1>
      Odkryj Tajemnice i Przygody z Rodziną Quintin! Zapraszamy Cię do świata
      pełnego magii, tajemnic i niekończącej się przygody! Rodzina Quintin,
      znana z odwagi i braterstwa, otwiera swoje drzwi dla każdego, kto pragnie
      dołączyć do naszej podróży po świecie NosTale. Czeka na Ciebie:
      Niezapomniane Misje: Bierz udział w ekscytujących misjach, gdzie każda
      decyzja ma znaczenie. Magiczna Współpraca: Dołącz do naszych członków i
      twórz niepokonane drużyny, by pokonywać największe wyzwania. Sekrety i
      Skarby: Odkrywaj ukryte sekrety i zdobywaj legendarne skarby, wspierając
      się wzajemnie. Rodzinne Wydarzenia: Uczestnicz w wyjątkowych wydarzeniach,
      które jeszcze bardziej zintegrują naszą społeczność. Dołącz do Rodziny
      Quintin!
    </main>
  );
}
