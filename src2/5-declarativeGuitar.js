const strings = ['E', 'A', 'D', 'G', 'B', 'E']

function Guitar() {
  return (
    <Guitar>
      {strings.map(note => <String note={note} />)} 
    </Guitar>
  )
}
//map takes two arguments, a function and an array, alternatively it can also be invoked as 
//array.map(function())

