export type FootballPlayers<T> = {
  name: string;
  clubs: T[];
  activeYears: number;
};

export function displayBaller<T>({ name, clubs, activeYears }: FootballPlayers<T>) {
  console.log(name, clubs, activeYears);
}

console.log(
  displayBaller({
    name: "Love",
    clubs: ["Aston Villa", "West Ham"],
    activeYears: 15,
  })
);
console.log(
  displayBaller({
    name: "Love",
    clubs: [{ club: "Lazio" }, 1989],
    activeYears: 15,
  })
);

function displayBallerEx({
  name,
  clubs,
  activeYears,
}: FootballPlayersExperiment) {
  console.log(name, clubs, activeYears);
}

type FootballPlayersExperiment = {
  name: string;
  clubs: string[];
  activeYears: number;
};

//   console.log(
//     displayBallerEx({
//       name: "Love",
//       clubs: [{ club: "Lazio" }, 1989],
//       activeYears: 15,
//     })
//   );
