import funs from "./functional.js";

const describe = window.describe;
const it = window.it;
const fc = window.fastcheck;
const chai = window.chai;

const arbN = fc.nat(8);
const arbMix = fc.tuple(arbN, arbN, arbN, arbN, arbN, arbN, arbN, arbN);
const arbOff = fc.nat(7);
const arbInstoff = fc.tuple(
    arbOff,
    arbOff,
    arbOff,
    arbOff,
    arbOff,
    arbOff,
    arbOff,
    arbOff
);

describe("Property based testing for Off Splicer", function () {
    it(
        "Given an arbitary 8 digit array " +
            "after splicing " +
            "the length should remain 8",
        function () {
            fc.assert(
                fc.property(
                    arbMix,
                    arbInstoff,

                    function (mix, instOff) {
                        funs.offSplice(instOff, mix);
                        return mix.length === 8;
                    }
                )
            );
        }
    );
    it(
        "Given an arbitary 8 digit array " +
            "after splicing the summed total " +
            "should not have increased.",
        function () {
            fc.assert(
                fc.property(
                    arbMix,
                    arbInstoff,

                    function (mix, all) {
                        const startTot = mix.reduce((a, b) => a + b, 0);
                        funs.offSplice(all, mix);
                        const endTot = mix.reduce((c, d) => c + d, 0);
                        return startTot >= endTot;
                    }
                )
            );
        }
    );
    it(
        "Given an arbitary 8 digit array " +
            "after splicing every index " +
            "should remain unchanged or become 0.",
        function () {
            fc.assert(
                fc.property(
                    arbMix,
                    arbInstoff,
                    arbOff,

                    function (mix, all, off) {
                        const mapBefore = mix.map((x) => x);
                        funs.offSplice(all, mix);
                        const mapAfter = mix.map((x) => x);
                        return (
                            mapAfter[off] === mapBefore[off] ||
                            mapAfter[off] === 0
                        );
                    }
                )
            );
        }
    );
});

describe("Property based testing for On Splicer", function () {
    it(
        "Given an arbitary 8 digit array " +
            "after splicing " +
            "the length should remain 8",
        function () {
            fc.assert(
                fc.property(
                    arbMix,
                    arbInstoff,

                    function (mix, instOff) {
                        funs.onSplice(instOff, mix);
                        return mix.length === 8;
                    }
                )
            );
        }
    );
    it(
        "Given an arbitary 8 digit array " +
            "after splicing the summed total " +
            "should not have decreased.",
        function () {
            fc.assert(
                fc.property(
                    arbMix,
                    arbInstoff,

                    function (mix, all) {
                        const startTot = mix.reduce((a, b) => a + b, 0);
                        console.log("start " + startTot);
                        funs.onSplice(all, mix);
                        const endTot = mix.reduce((c, d) => c + d, 0);
                        console.log(endTot);
                        return endTot <= startTot;
                    }
                )
            );
        }
    );
    it(
        "Given an arbitary 8 digit array " +
            "after splicing every index " +
            "should remain unchanged or become 1.",
        function () {
            fc.assert(
                fc.property(
                    arbMix,
                    arbInstoff,
                    arbOff,

                    function (mix, all, off) {
                        const mapBefore = mix.map((x) => x);
                        funs.onSplice(all, mix);
                        const mapAfter = mix.map((x) => x);
                        return (
                            mapAfter[off] === mapBefore[off] ||
                            mapAfter[off] === 1
                        );
                    }
                )
            );
        }
    );
});

describe("Example based testing for offSplicer", function () {
    it("Offsplices perform as expected", function () {
        let startMix = [0, 0, 0, 0, 0, 0, 0, 0];
        let noneOff = [];
        funs.offSplice(noneOff, startMix);
        let expected = [0, 0, 0, 0, 0, 0, 0, 0];
        chai.expect(startMix).to.deep.equal(expected);
        startMix = [1, 1, 1, 1, 1, 1, 1, 1];
        let allOff = [0, 1, 2, 3, 4, 5, 6, 7];
        funs.offSplice(allOff, startMix);
        chai.expect(startMix).to.deep.equal(expected);
    });
});
