 const os = require('os')
 
 // info about current user
  const info = os.userInfo()
  // console.log(info)

  // method returns system uptime in sec

  console.log(os.uptime())

  const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
  }
  console.log(currentOS)