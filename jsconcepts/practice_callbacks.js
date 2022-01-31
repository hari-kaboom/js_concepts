down=(downloaded,upd)=>{
    console.log('downloading')
    setTimeout(()=>{
      console.log('downloaded')
      downloaded(upd)
    },2000)
  }
  comp=(cf)=>{
    console.log('compressing')
    setTimeout(()=>{
      console.log('compresed')
      cf()
    },2000)
  }
  upd=(wupld,file)=>{
    console.log('uploading')
    setTimeout(()=>{
      console.log('uploaded')
    },2000)
    
  }
  down(comp,upd)
  //comp(uploaded)
  //upd()
  
  
  