##### Method

```cpp
int adder(int a, int b){
    return a + b;
}
```

```cpp
int doubler(double a){
    return a * 2.0;
}
```

<br/>

##### Compile

```shell
emcc adder.cpp -Os -s WASM=1 -s SIDE_MODULE=1 -o adder.wasm
```

<br/>

##### Disassemble
```shell
wasm wasm-dis adder.wasm -o adder.wast
```