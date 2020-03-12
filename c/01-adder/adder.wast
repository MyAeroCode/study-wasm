(module
 (type $0 (func))
 (type $1 (func (param i32)))
 (type $2 (func (param i32) (result i32)))
 (type $3 (func (param i32 i32) (result i32)))
 (import "env" "memory" (memory $1 256))
 (import "env" "__memory_base" (global $gimport$0 i32))
 (global $global$0 (mut i32) (i32.const 0))
 (global $global$1 (mut i32) (i32.const 0))
 (export "__Z4testv" (func $2))
 (export "__post_instantiate" (func $3))
 (export "_adder" (func $0))
 (export "_doubler" (func $1))
 (func $0 (; 0 ;) (type $3) (param $0 i32) (param $1 i32) (result i32)
  (i32.add
   (local.get $0)
   (local.get $1)
  )
 )
 (func $1 (; 1 ;) (type $2) (param $0 i32) (result i32)
  (i32.shl
   (local.get $0)
   (i32.const 1)
  )
 )
 (func $2 (; 2 ;) (type $1) (param $0 i32)
  (i32.store
   (local.get $0)
   (i32.const 1)
  )
  (i32.store offset=4
   (local.get $0)
   (i32.sub
    (i32.const 0)
    (i32.load offset=4
     (local.get $0)
    )
   )
  )
 )
 (func $3 (; 3 ;) (type $0)
  (global.set $global$0
   (global.get $gimport$0)
  )
  (global.set $global$1
   (i32.add
    (global.get $global$0)
    (i32.const 5242880)
   )
  )
 )
 ;; custom section "dylink", size 8
)

