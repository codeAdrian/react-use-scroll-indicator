import * as React from 'react';
import { useScrollIndicator } from '../useScrollIndicator';

export const DemoBasic = () => {
  const [state, api] = useScrollIndicator();

  return (
    <section style={{position: "relative"}}>

<div
        style={{
          position: 'sticky',
          top: '0',
          left: "0",
          right: "0",
          padding: '.5em',
          borderBottom: '1px solid #aaa',
          background: '#fff'
        }}
      >
        <div
          style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}
        >
          <div style={{width:`${state.value}%`, background: "#ddd", position: "absolute", top: "0", left: "0", height: "100%", zIndex: -1}} />
          Page scroll progress: {state.value}%
        </div>
      </div>
      
      <article style={{ maxWidth: '720px', margin: '2em auto 3em' }}>
        <h2>Full page scroll indicator</h2>
        <p>Tracking scroll progress for a whole page</p>
      </article>

      <hr />

      <article
        style={{ maxWidth: '720px', margin: '0 auto', minHeight: '200vh' }}
      >
        <h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa
          <strong>strong</strong>. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
          enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
          dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi.
        </p>

        <h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>

        <h2>Aenean commodo ligula eget dolor aenean massa</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>

        <h2>Aenean commodo ligula eget dolor aenean massa</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>

        <ul>
          <li>Lorem ipsum dolor sit amet consectetuer.</li>
          <li>Aenean commodo ligula eget dolor.</li>
          <li>Aenean massa cum sociis natoque penatibus.</li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
        <h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>

<h2>Aenean commodo ligula eget dolor aenean massa</h2>

<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
  felis, ultricies nec, pellentesque eu, pretium quis, sem.
</p>

<h2>Aenean commodo ligula eget dolor aenean massa</h2>

<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
  felis, ultricies nec, pellentesque eu, pretium quis, sem.
</p>
      </article>
    </section>
  );
};
