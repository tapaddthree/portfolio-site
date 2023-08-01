import Panel from "./Panel";
import Technology from "./Technology";

export default function TechStack() {
  return (
    <Panel technology>
      <Technology react />
      <Technology typeScript />
      <Technology javaScript />
      <Technology python />
      <Technology fastAPI />
      <Technology mongoDB />
      <Technology docker />
      <Technology django />
      <Technology html5 />
    </Panel>
  );
}
