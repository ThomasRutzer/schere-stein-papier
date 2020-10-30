const randomFromStringList = list => {
  const random = Math.round(Math.random() * (list.length - 1) + 1)

  return list[random - 1]
}

export default randomFromStringList