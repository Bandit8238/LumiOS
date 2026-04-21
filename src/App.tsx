import Desktop from "./Desktop";

type User = {
  id?: number | string;
  name?: string;
  [key: string]: any;
};

export default function App() {
  return <Desktop />;
}
