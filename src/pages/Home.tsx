import { Button } from '../components';

const Home = () => {
  function withoutPrint() {
    window.open('/print', '_blank');
  }

  function withPrint() {
    window.open('/print', 'print');
  }

  return (
    <div>
      <h1>Print element</h1>
      <div style={{ 'max-width': '600px' }}>
        <p>
          This example demonstrates how a print dialog can be used when opening
          a page in a new tab. To be less obtrusive, the default behaviour when
          navigating directly to the page in the browser will not launch the
          print dialog.
        </p>
        <p>
          The page we are printing is targeted by ID to ensure we are only
          printing the desired printable area.
        </p>
      </div>
      <div className="home_page-actions">
        <div>
          <p>When a window with a target of &quot;print&quot; is initiated.</p>
          <Button
            key="withPrint"
            callback={() => withPrint()}
            text="Open with print dialog"
          />
        </div>
        <div>
          <p>When a window with a target of &quot;_blank&quot; is initiated.</p>
          <Button
            key="withoutPrint"
            callback={() => withoutPrint()}
            text="Open without print dialog"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
