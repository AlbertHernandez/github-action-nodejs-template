"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sleep", {
    enumerable: true,
    get: function() {
        return sleep;
    }
});
const sleep = async (milliseconds)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(), milliseconds);
    });
};

//# sourceMappingURL=sleep.js.map