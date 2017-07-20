export const selectName = (name) => {
  console.log("You clicked on : ", name.first)
  return {
    type: "NAME_SELECTED",
    payload: name
  }
}
