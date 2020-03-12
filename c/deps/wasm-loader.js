//
// Pair of [idx, filename];
const map = {
    '01': 'adder',
}

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
async function loadWASM() {
    try {
        //
        // get target idx param.
        let url_string = document.location.href;
        let url = new URL(url_string);
        let idx = url.searchParams.get("idx");
        if (idx === null) throw new Error(`url param[idx] is required.`);
        if (map[idx] === undefined) throw new Error(`invaild idx : ${idx}`);

        //
        // get target url.
        let target_folder = `${idx}-${map[idx]}`;
        let target_module = `${map[idx]}.wasm`;
        let target_url = `${target_folder}/${target_module}`;

        //
        // load target module.
        let buffer = await fetch(target_url).then(res => res.arrayBuffer());
        let module = await WebAssembly.compile(buffer);
        let instance = new WebAssembly.Instance(module, importObject);
        wasm = instance.exports;

        //
        // success.
        message("The module has been loaded successfully. Please check the debug console.");
        console.log("The module has been loaded successfully.");
        console.log("Check the 'wasm' variable.");
    }
    catch (e) {
        //
        // fail.
        message(e.message);
    }

};

//
// Display message to user.
function message(str) {
    document.body.innerHTML = str;
}