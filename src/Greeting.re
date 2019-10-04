[@genType "Greeting"]
[@react.component]
let make = (~name) =>
  <button> {ReasonReact.string("Hey " ++ name ++ "!")} </button>;
