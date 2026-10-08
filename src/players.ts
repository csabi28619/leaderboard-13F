export type PlayerData = {
  name: string,
  lang: string,
  score: number,
  bugs: number
}

export const players: PlayerData[] = [
  { name: 'NullPointerNinja', lang: 'C++', score: 9420, bugs: 3 },
  { name: 'SegfaultSally', lang: 'C', score: 8875, bugs: 7 },
  { name: 'Ctrl-Z Zoltán', lang: 'Python', score: 8310, bugs: 1 },
  { name: 'StackOverflow Steve', lang: 'JavaScript', score: 7760, bugs: 12 },
  { name: 'Tab-vs-Space Tamás', lang: 'Go', score: 7204, bugs: 5 },
  { name: 'Hotfix Hanna', lang: 'Rust', score: 6688, bugs: 9 },
  { name: 'Works On My Machine', lang: 'Java', score: 6015, bugs: 14 },
  { name: 'Git Push --force Gábor', lang: 'Bash', score: 5490, bugs: 22 },
  { name: 'Undefined Ilona', lang: 'TypeScript', score: 4932, bugs: 0 },
  { name: 'Copy-Paste Csaba', lang: 'PHP', score: 4120, bugs: 31 },
];