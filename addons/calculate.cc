#include <node.h>
#include <iostream>

namespace calculate {
	using v8:: FunctionCallbackInfo;
	using v8 :: Isolate;
	using v8 :: Local;
	using v8 :: Object;
	using v8 :: Number;
	using v8 :: Value;

	// C++ add function.
	void Sum(const FunctionCallbackInfo<Value>&args)
	{
		Isolate* isolate = args.GetIsolate();
		int i;
		double x = 3.141526, y = 2.718;
		for(i=0; i < 10000000000; i++) {
			x += y;
		}

		auto total = Number::New(isolate,x);
		args.GetReturnValue().Set(total);
	}

  // All Node.js addons must export an initialization function following the pattern:
	// Exports our method
	void Initialize(Local<Object> exports) {
		NODE_SET_METHOD(exports, "calc", Sum);
	}

  // When building addons with node-gyp, using the macro NODE_GYP_MODULE_NAME as the first parameter of NODE_MODULE() will ensure that the name of the final binary will be passed to NODE_MODULE().
	NODE_MODULE(NODE_GYP_MODULE_NAME,Initialize);
}
