//
// Pair of [idx, filename];
const map = {
    '01': 'adder'
}

//
// Get the path of the target wasm file.
function getTargetModuleURL() {
    let url_string = document.location.href;
    let url = new URL(url_string);
    let idx = url.searchParams.get("idx");
    let target_folder = `${idx}-${map[idx]}`;
    let target_module = `${map[idx]}.wasm`;
    let target_url = `${target_folder}/${target_module}`;
    return target_url;
}