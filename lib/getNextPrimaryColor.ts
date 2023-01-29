export default function* getNextPrimaryColor() {
  const color_names = ["red", "blue", "emerald", "amber"];
  let index = 0;
  while (true) {
    yield color_names[index];
    index = (index + 1) % color_names.length;
  }
}
