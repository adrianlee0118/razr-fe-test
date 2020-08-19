const BASE_URL = "https://www.random.org/integers/?";
const NUMBER_OF_HITS = 100;
const MIN = 1;
const MAX = 100;
const COLUMNS = 1;
const NUMBER_BASE = 10;
const FORMAT = "plain";

export const Random_100_URL = `${BASE_URL}num=${NUMBER_OF_HITS}&min=${MIN}&max=${MAX}&col=${COLUMNS}&base=${NUMBER_BASE}&format=${FORMAT}&rnd=new`;
