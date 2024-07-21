type List = {
    [key: string]: { [key: string]: number }
  };
  
const word: List = {
'': { 'し': 0.5, '': 0.5 },
'し': { 'か': 0.5, 'た': 0.5 },
'か': { 'の': 1 },
'の': { 'こ': 1 },
'こ': { 'の': 0.5, 'こ': 0.25, 'し': 0.25 },
'た': { 'ん': 1 },
'ん': { 'た': 0.5, '': 0.5 },
};

function next(result: string): string {
    const stateP = word[result];
    const rv = Math.random();
    let sum = 0;

    for (const [state, prob] of Object.entries(stateP)) {
        sum += prob;
        if (rv <= sum) {
        return state;
        }
    }

    return result; 
}

function Markov(): string {
    let chain = '';

    while (chain.length < 14) {
        const ns = next(chain.slice(-1));
        chain += ns;
        if (ns === '') {
        break;
        }
    }

    return chain;
}

let result;
let count = 0;
do {
    result = Markov();
    console.log(`生成された文: ${result}`);
    count++;
} while (result !== 'しかのこのこのここしたんたん');
console.log(`かかった回数: ${count}`);
