import { Button } from "./Button";

export default function App() {
  return (
    <Button onClick={() => alert("Button Clicked !!!!!")}>
      <span>Click me</span>
    </Button>
  );
}
