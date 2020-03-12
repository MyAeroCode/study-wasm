#include <iostream>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
extern "C" int adder (int a, int b) {
    return a + b;
}

EMSCRIPTEN_KEEPALIVE
extern "C" int doubler(double a){
	return a * 2.0;
}