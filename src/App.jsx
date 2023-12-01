import "./App.css";
import Card from "./components/Card";
const dummyData = [
  {
    text: "Marketing emails",
    included: false,
  },
  {
    text: "Monthly updates about latest products",
    included: true,
  },
  {
    text: "Technology events",
    included: true,
  },
  {
    text: "Best practices in development",
    included: true,
  },
  {
    text: "And much more fun!",
    included: true,
  },
];
function App() {
  return (
    <>
      <Card
        title={"Stay Updated!"}
        description={
          "join 60,000+ product managers receiving monthly updates on:"
        }
        itemList={dummyData}
      />
    </>
  );
}

export default App;
