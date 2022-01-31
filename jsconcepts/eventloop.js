console.log('hi main_stack')
setTimeout(()=>{
    console.log('pushed into main stack')
},2000)
setTimeout(()=>{
    console.log('pushed into main stack2')
},1000)
