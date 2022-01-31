/*dow=(file)=>{
  console.log(file)
}
dow('hi')
console.log(dow)*/
down=(downloaded)=>{
    console.log('downloading')
    setTimeout(()=>{
      console.log('downloaded')
      file='image'
      downloaded(file)
    },2000)
  }
  comp=(file,format,compressed)=>{
    console.log('compressing')
    setTimeout(()=>{
      console.log('compressed')
      archive='email'
      compressed(archive)
    },2000)
  }
  upd=(server,file,uploaded)=>{
    console.log('uploading')
    setTimeout(()=>{
      uploaded(archive)
      console.log('uploaded')
    },2000)
    
  }
  //*** error in call backs
 // down('hi',comp('hi','zip',()=>{})=>{})
  
  /*down((file)=>{
    comp(file,'zip',(archive)=>{
      upd('google',file,()=>{})
      
    })
    
  })*/



  //error in callbacks


  /*dow=(file)=>{
  console.log(file)
}
dow('hi')
console.log(dow)*/
/*down=(downloaded)=>{
  console.log('downloading')
  setTimeout(()=>{
    console.log('downloaded')
    downloaded(format)
  },2000)
}
comp=(file,format,compressed)=>{
  console.log('compressing')
  setTimeout(()=>{
    console.log(format)
    compressed(archive)
  },2000)
}
upd=(server,file,uploaded)=>{
  console.log('uploading')
  setTimeout(()=>{
    uploaded(archive)
    console.log('uploaded')
  },2000)
  
}

// down('hi',comp('hi','zip',()=>{})=>{})
file='image'
down((file)=>{
  comp(file,'zip',('archive')=>{
    upd('google',file,()=>{})
    
  })
  
})*/