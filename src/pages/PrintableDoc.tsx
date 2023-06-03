import { useEffect } from 'react';

const PrintableDoc = () => {
  const printedOn = new Date().toLocaleDateString('en-gb', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const launchPrintDialog = window.name === 'print' ? true : false;
  const printElement = (el: string): void => {
    const targetElement = document.getElementById(el)!.innerHTML;
    const DOM = document.body.innerHTML;
    document.body.innerHTML = targetElement;
    window.print();
    document.body.innerHTML = DOM;
  };

  /*
    launchDialog is set to true based on 'windown name' so as we propogate a print dialog. For example a new browser tab is opened from a CTA with a matching 'window name'. 
    
    Otherwise default to false if target is '_blank' so as not to propogate a print dialog. For example the page is accessed directly from a link.
  */
  useEffect(() => {
    if (launchPrintDialog) {
      printElement('printableArea');
    }
  }, [printElement]);

  return (
    <div className="container">
      {launchPrintDialog && (
        <div className="information-dialog">
          <p>You may close this tab after printing.</p>
        </div>
      )}
      <div id="printableArea">
        <h1>Print element</h1>
        <p>
          This will print on component mount. Useful for printing a page that
          opens in a new tab.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam
          aliquam sodales. Quisque aliquam magna molestie, malesuada lorem vel,
          pulvinar sapien. Ut et ante mollis, ultricies purus ultrices, blandit
          felis. Donec tempor, quam ut gravida pretium, neque tellus tempor
          enim, at sagittis metus neque non massa. Vivamus vitae risus eu sapien
          condimentum bibendum ac et urna. Aliquam placerat tellus sem, maximus
          pretium velit vulputate ut. Etiam vehicula elit non massa consectetur
          suscipit. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>

        <p>
          Etiam venenatis maximus nibh id molestie. Cras pulvinar mollis turpis.
          Ut felis sapien, pulvinar vel nibh sed, elementum tempor nisi. Aliquam
          erat volutpat. Phasellus sit amet magna quis mi pharetra aliquet et
          sit amet ante. Morbi ultrices erat a varius feugiat. Aenean consequat
          ac eros id porta. Curabitur elementum nulla eu augue lacinia congue ut
          nec arcu. Vestibulum faucibus mauris in molestie varius. Vestibulum
          felis nibh, viverra a commodo eu, gravida pellentesque libero. Aenean
          et hendrerit neque. Cras neque lectus, ornare sed ligula in, auctor
          sollicitudin tortor. Nam pharetra et magna tempus dapibus.
          Pellentesque varius, tortor semper scelerisque laoreet, tellus ipsum
          volutpat ligula, ultricies hendrerit odio turpis tempus leo.
        </p>

        <p>
          Sed sodales, ipsum quis consequat porta, odio velit lobortis sapien,
          eu interdum dolor felis quis magna. Donec ultrices felis nec tortor
          rhoncus, sed dapibus purus hendrerit. Nullam metus eros, rutrum at
          mattis et, aliquam eu purus. Vivamus quis bibendum magna. Duis viverra
          laoreet nulla a scelerisque. Vestibulum sed velit ornare, laoreet sem
          nec, ullamcorper metus. Nam quis dolor nisi. Nullam congue, turpis non
          egestas egestas, est augue venenatis turpis, in porta quam tellus id
          est. Duis eget massa sed risus cursus imperdiet eu quis erat.
        </p>

        <p className="dated print-only">Printed on {printedOn}</p>
      </div>
    </div>
  );
};

export default PrintableDoc;
