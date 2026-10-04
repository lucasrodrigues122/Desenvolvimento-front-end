export function Article({ title, author, date, introParagraphs, steps, layers, videoUrl }) {
  return (
    <article id="artigo">
      <header>
        <h2>{title}</h2>
        <p>Publicado em {date} por <strong>"{author}"</strong></p>
      </header>

      <section>
        <h3>O que é a nuvem?</h3>
        {introParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <br />

      <section>
        <h3>Como funciona, passo a passo</h3>
        <p>Da hora que você toca na tela até a resposta aparecer, o pedido segue um trajeto bem definido.</p>
        <ol>
          {steps.map((step, index) => (
            <li key={index}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <br />

      <section>
        <h2>As três camadas de serviço</h2>
        <p>
          Nem toda nuvem entrega a mesma coisa. Ela costuma ser vendida em três camadas, uma empilhada sobre a outra...
        </p>
        <ul>
          {layers.map((layer, index) => (
            <li key={index}>
              <strong>{layer.name}:</strong> {layer.description}
              <br />
              Exemplo: {layer.example}
            </li>
          ))}
        </ul>
      </section>

      <br />

      <section id="video">
        <h2>Entenda visualmente</h2>
        <p>Assista ao vídeo abaixo para entender melhor como os data centers e os servidores remotos se conectam:</p>
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title="O que é Computação em Nuvem?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </article>
  );
}