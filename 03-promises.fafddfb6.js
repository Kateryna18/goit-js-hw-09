function e(e,o){return new Promis(((t,n)=>{const s=Math.random()>.3;setTimeout((()=>{s?t({position:e,delay:o}):n("error")}),o)}))}document.querySelector(".form").addEventListener("submit",(o=>{const{elements:{delay:t,step:n,amount:s}}=o.currentTarget;e()})),e(2,1500).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.fafddfb6.js.map