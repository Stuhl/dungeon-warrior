const wait = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const utility = {
  wait
}

export default utility
