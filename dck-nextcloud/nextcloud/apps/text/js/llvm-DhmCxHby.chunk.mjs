import{g as p}from"./emoji-picker-Coav-X6q.chunk.mjs";function u(a,n){for(var e=0;e<n.length;e++){const t=n[e];if(typeof t!="string"&&!Array.isArray(t)){for(const i in t)if(i!=="default"&&!(i in a)){const r=Object.getOwnPropertyDescriptor(t,i);r&&Object.defineProperty(a,i,r.get?r:{enumerable:!0,get:()=>t[i]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}function m(a){const n=a.regex,e=/([-a-zA-Z$._][\w$.-]*)/,t={className:"type",begin:/\bi\d+(?=\s|\b)/},i={className:"operator",relevance:0,begin:/=/},r={className:"punctuation",relevance:0,begin:/,/},l={className:"number",variants:[{begin:/[su]?0[xX][KMLHR]?[a-fA-F0-9]+/},{begin:/[-+]?\d+(?:[.]\d+)?(?:[eE][-+]?\d+(?:[.]\d+)?)?/}],relevance:0},s={className:"symbol",variants:[{begin:/^\s*[a-z]+:/}],relevance:0},o={className:"variable",variants:[{begin:n.concat(/%/,e)},{begin:/%\d+/},{begin:/#\d+/}]},d={className:"title",variants:[{begin:n.concat(/@/,e)},{begin:/@\d+/},{begin:n.concat(/!/,e)},{begin:n.concat(/!\d+/,e)},{begin:/!\d+/}]};return{name:"LLVM IR",keywords:{keyword:"begin end true false declare define global constant private linker_private internal available_externally linkonce linkonce_odr weak weak_odr appending dllimport dllexport common default hidden protected extern_weak external thread_local zeroinitializer undef null to tail target triple datalayout volatile nuw nsw nnan ninf nsz arcp fast exact inbounds align addrspace section alias module asm sideeffect gc dbg linker_private_weak attributes blockaddress initialexec localdynamic localexec prefix unnamed_addr ccc fastcc coldcc x86_stdcallcc x86_fastcallcc arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ptx_kernel intel_ocl_bicc msp430_intrcc spir_func spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc cc c signext zeroext inreg sret nounwind noreturn noalias nocapture byval nest readnone readonly inlinehint noinline alwaysinline optsize ssp sspreq noredzone noimplicitfloat naked builtin cold nobuiltin noduplicate nonlazybind optnone returns_twice sanitize_address sanitize_memory sanitize_thread sspstrong uwtable returned type opaque eq ne slt sgt sle sge ult ugt ule uge oeq one olt ogt ole oge ord uno ueq une x acq_rel acquire alignstack atomic catch cleanup filter inteldialect max min monotonic nand personality release seq_cst singlethread umax umin unordered xchg add fadd sub fsub mul fmul udiv sdiv fdiv urem srem frem shl lshr ashr and or xor icmp fcmp phi call trunc zext sext fptrunc fpext uitofp sitofp fptoui fptosi inttoptr ptrtoint bitcast addrspacecast select va_arg ret br switch invoke unwind unreachable indirectbr landingpad resume malloc alloca free load store getelementptr extractelement insertelement shufflevector getresult extractvalue insertvalue atomicrmw cmpxchg fence argmemonly",type:"void half bfloat float double fp128 x86_fp80 ppc_fp128 x86_amx x86_mmx ptr label token metadata opaque"},contains:[t,a.COMMENT(/;\s*$/,null,{relevance:0}),a.COMMENT(/;/,/$/),{className:"string",begin:/"/,end:/"/,contains:[{className:"char.escape",match:/\\\d\d/}]},d,r,i,o,s,l]}}var c=m;const f=p(c),b=u({__proto__:null,default:f},[c]);export{c as a,b as l};
