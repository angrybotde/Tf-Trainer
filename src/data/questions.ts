import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // --- EBO: ALLGEMEINES & INFRASTRUKTUR ---
  {
    id: 'ebo_1',
    theme: 'EBO',
    question: 'Was ist der Zweck der Eisenbahn-Bau- und Betriebsordnung (EBO)?',
    answer: 'Die EBO regelt den Bau und Betrieb der Eisenbahnen so, dass die Sicherheit and Ordnung gewährleistet ist.',
    options: [
      'Die EBO regelt den Bau und Betrieb der Eisenbahnen so, dass die Sicherheit and Ordnung gewährleistet ist.',
      'Die EBO regelt die Fahrpreise und Tarife im Schienenverkehr.',
      'Die EBO regelt die Arbeitszeiten der Triebfahrzeugführer.',
      'Die EBO regelt ausschließlich den Bau von neuen Eisenbahnstrecken.'
    ],
    isSafetyCritical: true,
    source: 'EBO §1',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__1.html'
  },
  {
    id: 'ebo_2',
    theme: 'EBO',
    question: 'Wie groß muss der Gleisabstand bei Neubauten auf der freien Strecke mindestens sein?',
    answer: '4,00 m.',
    options: ['4,00 m.', '3,50 m.', '3,80 m.', '4,50 m.'],
    isSafetyCritical: false,
    source: 'EBO §10',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__10.html'
  },
  {
    id: 'ebo_3',
    theme: 'EBO',
    question: 'Wie groß darf der Gleisabstand bei bestehenden Anlagen auf Hauptbahnen nicht unterschreiten?',
    answer: '3,80 m.',
    options: ['3,80 m.', '3,25 m.', '4,00 m.', '3,00 m.'],
    isSafetyCritical: false,
    source: 'EBO §10',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__10.html'
  },
  {
    id: 'ebo_n4',
    theme: 'EBO',
    question: 'Wie wird die Radsatzlast berechnet?',
    answer: '(Fahrzeuggewicht + Ladung) / Anzahl der Achsen',
    options: [
      '(Fahrzeuggesamtgewicht + Ladung) / Anzahl der Achsen', 
      '(Zuggewicht + Ladung) / Anzahl der Achsen', 
      '(Fahrzeuggewicht + Ladung) / Anzahl der Achsen', 
      '(Zuggesamtgewicht) / Anzahl der Achsen'
    ],
    isSafetyCritical: true,
    source: 'EBO §19',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__19.html'
  },

  // --- Abkürzungen ---
  {
    id: 'abk_1',
    theme: 'Abkürzungen',
    question: 'Wofür steht LZB?',
    answer: 'Linienzugbeeinflussung',
    options: [
      'Lineare Zugbeeinflussung',
      'Linienzugbeeinflussung',
      'Leitzentralenbeamter',
      'Längsförmige Zugbeeinflussung'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0054',
    sourceUrl: 'https://www.dbinfrago.com/resource/blob/13309938/be53e2de35c1f14ae6f55d22bd19852a/40800-ab-15-12-2024-data.pdf#page=16'
  },

  // --- RIL 408: DEFINITIONEN ---
  {
    id: 'multi_001',
    theme: 'Definitionen',
    question: 'Welche der folgenden sind Blockstellen?',
    answer: 'Erklärung: Blockstellen teilen die Strecke in Blockabschnitte. Das sind Abzweigstellen, Überleitstellen.',
    options: [
      'Bahnhöfe',
      'Abzweigstellen',
      'Überleitstellen',
      'Anschlussstellen',
      'Haltepunkte',
      'Haltestelle',
      'Deckungsstellen'
    ],
    correctOptions: ['Abzweigstellen', 'Überleitstellen'],
    isSafetyCritical: false,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'def_1',
    theme: 'Definitionen',
    question: 'Was sind Bahnhöfe?',
    answer: 'Bahnhöfe sind Bahnanlagen mit mindestens einer Weiche, in denen Züge beginnen, enden, halten, kreuzen, überholen oder wenden dürfen.',
    options: [
      'Bahnhöfe sind Bahnanlagen mit mindestens einer Weiche, in denen Züge beginnen, enden, halten, kreuzen, überholen oder wenden dürfen.',
      'Bahnhöfe sind Bahnanlagen ohne Weichen, in denen Züge planmäßig halten, beginnen oder enden dürfen.',
      'Bahnhöfe sind Blockstellen der freien Strecke, wo Züge von einer Strecke auf eine andere Strecke übergehen können.',
      'Bahnhöfe sind Bahnanlagen mit mindestens zwei Weichen, in denen Züge nur beginnen oder enden dürfen.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'def_2',
    theme: 'Definitionen',
    question: 'Was ist ein "Blockabschnitt"?',
    answer: 'Gleisabschnitt zwischen zwei Blockstellen.',
    options: [
      'Gleisabschnitt zwischen zwei Blockstellen.',
      'Der Bereich innerhalb eines Bahnhofs.',
      'Ein Gleis, das gesperrt ist.',
      'Der Abstand zwischen zwei Zügen.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'def_3',
    theme: 'Definitionen',
    question: 'Was ist ein "Zug"?',
    answer: 'Züge sind aus Regelfahrzeugen bestehende, auf die freie Strecke übergehende Einheiten.',
    options: [
      'Züge sind aus Regelfahrzeugen bestehende, auf die freie Strecke übergehende Einheiten.',
      'Züge sind alle Fahrzeuge, die sich im Gleis bewegen.',
      'Züge sind Einheiten, die nur innerhalb von Bahnhöfen verkehren.',
      'Züge sind Fahrzeuge, die ausschließlich der Personenbeförderung dienen.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'def_4',
    theme: 'Definitionen',
    question: 'Was sind Abzweigstellen?',
    answer: 'Abzweigstellen sind Blockstellen der freien Strecke, wo Züge von einer Strecke auf eine andere Strecke übergehen können.',
    options: [
      'Abzweigstellen sind Blockstellen der freien Strecke, wo Züge von einer Strecke auf eine andere Strecke übergehen können.',
      'Abzweigstellen sind Bahnanlagen ohne Weichen, wo Züge nur halten dürfen.',
      'Abzweigstellen sind Stellen, an denen Züge von der freien Strecke in einen Bahnhof einfahren.',
      'Abzweigstellen sind Stellen, an denen Züge gewendet werden.'
    ],
    isSafetyCritical: false,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'def_5',
    theme: 'Definitionen',
    question: 'Was sind Haltepunkte?',
    answer: 'Haltepunkte sind Bahnanlagen ohne Weichen, wo Züge planmäßig halten, beginnen oder enden dürfen.',
    options: [
      'Haltepunkte sind Bahnanlagen ohne Weichen, wo Züge planmäßig halten, beginnen oder enden dürfen.',
      'Haltepunkte sind Bahnanlagen mit mindestens einer Weiche.',
      'Haltepunkte sind Stellen der freien Strecke, die nur zum Halten von Güterzügen dienen.',
      'Haltepunkte sind Blockstellen der freien Strecke.'
    ],
    isSafetyCritical: false,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'def_6',
    theme: 'Definitionen',
    question: 'Was sind Haltestellen?',
    answer: 'Haltestellen sind Abzweigstellen, Überleitstellen oder Anschlussstellen, die mit einem Haltepunkt örtlich verbunden sind.',
    options: [
      'Haltestellen sind Abzweigstellen, Überleitstellen oder Anschlussstellen, die mit einem Haltepunkt örtlich verbunden sind.',
      'Haltestellen sind Bahnhöfe ohne Empfangsgebäude.',
      'Haltestellen sind Stellen, an denen Züge nur bei Bedarf halten.',
      'Haltestellen sind Blockstellen ohne Signale.'
    ],
    isSafetyCritical: false,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'def_7',
    theme: 'Definitionen',
    question: 'Was sind Anschlussstellen (Anst)?',
    answer: 'Anschlussstellen sind Bahnanlagen der freien Strecke, wo Züge ein angeschlossenes Gleis als Rangierfahrt befahren können, bei denen die Blockstrecke nicht für einen anderen Zug freigegeben wird.',
    options: [
      'Anschlussstellen sind Bahnanlagen der freien Strecke, wo Züge ein angeschlossenes Gleis als Rangierfahrt befahren können, bei denen die Blockstrecke nicht für einen anderen Zug freigegeben wird.',
      'Anschlussstellen sind Bahnanlagen der freien Strecke, bei denen Bahnhöfe oder Haltepunkte mit einer Abzweigstellen örtlich zusammenfallen.',
      'Anschlussstellen sind Bahnanlagen der freien Strecke, wo Züge ein angeschlossenes Gleis als Rangierfahrt befahren können, bei denen die Blockstrecke für einen anderen Zug freigegeben wird.',
      'Anschlussstellen sind Stellen, an denen Züge Wasser oder Kohle aufnehmen.'
    ],
    isSafetyCritical: false,
    source: 'Ril 408.0055',
    sourceUrl: 'https://www.dbinfrago.com/resource/blob/13309938/be53e2de35c1f14ae6f55d22bd19852a/40800-ab-15-12-2024-data.pdf#pages=21'
  },
  {
    id: 'def_8',
    theme: 'Definitionen',
    question: 'Was sind Ausweichanschlussstellen (Awanst)?',
    answer: 'Ausweichanschlussstellen sind Bahnanlagen der freien Strecke, wo Züge ein angeschlossenes Gleis als Rangierfahrt befahren können, bei denen die Blockstrecke für einen anderen Zug freigegeben wird.',
    options: [
      'Ausweichanschlussstellen sind Bahnanlagen der freien Strecke, wo Züge ein angeschlossenes Gleis als Rangierfahrt befahren können, bei denen die Blockstrecke nicht für einen anderen Zug freigegeben wird.',
      'Ausweichanschlussstellen sind Bahnanlagen der freien Strecke, bei denen Bahnhöfe oder Haltepunkte mit einer Abzweigstellen örtlich zusammenfallen.',
      'Ausweichanschlussstellen sind Bahnanlagen der freien Strecke, wo Züge ein angeschlossenes Gleis als Rangierfahrt befahren können, bei denen die Blockstrecke für einen anderen Zug freigegeben wird.',
      'Ausweichanschlussstellen sind Stellen, an denen Züge Wasser oder Kohle aufnehmen.'
    ],
    isSafetyCritical: false,
    source: 'Ril 408.0055',
    sourceUrl: 'https://www.dbinfrago.com/resource/blob/13309938/be53e2de35c1f14ae6f55d22bd19852a/40800-ab-15-12-2024-data.pdf#pages=21'
  },
  {
    id: 'def_9',
    theme: 'Definitionen',
    question: 'Was sind Deckungsstellen?',
    answer: 'Bahnanlagen der freien Strecke, die den Bahnbetrieb an Gefahrstellen sichern (z.B. bewegliche Brücken, Kreuzungen).',
    options: [
      'Bahnanlagen der freien Strecke, die den Bahnbetrieb an Gefahrstellen sichern (z.B. bewegliche Brücken, Kreuzungen).',
      'Stellen, an denen Züge vor dem Wetter geschützt sind.',
      'Bahnhöfe mit Überdachung.',
      'Stellen, an denen Züge abgestellt werden.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'def_10',
    theme: 'Definitionen',
    question: 'Was sind Blockstellen?',
    answer: 'Bahnanlagen, die eine Strecke in Blockabschnitte unterteilen.',
    options: [
      'Bahnanlagen, die eine Strecke in Blockabschnitte unterteilen.',
      'Stellen, an denen Züge blockiert werden.',
      'Bahnhöfe mit mindestens zwei Gleisen.',
      'Stellen, an denen Züge beladen werden.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'def_11',
    theme: 'Definitionen',
    question: 'Was sind Überleitstellen (Üst)?',
    answer: 'Überleitstellen sind Blockstellen der freien Strecke, wo Züge auf ein anderes Gleis derselben Strecke übergehen können.',
    options: [
      'Überleitstellen sind Blockstellen der freien Strecke, wo Züge auf ein anderes Gleis derselben Strecke übergehen können.',
      'Überleitstellen sind Stellen, an denen Züge von einer Strecke auf eine andere Strecke übergehen.',
      'Überleitstellen sind Bahnhöfe mit mindestens vier Gleisen.',
      'Überleitstellen sind Stellen, an denen Züge gewendet werden.'
    ],
    isSafetyCritical: false,
    source: 'Ril 408.0055',
    sourceUrl: 'https://www.dbinfrago.com/resource/blob/13309938/be53e2de35c1f14ae6f55d22bd19852a/40800-ab-15-12-2024-data.pdf#pages=33'
  },
  {
    id: 'def_12',
    theme: 'Definitionen',
    question: 'Was sind Bahnhofsteile?',
    answer: 'Bahnhofsteile sind durch Signale abgegrenzte Bereiche eines Bahnhofs, die für sich allein die Bedingungen eines Bahnhofs erfüllen.',
    options: [
      'Bahnhofsteile sind durch Signale abgegrenzte Bereiche eines Bahnhofs, die für sich allein die Bedingungen eines Bahnhofs erfüllen.',
      'Bahnhofsteile sind die verschiedenen Bahnsteige eines Bahnhofs.',
      'Bahnhofsteile sind die Gebäude eines Bahnhofs.',
      'Bahnhofsteile sind die Gleise, die nur zum Abstellen von Zügen dienen.'
    ],
    isSafetyCritical: false,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'def_13',
    theme: 'Definitionen',
    question: 'Was sind Hauptgleise?',
    answer: 'Hauptgleise sind die von Zügen planmäßig befahrenen Gleise.',
    options: [
      'Hauptgleise sind die von Zügen planmäßig befahrenen Gleise.',
      'Hauptgleise sind alle Gleise eines Bahnhofs.',
      'Hauptgleise sind die Gleise, die direkt zum Empfangsgebäude führen.',
      'Hauptgleise sind die Gleise der freien Strecke.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'def_14',
    theme: 'Definitionen',
    question: 'Was sind Nebengleise?',
    answer: 'Nebengleise sind Gleise, die nicht planmäßig von Zügen befahren werden (z.B. Abstellgleise).',
    options: [
      'Nebengleise sind Gleise, die nicht planmäßig von Zügen befahren werden (z.B. Abstellgleise).',
      'Nebengleise sind Gleise auf Nebenbahnen.',
      'Nebengleise sind Gleise ohne Oberleitung.',
      'Nebengleise sind Gleise, die nur von Rangierfahrten befahren werden dürfen.'
    ],
    isSafetyCritical: false,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },

  // --- RIL 408: RANGIEREN ---
  {
    id: 'ran_1',
    theme: 'Rangieren',
    question: 'Welche Höchstgeschwindigkeit gilt beim Rangieren im Regelfall?',
    answer: '25 km/h.',
    options: ['25 km/h.', '40 km/h.', '15 km/h.', '30 km/h.'],
    isSafetyCritical: true,
    source: 'Ril 408.0801',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ran_2',
    theme: 'Rangieren',
    question: 'Welche Höchstgeschwindigkeit gilt beim Rangieren im Baugleis?',
    answer: '20 km/h.',
    options: ['20 km/h.', '25 km/h.', '15 km/h.', '10 km/h.'],
    isSafetyCritical: true,
    source: 'Ril 408.0801',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ran_3',
    theme: 'Rangieren',
    question: 'Was ist eine "Rangierfahrt"?',
    answer: 'Das Bewegen von Fahrzeugen im Bahnhof oder in anderen Bahnanlagen, die keine Zugfahrt sind.',
    options: [
      'Das Bewegen von Fahrzeugen im Bahnhof oder in anderen Bahnanlagen, die keine Zugfahrt sind.',
      'Jede Fahrt eines Triebfahrzeugs ohne Wagen.',
      'Das Bereitstellen von Zügen am Bahnsteig.',
      'Fahrten auf der freien Strecke zur Unterstützung liegengebliebener Züge.'
    ],
    isSafetyCritical: false,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ran_4',
    theme: 'Rangieren',
    question: 'Welche Verständigungsarten gibt es beim Rangieren?',
    answer: 'Mündlich, per Funk oder durch Handsignale.',
    options: [
      'Mündlich, per Funk oder durch Handsignale.',
      'Nur per Funk.',
      'Nur durch Handsignale.',
      'Ausschließlich über das GSM-R Netz.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0801',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },

  // --- RIL 408: ZUGFAHRTEN ---
  {
    id: 'zug_1',
    theme: 'Zugfahrt',
    question: 'Wann gilt ein Zug als "abgefahren"?',
    answer: 'Wenn er sich nach der Zustimmung des Fdl in Bewegung gesetzt hat.',
    options: [
      'Wenn er sich nach der Zustimmung des Fdl in Bewegung gesetzt hat.',
      'Sobald die Türen geschlossen sind.',
      'Wenn die Abfahrzeit erreicht ist.',
      'Wenn der Zugführer den Abfahrauftrag gegeben hat.'
    ],
    isSafetyCritical: false,
    source: 'Ril 408.0401',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'zug_2',
    theme: 'Zugfahrt',
    question: 'Was ist die "Zustimmung zur Abfahrt" durch den Fahrdienstleiter?',
    answer: 'Das Stellen des Hauptsignals auf Fahrt oder ein Ersatzsignal.',
    options: [
      'Das Stellen des Hauptsignals auf Fahrt oder ein Ersatzsignal.',
      'Ein mündliches "Abfahren" über Funk.',
      'Das Schließen der Schranken am nächsten Bahnübergang.',
      'Die Übergabe des Fahrplans.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0401',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'zug_3',
    theme: 'Zugfahrt',
    question: 'Welche Höchstgeschwindigkeit gilt für Züge, die auf Sicht fahren?',
    answer: '40 km/h.',
    options: ['40 km/h.', '20 km/h.', '30 km/h.', '10 km/h.'],
    isSafetyCritical: true,
    source: 'Ril 408.0401',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  // --- RIL 408: UNREGELMÄSSIGKEITEN ---
  {
    id: 'unr_1',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist bei einer "Heißläufermeldung" zu tun?',
    answer: 'Der Zug ist sofort anzuhalten und das betroffene Lager zu prüfen.',
    options: [
      'Der Zug ist sofort anzuhalten und das betroffene Lager zu prüfen.',
      'Die Geschwindigkeit ist auf 20 km/h zu reduzieren.',
      'Weiterfahrt bis zum nächsten Bahnhof zur Untersuchung.',
      'Nur den Fahrdienstleiter informieren und die Temperatur im Auge behalten.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0501',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'unr_2',
    theme: 'Unregelmäßigkeiten',
    question: 'Wie lautet der Wortlaut eines Notrufs?',
    answer: '"Betriebsgefahr, alle Züge zwischen [A] und [B] sofort anhalten! Ich wiederhole..."',
    options: [
      '"Betriebsgefahr, alle Züge zwischen [A] und [B] sofort anhalten! Ich wiederhole..."',
      '"Achtung, Achtung, hier ist Zug [X], wir haben ein Problem."',
      '"Hilfe, Hilfe, Notfall bei Kilometer [Y]."',
      '"An alle, an alle, Störung auf der Strecke [Z]."'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0501',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },

  // --- RIL 915: BREMSEN ---
  {
    id: 'bre_1',
    theme: 'Bremsen',
    question: 'Wann ist eine "volle Bremsprobe" erforderlich?',
    answer: 'Am neu gebildeten Zug oder wenn der Zug länger als 24 Stunden abgestellt war.',
    options: [
      'Am neu gebildeten Zug oder wenn der Zug länger als 24 Stunden abgestellt war.',
      'Nach jedem Lokwechsel.',
      'Vor jeder Abfahrt eines Reisezuges.',
      'Nur bei Frostwetter.'
    ],
    isSafetyCritical: true,
    source: 'Ril 915.0101',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'bre_2',
    theme: 'Bremsen',
    question: 'Wann reicht eine "vereinfachte Bremsprobe" aus?',
    answer: 'Nach dem Kuppeln des Triebfahrzeugs oder nach dem Trennen der HL.',
    options: [
      'Nach dem Kuppeln des Triebfahrzeugs oder nach dem Trennen der HL.',
      'Wenn der Zug nur 2 Stunden abgestellt war.',
      'Nach dem Wechsel des Triebfahrzeugführers.',
      'Wenn nur ein Wagen ausgesetzt wurde.'
    ],
    isSafetyCritical: true,
    source: 'Ril 915.0101',
    sourceUrl: 'https://www.dbinfrago.com/'
  },

  // --- UVV: SICHERHEIT ---
  {
    id: 'uvv_1',
    theme: 'Sicherheit (UVV)',
    question: 'Wie groß ist der Sicherheitsabstand zu unter Spannung stehenden Oberleitungen?',
    answer: 'Mindestens 1,50 Meter (Unterwiesene). 3,00 Meter (nicht Unterwiesene).',
    options: [
        'Mindestens 1,50 Meter (Unterwiesene). 3,00 Meter (nicht Unterwiesene).', 
        'Mindestens 1,00 Meter (Unterwiesene). 1,50 Meter (nicht Unterwiesene).', 
        'Mindestens 2,50 Meter (Unterwiesene). 3,50 Meter (nicht Unterwiesene).', 
        'Mindestens 3,00 Meter.'
    ],
    isSafetyCritical: true,
    source: 'UVV VBG',
    sourceUrl: 'https://www.vbg.de/'
  },

  // --- ERWEITERUNG RIL 408 (ZUGMELDUNGEN & BLOCK) ---
  {
    id: 'ext_1',
    theme: 'Zugfahrt',
    question: 'Was ist die "Räumungsprüfung"?',
    answer: 'Das Feststellen, dass ein Zug den Blockabschnitt mit Schlusssignal verlassen hat.',
    options: [
      'Das Feststellen, dass ein Zug den Blockabschnitt mit Schlusssignal verlassen hat.',
      'Das Leeren eines Zuges bei einer Evakuierung.',
      'Die Kontrolle, ob alle Fahrgäste ausgestiegen sind.',
      'Die Prüfung, ob die Strecke frei von Schnee ist.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ext_2',
    theme: 'Zugfahrt',
    question: 'Welche Farbe hat das Schlusssignal (Zg 2) bei Tag?',
    answer: 'Zwei rot-weiße Scheiben oder zwei rote Lichter.',
    options: [
      'Zwei rot-weiße Scheiben oder zwei rote Lichter.',
      'Eine gelbe Scheibe.',
      'Drei weiße Lichter.',
      'Eine rote Flagge.'
    ],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ext_3',
    theme: 'Definitionen',
    question: 'Was ist eine "Überleitstelle"?',
    answer: 'Blockstelle der freien Strecke, wo Züge auf ein anderes Gleis derselben Strecke übergehen können.',
    options: [
      'Blockstelle der freien Strecke, wo Züge auf ein anderes Gleis derselben Strecke übergehen können.',
      'Blockstelle der freien Strecke, wo Züge von einer Strecke auf eine andere Strecke übergehen können.',
      'Bahnanlage der freien Strecke ohne Weichen.',
      'Blockstelle der freien Strecke, wo Züge von Hauptbahnen auf Nebenbahnen derselben Strecke übergehen können.'
    ],
    isSafetyCritical: false,
    source: 'Ril 408.0055',
    sourceUrl: 'https://www.dbinfrago.com/resource/blob/13309938/be53e2de35c1f14ae6f55d22bd19852a/40800-ab-15-12-2024-data.pdf#pages=33'
  },
  {
    id: 'ext_4',
    theme: 'Rangieren',
    question: 'Wer ist der "Rangierbegleiter"?',
    answer: 'Ein Mitarbeiter, der den Rangierer bei der Beobachtung des Fahrwegs unterstützt.',
    options: [
      'Ein Mitarbeiter, der den Rangierer bei der Beobachtung des Fahrwegs unterstützt.',
      'Der Lokführer der Rangierlok.',
      'Der Mitarbeiter im Stellwerk.',
      'Der Zugführer des bereitgestellten Zuges.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0801',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ext_5',
    theme: 'Rangieren',
    question: 'Was ist "Abstoßen" beim Rangieren?',
    answer: 'Das Beschleunigen von Fahrzeugen und anschließende Trennen, damit sie allein weiterrollen.',
    options: [
      'Das Beschleunigen von Fahrzeugen und anschließende Trennen, damit sie allein weiterrollen.',
      'Das Bremsen von Wagen mit dem Hemmschuh.',
      'Das Verbinden von zwei Wagen mit der Schraubenkupplung.',
      'Das Sichern von Wagen gegen Wegrollen.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0801',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ext_6',
    theme: 'Zugfahrt',
    question: 'Darf ein Befehl über Funk diktiert werden?',
    answer: 'Ja, wenn der Zug steht.',
    options: [
      'Ja, wenn der Zug steht.',
      'Ja, auch während der Fahrt.',
      'Nein, Befehle müssen immer persönlich übergeben werden.',
      'Nur in absoluten Notfällen.'
    ],
    isSafetyCritical: true,
    source: 'Ril 408.0401',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ext_7',
    theme: 'Betrieb',
    question: 'Was ist die "Sifa"?',
    answer: 'Sicherheitsfahrschaltung zur Überwachung der Dienstfähigkeit des Tf.',
    options: [
      'Sicherheitsfahrschaltung zur Überwachung der Dienstfähigkeit des Tf.',
      'Signal-Fahr-Automatik.',
      'Sicherungs-Fahr-Anlage.',
      'System für interne Fahrgast-Anzeigen.'
    ],
    isSafetyCritical: true,
    source: 'EBO / Technik',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__28.html'
  },
  {
    id: 'ext_8',
    theme: 'Mitarbeiter',
    question: 'Wer ist für die Sicherheit des Zuges verantwortlich?',
    answer: 'Der Triebfahrzeugführer (und ggf. der Zugführer).',
    options: [
      'Der Triebfahrzeugführer (und ggf. der Zugführer).',
      'Ausschließlich der Fahrdienstleiter.',
      'Der Betriebsleiter.',
      'Die Bundespolizei.'
    ],
    isSafetyCritical: true,
    source: 'EBO / Ril 408',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__47.html'
  },
  {
    id: 'ext_9',
    theme: 'Energie',
    question: 'Was bedeutet das Signal El 1?',
    answer: '"Ausschalten" - Der Hauptschalter des Triebfahrzeugs muss geöffnet werden.',
    options: [
      '"Ausschalten" - Der Hauptschalter des Triebfahrzeugs muss geöffnet werden.',
      '"Einschalten" - Der Hauptschalter darf geschlossen werden.',
      '"Bügel ab" - Der Stromabnehmer muss gesenkt werden.',
      '"Bügel an" - Der Stromabnehmer darf gehoben werden.'
    ],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ext_10',
    theme: 'Energie',
    question: 'Was bedeutet das Signal El 3?',
    answer: '"Bügel ab" - Der Stromabnehmer muss gesenkt werden.',
    options: [
      '"Bügel ab" - Der Stromabnehmer muss gesenkt werden.',
      '"Bügel an".',
      '"Ausschalten".',
      '"Einschalten".'
    ],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },

  // --- NEUE FRAGEN RIL 408 (BLOCK & ZUGMELDUNG) ---
  {
    id: 'ril_1',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Blocksignal"?',
    answer: 'Ein Hauptsignal, das einen Blockabschnitt begrenzt.',
    options: ['Ein Hauptsignal, das einen Blockabschnitt begrenzt.', 'Ein Signal am Ende eines Bahnhofs.', 'Ein Signal vor einem Bahnübergang.', 'Ein Signal für Rangierfahrten.'],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_2',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Einfahrsignal"?',
    answer: 'Ein Hauptsignal, das die Grenze zwischen freier Strecke und Bahnhof markiert.',
    options: ['Ein Hauptsignal, das die Grenze zwischen freier Strecke und Bahnhof markiert.', 'Ein Signal am Ende des Bahnsteigs.', 'Ein Signal für die Einfahrt ins Depot.', 'Ein Signal vor einer Abzweigstelle.'],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_3',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Ausfahrsignal"?',
    answer: 'Ein Hauptsignal, das die Abfahrt aus einem Bahnhofsgleis regelt.',
    options: ['Ein Hauptsignal, das die Abfahrt aus einem Bahnhofsgleis regelt.', 'Ein Signal am Ende der freien Strecke.', 'Ein Signal vor einem Tunnel.', 'Ein Signal für die Ausfahrt aus der Werkstatt.'],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_4',
    theme: 'Zugfahrt',
    question: 'Was ist eine "Zugmeldung"?',
    answer: 'Die Verständigung zwischen Fahrdienstleitern über Zugbewegungen.',
    options: ['Die Verständigung zwischen Fahrdienstleitern über Zugbewegungen.', 'Die Durchsage am Bahnsteig.', 'Der Funkspruch des Tf an den Fdl.', 'Die Meldung einer Verspätung.'],
    isSafetyCritical: false,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_5',
    theme: 'Zugfahrt',
    question: 'Wann muss ein Zug "angeboten" werden?',
    answer: 'Bei eingleisigen Strecken oder bei Abweichungen vom Regelbetrieb.',
    options: ['Bei eingleisigen Strecken oder bei Abweichungen vom Regelbetrieb.', 'Vor jeder Abfahrt eines Güterzuges.', 'Nur wenn der Zug Verspätung hat.', 'Immer wenn ein Zug in einen anderen Bahnhof einfährt.'],
    isSafetyCritical: false,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_6',
    theme: 'Rangieren',
    question: 'Was ist "Ablaufen" beim Rangieren?',
    answer: 'Das Rollen von Fahrzeugen über einen Ablaufberg durch Schwerkraft.',
    options: ['Das Rollen von Fahrzeugen über einen Ablaufberg durch Schwerkraft.', 'Das langsame Fahren einer Lokomotive ins Depot.', 'Das Entleeren der Bremsleitung.', 'Das Verlassen des Führerstandes.'],
    isSafetyCritical: true,
    source: 'Ril 408.0801',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_7',
    theme: 'Rangieren',
    question: 'Welche Geschwindigkeit darf beim Rangieren mit Personenbesetzung nicht überschritten werden?',
    answer: '25 km/h.',
    options: ['25 km/h.', '10 km/h.', '5 km/h.', '40 km/h.'],
    isSafetyCritical: true,
    source: 'Ril 408.0801',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_8',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist eine "Zwangsbremsung"?',
    answer: 'Eine Bremsung, die durch Zugsicherungssysteme (PZB, LZB, Sifa) ausgelöst wird.',
    options: ['Eine Bremsung, die durch Zugsicherungssysteme (PZB, LZB, Sifa) ausgelöst wird.', 'Eine Bremsung durch den Fahrgast.', 'Eine Bremsung durch den Fdl.', 'Eine Bremsung bei Stromausfall.'],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_9',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist eine "Flankenfahrt"?',
    answer: 'Seitliches Zusammenstoßen zweier Fahrzeuge.',
    options: ['Seitliches Zusammenstoßen zweier Fahrzeuge.', 'Ein Auffahrunfall.', 'Das Entgleisen einer Weiche.', 'Das Befahren eines falschen Gleises.'],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },

  // --- WEITERE RIL 408 SPEZIFIKA ---
  {
    id: 'ril_11',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Regelgleis"?',
    answer: 'Das Gleis, das auf zweigleisigen Strecken in der gewöhnlichen Fahrtrichtung befahren wird.',
    options: ['Das Gleis, das auf zweigleisigen Strecken in der gewöhnlichen Fahrtrichtung befahren wird.', 'Das rechte Gleis einer viergleisigen Strecke.', 'Ein Gleis für den Güterverkehr.', 'Das Gleis mit der höchsten Geschwindigkeit.'],
    isSafetyCritical: false,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_12',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Gegengleis"?',
    answer: 'Das Gleis, das auf zweigleisigen Strecken entgegen der gewöhnlichen Fahrtrichtung befahren wird.',
    options: ['Das Gleis, das auf zweigleisigen Strecken entgegen der gewöhnlichen Fahrtrichtung befahren wird.', 'Ein Gleis, das parallel zur Hauptstrecke verläuft.', 'Ein Gleis für den Gegenverkehr in Bahnhöfen.', 'Das linke Gleis einer viergleisigen Strecke.'],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_13',
    theme: 'Zugfahrt',
    question: 'Was ist eine "Fahrwegprüfung"?',
    answer: 'Das Feststellen, dass der Fahrweg frei von Fahrzeugen und Hindernissen ist.',
    options: ['Das Feststellen, dass der Fahrweg frei von Fahrzeugen und Hindernissen ist.', 'Die technische Untersuchung der Schienen.', 'Die Kontrolle der Weichenheizung.', 'Die Prüfung der Oberleitungsspannung.'],
    isSafetyCritical: true,
    source: 'Ril 408.0101',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_14',
    theme: 'Zugfahrt',
    question: 'Was ist die "Fahrbereitschaft"?',
    answer: 'Zustand des Zuges nach Abschluss aller Vorbereitungen.',
    options: ['Zustand des Zuges nach Abschluss aller Vorbereitungen.', 'Die Erlaubnis des Fdl zur Abfahrt.', 'Das Erreichen der Höchstgeschwindigkeit.', 'Das Ende der Schicht des Tf.'],
    isSafetyCritical: true,
    source: 'Ril 408.0401',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_15',
    theme: 'Zugfahrt',
    question: 'Was ist die "Zugvorbereitung"?',
    answer: 'Alle Tätigkeiten vor der Abfahrt (z.B. Bremsprobe, Wagenliste).',
    options: ['Alle Tätigkeiten vor der Abfahrt (z.B. Bremsprobe, Wagenliste).', 'Das Reinigen der Wagen.', 'Das Beladen der Güterwagen.', 'Die Einteilung des Personals.'],
    isSafetyCritical: true,
    source: 'Ril 408.0401',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_16',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl"?',
    answer: 'Eine schriftliche Anweisung des Fdl an den Tf.',
    options: ['Eine schriftliche Anweisung des Fdl an den Tf.', 'Ein mündlicher Auftrag über Funk.', 'Ein Signalbild am Hauptsignal.', 'Eine Eintragung im Fahrplan.'],
    isSafetyCritical: true,
    source: 'Ril 408.0401',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_17',
    theme: 'Zugfahrt',
    question: 'Was ist eine "Zustimmung zur Abfahrt"?',
    answer: 'Erlaubnis des Fdl zur Fahrt.',
    options: ['Erlaubnis des Fdl zur Fahrt.', 'Das Schließen der Türen.', 'Das Erreichen der Abfahrzeit.', 'Die Bestätigung der Fahrbereitschaft.'],
    isSafetyCritical: true,
    source: 'Ril 408.0401',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_18',
    theme: 'Zugfahrt',
    question: 'Was ist eine "Fahrplan-Mitteilung"?',
    answer: 'Information über Fahrplanänderungen.',
    options: ['Information über Fahrplanänderungen.', 'Die Durchsage im Zug.', 'Ein Dokument für die Fahrgäste.', 'Die Abrechnung der Fahrt.'],
    isSafetyCritical: false,
    source: 'Ril 408.0401',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_19',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Ereignisbericht"?',
    answer: 'Protokoll über Unregelmäßigkeiten.',
    options: ['Protokoll über Unregelmäßigkeiten.', 'Die tägliche Arbeitszeitbescheinigung.', 'Ein Bericht für die Presse.', 'Die Fahrkartenkontrolle.'],
    isSafetyCritical: false,
    source: 'Ril 408.0501',
    sourceUrl: 'https://www.dbinfrago.com/web/schienennetz/regelwerke/fahrdienstvorschrift'
  },
  {
    id: 'ril_20',
    theme: 'Zugfahrt',
    question: 'Was ist die "Streckenkenntnis"?',
    answer: 'Wissen über die Besonderheiten einer Strecke.',
    options: ['Wissen über die Besonderheiten einer Strecke.', 'Die Berechtigung zum Führen eines Fahrzeugtyps.', 'Die Kenntnis der EBO.', 'Die Erlaubnis zum Rangieren.'],
    isSafetyCritical: true,
    source: 'TfV',
    sourceUrl: 'https://www.gesetze-im-internet.de/tfv/index.html'
  },
  {
    id: 'ril_21',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 1"?',
    answer: 'Ausfahrt aus einem Bahnhof ohne Ausfahrsignal.',
    options: ['Ausfahrt aus einem Bahnhof ohne Ausfahrsignal.', 'Einfahrt in einen Bahnhof gegen Halt.', 'Vorbeifahrt an einem Signal.', 'Fahren auf Sicht.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_22',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 2"?',
    answer: 'Vorbeifahrt an einem Halt zeigenden Signal.',
    options: ['Vorbeifahrt an einem Halt zeigenden Signal.', 'Ausfahrt ohne Signal.', 'Fahren im Gegengleis.', 'Anhalten an einer Stelle.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_23',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 3"?',
    answer: 'Einfahrt in einen Bahnhof gegen Halt.',
    options: ['Einfahrt in einen Bahnhof gegen Halt.', 'Ausfahrt ohne Signal.', 'Vorbeifahrt an einem Signal.', 'Fahren auf Sicht.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_24',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 4"?',
    answer: 'Befahren des Gegengleises.',
    options: ['Befahren des Gegengleises.', 'Vorbeifahrt an einem Signal.', 'Fahren auf Sicht.', 'Anhalten an einer Stelle.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_25',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 5"?',
    answer: 'Anhalten an einer unvorhergesehenen Stelle.',
    options: ['Anhalten an einer unvorhergesehenen Stelle.', 'Fahren auf Sicht.', 'Vorbeifahrt an einem Signal.', 'Befahren des Gegengleises.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_26',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 6"?',
    answer: 'Einfahrt in ein besetztes Gleis.',
    options: ['Einfahrt in ein besetztes Gleis.', 'Ausfahrt ohne Signal.', 'Vorbeifahrt an einem Signal.', 'Fahren auf Sicht.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_27',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 7"?',
    answer: 'Vorbeifahrt an einem Signal mit Zs 1.',
    options: ['Vorbeifahrt an einem Signal mit Zs 1.', 'Ausfahrt ohne Signal.', 'Fahren auf Sicht.', 'Anhalten an einer Stelle.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_28',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 8"?',
    answer: 'Vorbeifahrt an einem Signal mit Zs 7.',
    options: ['Vorbeifahrt an einem Signal mit Zs 7.', 'Fahren auf Sicht.', 'Ausfahrt ohne Signal.', 'Anhalten an einer Stelle.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_29',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 9"?',
    answer: 'Vorbeifahrt an einem Signal mit Zs 8.',
    options: ['Vorbeifahrt an einem Signal mit Zs 8.', 'Befahren des Gegengleises.', 'Fahren auf Sicht.', 'Ausfahrt ohne Signal.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_30',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 10"?',
    answer: 'Vorbeifahrt an einem Signal mit Zs 11.',
    options: ['Vorbeifahrt an einem Signal mit Zs 11.', 'Fahren auf Sicht.', 'Ausfahrt ohne Signal.', 'Anhalten an einer Stelle.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_31',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 11"?',
    answer: 'Vorbeifahrt an einem Signal mit Zs 12.',
    options: ['Vorbeifahrt an einem Signal mit Zs 12.', 'Fahren auf Sicht.', 'Ausfahrt ohne Signal.', 'Anhalten an einer Stelle.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_32',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 12"?',
    answer: 'Fahren auf Sicht.',
    options: ['Fahren auf Sicht.', 'Vorbeifahrt an einem Signal.', 'Befahren des Gegengleises.', 'Anhalten an einer Stelle.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_33',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 13"?',
    answer: 'Befahren eines Baugleises.',
    options: ['Befahren eines Baugleises.', 'Vorbeifahrt an einem Signal.', 'Fahren auf Sicht.', 'Anhalten an einer Stelle.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_34',
    theme: 'Zugfahrt',
    question: 'Was ist ein "Befehl 14"?',
    answer: 'Zusätzliche Mitteilungen.',
    options: ['Zusätzliche Mitteilungen.', 'Fahren auf Sicht.', 'Vorbeifahrt an einem Signal.', 'Befahren des Gegengleises.'],
    isSafetyCritical: false,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_35',
    theme: 'Rangieren',
    question: 'Was ist "Verschieben"?',
    answer: 'Das Bewegen von Fahrzeugen durch Menschenkraft oder mechanische Hilfsmittel.',
    options: ['Das Bewegen von Fahrzeugen durch Menschenkraft oder mechanische Hilfsmittel.', 'Das Fahren einer Lokomotive.', 'Das Ablaufen am Berg.', 'Das Abstoßen von Wagen.'],
    isSafetyCritical: false,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_36',
    theme: 'Rangieren',
    question: 'Was ist "Beidrücken"?',
    answer: 'Das Schließen von Lücken zwischen abgestellten Wagen.',
    options: ['Das Schließen von Lücken zwischen abgestellten Wagen.', 'Das Kuppeln von zwei Zügen.', 'Das Bremsen von Wagen.', 'Das Sichern von Wagen.'],
    isSafetyCritical: false,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_37',
    theme: 'Rangieren',
    question: 'Was ist "Aufdrücken"?',
    answer: 'Das Bewegen von Fahrzeugen zum Entkuppeln.',
    options: ['Das Bewegen von Fahrzeugen zum Entkuppeln.', 'Das Schließen von Lücken.', 'Das Bremsen von Wagen.', 'Das Sichern von Wagen.'],
    isSafetyCritical: false,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_38',
    theme: 'Rangieren',
    question: 'Was ist "Sägen"?',
    answer: 'Das mehrmalige Ändern der Fahrtrichtung beim Rangieren.',
    options: ['Das mehrmalige Ändern der Fahrtrichtung beim Rangieren.', 'Das Trennen von Schienen.', 'Das Reinigen von Weichen.', 'Das Prüfen der Bremsen.'],
    isSafetyCritical: false,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_39',
    theme: 'Rangieren',
    question: 'Was ist "Flankenschutz"?',
    answer: 'Maßnahmen zur Verhinderung von Flankenfahrten.',
    options: ['Maßnahmen zur Verhinderung von Flankenfahrten.', 'Ein Schutzgitter am Wagen.', 'Die Beleuchtung der Gleise.', 'Die Absperrung des Bahnsteigs.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_40',
    theme: 'Rangieren',
    question: 'Was ist ein "Rangiersignal"?',
    answer: 'Ein Signal, das Rangierbewegungen regelt (z.B. Sh 0, Sh 1).',
    options: ['Ein Signal, das Rangierbewegungen regelt (z.B. Sh 0, Sh 1).', 'Ein Signal für die Abfahrt.', 'Ein Signal vor einem Tunnel.', 'Ein Signal für die Oberleitung.'],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_41',
    theme: 'Bremsen',
    question: 'Was ist die "Bremsberechnung"?',
    answer: 'Das Ermitteln der vorhandenen Bremshunderstel eines Zuges.',
    options: ['Das Ermitteln der vorhandenen Bremshunderstel eines Zuges.', 'Das Wiegen des Zuges.', 'Das Messen der Zuglänge.', 'Das Zählen der Achsen.'],
    isSafetyCritical: true,
    source: 'Ril 915',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_42',
    theme: 'Bremsen',
    question: 'Was ist der "Bremszettel"?',
    answer: 'Dokument mit den Ergebnissen der Bremsberechnung.',
    options: ['Dokument mit den Ergebnissen der Bremsberechnung.', 'Die Fahrkarte des Tf.', 'Der Dienstplan.', 'Die Wagenliste.'],
    isSafetyCritical: true,
    source: 'Ril 915',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_43',
    theme: 'Bremsen',
    question: 'Was ist eine "Feststellbremse"?',
    answer: 'Bremse zum Sichern von Fahrzeugen gegen Wegrollen im Stillstand.',
    options: ['Bremse zum Sichern von Fahrzeugen gegen Wegrollen im Stillstand.', 'Die Hauptbremse des Zuges.', 'Die Notbremse.', 'Die Sifa-Bremse.'],
    isSafetyCritical: true,
    source: 'Ril 915',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_44',
    theme: 'Bremsen',
    question: 'Was ist ein "Hemmschuh"?',
    answer: 'Ein Gerät zum Abbremsen von rollenden Wagen beim Rangieren.',
    options: ['Ein Gerät zum Abbremsen von rollenden Wagen beim Rangieren.', 'Ein Teil der Scheibenbremse.', 'Ein Schutzschuh für den Tf.', 'Ein Werkzeug zur Gleisreparatur.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_45',
    theme: 'Bremsen',
    question: 'Was ist die "Füllzeit" der Bremse?',
    answer: 'Die Zeit zum Auffüllen der Hilfsluftbehälter nach einer Bremsung.',
    options: ['Die Zeit zum Auffüllen der Hilfsluftbehälter nach einer Bremsung.', 'Die Zeit bis die Bremse wirkt.', 'Die Dauer einer Vollbremsung.', 'Die Zeit zum Entleeren der HL.'],
    isSafetyCritical: false,
    source: 'Ril 915',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_46',
    theme: 'Bremsen',
    question: 'Was ist die "Lösezeit" der Bremse?',
    answer: 'Die Zeit vom Einleiten des Lösens bis zum vollständigen Lösen der Bremse.',
    options: ['Die Zeit vom Einleiten des Lösens bis zum vollständigen Lösen der Bremse.', 'Die Zeit bis zum Stillstand.', 'Die Zeit zum Anlegen der Bremse.', 'Die Zeit zum Entkuppeln.'],
    isSafetyCritical: false,
    source: 'Ril 915',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_47',
    theme: 'Bremsen',
    question: 'Was ist eine "indirekte Bremse"?',
    answer: 'Bremse, die bei Druckabsenkung in der HL anlegt.',
    options: ['Bremse, die bei Druckabsenkung in der HL anlegt.', 'Bremse, die nur elektrisch wirkt.', 'Bremse, die direkt vom Tf gesteuert wird.', 'Bremse, die nur im Notfall wirkt.'],
    isSafetyCritical: true,
    source: 'Ril 915',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_48',
    theme: 'Bremsen',
    question: 'Was ist eine "direkte Bremse"?',
    answer: 'Bremse, die direkt durch Druckluftbeaufschlagung der Bremszylinder wirkt.',
    options: ['Bremse, die direkt durch Druckluftbeaufschlagung der Bremszylinder wirkt.', 'Die Notbremse.', 'Die Sifa-Bremse.', 'Die Handbremse.'],
    isSafetyCritical: true,
    source: 'Ril 915',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_49',
    theme: 'Bremsen',
    question: 'Was ist die "Bremsstellung G"?',
    answer: 'Langsam wirkende Bremse für Güterzüge.',
    options: ['Langsam wirkende Bremse für Güterzüge.', 'Schnell wirkende Bremse.', 'Bremse für Reisezüge.', 'Bremse für Hochgeschwindigkeitszüge.'],
    isSafetyCritical: true,
    source: 'Ril 915',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ril_50',
    theme: 'Bremsen',
    question: 'Was ist die "Bremsstellung P"?',
    answer: 'Schnell wirkende Bremse für Personen- und Güterzüge.',
    options: ['Schnell wirkende Bremse für Personen- und Güterzüge.', 'Langsam wirkende Bremse.', 'Bremse nur für Güterzüge.', 'Bremse für Rangierfahrten.'],
    isSafetyCritical: true,
    source: 'Ril 915',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'sig_0',
    theme: 'Signale',
    question: 'Woran erkennt man eine Rückfallweiche?',
    answer: 'Gelb-schwarzes Hebelgewicht',
    options: [
      'Weiß-schwarzes Hebelgewicht', 
      'Rot-gelb-rotes Hebelgewicht', 
      'Gelb-weißes Hebelgewicht', 
      'Gelb-schwarzes Hebelgewicht'
    ],
    isSafetyCritical: true,
    source: 'Ril 301.9001',
    sourceUrl: 'https://www.dbinfrago.com/resource/blob/13174940/cb13a4d1ee7bc79e64ecad219bbd91c4/Ril-301-INB-2026-data.pdf#pages=151'
  },
  {
    id: 'sig_1',
    theme: 'Signale',
    question: 'Was bedeutet das Signal Hp 0?',
    answer: 'Halt.',
    options: ['Halt.', 'Fahrt.', 'Langsamfahrt.', 'Halt erwarten.'],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'sig_2',
    theme: 'Signale',
    question: 'Was bedeutet das Signal Hp 1?',
    answer: 'Fahrt.',
    options: ['Fahrt.', 'Halt.', 'Langsamfahrt.', 'Fahrt mit 40 km/h.'],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'sig_3',
    theme: 'Signale',
    question: 'Was bedeutet das Signal Hp 2?',
    answer: 'Langsamfahrt (40 km/h).',
    options: ['Langsamfahrt (40 km/h).', 'Fahrt.', 'Halt.', 'Halt erwarten.'],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'sig_4',
    theme: 'Signale',
    question: 'Was bedeutet das Signal Vr 0?',
    answer: 'Halt erwarten.',
    options: ['Halt erwarten.', 'Fahrt erwarten.', 'Langsamfahrt erwarten.', 'Halt.'],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'sig_5',
    theme: 'Signale',
    question: 'Was bedeutet das Signal Vr 1?',
    answer: 'Fahrt erwarten.',
    options: ['Fahrt erwarten.', 'Halt erwarten.', 'Langsamfahrt erwarten.', 'Halt.'],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'sig_6',
    theme: 'Signale',
    question: 'Was bedeutet das Signal Vr 2?',
    answer: 'Langsamfahrt erwarten.',
    options: ['Langsamfahrt erwarten.', 'Fahrt erwarten.', 'Halt erwarten.', 'Halt.'],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'sig_7',
    theme: 'Signale',
    question: 'Was bedeutet das Signal Zs 1?',
    answer: 'Ersatzsignal - Am Halt zeigenden Signal ohne schriftlichen Befehl vorbeifahren.',
    options: ['Ersatzsignal - Am Halt zeigenden Signal ohne schriftlichen Befehl vorbeifahren.', 'Vorsichtsignal.', 'Gegengleisfahrt-Ersatzsignal.', 'Schranke gestört.'],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'sig_8',
    theme: 'Signale',
    question: 'Was bedeutet das Signal Zs 7?',
    answer: 'Vorsichtsignal - Am Halt zeigenden Signal ohne schriftlichen Befehl vorbeifahren, Fahren auf Sicht.',
    options: ['Vorsichtsignal - Am Halt zeigenden Signal ohne schriftlichen Befehl vorbeifahren, Fahren auf Sicht.', 'Ersatzsignal.', 'Gegengleisfahrt-Ersatzsignal.', 'Abfahrtsignal.'],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'sig_9',
    theme: 'Signale',
    question: 'Was bedeutet das Signal Zs 8?',
    answer: 'Gegengleisfahrt-Ersatzsignal.',
    options: ['Gegengleisfahrt-Ersatzsignal.', 'Ersatzsignal.', 'Vorsichtsignal.', 'Stumpfgleis-Einfahrsignal.'],
    isSafetyCritical: true,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'sig_10',
    theme: 'Signale',
    question: 'Was bedeutet das Signal Zs 103?',
    answer: 'Rautentafel - Kennzeichnet den Standort eines Vorsignals.',
    options: ['Rautentafel - Kennzeichnet den Standort eines Vorsignals.', 'Bremstafel.', 'Haltetafel.', 'Geschwindigkeitstafel.'],
    isSafetyCritical: false,
    source: 'Ril 301',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ops_1',
    theme: 'Betrieb',
    question: 'Was ist eine "Zugbeeinflussung"?',
    answer: 'System zur Übertragung von Informationen und zur Überwachung der Fahrt.',
    options: ['System zur Übertragung von Informationen und zur Überwachung der Fahrt.', 'Die Steuerung des Motors.', 'Die Ansage im Zug.', 'Die Fahrkartenkontrolle.'],
    isSafetyCritical: true,
    source: 'EBO',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__15.html'
  },
  {
    id: 'ops_2',
    theme: 'Betrieb',
    question: 'Was ist die "LZB"?',
    answer: 'Linienförmige Zugbeeinflussung.',
    options: ['Linienförmige Zugbeeinflussung.', 'Lokale Zug-Beobachtung.', 'Lange Zug-Bildung.', 'Leichte Zug-Bremse.'],
    isSafetyCritical: true,
    source: 'EBO',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__15.html'
  },
  {
    id: 'ops_3',
    theme: 'Betrieb',
    question: 'Was ist die "PZB"?',
    answer: 'Punktförmige Zugbeeinflussung.',
    options: ['Punktförmige Zugbeeinflussung.', 'Permanente Zug-Beobachtung.', 'Primäre Zug-Bremse.', 'Personen-Zug-Begleitung.'],
    isSafetyCritical: true,
    source: 'EBO',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__15.html'
  },
  {
    id: 'ops_4',
    theme: 'Betrieb',
    question: 'Was ist das "GSM-R"?',
    answer: 'Digitales Funksystem für den Eisenbahnbetrieb.',
    options: ['Digitales Funksystem für den Eisenbahnbetrieb.', 'Ein Bremssystem.', 'Ein Zugsicherungssystem.', 'Ein Fahrgastinformationssystem.'],
    isSafetyCritical: true,
    source: 'Technik',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ops_5',
    theme: 'Betrieb',
    question: 'Was ist eine "Betriebsstelle"?',
    answer: 'Bahnhöfe, Blockstellen, Abzweigstellen, Überleitstellen, etc.',
    options: ['Bahnhöfe, Blockstellen, Abzweigstellen, Überleitstellen, etc.', 'Nur Bahnhöfe.', 'Nur Stellwerke.', 'Nur Werkstätten.'],
    isSafetyCritical: false,
    source: 'EBO',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__4.html'
  },
  {
    id: 'ops_6',
    theme: 'Betrieb',
    question: 'Was ist ein "Fahrplan"?',
    answer: 'Die zeitliche und räumliche Festlegung der Zugfahrten.',
    options: ['Die zeitliche und räumliche Festlegung der Zugfahrten.', 'Eine Liste der Fahrpreise.', 'Ein Werbeplakat.', 'Die Dienstordnung.'],
    isSafetyCritical: false,
    source: 'EBO',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__42.html'
  },
  {
    id: 'ops_7',
    theme: 'Betrieb',
    question: 'Was ist die "Vmax" eines Zuges?',
    answer: 'Die zulässige Höchstgeschwindigkeit.',
    options: ['Die zulässige Höchstgeschwindigkeit.', 'Die maximale Beschleunigung.', 'Die maximale Länge.', 'Das maximale Gewicht.'],
    isSafetyCritical: true,
    source: 'EBO',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__40.html'
  },
  {
    id: 'ops_8',
    theme: 'Betrieb',
    question: 'Was ist eine "Langsamfahrstelle"?',
    answer: 'Ein Gleisabschnitt mit vorübergehend reduzierter Geschwindigkeit.',
    options: ['Ein Gleisabschnitt mit vorübergehend reduzierter Geschwindigkeit.', 'Ein Bahnhof mit kurzen Bahnsteigen.', 'Eine Steilstrecke.', 'Ein Depot.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ops_9',
    theme: 'Betrieb',
    question: 'Was ist die "La"?',
    answer: 'Zusammenstellung der vorübergehenden Langsamfahrstellen und anderen Besonderheiten.',
    options: ['Zusammenstellung der vorübergehenden Langsamfahrstellen und anderen Besonderheiten.', 'Die Abkürzung für Lokomotive.', 'Der Ladeausweis.', 'Die Leistungsabrechnung.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ops_10',
    theme: 'Betrieb',
    question: 'Was ist ein "Zugfunk"?',
    answer: 'Funksystem zur Kommunikation zwischen Tf und Fdl.',
    options: ['Funksystem zur Kommunikation zwischen Tf und Fdl.', 'Das Radio im Zug.', 'Die Durchsageanlage.', 'Das WLAN für Fahrgäste.'],
    isSafetyCritical: true,
    source: 'Technik',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ops_11',
    theme: 'Betrieb',
    question: 'Was ist ein "Notruf"?',
    answer: 'Ein Funkspruch mit höchster Priorität bei Gefahr.',
    options: ['Ein Funkspruch mit höchster Priorität bei Gefahr.', 'Ein Anruf bei der Polizei.', 'Eine Meldung über Verspätung.', 'Ein Gespräch mit dem Zugbegleiter.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ops_12',
    theme: 'Betrieb',
    question: 'Was ist ein "Sammelruf"?',
    answer: 'Ein Funkspruch an alle Teilnehmer in einem Bereich.',
    options: ['Ein Funkspruch an alle Teilnehmer in einem Bereich.', 'Ein privates Gespräch.', 'Ein Notruf.', 'Eine Durchsage am Bahnsteig.'],
    isSafetyCritical: false,
    source: 'Technik',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ops_13',
    theme: 'Betrieb',
    question: 'Was ist die "Fahrbereitschaft"?',
    answer: 'Zustand, in dem alle Vorbereitungen für die Abfahrt abgeschlossen sind.',
    options: ['Zustand, in dem alle Vorbereitungen für die Abfahrt abgeschlossen sind.', 'Die Erlaubnis des Fdl.', 'Das Erreichen der Abfahrzeit.', 'Die Anwesenheit des Zugführers.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ops_14',
    theme: 'Betrieb',
    question: 'Was ist die "Abfahrzeit"?',
    answer: 'Der im Fahrplan festgelegte Zeitpunkt der Abfahrt.',
    options: ['Der im Fahrplan festgelegte Zeitpunkt der Abfahrt.', 'Der Zeitpunkt, an dem der Zug rollt.', 'Der Zeitpunkt der Zustimmung des Fdl.', 'Der Zeitpunkt des Abfahrauftrags.'],
    isSafetyCritical: false,
    source: 'EBO',
    sourceUrl: 'https://www.gesetze-im-internet.de/ebo/__42.html'
  },
  {
    id: 'ops_15',
    theme: 'Betrieb',
    question: 'Was ist ein "Halt auf Sicht"?',
    answer: 'Anhalten vor einem Hindernis innerhalb der Sichtweite.',
    options: ['Anhalten vor einem Hindernis innerhalb der Sichtweite.', 'Anhalten am Bahnsteig.', 'Anhalten am Signal.', 'Anhalten bei Nebel.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ops_16',
    theme: 'Betrieb',
    question: 'Was ist eine "Sperrfahrt"?',
    answer: 'Zugfahrt in ein gesperrtes Gleis der freien Strecke.',
    options: ['Zugfahrt in ein gesperrtes Gleis der freien Strecke.', 'Eine Rangierfahrt.', 'Eine Fahrt mit defekter Bremse.', 'Eine Fahrt ohne Fahrplan.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ops_17',
    theme: 'Betrieb',
    question: 'Was ist ein "Baugleis"?',
    answer: 'Ein für Bauarbeiten gesperrtes Gleis.',
    options: ['Ein für Bauarbeiten gesperrtes Gleis.', 'Ein neu gebautes Gleis.', 'Ein Gleis in der Werkstatt.', 'Ein Nebengleis.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'ops_18',
    theme: 'Betrieb',
    question: 'Was ist eine "Arbeitsstelle"?',
    answer: 'Ein Bereich im oder am Gleis, in dem gearbeitet wird.',
    options: ['Ein Bereich im oder am Gleis, in dem gearbeitet wird.', 'Das Büro des Fdl.', 'Die Werkstatt.', 'Der Führerstand.'],
    isSafetyCritical: true,
    source: 'UVV',
    sourceUrl: 'https://www.vbg.de/'
  },
  {
    id: 'ops_19',
    theme: 'Betrieb',
    question: 'Was ist ein "Sicherungsposten"?',
    answer: 'Mitarbeiter zur Warnung von Arbeitskräften vor herannahenden Zügen.',
    options: ['Mitarbeiter zur Warnung von Arbeitskräften vor herannahenden Zügen.', 'Ein Polizist.', 'Der Fdl.', 'Der Tf.'],
    isSafetyCritical: true,
    source: 'UVV',
    sourceUrl: 'https://www.vbg.de/'
  },
  {
    id: 'ops_20',
    theme: 'Betrieb',
    question: 'Was ist das "Typhon"?',
    answer: 'Drucklufthorn des Triebfahrzeugs zum Geben von akustischen Signalen.',
    options: ['Drucklufthorn des Triebfahrzeugs zum Geben von akustischen Signalen.', 'Ein Funkgerät.', 'Eine Bremse.', 'Ein Motor.'],
    isSafetyCritical: true,
    source: 'Technik',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'com_1',
    theme: 'Kommunikation',
    question: 'Wie meldet sich der Tf beim Fdl über Funk?',
    answer: '"Hier Zug [Nummer], Standort [Ort], kommen."',
    options: ['"Hier Zug [Nummer], Standort [Ort], kommen."', '"Hallo, hier ist der Lokführer."', '"Ich bin jetzt da."', '"Zug [Nummer] an Fdl, bitte kommen."'],
    isSafetyCritical: false,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'com_2',
    theme: 'Kommunikation',
    question: 'Was bedeutet "Kommen" am Ende eines Funkspruchs?',
    answer: 'Aufforderung zur Antwort.',
    options: ['Aufforderung zur Antwort.', 'Ende des Gesprächs.', 'Bestätigung des Erhalts.', 'Warten auf Anweisungen.'],
    isSafetyCritical: false,
    source: 'Technik',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'com_3',
    theme: 'Kommunikation',
    question: 'Was bedeutet "Ende" am Ende eines Funkspruchs?',
    answer: 'Das Gespräch ist beendet, keine Antwort erwartet.',
    options: ['Das Gespräch ist beendet, keine Antwort erwartet.', 'Aufforderung zur Antwort.', 'Der Zug ist am Ziel.', 'Die Strecke ist gesperrt.'],
    isSafetyCritical: false,
    source: 'Technik',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'irr_1',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist bei "unregelmäßigem Halt" am Bahnsteig zu tun?',
    answer: 'Fdl verständigen, ggf. Durchsage an Fahrgäste, Ursache klären.',
    options: ['Fdl verständigen, ggf. Durchsage an Fahrgäste, Ursache klären.', 'Sofort weiterfahren.', 'Türen öffnen und warten.', 'Den Zug evakuieren.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'irr_2',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist bei "unbeabsichtigtem Stillstand" auf der Strecke zu tun?',
    answer: 'Zug gegen Wegrollen sichern, Fdl verständigen.',
    options: ['Zug gegen Wegrollen sichern, Fdl verständigen.', 'Aussteigen und die Schienen prüfen.', 'Den Motor neu starten.', '5 Minuten warten.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'irr_3',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist eine "Entgleisung"?',
    answer: 'Wenn mindestens ein Rad die Schiene verlässt.',
    options: ['Wenn mindestens ein Rad die Schiene verlässt.', 'Wenn der Zug zu spät kommt.', 'Wenn die Oberleitung reißt.', 'Wenn der Tf den Führerstand verlässt.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'irr_4',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist ein "Zusammenprall"?',
    answer: 'Berührung zwischen Fahrzeugen oder mit Hindernissen.',
    options: ['Berührung zwischen Fahrzeugen oder mit Hindernissen.', 'Ein technischer Defekt.', 'Das Überfahren eines Signals.', 'Ein Stromausfall.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'irr_5',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist bei "Brand im Zug" zu tun?',
    answer: 'Zug anhalten (nicht im Tunnel!), Fahrgäste evakuieren, Notruf absetzen.',
    options: ['Zug anhalten (nicht im Tunnel!), Fahrgäste evakuieren, Notruf absetzen.', 'Weiterfahren bis zum nächsten Bahnhof.', 'Nur die Feuerwehr rufen.', 'Die Türen geschlossen halten.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'irr_6',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist bei "Personen im Gleis" zu tun?',
    answer: 'Warnsignal geben, Geschwindigkeit reduzieren, ggf. Schnellbremsung, Fdl informieren.',
    options: ['Warnsignal geben, Geschwindigkeit reduzieren, ggf. Schnellbremsung, Fdl informieren.', 'Nur hupen und weiterfahren.', 'Anhalten und die Personen festnehmen.', 'Nichts tun, wenn sie weit genug weg sind.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'irr_7',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist bei "Schienenbruch" zu tun?',
    answer: 'Sofort anhalten, Fdl verständigen, Stelle sichern.',
    options: ['Sofort anhalten, Fdl verständigen, Stelle sichern.', 'Langsam drüberfahren.', 'Nur den Fdl informieren.', 'Die Stelle markieren und weiterfahren.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'irr_8',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist bei "Oberleitungsstörung" zu tun?',
    answer: 'Hauptschalter aus, Stromabnehmer senken, Fdl informieren.',
    options: ['Hauptschalter aus, Stromabnehmer senken, Fdl informieren.', 'Schneller fahren, um den Abschnitt zu verlassen.', 'Anhalten und die Leitung prüfen.', 'Die Notbremse ziehen.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'irr_9',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist bei "Ausfall des Zugfunks" zu tun?',
    answer: 'Nächsten Bahnhof anfahren, Fdl über Handy oder Streckenfernsprecher informieren.',
    options: ['Nächsten Bahnhof anfahren, Fdl über Handy oder Streckenfernsprecher informieren.', 'Sofort anhalten und warten.', 'Ohne Funk weiterfahren bis zum Ziel.', 'Die Fahrt abbrechen.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  },
  {
    id: 'irr_10',
    theme: 'Unregelmäßigkeiten',
    question: 'Was ist bei "PZB-Störung" zu tun?',
    answer: 'Fdl informieren, Höchstgeschwindigkeit beachten (max. 100 km/h).',
    options: ['Fdl informieren, Höchstgeschwindigkeit beachten (max. 100 km/h).', 'Sofort anhalten.', 'PZB ausschalten und normal weiterfahren.', 'Den Zug aussetzen.'],
    isSafetyCritical: true,
    source: 'Ril 408',
    sourceUrl: 'https://www.dbinfrago.com/'
  }
];

export const THEMES = Array.from(new Set(QUESTIONS.map(q => q.theme))).map(theme => ({
  id: theme,
  name: theme,
  description: `Fragen zum Thema ${theme}`
}));
