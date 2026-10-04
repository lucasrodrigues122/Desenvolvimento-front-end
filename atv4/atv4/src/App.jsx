import { Header } from './componentes/Header';
import { Article } from './componentes/Artigo';
import { Footer } from './componentes/Footer';

export default function App() {
  const postData = {
    title: "Como a computação em nuvem funciona na prática?",
    author: "Especialista de TI",
    date: "06 de setembro de 2026",
    videoUrl: "https://www.youtube.com/embed/ymZo-ZwXFw8",
    introParagraphs: [
      'Quando você abre um app e ele "simplesmente funciona", existe um caminho físico por trás disso: um pedido sai do seu celular, atravessa a internet, chega a um prédio cheio de servidores do outro lado do mundo e volta, tudo isso em menos de um segundo.',
      "Computação em nuvem é usar poder de processamento, armazenamento ou software que não estão fisicamente no seu computador, eles rodam em servidores de terceiros, acessados pela internet, e você paga só pelo que usa.",
      "É parecido com contratar energia elétrica da rede em vez de manter um gerador próprio em casa: você usa, paga pelo consumo, e a manutenção da usina não é problema seu."
    ],
    steps: [
      {
        title: "O dispositivo monta o pedido",
        description: "Um app ou navegador empacota o que você quer fazer/abrir um vídeo, salvar uma foto, carregar uma planilha, depois envia como uma requisição."
      },
      {
        title: "A requisição atravessa a internet",
        description: "Ela passa por roteadores e cabos até chegar ao data center mais adequado, geralmente o mais próximo geograficamente de você."
      },
      {
        title: "A virtualização reparte recursos",
        description: "Um mesmo servidor físico é dividido em várias máquinas virtuais independentes, cada uma isolada, atendendo clientes diferentes ao mesmo tempo sem que um veja o outro."
      },
      {
        title: "A resposta volta pelo mesmo caminho",
        description: "O resultado é processado e devolvido pela rede até o seu dispositivo, o trajeto inteiro costuma levar menos de um segundo."
      }
    ],
    layers: [
      {
        name: "IaaS (Infraestrutura como serviço)",
        description: "Você aluga a infraestrutura de TI (servidores virtuais, redes e armazenamento).",
        example: "Amazon Web Services (AWS), Google Cloud."
      },
      {
        name: "PaaS (Plataforma como serviço)",
        description: "Fornece um ambiente para desenvolvedores criarem e hospedarem aplicações sem se preocupar com a infraestrutura básica.",
        example: "Heroku, Firebase."
      },
      {
        name: "SaaS (Software como serviço)",
        description: "Entrega aplicativos prontos para uso diretamente pelo navegador.",
        example: "Google Drive, Netflix, Microsoft 365."
      }
    ]
  };

  return (
    <>
      <Header />
      <main>

        <Article {...postData} />

        <section id="newsletter">
          <h2>Fique por dentro das novidades!</h2>
          <p>Assine nossa newsletter para receber artigos atualizados sobre tecnologia e arquitetura em nuvem.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="nome">Nome Completo:</label>
              <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
            </div>

            <div>
              <label htmlFor="email">E-mail Profissional:</label>
              <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required />
            </div>

            <div>
              <label htmlFor="nivel-conhecimento">Qual seu nível de conhecimento em Nuvem?</label>
              <select id="nivel-conhecimento" name="nivel-conhecimento" required defaultValue="">
                <option value="" disabled>Selecione uma opção...</option>
                <option value="iniciante">Iniciante (Estou começando)</option>
                <option value="intermediario">Intermediário (Já uso alguns serviços)</option>
                <option value="avancado">Avançado (Trabalho na área)</option>
              </select>
            </div>

            <div>
              <button type="submit">Inscrever-se na Newsletter</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}