//
// WASM Env holder.
let importObject = {
    env: {
        __memory_base: 0,
        __table_base: 0,
        memory: new WebAssembly.Memory({ initial: 256 }),
        table: new WebAssembly.Table({ initial: 2, element: 'anyfunc' }),
        abort: console.log
    }
};

//
// Imported WASM Module.
let wasm = undefined;

//
// Load WASM using given module name.
async function loadWASM(filename) {
    try {
        let buffer = await fetch(filename).then(res => res.arrayBuffer());
        let module = await WebAssembly.compile(buffer);
        let instance = new WebAssembly.Instance(module, importObject);
        wasm = instance.exports;
        message("The module has been loaded successfully. Please check the debug console.");

        console.log("The module has been loaded successfully.");
        console.log("Check the 'wasm' variable.");
    }
    catch (_) {
        message("Failed to load module.");
    }

};

//
// Display message to user.
function message(str) {
    document.body.innerHTML = str;
}