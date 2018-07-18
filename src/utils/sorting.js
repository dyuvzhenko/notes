export const sortDesc = (_filenames) => {
  let filenames = _filenames
  for (let i = 0; i < filenames.length; i++) {
    for (let j = 0; j < filenames.length; j++) {
      let result1 = filenames[j]
      let result2 = filenames[j + 1]
      if (result1 < result2) {
        let temp = filenames[j]
        filenames[j] = filenames[j + 1]
        filenames[j + 1] = temp
      }
    }
  }
  return filenames
}
