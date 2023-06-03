export default function Test() {
  const printedOn = new Date().toLocaleDateString('en-gb', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div>
      <h1>Test</h1>
      <p>
        Printed on <span>{printedOn}</span>
      </p>
    </div>
  );
}
