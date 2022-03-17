const { performance } = require('perf_hooks');
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

// 1
const start1 = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
console.log(`String Reverse 1 took ${performance.now() - start1} milliseconds to run`);

// 2
const start2 = performance.now();
const reversed2 = (story) => {
    let rev = "";
    for (let i = 1; i <= story.length; i++) {
        rev += story[(story.length - i)]
    }
    return rev;
}
console.log(reversed2(story));
console.log(`String Reverse 2 took ${performance.now() - start2} milliseconds to run`);