[@genType "Greeting"]
[@react.component]
let make = (~name) =>
  <button> {ReasonReact.string("Heyyyyy " ++ name ++ "!")} </button>;
