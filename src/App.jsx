import "./App.css";
import Card from "./components/Card";
const dummyData = [
  {
    id: 0,
    text: "Marketing emails",
    included: false,
  },
  {
    id: 1,
    text: "Monthly updates about latest products",
    included: true,
  },
  {
    id: 2,
    text: "Technology events",
    included: true,
  },
  {
    id: 3,
    text: "Best practices in development",
    included: true,
  },
  {
    id: 4,
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
