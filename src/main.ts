import { IGraph } from "./types.js";
import { get } from "./ops.js";

export interface ITarget extends IGraph {
    paths: string[],
}

const g = function () {
    console.log("this one?");
}
g.paths = [];

const p2 = new Proxy<IGraph>(<any>g, {

    apply(target, thisArg, argArray) {
        return get.call(target, ...argArray);
    },

    get(target: ITarget, p, receiver) {

        console.log(`get = ${String(p)}`);

        if (String(p) === "get") {
            console.log(`here::>`)
            // return get.bind(target, argArray);
        } else {
            target.paths.push(String(p));
        }

        // just keep giving the 
        return receiver;
    },
    has(target, p) {
        console.log(`has = ${String(p)}`);
        return true;
    },
});

const y = await p2.drives({
    cache: "default",
});

const h = 99;


