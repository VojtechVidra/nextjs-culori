import { converter } from "culori/require";

const lchConverter = converter("lch");

export default function Require() {
  return (
    <div>
      <h1>Hello Culori/require!</h1>

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
