# C++ Addons in Node.js 

Node.js Addons are dynamically linked shared objects, written in C++.
It can be loaded into Node.js using the require() function and also used just as if they were an ordinary Node.js module.
It is used primarily to provide an interface between JavaScript running in Node.js and C/C++ libraries.

Los Addons en Node.js son objetos compartidos escritos en C++, dinámicamente ligados.
Pueden ser cargados en Node.js usando require() y ser usados justo como si fueran modulos Node.js ordinarios.
Es usado principalmente para proveer una interfaz entre Javascript que corre sobre Node.js y librerias  c/C++   

## Why do we need C++ Addons?

It gives the opportunity to make intensive, parallel, and high-accuracy calculations.
It also gives the opportunity to use C++ libraries in NodeJS.
We can integrate a third-party library written in C/C++ and use it directly in NodeJS.
The performance of C++ is far better on larger values or computation.

Nos da la oportunidad de hacer calculos intensivos, paralelos y con gran precisión.
También nos da la oportunidad de usar librerias de C++ en Node.js
Podemos integrar librerias de terceros escritas en C/C++ y usarlas directamente en Node.js
El performance de C++ es por mucho mejor para valores grandes y calculos.

## Pre-requisites:

Basic knowledge of Node.
Node.js installed (version 12+).
Npm installed (version 6+).

## Installation

node-gyp is a cross-platform command-line tool written in Node.js for compiling native addon modules for Node.js.
[node-gyp](https://www.npmjs.com/package/node-gyp)


```bash
npm i -g  node-gyp
```

## Usage 

* Create binding file .gyp
* Write cc file
* Bind expected file to your app.js 
* Build binding with node-gyp 

```bash
node-gyp configure build 
```

* Run node app.js

```bash
node app.js
```

## Constrains

All Node.js addons must export an initialization function following the pattern:

```c
void Initialize(Local<Object> exports);
NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
```

The module_name must match the filename of the final binary (excluding the .node suffix).

## Handles and garbage collection

[v8 documentation](https://v8docs.nodesource.com/node-0.8/db/d85/classv8_1_1_object.html)

A handle provides a reference to a JavaScript object’s location in the heap. The V8 garbage collector reclaims memory used by objects that can no longer again be accessed. During the garbage collection process the garbage collector often moves objects to different locations in the heap. When the garbage collector moves an object the garbage collector also updates all handles that refer to the object with the object’s new location.

An object is considered garbage if it is inaccessible from JavaScript and there are no handles that refer to it. From time to time the garbage collector removes all objects considered to be garbage. V8’s garbage collection mechanism is key to V8’s performance.

There are several types of handles:

* **Local** handles are held on a stack and are deleted when the appropriate destructor is called. These handles’ lifetime is determined by a handle scope, which is often created at the beginning of a function call. A local handle is a pointer to an object. All V8 objects are accessed using handles. They are necessary because of the way the V8 garbage collector works.

* An **Isolate** is a VM instance with its own heap. This is like the current execution environment that's needed to do things like create new values.

## References 

* https://www.cs.unb.ca/~bremner/teaching/cs2613/books/nodejs-api/addons/