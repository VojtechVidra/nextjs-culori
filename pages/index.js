import { converter } from "culori";

const lchConverter = converter("lch");

export default function Home() {
  return (
    <div>
      <h1>Hello Culori!</h1>

      <p>
        {JSON.stringify(
          lchConverter({
            x: 0.02561800731950825,
            y: 0.022607239745580952,
            z: 0.0557400030143381,
            mode: "xyz50",
          })
          // lchConverter("#573CFA")
        )}
      </p>
    </div>
  );
}
