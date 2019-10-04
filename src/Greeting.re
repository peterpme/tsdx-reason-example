[@genType "Greeting"]
[@react.component]
let make = (~name) =>
  <button> {ReasonReact.string("Heyy " ++ name ++ "!")} </button>;
